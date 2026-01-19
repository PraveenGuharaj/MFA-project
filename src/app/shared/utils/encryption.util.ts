import { JSEncrypt } from 'jsencrypt';

export class RsaEncryptionUtil {

  // 🔐 PUBLIC KEY ONLY (Base64 format is OK)
  private static publicKey = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg2s7kfRh6sN4aPqKaVgjNK4Brh/5p0QD32osgkWgXm2cu+374LLhos70BdsHaVWWMOJGX8NePlxoNupO1fnB4ArCAfUKUHGO4gn9wj3QddwByTbSbyTRL4C6mme+FbpPCOuhjVJnzEUq8mYknVREQEDDHd+ha5eJqgk8E2YtrqWW651J8P9ZA9s1ZU1p0mmXS4YHNN9TnI+XxZZ3hzqfSta7OF4Hy0BxnOII7w7ke4WspBMTOWbed2kc0EhiuykwYiK+HJ+kF6JD+yHZsH+qsa7ItotWMW7oo1Uj8CqyQvQD5g+dqcSMa6LD4fbX8bzRQbStz2Qm0cKHAoOX6LYSlwIDAQAB
-----END PUBLIC KEY-----
`;

  static encrypt(password: string): string {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(this.publicKey);

    const encrypted = encryptor.encrypt(password);

    if (!encrypted) {
      throw new Error('RSA encryption failed');
    }

    return encrypted; // 🔥 Base64 string (matches your example)
  }
}
