// src/domain/repositories/beneficiary.repository.ts
// [import { Beneficiary } from '../entities/beneficiary'] → Importa a entidade Beneficiary
import { Beneficiary } from '../entities/beneficiary';
// [import { Cpf } from '../../shared/value-objects/cpf/cpf'] → Importa o VO Cpf
import { Cpf } from '../../shared/value-objects/user-info/cpf/cpf.vo';

// [export interface BeneficiaryRepository] → Define a interface para o repositório de beneficiários
export interface BeneficiaryRepository {
  // [findByCpf(cpf: Cpf): Promise<Beneficiary | null>] → Define o método para buscar um beneficiário pelo CPF
  findByCpf(cpf: Cpf): Promise<Beneficiary | null>;
  // [save(beneficiary: Beneficiary): Promise<void>] → Define o método para salvar um beneficiário
  save(beneficiary: Beneficiary): Promise<void>;
}
