// tests/shared/value-objects/contact/contact.spec.ts
import { Contact } from '../../../../src/shared/value-objects/contact/contact';
import { Email } from '../../../../src/shared/value-objects/email/email';
import { ContactNumber } from '../../../../src/shared/value-objects/contact-number/contact-number';
import { Address } from '../../../../src/shared/value-objects/address/address';

describe('Contact Value Object', () => {
  test('Should create a valid contact', () => {
    const email = new Email('test@example.com');
    const phone = new ContactNumber('(11)98765-4321');
    const address = new Address('123 Main St');
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
    const address1 = new Address('123 Main St');
    const contact1 = new Contact(email1, phone1, address1);

    const email2 = new Email('test@example.com');
    const phone2 = new ContactNumber('(11)98765-4321');
    const address2 = new Address('123 Main St');
    const contact2 = new Contact(email2, phone2, address2);

    const email3 = new Email('different@example.com');
    const phone3 = new ContactNumber('(21)98765-4321');
    const address3 = new Address('456 Oak Ave');
    const contact3 = new Contact(email3, phone3, address3);

    expect(contact1.equals(contact2)).toBe(true);
    expect(contact1.equals(contact3)).toBe(false);
  });
});
