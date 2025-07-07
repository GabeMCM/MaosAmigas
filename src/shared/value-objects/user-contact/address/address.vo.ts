// Representa um endereço completo, composto por outros Value Objects
import ZipCode from './zip-code.vo';
import StreetName from './street-name.vo';
import HouseNumber from './house-number.vo';
import Complement from './complement.vo';
import District from './district.vo';
import City from './city.vo';
import State from './state.vo';

export class Address {
  readonly zipCode: ZipCode;
  readonly streetName: StreetName;
  readonly houseNumber: HouseNumber;
  readonly complement?: Complement;
  readonly district: District;
  readonly city: City;
  readonly state: State;

  // [constructor] → inicializa o endereço com os VOs
  constructor(params: {
    zipCode: ZipCode,
    streetName: StreetName,
    houseNumber: HouseNumber,
    complement?: Complement,
    district: District,
    city: City,
    state: State
  }) {
    this.zipCode = params.zipCode;
    this.streetName = params.streetName;
    this.houseNumber = params.houseNumber;
    this.complement = params.complement;
    this.district = params.district;
    this.city = params.city;
    this.state = params.state;
  }

  // [autoPopulate] → preenche campos usando o ViaCEP se zipCode estiver presente
  static async autoPopulate(zipCode: ZipCode, houseNumber: HouseNumber, complement?: Complement): Promise<Address> {
    // [Busca dados no ViaCEP]
    const data = await zipCode.fetchAddressData();
    // [Cria instâncias dos VOs com os dados retornados]
    return new Address({
      zipCode,
      streetName: new StreetName(data.logradouro),
      houseNumber,
      complement,
      district: new District(data.bairro),
      city: new City(data.localidade),
      state: new State(data.uf)
    });
  }

  // [manualInput] → permite criar endereço manualmente se ViaCEP falhar
  static manualInput(params: {
    zipCode: ZipCode,
    streetName: StreetName,
    houseNumber: HouseNumber,
    complement?: Complement,
    district: District,
    city: City,
    state: State
  }): Address {
    return new Address(params);
  }
}