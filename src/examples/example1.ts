import { Inject, Injectable } from '../utils/ioc';

@Injectable()
export class InjectableTemp {
    public someProp: number = 4;
    public constructor(public msg: string) { }
}

@Injectable()
export class ExampableTemp {
    @Inject() public injectableTemp: InjectableTemp;

    public someMethod(): void {
        console.dir(this.injectableTemp.msg);
    }
}