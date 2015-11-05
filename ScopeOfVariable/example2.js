/**
 * Created by Feng Huang on 04/11/2015.
 */


/*var pointX = function(){return};

console.log(pointX(), pointY());  //undefined [Function: pointY]

function pointY(){return 0};*/


/*
console.log(function pointX(){return},function pointY(){return}());
*/

/*
console.log(function(){return},function (){return 100}());  //[Function] 100
*/

/*
(function pointX(){console.log("pointX")})();   //pointX
(function pointY(){console.log("pointY")}());   //pointY
console.log(function pointX(){}());             //undefined
//console.log(pointX);                          //ReferenceError: pointX is not defined*/

/*
var pointX = (function pointX(){
    console.log("pointX");                                   //pointX
    return "object pointX";
})();   //pointX
var pointY = (function pointY(){console.log("pointY")}());   //pointY

console.log(pointX,pointY);                                  //object pointX undefined*/


/*(function pointX(){
    console.log("pointX");                                   //pointX
    return "object pointX";
})();*/

//function pointX(){}();
/*
console.log(function pointX(){}());

function myPrint(obj){
    console.log(obj);
}
myPrint(function pointX(){return "myprint"}.toString());
console.log(global.obj);*/

/*function pointX(){
    console.log(this===global);
}

pointX();
new pointX();

var obj = {};
obj.pointX = pointX;
obj.pointX();

(function(){
   return console.log(this===global);
}());*/

var objectA = (function objecetA(){

    if(!objectA.instance){
        return objectA.instance;
    }
    objectA.instance = this;
});

var a = new objectA;
var b = new objectA;

console.log(objectA.instance=== b.instance);