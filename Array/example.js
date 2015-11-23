/**
 * Created by Feng Huang on 19/11/2015.
 */

//输出Fibonacci数列
function PFibonacci(){
    var arrFib = [0,1];
    var count = arguments[0]?arguments[0]:10;
    return {
        print:function(){
            console.log(arrFib[0]);
            console.log(arrFib[1]);
            for(var i = 2; i< count;i++){
                arrFib[i] = arrFib[i-1] + arrFib[i-2];
                console.log(arrFib[i] );
            }
        }
    }
}

//PFibonacci(20).print();

var persons = [
    {
        name: 'Jason',
        age: 20,
        gender:'male'
    },

    {
        name: 'Tom',
        age: 18
    },

    {
        name: 'May',
        age: 18,
        gender: 'female',
        high: '165cm'
    }
];

persons.sort(function(a,b){
    if(Object.getOwnPropertyNames(a).length >Object.getOwnPropertyNames(b).length){
        return 1;
    }
    if(Object.getOwnPropertyNames(a).length<Object.getOwnPropertyNames(b).length){
        return -1;
    }
    return 0;
});

console.log(persons);