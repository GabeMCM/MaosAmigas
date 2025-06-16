// tests/core/value-objects/name.spec.ts

import { Name } from '../../../src/core/value-objects/name';         // [DEPURAÇÃO] Importa a classe Name para teste

describe('Name Value Object', () => {                                // [DEPURAÇÃO] Suite de testes para o Value Object Name
  test('Should create valid name', () => {                           // [DEPURAÇÃO] Teste para criação de nome válido
    const name = new Name('João Silva');                             // [DEPURAÇÃO] Cria instância com nome válido
    expect(name.value).toBe('João Silva');                           // [DEPURAÇÃO] Verifica se valor foi armazenado corretamente
  });

  test('Should throw error for empty name', () => {                  // [DEPURAÇÃO] Teste para nome vazio
    expect(() => new Name('')).toThrow('Name cannot be empty');      // [DEPURAÇÃO] Verifica erro para string vazia
    expect(() => new Name('   ')).toThrow('Name cannot be empty');   // [DEPURAÇÃO] Verifica erro para apenas espaços
  });

  test('Should throw error for special characters', () => {          // [DEPURAÇÃO] Teste para caracteres inválidos
    expect(() => new Name('João@Silva')).toThrow(                    // [DEPURAÇÃO] Verifica erro para caractere especial
      'Name cannot contain special characters or numbers'
    );
    expect(() => new Name('João123')).toThrow(                       // [DEPURAÇÃO] Verifica erro para números
      'Name cannot contain special characters or numbers'
    );
  });

  test('Should trim whitespace', () => {                             // [DEPURAÇÃO] Teste para remoção de espaços extras
    const name = new Name('  João Silva  ');                         // [DEPURAÇÃO] Cria nome com espaços extras
    expect(name.value).toBe('João Silva');                           // [DEPURAÇÃO] Verifica se espaços foram removidos
  });

  test('Equals method', () => {                                      // [DEPURAÇÃO] Teste para método de igualdade
    const name1 = new Name('João Silva');                            // [DEPURAÇÃO] Primeira instância para comparação
    const name2 = new Name('João Silva');                            // [DEPURAÇÃO] Segunda instância com mesmo valor
    const name3 = new Name('Maria Souza');                           // [DEPURAÇÃO] Terceira instância com valor diferente
    
    expect(name1.equals(name2)).toBe(true);                          // [DEPURAÇÃO] Verifica igualdade entre instâncias iguais
    expect(name1.equals(name3)).toBe(false);                         // [DEPURAÇÃO] Verifica diferença entre instâncias distintas
  });
});