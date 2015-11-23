/**
 * Created by Feng Huang on 18/11/2015.
 */

/*
var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 始终返回 false

// 如果担心这种情况，可以直接使用原型链上真正的 hasOwnProperty 方法
({}).hasOwnProperty.call(foo, 'bar'); // true
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true*/


/*
function foo() {
    var x = 21;

    (function bar() {
        console.log(x);
    })();
}
Object.prototype.x = 30;
foo();
*/


function a(x) {
    return x * 2;
}
var a;
console.log(a);