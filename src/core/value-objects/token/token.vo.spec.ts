// tests/core/value-objects/token/token.vo.spec.ts
import { Token, TokenPayload } from './token.vo';

describe('Token Value Object', () => {
  it('should create a token with a value and a payload', () => {
    const payload: TokenPayload = {
      id: 'user-id-123',
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    const tokenValue = 'a.jwt.token';

    const token = new Token(tokenValue, payload);

    expect(token.value).toBe(tokenValue);
    expect(token.payload).toBe(payload);
    expect(token.payload.id).toBe('user-id-123');
    expect(token.payload.name).toBe('John Doe');
    expect(token.payload.email).toBe('john.doe@example.com');
  });
});
