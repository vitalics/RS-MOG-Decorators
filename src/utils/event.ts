import 'reflect-metadata';

import { EventEmitter as _EventEmitter, EventEmitter } from 'events';
import { MyEventEmitter } from '../examples/oop.eventemitter.listen';

interface Listenable {
  method: (...args: any[]) => void;
  eventName: string;
}
const REESTER = {
  onable: 'onableReester',
}

export function on(event: string): MethodDecorator {
  return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
    const oldDescriptor = descriptor.value as (...args: any[]) => void;

    const reester: Listenable[] =
      Reflect.getMetadata(REESTER.onable, target.constructor) || [];
    reester.push({
      method: oldDescriptor, eventName: event,
    });
    Reflect.defineMetadata(REESTER.onable, reester, target.constructor);

    return descriptor;
  };
}

export function once(event: string): MethodDecorator {
  return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
    const oldDescriptor = descriptor.value as (...args: any[]) => void;

    const reester: Listenable[] = Reflect.getMetadata(
      'oncableReester',
      target.constructor
    ) || [];

    reester.push({
      method: oldDescriptor,
      eventName: event,
    });

    Reflect.defineMetadata('oncableReester', reester, target.constructor);

    return descriptor;
  };
}

export function Eventable(): ClassDecorator {
  return target => {
    return new Proxy(target, {
      construct: (newTarget, args) => {
        const instance = Reflect.construct(newTarget, args);

        const onaleReester: Listenable[] =
          Reflect.getMetadata(REESTER.onable, target) || [];

        onaleReester.forEach(e => instance.on(e.eventName, e.method));

        Reflect.defineMetadata('instance', instance, target, 'a');

        return instance;
      },
    });
  };
}

export function listen(): PropertyDecorator {
  let isFirstCall = true;
  return (target, key) => {
    let value = target[key];

    Reflect.defineProperty(target, key, {
      get: () => value,
      set: (newValue: any) => {
        !isFirstCall ?
          console.log('change property to ' + newValue) :
          isFirstCall = !isFirstCall;

        value = newValue;
      },
    })};}
