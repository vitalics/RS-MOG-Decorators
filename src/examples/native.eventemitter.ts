import { EventEmitter } from "events";

class MyEventEmitter extends EventEmitter { }

const myEventemitter = new MyEventEmitter();
myEventemitter.on('change', (arg: number | string) => {
    console.log('argument is change to value ' + arg)
});

const a = 1;
myEventemitter.emit('change', a);

