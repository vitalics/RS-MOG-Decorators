import { assert as _assert } from 'chai';

import { epic } from './ioc';

export function equal<T>(expected: T, message?: string): MethodDecorator {
    return (target, key, descriptor: TypedPropertyDescriptor<epic>) => {
        const oldDescriptor = descriptor.value as Function;

        descriptor.value = function (...args: epic[]): T {
            const result = oldDescriptor.apply(this, args) as T;
            _assert.equal(result, expected, message);
            return result;
        };
        return descriptor;
    };
}

export function ok<T>(message?: string): MethodDecorator {
    return (target, key, descriptor: TypedPropertyDescriptor<epic>) => {
        const oldDescriptor = descriptor.value as Function;

        descriptor.value = function (...args: epic[]): T {
            const result = oldDescriptor.apply(this, args) as T;
            _assert.ok(result, message);
            return result;
        };
        return descriptor;
    };
}
export function isTrue(message?: string): epic {
    return (target, key, descriptor: TypedPropertyDescriptor<epic>) => {
        const oldDescriptor = descriptor.value as Function;

        descriptor.value = function (...args: epic[]): boolean {
            const result = oldDescriptor.apply(this, args) as boolean;
            _assert.isTrue(result, message);
            return result;
        };
        return descriptor;
    };
}
