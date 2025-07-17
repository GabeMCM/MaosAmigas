// tests/core/value-objects/birth-date.spec.ts
import { BirthDate } from './birth-date.vo'; // [DEPURAÇÃO] Importa classe para teste
import { format } from 'date-fns';

describe('BirthDate Value Object', () => {                           // [DEPURAÇÃO] Suite de testes para BirthDate
  test('Should create valid BirthDate', () => {                      // [DEPURAÇÃO] Teste para criação válida
    const birthDate = new BirthDate('15/01/1990');                   // [DEPURAÇÃO] Cria instância com data válida
    expect(birthDate.value).toBe('15/01/1990');                      // [DEPURAÇÃO] Verifica valor formatado
    expect(birthDate.age).toBeGreaterThan(30);                       // [DEPURAÇÃO] Verifica cálculo de idade
  });

  test('Should reject invalid format', () => {                       // [DEPURAÇÃO] Teste para formato inválido
    expect(() => new BirthDate('1990-01-15')).toThrow(               // [DEPURAÇÃO] Formato incorreto
      'BirthDate must be in DD/MM/YYYY format'
    );
    expect(() => new BirthDate('15/1/1990')).toThrow(                // [DEPURAÇÃO] Mês com um dígito
      'BirthDate must be in DD/MM/YYYY format'
    );
  });

  test('Should reject invalid dates', () => {                        // [DEPURAÇÃO] Teste para datas inválidas
    expect(() => new BirthDate('32/01/1990')).toThrow('Invalid BirthDate'); // [DEPURAÇÃO] Dia inválido
    expect(() => new BirthDate('15/13/1990')).toThrow('Invalid BirthDate'); // [DEPURAÇÃO] Mês inválido
  });

  test('Should reject future dates', () => {                         // [DEPURAÇÃO] Teste para datas futuras
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);
    const futureStr = format(futureDate, 'dd/MM/yyyy');
    expect(() => new BirthDate(futureStr)).toThrow(
      'BirthDate cannot be in the future'
    );
  });

  test('Should reject dates too old', () => {                       // [DEPURAÇÃO] Teste para datas muito antigas
    expect(() => new BirthDate('01/01/1800')).toThrow(
      'BirthDate is too far in the past'
    );
  });

  test('Equals method', () => {                                     // [DEPURAÇÃO] Teste para método equals
    const date1 = new BirthDate('15/01/1990');                      // [DEPURAÇÃO] Primeira instância
    const date2 = new BirthDate('15/01/1990');                      // [DEPURAÇÃO] Segunda instância igual
    const date3 = new BirthDate('20/05/1985');                      // [DEPURAÇÃO] Terceira instância diferente
    
    expect(date1.equals(date2)).toBe(true);                          // [DEPURAÇÃO] Verifica igualdade
    expect(date1.equals(date3)).toBe(false);                         // [DEPURAÇÃO] Verifica diferença
  });
});