// tests/core/value-objects/cpf.spec.ts
import { Cpf } from './cpf';           // [DEPURAÇÃO] Importa a classe Cpf para testes
import { cpf } from 'cpf-cnpj-validator';                           // [DEPURAÇÃO] Importa lib de validação para auxílio nos testes

describe('Cpf Value Object', () => {                                // [DEPURAÇÃO] Suite de testes para o Value Object Cpf
  test('Should create valid Cpf with formatted string', () => {     // [DEPURAÇÃO] Teste para criação com CPF formatado
    const validCpf = '529.982.247-25';                             // [DEPURAÇÃO] CPF válido com formatação
    const cpfObj = new Cpf(validCpf);                              // [DEPURAÇÃO] Cria instância com CPF formatado
    expect(cpfObj.value).toBe('52998224725');                       // [DEPURAÇÃO] Verifica valor armazenado sem formatação
    expect(cpfObj.formatted).toBe(validCpf);                       // [DEPURAÇÃO] Verifica formatação correta
  });

  test('Should create valid Cpf with unformatted string', () => {   // [DEPURAÇÃO] Teste para criação com CPF não formatado
    const validCpf = '52998224725';                                // [DEPURAÇÃO] CPF válido sem formatação
    const cpfObj = new Cpf(validCpf);                              // [DEPURAÇÃO] Cria instância com CPF não formatado
    expect(cpfObj.value).toBe(validCpf);                           // [DEPURAÇÃO] Verifica valor armazenado
  });

  test('Should throw error for invalid Cpf format', () => {         // [DEPURAÇÃO] Teste para CPF com formato inválido
    expect(() => new Cpf('123.456.789-00')).toThrow('Invalid CPF'); // [DEPURAÇÃO] Verifica erro para CPF inválido
    expect(() => new Cpf('11111111111')).toThrow('Invalid CPF');    // [DEPURAÇÃO] Verifica erro para CPF com dígitos iguais
  });

  test('Should throw error for wrong length', () => {               // [DEPURAÇÃO] Teste para CPF com tamanho errado
    expect(() => new Cpf('1234567890')).toThrow(                   // [DEPURAÇÃO] Verifica erro para 10 dígitos
      'CPF must have 11 digits'
    );
    expect(() => new Cpf('123456789012')).toThrow(                 // [DEPURAÇÃO] Verifica erro para 12 dígitos
      'CPF must have 11 digits'
    );
  });

  test('Equals method should compare values correctly', () => {     // [DEPURAÇÃO] Teste para método equals
    const cpf1 = new Cpf('52998224725');                           // [DEPURAÇÃO] Primeira instância
    const cpf2 = new Cpf('529.982.247-25');                        // [DEPURAÇÃO] Segunda instância (mesmo CPF formatado)
    const cpf3 = new Cpf(cpf.generate());                           // [DEPURAÇÃO] Terceira instância (CPF diferente)
    
    expect(cpf1.equals(cpf2)).toBe(true);                          // [DEPURAÇÃO] Verifica igualdade entre instâncias iguais
    expect(cpf1.equals(cpf3)).toBe(false);                         // [DEPURAÇÃO] Verifica diferença entre instâncias distintas
  });

  test('toString method should return unformatted value', () => {   // [DEPURAÇÃO] Teste para método toString
    const cpfObj = new Cpf('529.982.247-25');                      // [DEPURAÇÃO] Cria instância com CPF formatado
    expect(cpfObj.toString()).toBe('52998224725');                  // [DEPURAÇÃO] Verifica retorno sem formatação
  });

  test('Should accept valid Cpf with mask', () => {                 // [DEPURAÇÃO] Teste para aceitação de CPF com máscara
    const cpfWithMask = '529.982.247-25';                          // [DEPURAÇÃO] CPF válido com máscara
    const cpfObj = new Cpf(cpfWithMask);                           // [DEPURAÇÃO] Cria instância
    expect(cpf.isValid(cpfObj.value)).toBe(true);                   // [DEPURAÇÃO] Verifica com lib externa
  });
});