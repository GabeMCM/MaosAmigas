// src/domain/validators/admin.validator.ts
// [import { Admin } from '../entities/admin'] → Importa a entidade Admin para validação
import { Admin } from '../entities/admin';
// [import { validateUser } from './user.validator'] → Importa o validador de usuário base
import { validateUser } from './user.validator';

// [type ValidationRule = (admin: Admin) => string | null] → Define um tipo para regras de validação de administrador
type ValidationRule = (admin: Admin) => string | null;

// [const isAccessLevelValid: ValidationRule = (admin) =>] → Valida se o nível de acesso é um inteiro entre 1 e 10
const isAccessLevelValid: ValidationRule = (admin) => {
  if (
    admin.accessLevel === undefined ||
    !Number.isInteger(admin.accessLevel) ||
    admin.accessLevel < 1 ||
    admin.accessLevel > 10
  ) {
    return 'Access level must be an integer between 1 and 10.';
  }
  return null;
};

// [const rules: ValidationRule[] = [isAccessLevelValid]] → Agrupa as regras de validação de administrador
const rules: ValidationRule[] = [isAccessLevelValid];

// [export const validateAdmin = (admin: Admin): string[] =>] → Executa todas as regras e retorna os erros
export const validateAdmin = (admin: Admin): string[] => {
  // [const userErrors = validateUser(admin)] → Valida as regras do usuário base
  const userErrors = validateUser(admin);
  // [const adminErrors = rules.map(...)] → Valida as regras específicas de administrador
  const adminErrors = rules
    .map((rule) => rule(admin))
    .filter((error) => error !== null) as string[];

  // [return [...userErrors, ...adminErrors]] → Combina os erros e os retorna
  return [...userErrors, ...adminErrors];
};
