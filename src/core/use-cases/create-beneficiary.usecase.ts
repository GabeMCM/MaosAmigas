// src/domain/use-cases/create-beneficiary.use-case.ts
// [import { Beneficiary } from '../entities/beneficiary'] → Importa a entidade Beneficiary
import { Beneficiary } from '../entities/beneficiary.entity';
// [import { BeneficiaryRepository } from '../repositories/beneficiary.repository'] → Importa o repositório de beneficiários
import { BeneficiaryRepository } from '../repositories/beneficiary.repo';
// [import { validateBeneficiary } from '../validators/beneficiary.validator'] → Importa o validador de beneficiário
import { validateBeneficiary } from '../validators/beneficiary.validator';
// [import { Name } from '../../shared/value-objects/name/name'] → Importa o VO Name
import { Name } from '../../core/value-objects/user-info/name/name.vo';
// [import { Cpf } from '../../shared/value-objects/cpf/cpf'] → Importa o VO Cpf
import { Cpf } from '../../core/value-objects/user-info/cpf/cpf.vo';
// [import { BirthDate } from '../../shared/value-objects/birth-date/birth-date'] → Importa o VO BirthDate
import { BirthDate } from '../../core/value-objects/user-info/birth-date/birth-date.vo';
// [import { Contact } from '../../shared/value-objects/contact/contact'] → Importa o VO Contact
import { Contact } from '../../core/value-objects/user-contact/user-contact.vo';
// [import { Id } from '../../shared/value-objects/id/id'] → Importa o VO Id
import { Id } from '../../core/value-objects/id/id.vo';
import { Password } from '../../core/value-objects/password/password.vo';
import { Email } from '../../core/value-objects/user-contact/email/email.vo';

// [export interface CreateBeneficiaryInput] → Define a interface de entrada para o caso de uso
export interface CreateBeneficiaryInput {
  name: Name;
  cpf: Cpf;
  birthDate: BirthDate;
  contact: Contact;
}

// [export const createBeneficiary = ...] → Define a função do caso de uso
export const createBeneficiary = async (
  // [repository: BeneficiaryRepository] → Recebe o repositório como dependência
  repository: BeneficiaryRepository,
  // [input: CreateBeneficiaryInput] → Recebe os dados de entrada
  input: CreateBeneficiaryInput
  // [): Promise<Beneficiary>] → Retorna a entidade Beneficiary criada
): Promise<Beneficiary> => {
  // [const beneficiary = new Beneficiary(...)] → Cria uma nova instância de Beneficiary
  const beneficiary = new Beneficiary(
    new Id(),
    input.name,
    new Email(`${input.cpf.value}@maosamigas.org`),
    new Password('DefaultPass123!'),
    new Date(),
    input.birthDate,
    input.contact
  );

  // [const errors = validateBeneficiary(beneficiary)] → Valida a nova entidade
  const errors = validateBeneficiary(beneficiary);
  // [if (errors.length > 0)] → Se houver erros, lança uma exceção
  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }

  // [const existingBeneficiary = await repository.findByCpf(input.cpf)] → Verifica se o CPF já existe
  const existingBeneficiary = await repository.findByCpf(input.cpf);
  // [if (existingBeneficiary)] → Se o CPF já existir, lança uma exceção
  if (existingBeneficiary) {
    throw new Error('CPF already exists.');
  }

  // [await repository.save(beneficiary)] → Salva o novo beneficiário no repositório
  await repository.save(beneficiary);

  // [return beneficiary] → Retorna o beneficiário criado
  return beneficiary;
};
