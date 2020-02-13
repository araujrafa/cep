import React, { useState } from 'react';
import {
  Button,
  Container,
  Input,
  Map,
  Modal,
  Title,
  Text,
} from '../components'
import App from './app.style';
import ServiceCep from '../services/cep';

const AppPage = () => {
  const serviceCep = new ServiceCep();
  const [show, setShow] = useState(false);
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [msgFeedback, setMsgFeedback] = useState('');

  const onSearch = async (e) => {
    e.preventDefault();
    if (cep.length < 7) {
      setMsgFeedback('Por favor, preencha o cep completo.');
      setShow(false);
      return null;
    }

    const data = await serviceCep.getCepCb(cep, 'myfn');

    if (data.erro) {
      setMsgFeedback('Cep invalido.');
      setShow(false);
    } else {
      setAddress(data);
      setShow(true);
      setCep(''); 
      setMsgFeedback('');
    }
  }

  return (
    <App>
      <Container gray>
        <Title small>Consultar</Title>
        <App.Form>
          <Text gray>CEP</Text>
          <Input
            mask="11111-111"
            name="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            type="text"
          />
          <Button primary onClick={onSearch}>Buscar</Button>
        </App.Form>
        <App.SmallText>{msgFeedback}</App.SmallText>
      </Container>
      <Modal show={show} handleClose={() => setShow(false)}>
        <Title>{address && address.logradouro}</Title>
        <Text>{address && address.bairro}</Text>
        <Text>{address && address.localidade}</Text>
        <Text>{address && address.cep}</Text>
        <Map cep={address && address.cep} />
      </Modal>
    </App>
  )
}

export default AppPage;