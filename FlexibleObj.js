function makeJuice(madBy, flavour) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var myJuice = {
        madeBy: 'Syeda Bano',
        falvour: 'Mango',
        sugarTaste: '',
        Optional_ingr: ['kumail', 'toothmalanga', 'nuddles', 'coffee'],
        feelLike: '',
    };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var _b = properties_1[_a], key = _b[0], value = _b[1];
        myJuice[key] = value;
    }
    return myJuice;
}
var Juice = makeJuice('Bano', 'sugar cane', ['sugarTaste', 'normal'], ['include', 'tooetmalanga'], ['feelLike', 'cold'], ['quality', 'dense-milky']);
console.log(Juice);
