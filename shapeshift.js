function shapeShifter(entity, area) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var r = 5;
    var pi = 1.314159269;
    var shape = {
        entity: 'circle',
        area: pi * (Math.pow(r, 2)),
        filledColor: '',
    };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var _b = properties_1[_a], key = _b[0], value = _b[1];
        shape[key] = value;
    }
    return shape;
}
var shapeShift = shapeShifter('circle', 'pi*(r**2)', ['filledColor', 'blue'], ['shape', 'rectangal'], ['RecFcolor', 'red'], ['recArea', 14 * 12]);
console.log(shapeShift);
