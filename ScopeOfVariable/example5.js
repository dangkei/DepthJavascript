/**
 * Created by Feng Huang on 17/11/2015.
 */


/*
var str="Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!"
console.log(str.match("world"));
console.log(str.match(/World/i));
console.log(str.match("worlld"));
console.log(str.match(/world!/g));
*/


/*var str="1 plus 2 equal     3"
console.log(str.match(is/(?=plus)/g));*/


var url = 'http://zhidao.baidu.com/link?url=7iEl9uVJkTUvOn5Xx58-BvPcBaUp7YcgcBZcbpqUzJ6dbneRdh-eXmse27Bg65Ty0iZc1DCL6L6cIiWb1Ef3Lq'; //当前url
var path = url.length - url.replace(/\//g, "").length - 4;  //(\/)转义/ 去掉所有的/

console.log(url.replace(/\//g, ""));