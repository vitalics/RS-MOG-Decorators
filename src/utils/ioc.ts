import 'reflect-metadata';

import { Inject as _Inject, Injector, ProvideDecorator } from 'di-typescript';

const injector = new Injector();

// tslint:disable-next-line:no-any
export type epic = any;

export function Injectable(): ClassDecorator {
    return (target) => {
        // freezing for outside modification (e.g. Reflect or Object)
        Object.freeze(target);
        Object.freeze(target.prototype);

        return _Inject(target);
    };
}

export function Inject(...args: epic[]): PropertyDecorator {
    return (target, key) => {
        let instance: epic;
        const type = Reflect.getMetadata('design:type', target, key);

        if (args.length) {
            instance = Reflect.construct(type, args);
        } else {
            instance = injector.get(type);
        }

        Reflect.defineProperty(target, key, {
            get: () => instance,
        });
    };
}