import fetchJsonp from 'fetch-jsonp';

const URL_API = 'https://viacep.com.br'

export default class ServiceCep {
  getCepCb(cep, cb) {
    return fetchJsonp(`${URL_API}/ws/${cep}/json/?callback=${cb}`, {
      jsonpCallbackFunction: cb,
    }).then(res => res.json());
  }
}