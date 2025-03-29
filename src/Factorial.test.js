import { factorial } from "./factorial.js";

describe("test factorial", () => {
    it("factorial 0 to equal 1", () => {
        const result = factorial(0);
        expect(result).toBe(1);
    }),
    it("factorial 1 to equal 1", () => {
        const result = factorial(1);
        expect(result).toBe(1);
    }),
    it("factorial 3 to equal 6", () => {
      const result = factorial(3);
      expect(result).toBe(6);
    }),
    it("factorial 5 to equal 120", () => {
        const result = factorial(5);
        expect(result).toBe(120);
    }),
    it("factorial -2 to equal invalid number", () => {
        const result = factorial(-2);
        expect(result).toBe("Введено некорректное число");
    }),
    it("factorial 0.8 to equal invalid number", () => {
        const result = factorial(0.8);
        expect(result).toBe("Введено некорректное число");
    });
});


