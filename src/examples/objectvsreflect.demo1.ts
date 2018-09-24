class ObjectVsReflect { }

Object.seal(ObjectVsReflect);
Object.seal(ObjectVsReflect.prototype);

Reflect.defineProperty(ObjectVsReflect.prototype, 'propFromReflect', { value: 1 });
Object.defineProperty(ObjectVsReflect.prototype, 'propFromObject', { value: 1 });
