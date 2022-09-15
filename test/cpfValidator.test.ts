import { validateCpf } from "../src/v2/cpfValidator";

describe('cpfValidator', () => {
    it('should return true when cpf has punctuation and is valid', () => {
        const cpf = '111.444.777-35';
        const isValid = validateCpf(cpf);
        expect(isValid).toBe(true);
    });

    it('should return true when cpf has punctuation and is valid', () => {
        const cpf = '111.444.765-00';
        const isValid = validateCpf(cpf);
        expect(isValid).toBe(true);
    });

    it('should return true when cpf has not punctuation and is valid', () => {
        const cpf = '11144477735';
        const isValid = validateCpf(cpf);
        expect(isValid).toBe(true);
    });

    it('should return true when cpf has 10 length and is invalid', () => {
        const cpf = '1114447773';
        const isValid = validateCpf(cpf);
        expect(isValid).toBe(false);
    });

    it('should return false when cpf is invalid', () => {
        const cpf = '111.444.777-05';
        const isValid = validateCpf(cpf);
        expect(isValid).toBe(false);
    });

    it('should return false when cpf is incorrect format', () => {
        const cpf = "ABCDEFGHIJKLM";
        const isValid = validateCpf(cpf);
        expect(isValid).toBe(false);
    });
});