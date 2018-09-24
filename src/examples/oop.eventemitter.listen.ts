import { Eventable, on, listen } from "../utils/event";
import { EventEmitter } from "events";

@Eventable()
export class MyEventEmitter extends EventEmitter {
    @listen() public a = 1;
    @on('change')
    public somethingHappend(arg: number | string) {
        console.log('argument is change to value ' + arg);
    }
}

const myEventEmitter = new MyEventEmitter();
myEventEmitter.a = 4;

