// Representa informações pessoais do usuário: nome completo, CPF e data de nascimento
import { Name } from './name/name.vo';
import { Cpf } from './cpf/cpf.vo';
import { BirthDate } from './birth-date/birth-date.vo';

// [UserInfo] → agrega Name, Cpf e BirthDate, com validações e comportamentos
export class UserInfo {
  readonly name: Name;
  readonly cpf: Cpf;
  readonly birthDate: BirthDate;

  // [constructor] → inicializa e valida os campos
  constructor(params: { name: Name; cpf: Cpf; birthDate: BirthDate }) {
    // [Valida cada VO individualmente]
    if (!params.name) throw new Error('Name é obrigatório');
    if (!params.cpf) throw new Error('CPF é obrigatório');
    if (!params.birthDate) throw new Error('BirthDate é obrigatório');

    // [Valida se o usuário tem pelo menos 16 anos]
    const age = UserInfo.calculateAge(params.birthDate);
    if (age < 16) throw new Error('Usuário deve ter pelo menos 16 anos');

    this.name = params.name;
    this.cpf = params.cpf;
    this.birthDate = params.birthDate;
  }

  // [getAge] → retorna a idade atual do usuário
  getAge(): number {
    return UserInfo.calculateAge(this.birthDate);
  }

  // [isAdult] → verifica se o usuário é maior de idade (18+)
  isAdult(): boolean {
    return this.getAge() >= 18;
  }

  // [calculateAge] → calcula a idade a partir do BirthDate VO
  private static calculateAge(birthDate: BirthDate): number {
    const today = new Date();
    const birth = birthDate.valueOf();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
}