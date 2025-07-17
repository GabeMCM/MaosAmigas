// tests/shared/value-objects/contact/contact.spec.ts
import { Contact } from './user-contact.vo';
import { Email } from './email/email.vo';
import { ContactNumber } from './contact-number/contact-number.vo';
import { Address } from './address/address.vo';
import ZipCode from './address/zip-code.vo';
import StreetName from './address/street-name.vo';
import HouseNumber from './address/house-number.vo';
import District from './address/district.vo';
import City from './address/city.vo';
import State from './address/state.vo';

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

describe('Contact Value Object', () => {
  test('Should create a valid contact', () => {
    const email = new Email('test@example.com');
    const phone = new ContactNumber('(11)98765-4321');
    const address = createDummyAddress();
    const contact = new Contact(email, phone, address);

    expect(contact.email).toBe(email);
    expect(contact.phone).toBe(phone);
    expect(contact.address).toBe(address);
  });

  test('Should throw error if no contact method is provided', () => {
    expect(() => new Contact()).toThrow('At least one contact method must be provided');
  });

  test('Equals method should compare by value', () => {
    const email1 = new Email('test@example.com');
    const phone1 = new ContactNumber('(11)98765-4321');
    const address1 = createDummyAddress();
    const contact1 = new Contact(email1, phone1, address1);

    const email2 = new Email('test@example.com');
    const phone2 = new ContactNumber('(11)98765-4321');
    const address2 = createDummyAddress();
    const contact2 = new Contact(email2, phone2, address2);

    const email3 = new Email('different@example.com');
    const phone3 = new ContactNumber('(21)98765-4321');
    const address3 = createDummyAddress(); // For simplicity, we use the same address, as we are testing the contact equality
    const contact3 = new Contact(email3, phone3, address3);

    expect(contact1.equals(contact2)).toBe(true);
    expect(contact1.equals(contact3)).toBe(false);
  });
});
