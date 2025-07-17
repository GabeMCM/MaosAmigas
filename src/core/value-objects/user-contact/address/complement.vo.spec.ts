// tests/core/value-objects/user-contact/address/complement.vo.spec.ts
import Complement from './complement.vo';

describe('Complement Value Object', () => {
  it('should create a valid complement', () => {
    const complement = new Complement('Apto 101');
    expect(complement.value).toBe('Apto 101');
  });

  it('should allow an empty or undefined complement', () => {
    const complement1 = new Complement('');
    expect(complement1.value).toBe('');

    const complement2 = new Complement();
    expect(complement2.value).toBeUndefined();
  });

  it('should trim whitespace from the complement', () => {
    const complement = new Complement('  Bloco B  ');
    expect(complement.value).toBe('Bloco B');
  });

  it('should throw an error for a complement with more than 50 characters', () => {
    const longComplement = 'a'.repeat(51);
    expect(() => new Complement(longComplement)).toThrow('Complement deve ter no máximo 50 caracteres');
  });

  it('should return the correct value from toString and valueOf', () => {
    const complement1 = new Complement('Sala 2');
    expect(complement1.toString()).toBe('Sala 2');
    expect(complement1.valueOf()).toBe('Sala 2');

    const complement2 = new Complement();
    expect(complement2.toString()).toBe('');
    expect(complement2.valueOf()).toBeUndefined();
  });
});
