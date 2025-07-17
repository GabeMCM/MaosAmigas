// tests/domain/use-cases/authenticate-user.use-case.spec.ts
import { authenticateUser } from './authenticate-user.usecase';
import { UserRepository } from '../repositories/user.repo';
import { User } from '../entities/user.entity';
import { Email } from '../../core/value-objects/user-contact/email/email.vo';
import { Password } from '../../core/value-objects/password/password.vo';
import { Name } from '../../core/value-objects/user-info/name/name.vo';
import { Id } from '../../core/value-objects/id/id.vo';
import * as bcrypt from 'bcrypt';

describe('AuthenticateUser Use Case', () => {
  let mockRepository: UserRepository;

  beforeEach(() => {
    mockRepository = {
      findByEmail: jest.fn(),
    };
  });

  it('should authenticate a user and return a token', async () => {
    const password = 'Password123';
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(
      new Id(),
      new Name('Test User'),
      new Email('test@example.com'),
      new Password(hashedPassword)
    );

    (mockRepository.findByEmail as jest.Mock).mockResolvedValue(user);

    const input = {
      email: new Email('test@example.com'),
      password: new Password(password),
    };

    const token = await authenticateUser(mockRepository, input);

    expect(token).toBeDefined();
    expect(token.payload.email).toBe(user.email.value);
  });

  it('should throw an error for an invalid email', async () => {
    (mockRepository.findByEmail as jest.Mock).mockResolvedValue(null);

    const input = {
      email: new Email('wrong@example.com'),
      password: new Password('Password123'),
    };

    await expect(authenticateUser(mockRepository, input)).rejects.toThrow('Invalid email or password.');
  });

  it('should throw an error for an invalid password', async () => {
    const password = 'Password123';
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(
      new Id(),
      new Name('Test User'),
      new Email('test@example.com'),
      new Password(hashedPassword)
    );

    (mockRepository.findByEmail as jest.Mock).mockResolvedValue(user);

    const input = {
      email: new Email('test@example.com'),
      password: new Password('WrongPassword123'),
    };

    await expect(authenticateUser(mockRepository, input)).rejects.toThrow('Invalid email or password.');
  });
});
