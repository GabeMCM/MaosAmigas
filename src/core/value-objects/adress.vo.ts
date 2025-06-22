//[import { Cep } from './cep.vo'] -> Importa o Value Object Cep.
import { Cep } from './cep.vo';
//[import { Road } from './road.vo'] -> Importa o Value Object Road.
import { Road } from './road.vo';
//[import { NumberRoad } from './number-road.vo'] -> Importa o Value Object NumberRoad.
import { NumberRoad } from './number-road.vo';
//[import { District } from './district.vo'] -> Importa o Value Object District.
import { District } from './district.vo';
//[import { City } from './city.vo'] -> Importa o Value Object City.
import { City } from './city.vo';
//[import { State } from './state.vo'] -> Importa o Value Object State.
import { State } from './state.vo';
//[import { Complement } from './complement.vo'] -> Importa o Value Object Complement.
import { Complement } from './complement.vo';

//[interface AdressProps] -> Define a interface para as propriedades do Adress.
interface AdressProps {
  //[cep: Cep] -> Propriedade cep do tipo Cep.
  cep: Cep;
  //[road: Road] -> Propriedade road do tipo Road.
  road: Road;
  //[number: NumberRoad] -> Propriedade number do tipo NumberRoad.
  number: NumberRoad;
  //[district: District] -> Propriedade district do tipo District.
  district: District;
  //[city: City] -> Propriedade city do tipo City.
  city: City;
  //[state: State] -> Propriedade state do tipo State.
  state: State;
  //[complement?: Complement] -> Propriedade complementar opcional do tipo Complement.
  complement?: Complement;
}

//[class Adress] -> Define a classe Adress como um Value Object que agrega outros Value Objects de endereço.
class Adress {
  //[private readonly cep] -> Armazena o Value Object Cep.
  private readonly cep: Cep;
  //[private readonly road] -> Armazena o Value Object Road.
  private readonly road: Road;
  //[private readonly number] -> Armazena o Value Object NumberRoad.
  private readonly number: NumberRoad;
  //[private readonly district] -> Armazena o Value Object District.
  private readonly district: District;
  //[private readonly city] -> Armazena o Value Object City.
  private readonly city: City;
  //[private readonly state] -> Armazena o Value Object State.
  private readonly state: State;
  //[private readonly complement?] -> Armazena o Value Object Complement, opcional.
  private readonly complement?: Complement;

  //[constructor(props: AdressProps)] -> Construtor da classe Adress, recebe as propriedades e as valida.
  constructor(props: AdressProps) {
    //[this.cep = props.cep] -> Atribui o Cep.
    this.cep = props.cep;
    //[this.road = props.road] -> Atribui o Road.
    this.road = props.road;
    //[this.number = props.number] -> Atribui o NumberRoad.
    this.number = props.number;
    //[this.district = props.district] -> Atribui o District.
    this.district = props.district;
    //[this.city = props.city] -> Atribui o City.
    this.city = props.city;
    //[this.state = props.state] -> Atribui o State.
    this.state = props.state;
    //[this.complement = props.complement] -> Atribui o Complement, se existir.
    this.complement = props.complement;
    //[this.validate()] -> Chama o método de validação do endereço.
    this.validate();
  }

  //[private validate()] -> Realiza as validações do Adress.
  private validate(): void {
    //[// Todos os atributos são Value Objects e já possuem suas validações internas.] -> Comentário de depuração sobre a validação.
    //[// A validação do Adress garante que todos os VOs obrigatórios foram fornecidos.] -> Comentário de depuração sobre a validação.
    //[if (!this.cep || !this.road || !this.number || !this.district || !this.city || !this.state)] -> Verifica se todos os atributos obrigatórios estão presentes.
    if (!this.cep || !this.road || !this.number || !this.district || !this.city || !this.state) {
      //[throw new Error('Todos os atributos obrigatórios do endereço (cep, road, number, district, city, state) devem ser fornecidos.')] -> Lança erro se algum atributo obrigatório estiver faltando.
      throw new Error('Todos os atributos obrigatórios do endereço (cep, road, number, district, city, state) devem ser fornecidos.');
    }
  }

  //[public getValues()] -> Retorna um objeto com todos os valores dos atributos.
  public getValues() {
    //[return {] -> Retorna um objeto contendo os valores dos atributos.
    return {
      //[cep: this.cep.getValue()] -> Retorna o valor do Cep.
      cep: this.cep.getValue(),
      //[road: this.road.getValue()] -> Retorna o valor do Road.
      road: this.road.getValue(),
      //[number: this.number.getValue()] -> Retorna o valor do NumberRoad.
      number: this.number.getValue(),
      //[district: this.district.getValue()] -> Retorna o valor do District.
      district: this.district.getValue(),
      //[city: this.city.getValue()] -> Retorna o valor do City.
      city: this.city.getValue(),
      //[state: this.state.getValue()] -> Retorna o valor do State.
      state: this.state.getValue(),
      //[complement: this.complement?.getValue()] -> Retorna o valor do Complement, se existir.
      complement: this.complement?.getValue(),
    };
  }

  //[public formatFullAdress()] -> Formata o endereço completo para exibição.
  public formatFullAdress(): string {
    //[const complementStr = this.complement ? ` - ${this.complement.getValue()}` : ''] -> Adiciona o complemento se existir.
    const complementStr = this.complement ? ` - ${this.complement.getValue()}` : '';
    //[return `${this.road.getValue()}, ${this.number.getValue()}${complementStr} - ${this.district.getValue()}, ${this.city.getValue()} - ${this.state.getValue()}, ${this.cep.getValue()}`] -> Retorna o endereço formatado.
    return `${this.road.getValue()}, ${this.number.getValue()}${complementStr} - ${this.district.getValue()}, ${this.city.getValue()} - ${this.state.getValue()}, ${this.cep.getValue()}`;
  }

  //[public equals(other: Adress)] -> Compara se dois objetos Adress são iguais.
  public equals(other: Adress): boolean {
    //[return this.cep.equals(other.cep) &&] -> Compara o Cep.
    return this.cep.equals(other.cep) &&
           //[this.road.equals(other.road) &&] -> Compara o Road.
           this.road.equals(other.road) &&
           //[this.number.equals(other.number) &&] -> Compara o NumberRoad.
           this.number.equals(other.number) &&
           //[this.district.equals(other.district) &&] -> Compara o District.
           this.district.equals(other.district) &&
           //[this.city.equals(other.city) &&] -> Compara o City.
           this.city.equals(other.city) &&
           //[this.state.equals(other.state) &&] -> Compara o State.
           this.state.equals(other.state) &&
           //[((!this.complement && !other.complement) || (this.complement && other.complement && this.complement.equals(other.complement)))] -> Compara o Complement (se ambos existirem ou ambos não existirem).
           ((!this.complement && !other.complement) || (this.complement && other.complement && this.complement.equals(other.complement)));
  }
}
//[export { Adress, AdressProps }] -> Exporta a classe Adress e sua interface de propriedades.
export { Adress, AdressProps };
