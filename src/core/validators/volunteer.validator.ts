// src/domain/validators/volunteer.validator.ts
// [import { Volunteer } from '../entities/volunteer'] → Importa a entidade Volunteer para validação
import { Volunteer } from '../entities/volunteer.entity';
// [import { validateUser } from './user.validator'] → Importa o validador de usuário base
import { validateUser } from './user.validator';

// [type ValidationRule = (volunteer: Volunteer) => string | null] → Define um tipo para regras de validação de voluntário
type ValidationRule = (volunteer: Volunteer) => string | null;

// [const areSkillsValid: ValidationRule = (volunteer) =>] → Valida se as habilidades são um array de strings
const areSkillsValid: ValidationRule = (volunteer) => {
  if (volunteer.skills && (!Array.isArray(volunteer.skills) || volunteer.skills.some(s => typeof s !== 'string'))) {
    return 'If provided, skills must be an array of strings.';
  }
  return null;
};

// [const isAvailabilityValid: ValidationRule = (volunteer) =>] → Valida se a disponibilidade é uma string
const isAvailabilityValid: ValidationRule = (volunteer) => {
  if (volunteer.availability && typeof volunteer.availability !== 'string') {
    return 'If provided, availability must be a string.';
  }
  return null;
};

// [const rules: ValidationRule[] = [areSkillsValid, isAvailabilityValid]] → Agrupa as regras de validação de voluntário
const rules: ValidationRule[] = [areSkillsValid, isAvailabilityValid];

// [export const validateVolunteer = (volunteer: Volunteer): string[] =>] → Executa todas as regras e retorna os erros
export const validateVolunteer = (volunteer: Volunteer): string[] => {
  // [const userErrors = validateUser(volunteer)] → Valida as regras do usuário base
  const userErrors = validateUser(volunteer);
  // [const volunteerErrors = rules.map(...)] → Valida as regras específicas de voluntário
  const volunteerErrors = rules
    .map((rule) => rule(volunteer))
    .filter((error) => error !== null) as string[];

  // [return [...userErrors, ...volunteerErrors]] → Combina os erros e os retorna
  return [...userErrors, ...volunteerErrors];
};
