// src/domain/validators/donor.validator.ts
// [import { Donor } from '../entities/donor'] → Importa a entidade Donor para validação
import { Donor } from '../entities/donor.entity';
// [import { validateUser } from './user.validator'] → Importa o validador de usuário base
import { validateUser } from './user.validator';

// [type ValidationRule = (donor: Donor) => string | null] → Define um tipo para regras de validação de doador
type ValidationRule = (donor: Donor) => string | null;

// [const isPreferredDonationTypeValid: ValidationRule = (donor) =>] → Valida se o tipo de doação preferencial é uma string
const isPreferredDonationTypeValid: ValidationRule = (donor) =>
  donor.preferredDonationType && typeof donor.preferredDonationType !== 'string'
    ? 'If provided, preferredDonationType must be a string.'
    : null;

// [const rules: ValidationRule[] = [isPreferredDonationTypeValid]] → Agrupa as regras de validação de doador
const rules: ValidationRule[] = [isPreferredDonationTypeValid];

// [export const validateDonor = (donor: Donor): string[] =>] → Executa todas as regras e retorna os erros
export const validateDonor = (donor: Donor): string[] => {
  // [const userErrors = validateUser(donor)] → Valida as regras do usuário base
  const userErrors = validateUser(donor);
  // [const donorErrors = rules.map(...)] → Valida as regras específicas de doador
  const donorErrors = rules
    .map((rule) => rule(donor))
    .filter((error) => error !== null) as string[];

  // [return [...userErrors, ...donorErrors]] → Combina os erros e os retorna
  return [...userErrors, ...donorErrors];
};
