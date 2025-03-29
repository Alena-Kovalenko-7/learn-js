import { getPercents } from "./PercentOfNumber.js";

describe("test percent", () => {
    it("percent 10 of number 50 to equal 5", () => {
        const result = getPercents(10, 50);
        expect(result).toBe(5);
    }),
    it("percent 25 of number 1550 to equal 60", () => {
        const result = getPercents(25, 1550);
        expect(result).toBe(387.5);
    }),
    it("percent 30 of number 200 to equal 60", () => {
        const result = getPercents(30, 200);
        expect(result).toBe(60);
    }), 
    it("percent 70 of number -300 to equal -210", () => {
        const result = getPercents(70, -300);
        expect(result).toBe(-210);
    }),
    it("percent -50 of number 500 to equal invalid number", () => {
        const result = getPercents(-50, 500);
        expect(result).toBe("Введен некорректный процент");
    });
});