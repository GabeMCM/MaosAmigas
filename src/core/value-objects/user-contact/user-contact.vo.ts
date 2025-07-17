// src/shared/value-objects/contact/contact.ts
import { Email } from './email/email.vo';
import { ContactNumber } from './contact-number/contact-number.vo';
import { Address } from './address/address.vo';

export class Contact {
  private readonly _email?: Email;
  private readonly _phone?: ContactNumber;
  private readonly _address?: Address;

  constructor(email?: Email, phone?: ContactNumber, address?: Address) {
    if (!email && !phone && !address) {
      throw new Error('At least one contact method must be provided');
    }

    this._email = email;
    this._phone = phone;
    this._address = address;
  }

  public get email(): Email | undefined {
    return this._email;
  }

  public get phone(): ContactNumber | undefined {
    return this._phone;
  }

  public get address(): Address | undefined {
    return this._address;
  }

  public equals(other: Contact): boolean {
    return (
      JSON.stringify(this.email) === JSON.stringify(other.email) &&
      JSON.stringify(this.phone) === JSON.stringify(other.phone) &&
      JSON.stringify(this.address) === JSON.stringify(other.address)
    );
  }
}
