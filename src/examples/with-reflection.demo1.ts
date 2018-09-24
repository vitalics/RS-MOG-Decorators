import 'reflect-metadata';
class Demo1 { }

Reflect.defineMetadata('class_info', 'my info about class', Demo1);
console.log(Reflect.getMetadata('class_info', Demo1));
