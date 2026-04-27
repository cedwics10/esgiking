export class ValidationUtils {

    static isNonValidString(value: unknown, minLength = 1): boolean {
        return typeof value !== "string" || value.trim().length < minLength;
    }

    static isInvalidPrice(value: unknown): boolean {
        return typeof value !== "number" || !isFinite(value) || value < 0;
    }

    static isMongoId(value: unknown): boolean {
        return typeof value === "string" && /^[a-f\d]{24}$/i.test(value);
    }
}