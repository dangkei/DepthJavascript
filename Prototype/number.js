/**
 * Created by Feng Huang on 17/11/2015.
 */
Number.prototype.plus= function(x){
    return this + x;
};

Number.prototype.minus = function(x){
    console.log(this);
    return this - x;
};

//console.log((5).plus(3).minus(6));*/


var add = function (){
    var x = arguments[0];
    return function(){
        x += arguments[0];
        return function(){
            return x += arguments[0];
        }
    };
};

console.log(add(2)(3)(4));
