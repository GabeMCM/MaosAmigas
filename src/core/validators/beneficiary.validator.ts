// src/domain/validators/beneficiary.validator.ts
// [import { Beneficiary } from '../entities/beneficiary'] → Importa a entidade Beneficiary para validação
import { Beneficiary } from '../entities/beneficiary.entity';
// [import { validateUser } from './user.validator'] → Importa o validador de usuário base
import { validateUser } from './user.validator';

// [type ValidationRule = (beneficiary: Beneficiary) => string | null] → Define um tipo para regras de validação de beneficiário
type ValidationRule = (beneficiary: Beneficiary) => string | null;

// [const isRegistrationDateValid: ValidationRule = (beneficiary) =>] → Valida se a data de registro não está no futuro
const isRegistrationDateValid: ValidationRule = (beneficiary) =>
  beneficiary.registrationDate > new Date() ? 'Registration date cannot be in the future.' : null;

// [const rules: ValidationRule[] = [isRegistrationDateValid]] → Agrupa as regras de validação de beneficiário
const rules: ValidationRule[] = [isRegistrationDateValid];

// [export const validateBeneficiary = (beneficiary: Beneficiary): string[] =>] → Executa todas as regras e retorna os erros
export const validateBeneficiary = (beneficiary: Beneficiary): string[] => {
  // [const userErrors = validateUser(beneficiary)] → Valida as regras do usuário base
  const userErrors = validateUser(beneficiary);
  // [const beneficiaryErrors = rules.map(...)] → Valida as regras específicas de beneficiário
  const beneficiaryErrors = rules
    .map((rule) => rule(beneficiary))
    .filter((error) => error !== null) as string[];

  // [return [...userErrors, ...beneficiaryErrors]] → Combina os erros e os retorna
  return [...userErrors, ...beneficiaryErrors];
};