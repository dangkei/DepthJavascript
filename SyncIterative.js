/**
 * Created by Feng Huang on 27/10/2015.
 */

var array = [1,2,3,4,5,6,7,8,9,10];
var res = [];

function Iterative(arr,fn){

    res.push(fn(arr.shift()));

    if(arr.length===0){
        return res;
    }else{
        return Iterative(arr,fn);
    }
}

var tenflod = function(n){
  return n * 10;
};

var hundrenflod = function(n){
    return n * 100;
};


console.log(Iterative(array,hundrenflod));