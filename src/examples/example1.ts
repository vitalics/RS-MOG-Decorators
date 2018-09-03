
import { EventEmitter as _EventEmitter } from 'events';

import { Inject, Injectable, post, pre } from '../utils';
// import { EventEmitter, on, once } from '../utils/event';

@Injectable()
export class InjectableTemp {
    public someProp: number = 4;
    public constructor(public msg?: string) {
        console.dir(this);
    }
}

@Injectable()
export class ExampableTemp {
    @Inject() public injectableTemp: InjectableTemp;

    @post(
        (b: number) => console.dir('====hello from post hook==== ' + b),
        (c: number) => console.dir('====hello from post hook==== ' + c)
    )
    @pre(() => console.dir('====hello from pre hook===='))
    public someMethod(num: number): number {
        console.dir('some method');
        return num;
    }
}

// @EventEmitter()
// class MyEventEmitter extends _EventEmitter {

//     @once('data')
//     public myLogic(a: number): void {
//         console.dir('emitter logic with args ' + a);
//     }

//     @once('data')
//     public anotherEvent(): void {
//         console.dir('another emitter');
//     }

//     @on('data')
//     public someMethod(): void {
//         console.dir('some method');
//     }
// }

// const eventEmitter = new MyEventEmitter();

// eventEmitter.emit('data', 2);
// eventEmitter.emit('data', 2);
