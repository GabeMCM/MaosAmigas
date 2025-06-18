// tests/core/value-objects/number-of-contact.spec.ts
import { ContactNumber } from './contact-number'; // [DEPURAÇÃO] Classe sob teste

describe('ContactNumber Value Object', () => {                    // [DEPURAÇÃO] Suite de testes
  // Testes para números válidos
  test('Should accept valid mobile number (9 digits)', () => {     // [DEPURAÇÃO] Teste móvel
    const phone = new ContactNumber('(11)98765-4321');           // [DEPURAÇÃO] Cria instância
    expect(phone.value).toBe('(11) 98765-4321');                   // [DEPURAÇÃO] Verifica formato
    expect(phone.simpleValue).toBe('11987654321');                 // [DEPURAÇÃO] Verifica dígitos
    expect(phone.floatValue).toBe('11987.654.321');                // [DEPURAÇÃO] Verifica float
  });

  test('Should accept valid landline (8 digits)', () => {          // [DEPURAÇÃO] Teste fixo
    const phone = new ContactNumber('(11)3456-7890');            // [DEPURAÇÃO] Cria instância
    expect(phone.value).toBe('(11) 3456-7890');                   // [DEPURAÇÃO] Verifica formato
  });

  // Testes para números inválidos
  test('Should reject invalid DDD (<11)', () => {                  // [DEPURAÇÃO] Teste DDD inválido
    expect(() => new ContactNumber('(10)12345-6789')).toThrow(   // [DEPURAÇÃO] DDD 10
      'Invalid DDD'
    );
  });

  test('Should reject wrong length (7 digits)', () => {            // [DEPURAÇÃO] Teste tamanho
    expect(() => new ContactNumber('(11)1234-567')).toThrow(     // [DEPURAÇÃO] 7 dígitos
      'Phone number must have 10 or 11 digits'
    );
  });

  test('Should reject repeated digits', () => {                    // [DEPURAÇÃO] Teste dígitos iguais
    expect(() => new ContactNumber('(11)1111-1111')).toThrow(     // [DEPURAÇÃO] Todos 1
      'Invalid phone number sequence'
    );
  });

  // Testes de comparação
  test('Equals method should compare by digits', () => {            // [DEPURAÇÃO] Teste equals
    const phone1 = new ContactNumber('(11)98765-4321');           // [DEPURAÇÃO] Instância 1
    const phone2 = new ContactNumber('(11) 98765-4321');          // [DEPURAÇÃO] Instância 2 (espaço)
    const phone3 = new ContactNumber('(21)98765-4321');          // [DEPURAÇÃO] Instância 3 (DDD diferente)
    
    expect(phone1.equals(phone2)).toBe(true);                      // [DEPURAÇÃO] Deve ser igual
    expect(phone1.equals(phone3)).toBe(false);                     // [DEPURAÇÃO] Deve ser diferente
  });
});
