// tests/domain/use-cases/authenticate-user.use-case.spec.ts
import { authenticateUser } from '../../../src/domain/use-cases/authenticate-user.use-case';
import { UserRepository } from '../../../src/domain/repositories/user.repository';
import { User } from '../../../src/domain/entities/user';
import { Email } from '../../../src/shared/value-objects/email/email';
import { Password } from '../../../src/shared/value-objects/password/password';
import { Name } from '../../../src/shared/value-objects/name/name';
import { Id } from '../../../src/shared/value-objects/id/id';
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
