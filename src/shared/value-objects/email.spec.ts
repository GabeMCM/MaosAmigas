// tests/core/value-objects/email.spec.ts
import { Email } from '../../../src/core/value-objects/email';        // [DEPURAÇÃO] Importa a classe Email para testes
import validator from 'validator';                                   // [DEPURAÇÃO] Importa lib de validação

describe('Email Value Object', () => {                               // [DEPURAÇÃO] Suite de testes para Value Object Email
  test('Should create valid email', () => {                          // [DEPURAÇÃO] Teste para criação de email válido
    const email = new Email('user@example.com');                     // [DEPURAÇÃO] Cria instância com email válido
    expect(email.value).toBe('user@example.com');                    // [DEPURAÇÃO] Verifica valor armazenado
    expect(validator.isEmail(email.value)).toBe(true);               // [DEPURAÇÃO] Verifica com lib externa
  });

  test('Should throw error for invalid format', () => {              // [DEPURAÇÃO] Teste para formato inválido
    expect(() => new Email('invalid-email')).toThrow(                // [DEPURAÇÃO] Verifica erro sem @
      'Invalid email format'
    );
    expect(() => new Email('user@.com')).toThrow(                   // [DEPURAÇÃO] Verifica erro com domínio inválido
      'Invalid email format'
    );
  });

  test('Should throw error for uppercase letters', () => {          // [DEPURAÇÃO] Teste para letras maiúsculas
    expect(() => new Email('User@example.com')).toThrow(            // [DEPURAÇÃO] Verifica erro com maiúscula
      'Email cannot contain uppercase letters'
    );
  });

  test('Should trim whitespace', () => {                            // [DEPURAÇÃO] Teste para remoção de espaços
    const email = new Email('  user@example.com  ');                // [DEPURAÇÃO] Cria com espaços extras
    expect(email.value).toBe('user@example.com');                   // [DEPURAÇÃO] Verifica espaços removidos
  });

  test('Equals method', () => {                                     // [DEPURAÇÃO] Teste para método de igualdade
    const email1 = new Email('user@example.com');                   // [DEPURAÇÃO] Primeira instância
    const email2 = new Email('user@example.com');                   // [DEPURAÇÃO] Segunda instância igual
    const email3 = new Email('other@example.com');                  // [DEPURAÇÃO] Terceira instância diferente
    
    expect(email1.equals(email2)).toBe(true);                       // [DEPURAÇÃO] Verifica igualdade
    expect(email1.equals(email3)).toBe(false);                      // [DEPURAÇÃO] Verifica diferença
  });
});