export function pre(...fns: Function[]): any {
    return (target, ket, descriptor: TypedPropertyDescriptor<any>) => {
        const oldDescriptor = descriptor.value as Function;

        descriptor.value = function (...args: any[]): any {
            fns.forEach(fn => fn.apply(this, args));
            const result = oldDescriptor.apply(this, args);
            return result;
        };
        return descriptor;
    };
}

export function post(...fns: Function[]): any {
    return (target, ket, descriptor: TypedPropertyDescriptor<any>) => {
        const oldDescriptor = descriptor.value as Function;

        descriptor.value = function (...args: any[]): any {
            const result = oldDescriptor.apply(this, args);
            fns.forEach(fn => fn.apply(this, args));
            return result;
        };
        return descriptor;
    };
}