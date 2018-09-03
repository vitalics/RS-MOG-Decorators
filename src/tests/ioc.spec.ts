import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';

import { ExampableTemp, InjectableTemp } from 'examples/example1';

@suite()
class IOCTest {
    @test('check that instance created')
    public checkThatInstanceCreated(): void {

        const instance = new ExampableTemp();
        instance.someMethod(4);
        assert.isTrue(instance.injectableTemp instanceof InjectableTemp);
    }
}