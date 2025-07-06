// src/shared/value-objects/token/token.ts
// [export interface TokenPayload] → Define a interface para o payload do token
export interface TokenPayload {
  id: string;
  name: string;
  email: string;
}

// [export class Token] → Define a classe Token
export class Token {
  // [public readonly value: string] → Declara o valor do token
  public readonly value: string;
  // [public readonly payload: TokenPayload] → Declara o payload do token
  public readonly payload: TokenPayload;

  // [constructor(value: string, payload: TokenPayload)] → Inicializa o token com o valor e o payload
  constructor(value: string, payload: TokenPayload) {
    this.value = value;
    this.payload = payload;
  }
}
