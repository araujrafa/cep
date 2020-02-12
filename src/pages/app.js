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

const AppPage = () => {
  const [show, setShow] = useState(false);
  const [cep, setCep] = useState('');

  const onSearch = (e) => {
    e.prevantDefault();
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
            onChange={setCep}
            type="text"
          />
          <Button primary>Buscar</Button>
        </App.Form>
      </Container>
      <Modal show={show} handleClose={() => setShow(false)}>
        <Title>Rua Miguel Mentem</Title>
        <Text>Vila Guilherme</Text>
        <Text>São Paulo - SP</Text>
        <Text>02050-010</Text>
        <Map cep="08430-180" />
      </Modal>
    </App>
  )
}

export default AppPage;