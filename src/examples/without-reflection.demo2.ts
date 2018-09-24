class Demo2 { }

Object.defineProperty(Demo2, 'infoAboutClass', {
    value: 'some info about Demo2 class'
});

console.log(Demo2['infoAboutClass']);
