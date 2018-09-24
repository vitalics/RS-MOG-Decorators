export class ClassForConstructing {
    constructor(str) {
        console.log(str);
    }
}

new ClassForConstructing('usual call');

Reflect.construct(ClassForConstructing, []);


function wrapperPost() {
    const result1 = function wrapperPre() {
        // pre functions calls
        return function Original() { }
    }
    // post function calls
    return result1();
}
