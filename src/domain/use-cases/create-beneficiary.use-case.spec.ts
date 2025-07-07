import { createBeneficiary } from '../../../src/domain/use-cases/create-beneficiary.use-case';
import { BeneficiaryRepository } from '../../../src/domain/repositories/beneficiary.repository';
import { Beneficiary } from '../../../src/domain/entities/beneficiary';
import { Name } from '../../shared/value-objects/user-info/name/name.vo';
import { Cpf } from '../../shared/value-objects/user-info/cpf/cpf.vo';
import { BirthDate } from '../../shared/value-objects/user-info/birth-date/birth-date.vo';
import { Contact } from '../../shared/value-objects/user-contact/user-contact.vo';
import { Email } from '../../shared/value-objects/user-contact/email/email.vo';
import { Id } from '../../../src/shared/value-objects/id/id';
import { Password } from '../../../src/shared/value-objects/password/password';
import { cpf } from 'cpf-cnpj-validator';

describe('CreateBeneficiary Use Case', () => {
  let mockRepository: BeneficiaryRepository;
  const validCpf = cpf.generate();

  beforeEach(() => {
    mockRepository = {
      findByCpf: jest.fn(),
      save: jest.fn(),
    };
  });

  it('should create a beneficiary successfully', async () => {
    const input = {
      name: new Name('Valid Name'),
      cpf: new Cpf(validCpf),
      birthDate: new BirthDate('01/01/2000'),
      contact: new Contact(new Email('valid@email.com')),
    };

    (mockRepository.findByCpf as jest.Mock).mockResolvedValue(null);

    const beneficiary = await createBeneficiary(mockRepository, input);

    expect(beneficiary).toBeInstanceOf(Beneficiary);
    expect(mockRepository.findByCpf).toHaveBeenCalledWith(input.cpf);
    expect(mockRepository.save).toHaveBeenCalledWith(beneficiary);
  });

  it('should throw an error if cpf already exists', async () => {
    const input = {
      name: new Name('Valid Name'),
      cpf: new Cpf(validCpf),
      birthDate: new BirthDate('01/01/2000'),
      contact: new Contact(new Email('valid@email.com')),
    };

    (mockRepository.findByCpf as jest.Mock).mockResolvedValue(new Beneficiary(
      new Id(),
      input.name,
      new Email('another@email.com'),
      new Password('AnotherPass123!'),
      new Date(),
      input.birthDate,
      input.contact
    ));

    await expect(createBeneficiary(mockRepository, input)).rejects.toThrow('CPF already exists.');
  });

  it('should throw an error for invalid input', async () => {
    const input = {
      name: null as any,
      cpf: new Cpf(validCpf),
      birthDate: new BirthDate('01/01/2000'),
      contact: new Contact(new Email('valid@email.com')),
    };

    await expect(createBeneficiary(mockRepository, input)).rejects.toThrow('Name is required and must be a valid Name object.');
  });
});
