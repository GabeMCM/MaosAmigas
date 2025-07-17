// tests/core/value-objects/id.spec.ts
import { Id } from './id.vo';             // [DEPURAÇÃO] Importa a classe Id para testes
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';      // [DEPURAÇÃO] Importa funções da lib uuid para auxílio nos testes

describe('Id Value Object', () => {                                 // [DEPURAÇÃO] Suite de testes para o Value Object Id
  test('Should create valid Id with generated UUID', () => {        // [DEPURAÇÃO] Teste para criação com UUID gerado
    const id = new Id();                                            // [DEPURAÇÃO] Cria instância sem valor fornecido
    expect(uuidValidate(id.value)).toBe(true);                      // [DEPURAÇÃO] Verifica se o valor gerado é UUID válido
    expect(id.value).toHaveLength(36);                              // [DEPURAÇÃO] Verifica comprimento do UUID
  });

  test('Should accept valid UUID in constructor', () => {           // [DEPURAÇÃO] Teste para criação com UUID fornecido
    const validUuid = uuidv4();                                     // [DEPURAÇÃO] Gera UUID válido para teste
    const id = new Id(validUuid);                                   // [DEPURAÇÃO] Cria instância com UUID fornecido
    expect(id.value).toBe(validUuid);                               // [DEPURAÇÃO] Verifica se valor foi mantido
  });

  test('Should throw error for invalid UUID format', () => {        // [DEPURAÇÃO] Teste para UUID inválido
    const invalidUuid = 'not-a-valid-uuid';                         // [DEPURAÇÃO] String que não é UUID válido
    expect(() => new Id(invalidUuid)).toThrow();                    // [DEPURAÇÃO] Verifica se construtor rejeita valor
  });

  test('Should generate different UUIDs for each instance', () => { // [DEPURAÇÃO] Teste para unicidade dos IDs
    const id1 = new Id();                                           // [DEPURAÇÃO] Primeira instância
    const id2 = new Id();                                           // [DEPURAÇÃO] Segunda instância
    expect(id1.value).not.toBe(id2.value);                          // [DEPURAÇÃO] Verifica se valores são diferentes
  });

  test('Equals method should compare values correctly', () => {     // [DEPURAÇÃO] Teste para método equals
    const uuid = uuidv4();                                          // [DEPURAÇÃO] UUID para teste
    const id1 = new Id(uuid);                                       // [DEPURAÇÃO] Primeira instância com UUID
    const id2 = new Id(uuid);                                       // [DEPURAÇÃO] Segunda instância com mesmo UUID
    const id3 = new Id();                                           // [DEPURAÇÃO] Terceira instância com UUID diferente
    
    expect(id1.equals(id2)).toBe(true);                             // [DEPURAÇÃO] Verifica igualdade entre instâncias iguais
    expect(id1.equals(id3)).toBe(false);                            // [DEPURAÇÃO] Verifica diferença entre instâncias distintas
  });

  test('Static isValid method should validate UUIDs', () => {       // [DEPURAÇÃO] Teste para método estático isValid
    const validUuid = uuidv4();                                     // [DEPURAÇÃO] UUID válido
    const invalidUuid = 'invalid-uuid';                             // [DEPURAÇÃO] String inválida
    
    expect(Id.isValid(validUuid)).toBe(true);                      // [DEPURAÇÃO] Verifica aceitação de UUID válido
    expect(Id.isValid(invalidUuid)).toBe(false);                   // [DEPURAÇÃO] Verifica rejeição de UUID inválido
  });

  test('Static generate method should produce valid UUIDs', () => { // [DEPURAÇÃO] Teste para método estático generate
    const generatedUuid = Id.generate();                            // [DEPURAÇÃO] Chama método de geração
    expect(uuidValidate(generatedUuid)).toBe(true);                // [DEPURAÇÃO] Verifica se retorno é UUID válido
  });

  test('toString method should return the UUID value', () => {      // [DEPURAÇÃO] Teste para método toString
    const uuid = uuidv4();                                          // [DEPURAÇÃO] UUID para teste
    const id = new Id(uuid);                                        // [DEPURAÇÃO] Cria instância com UUID
    expect(id.toString()).toBe(uuid);                               // [DEPURAÇÃO] Verifica retorno do método
  });
});