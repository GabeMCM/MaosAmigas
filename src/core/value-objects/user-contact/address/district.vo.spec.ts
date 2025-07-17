// tests/core/value-objects/user-contact/address/district.vo.spec.ts
import District from './district.vo';

describe('District Value Object', () => {
  it('should create a valid district', () => {
    const district = new District('Centro');
    expect(district.value).toBe('Centro');
  });

  it('should trim whitespace from the district name', () => {
    const district = new District('  Vila Madalena  ');
    expect(district.value).toBe('Vila Madalena');
  });

  it('should throw an error for a district with less than 2 characters', () => {
    expect(() => new District('A')).toThrow('District deve ter pelo menos 2 caracteres');
  });

  it('should throw an error for a district with more than 50 characters', () => {
    const longDistrict = 'a'.repeat(51);
    expect(() => new District(longDistrict)).toThrow('District deve ter no máximo 50 caracteres');
  });

  it('should throw an error for an empty district', () => {
    expect(() => new District('')).toThrow('District deve ter pelo menos 2 caracteres');
  });

  it('should return the correct value from toString and valueOf', () => {
    const district = new District('Ipanema');
    expect(district.toString()).toBe('Ipanema');
    expect(district.valueOf()).toBe('Ipanema');
  });
});
