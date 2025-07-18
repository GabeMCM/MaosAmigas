// tests/domain/entities/user.spec.ts
import { User } from './user.entity';
import { Id } from '../../core/value-objects/id/id.vo';
import { Name } from '../../core/value-objects/user-info/name/name.vo';
import { Email } from '../../core/value-objects/user-contact/email/email.vo';
import { Password } from '../../core/value-objects/password/password.vo';
import { BirthDate } from '../../core/value-objects/user-info/birth-date/birth-date.vo';
import { Contact } from '../../core/value-objects/user-contact/user-contact.vo';
import { ContactNumber } from '../../core/value-objects/user-contact/contact-number/contact-number.vo';
import { Address } from '../../core/value-objects/user-contact/address/address.vo';
import ZipCode from '../../core/value-objects/user-contact/address/zip-code.vo';
import StreetName from '../../core/value-objects/user-contact/address/street-name.vo';
import HouseNumber from '../../core/value-objects/user-contact/address/house-number.vo';
import District from '../../core/value-objects/user-contact/address/district.vo';
import City from '../../core/value-objects/user-contact/address/city.vo';
import State from '../../core/value-objects/user-contact/address/state.vo';

const createDummyAddress = () => {
  return new Address({
    zipCode: new ZipCode('12345678'),
    streetName: new StreetName('Main Street'),
    houseNumber: new HouseNumber('123'),
    district: new District('Downtown'),
    city: new City('Anytown'),
    state: new State('SP'),
  });
};

describe('User Entity', () => {
  it('should create a user with all fields', () => {
    const id = new Id();
    const name = new Name('John Doe');
    const email = new Email('john.doe@example.com');
    const password = new Password('Password123');
    const birthDate = new BirthDate('01/01/1990');
    const contact = new Contact(
      new Email('contact@example.com'),
      new ContactNumber('(11)99999-9999'),
      createDummyAddress()
    );

    const user = new User(id, name, email, password, birthDate, contact);

    expect(user.id).toBe(id);
    expect(user.name).toBe(name);
    expect(user.email).toBe(email);
    expect(user.password).toBe(password);
    expect(user.birthDate).toBe(birthDate);
    expect(user.contact).toBe(contact);
  });

  it('should create a user with only required fields', () => {
    const id = new Id();
    const name = new Name('John Doe');
    const email = new Email('john.doe@example.com');
    const password = new Password('Password123');

    const user = new User(id, name, email, password);

    expect(user.id).toBe(id);
    expect(user.name).toBe(name);
    expect(user.email).toBe(email);
    expect(user.password).toBe(password);
    expect(user.birthDate).toBeUndefined();
    expect(user.contact).toBeUndefined();
  });

  it('should be able to change mutable fields', () => {
    const id = new Id();
    const name = new Name('John Doe');
    const email = new Email('john.doe@example.com');
    const password = new Password('Password123');
    const user = new User(id, name, email, password);

    const newName = new Name('Jane Doe');
    user.name = newName;
    expect(user.name).toBe(newName);

    const newEmail = new Email('jane.doe@example.com');
    user.email = newEmail;
    expect(user.email).toBe(newEmail);

    const newPassword = new Password('NewPassword123');
    user.password = newPassword;
    expect(user.password).toBe(newPassword);
  });

  it('should compare users by id', () => {
    const id1 = new Id();
    const name1 = new Name('John Doe');
    const email1 = new Email('john.doe@example.com');
    const password4 = new Password('Password123');
    const user1 = new User(id1, name1, email1, password4);

    const id2 = new Id(id1.value);
    const name2 = new Name('Jane Doe');
    const email2 = new Email('jane.doe@example.com');
    const password5 = new Password('NewPassword123');
    const user2 = new User(id2, name2, email2, password5);

    const id3 = new Id();
    const name3 = new Name('Peter Pan');
    const email3 = new Email('peter.pan@example.com');
    const password6 = new Password('Password123');
    const user3 = new User(id3, name3, email3, password6);

    expect(user1.equals(user2)).toBe(true);
    expect(user1.equals(user3)).toBe(false);
  });
});
