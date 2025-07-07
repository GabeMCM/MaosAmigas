// src/domain/repositories/user.repository.ts
// [import { User } from '../entities/user'] → Importa a entidade User
import { User } from '../entities/user';
// [import { Email } from '../../shared/value-objects/email/email'] → Importa o VO Email
import { Email } from '../../shared/value-objects/user-contact/email/email.vo';

// [export interface UserRepository] → Define a interface para o repositório de usuários
export interface UserRepository {
  // [findByEmail(email: Email): Promise<User | null>] → Define o método para buscar um usuário pelo email
  findByEmail(email: Email): Promise<User | null>;
}
