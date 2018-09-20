import { Eventable, on } from "../utils/event";
import { EventEmitter } from "events";

@Eventable()
class MyEventEmitter extends EventEmitter {
  @on('change')
  public somethingHappend(arg: number | string) {
    console.log('argument is change to value ' + arg);
  }
}

const myEventEmitter = new MyEventEmitter();
const a = 1;
myEventEmitter.emit('change', a);
