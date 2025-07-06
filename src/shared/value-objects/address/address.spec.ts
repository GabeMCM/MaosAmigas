// tests/shared/value-objects/address/address.spec.ts
import { Address } from '../../../../src/shared/value-objects/address/address';

describe('Address Value Object', () => {
  test('Should create valid address', () => {
    const address = new Address('123 Main St, Anytown, USA');
    expect(address.value).toBe('123 Main St, Anytown, USA');
  });

  test('Equals method should compare by value', () => {
    const addressA = new Address('123 Main St, Anytown, USA');
    const addressB = new Address('123 Main St, Anytown, USA');
    const addressC = new Address('456 Oak Ave, Anytown, USA');

    expect(addressA.equals(addressB)).toBe(true);
    expect(addressA.equals(addressC)).toBe(false);
  });
});
