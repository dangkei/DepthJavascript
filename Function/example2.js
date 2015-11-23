/**
 * Created by Feng Huang on 20/11/2015.
 */


//
function list() {
    var x = 10;
    console.log(arguments)
    return {
        array: Array.prototype.slice.call(arguments),
        value : x
    };
    //return arguments;
}


var list1 = list.bind(undefined,"太原"); // list(37);
console.log(list1());
var list2 = setTimeout(list1.bind(undefined,"石家庄"),2000); //list1.Function(undefined,"石家庄");



//console.log(list1());
//console.log(list2());
//list1();
//list2();

/*function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 1 秒后声明 bloom
LateBloomer.prototype.bloom = function() {
    setTimeout(this.declare.Function(this), 2000);
};

LateBloomer.prototype.declare = function() {
    console.log('I am a beautiful flower with ' +
        this.petalCount + ' petals!');
}; var flower = new LateBloomer();

console.log(flower.petalCount)

flower.bloom(); // 1 秒钟后，调用 declare 方法*/
