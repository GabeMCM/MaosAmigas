// src/shared/value-objects/password/password.ts
export class Password {
  private readonly _value: string;

  constructor(password: string) {
    this._value = this.validate(password);
  }

  private validate(password: string): string {
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    if (!/[a-z]/.test(password)) {
      throw new Error('Password must include at least one lowercase letter');
    }

    if (!/[A-Z]/.test(password)) {
      throw new Error('Password must include at least one uppercase letter');
    }

    if (!/\d/.test(password)) {
      throw new Error('Password must include at least one number');
    }

    // Should be hashed before storage, but for now, we'll just store the plain text
    return password;
  }

  public get value(): string {
    return this._value;
  }

  public equals(other: Password): boolean {
    return this._value === other.value;
  }

  public toString(): string {
    return this._value;
  }
}
