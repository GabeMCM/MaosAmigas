// src/domain/use-cases/authenticate-user.use-case.ts
// [import { UserRepository } from '../repositories/user.repository'] → Importa o repositório de usuários
import { UserRepository } from '../repositories/user.repository';
// [import { Email } from '../../shared/value-objects/email/email'] → Importa o VO Email
import { Email } from '../../shared/value-objects/user-contact/email/email.vo';
// [import { Password } from '../../shared/value-objects/password/password'] → Importa o VO Password
import { Password } from '../../shared/value-objects/password/password';
// [import { Token, TokenPayload } from '../../shared/value-objects/token/token'] → Importa o VO Token
import { Token, TokenPayload } from '../../shared/value-objects/token/token';
// [import * as jwt from 'jsonwebtoken'] → Importa a biblioteca jsonwebtoken
import * as jwt from 'jsonwebtoken';
// [import * as bcrypt from 'bcrypt'] → Importa a biblioteca bcrypt
import * as bcrypt from 'bcrypt';

// [export interface AuthenticateUserInput] → Define a interface de entrada para o caso de uso
export interface AuthenticateUserInput {
  email: Email;
  password: Password;
}

// [export const authenticateUser = ...] → Define a função do caso de uso
export const authenticateUser = async (
  // [repository: UserRepository] → Recebe o repositório como dependência
  repository: UserRepository,
  // [input: AuthenticateUserInput] → Recebe os dados de entrada
  input: AuthenticateUserInput
  // [): Promise<Token>] → Retorna o Token de autenticação
): Promise<Token> => {
  // [const user = await repository.findByEmail(input.email)] → Busca o usuário pelo email
  const user = await repository.findByEmail(input.email);
  // [if (!user)] → Se o usuário não for encontrado, lança uma exceção
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  // [const isPasswordValid = await bcrypt.compare(input.password.value, user.password.value)] → Compara a senha fornecida com a senha armazenada
  const isPasswordValid = await bcrypt.compare(input.password.value, user.password.value);
  // [if (!isPasswordValid)] → Se a senha for inválida, lança uma exceção
  if (!isPasswordValid) {
    throw new Error('Invalid email or password.');
  }

  // [const payload: TokenPayload = { ... }] → Cria o payload do token
  const payload: TokenPayload = {
    id: user.id.value,
    name: user.name.value,
    email: user.email.value,
  };

  // [const tokenValue = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' })] → Gera o token JWT
  const tokenValue = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });

  // [return new Token(tokenValue, payload)] → Retorna o novo token
  return new Token(tokenValue, payload);
};
