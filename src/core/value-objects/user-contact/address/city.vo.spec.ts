// tests/core/value-objects/user-contact/address/city.vo.spec.ts
import City from './city.vo';

describe('City Value Object', () => {
  it('should create a valid city', () => {
    const city = new City('São Paulo');
    expect(city.value).toBe('São Paulo');
  });

  it('should trim whitespace from the city name', () => {
    const city = new City('  Rio de Janeiro  ');
    expect(city.value).toBe('Rio de Janeiro');
  });

  it('should throw an error for a city with less than 2 characters', () => {
    expect(() => new City('A')).toThrow('City deve ter pelo menos 2 caracteres');
    expect(() => new City('  B  ')).toThrow('City deve ter pelo menos 2 caracteres');
  });

  it('should throw an error for a city with more than 50 characters', () => {
    const longCity = 'a'.repeat(51);
    expect(() => new City(longCity)).toThrow('City deve ter no máximo 50 caracteres');
  });

  it('should throw an error for an empty city', () => {
    expect(() => new City('')).toThrow('City deve ter pelo menos 2 caracteres');
    expect(() => new City('   ')).toThrow('City deve ter pelo menos 2 caracteres');
  });

  it('should return the correct value from toString and valueOf', () => {
    const city = new City('Belo Horizonte');
    expect(city.toString()).toBe('Belo Horizonte');
    expect(city.valueOf()).toBe('Belo Horizonte');
  });
});
