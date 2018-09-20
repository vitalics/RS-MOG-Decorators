function pre<T>(...fns: ((...args: any[]) => void)[]): MethodDecorator {
  return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
    const oldDescriptor = descriptor.value as Function;
    descriptor.value = function wrapper(...args: any[]): T {
      fns.forEach(fn => fn.call(this));

      const result = oldDescriptor.apply(this, args) as T;
      return result;
    }
  }
}

function post<T>(...fns: ((...args: any[]) => void)[]): MethodDecorator {
  return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
    const oldDescriptor = descriptor.value as Function;
    descriptor.value = function wrapper(...args: any[]): T {
      const result = oldDescriptor.apply(this, args) as T;

      fns.forEach(fn => fn.call(this));
      return result;
    }
  }
}

class DecoratorsDemo {
  @post(() => console.log('= post hook ='))
  @pre(() => console.log('= pre hook ='))
  public callMe() {
    console.log('method call');
    return 3;
  }
}

console.log(new DecoratorsDemo().callMe() === 3)

