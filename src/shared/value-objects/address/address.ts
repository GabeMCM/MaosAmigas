// src/shared/value-objects/address/address.ts
export class Address {
  private readonly _value: string;

  constructor(address: string) {
    this._value = address;
  }

  public get value(): string {
    return this._value;
  }

  public equals(other: Address): boolean {
    return this._value === other.value;
  }

  public toString(): string {
    return this._value;
  }
}
