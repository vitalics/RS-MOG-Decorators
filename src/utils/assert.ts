import { assert as _assert } from 'chai';

export function equal<T>(expected: T, message?: string): MethodDecorator {
    return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
        const oldDescriptor = descriptor.value as Function;

        descriptor.value = function (...args: any[]): T {
            const result = oldDescriptor.apply(this, args) as T;
            _assert.equal(result, expected, message);
            return result;
        };
        return descriptor;
    };
}

export function ok<T>(message?: string): MethodDecorator {
    return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
        const oldDescriptor = descriptor.value as Function;

        descriptor.value = function (...args: any[]): T {
            const result = oldDescriptor.apply(this, args) as T;
            _assert.ok(result, message);
            return result;
        };
        return descriptor;
    };
}
export function isTrue(message?: string): any {
    return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
        const oldDescriptor = descriptor.value as Function;

        descriptor.value = function (...args: any[]): boolean {
            const result = oldDescriptor.apply(this, args) as boolean;
            _assert.isTrue(result, message);
            return result;
        };
        return descriptor;
    };
}
