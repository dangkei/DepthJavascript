/**
 * Created by Feng Huang on 06/11/2015.
 */

function argTest(a,b,c,d){
    var numargs = arguments.length;     // 获取被传递参数的数值。
    var expargs = argTest.length;       // 获取期望参数的数值。
    console.log("实参数目为:"+numargs);
    console.log("形数数目为:"+expargs);

    console.log(arguments[0]);
    console.log(argTest.arity)   ;       //undefined 没有这种用法
}
argTest(1,2);
argTest(1,2,3,4,5);