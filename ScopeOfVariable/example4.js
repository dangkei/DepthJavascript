/**
 * Created by Feng Huang on 06/11/2015.
 */

//var b;

/*console.log("a" in global);

if (!("a" in global)) {
    var b = 1;
}*/


/*
console.log(a in global);
var a;
*/

/*
var a = 1,
    b = function a(x) {
        x && a(--x);
    };*/


/*
 var a = 1;          //后声明覆盖function a
 function a(){}      //先声明被覆盖掉了
 function b(){}      //没被覆盖

 console.log(a);     //1
 console.log(b);     //[Function b]*/
/*
var b;
a = 1;
function a(){};

b = 1;
console.log(b);
var b;
console.log(b);*/


function a(b,c){

}

a(1);

console.log(a.length);