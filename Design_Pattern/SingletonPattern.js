/**
 * Created by Feng Huang on 22/10/2015.
 */
/*
 code from http://www.cnblogs.com/TomXu/archive/2012/02/20/2352817.html
 代码来自Tom大叔的cnblog，中间加了部分自己注释，比如第一个例子，我认为并不是一个单例的对象。
 */

/*在传统开发工程师眼里，单例就是保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，如果存在直接返回，
如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。在JavaScript里，单例作为一个命名空间提供者，从
全局命名空间里提供一个唯一的访问点来访问该对象*/

/*
    //example 1
    //直接初始化对象这样其实不能避免new时创建新的对象?算单例吗?
var mySingleton = function(){
    var privateVar = "private variable";
    function showPrivate(){
        console.log(privateVar);
    }

    return{
        ShowPrivate:function(){
        showPrivate();

        },
        publicVar:"public variable"
    }
};

 var my2 = new mySingleton();
 mySingleton().ShowPrivate();
 console.log(mySingleton().publicVar);
 console.log(my2===mySingleton);
*/


/*
    //example 2
    //使用的时候就是调用getInstance的时候才初始化对像获得实例, 没办法new新对象. 算单例模式
var Singleton = (function(){
    var instantiated;
    function init(){
        //初始化方法,但是私有
        return{
            init:function(){
                console.log("Singleton inited!");
            },
            publicProperty:"Public variable"
        }
    }

    return{
        getInstance: function(){
            if(!instantiated){ // 如果实例不存在创建实例,否则直接返回实例.
                instantiated = init();
            }
            return instantiated;
        }
    }

})();

Singleton.getInstance().init();
console.log(Singleton.getInstance().publicProperty);
*/

/*
    //example 3
    //

var Singleton = (function(){
    function Singleton(args){
        var args = args || {};  //有参数为传入参数,无参数为空. 无法new 新的实例.
        this.name = "Singleton";
        this.pointX = args.pointX || 0;
        this.pointY = args.pointY || 0;
    }

    var instance; // 实例容器

    var _static = {  //返回
        name: "Singleton",
        getInstance: function(args){
            if(instance === undefined){
                instance = new Singleton(args);
            }
            return instance;
        }
    };

    return _static;
})();

var sing4 = Singleton.getInstance({pointX:150,pointY:1001});
var sing3 = Singleton.getInstance({pointX:15,pointY:101});
var sing2 = Singleton.getInstance({pointX:50,pointY:100});
//console.log(Singleton.getInstance({pointX:5,pointY:10})===sing2); // true
console.log(Singleton.getInstance()); //{ name: 'Singleton', pointX: 150, pointY: 1001 }
console.log(sing2);//{ name: 'Singleton', pointX: 150, pointY: 1001 }
*/

/*
    //example 4
    //这种方法原型可以看作是类class 所有子类的实例是相同的.
function Singleton(){
    if(typeof Singleton.instance === "object"){
        return Singleton.instance;
    }
    Singleton.instance = this;    //隐式返回
}

var s1 = new Singleton();
var s2 = new Singleton();
console.log(s1===s2);
console.log(s1 === Singleton);

*/


/*
 //example 5
 //同样对象本身为类 new以后为实现类的单例对象。

 function Singleton(){
 var instance = this;

 this.start_time = 0;
 this.bang = "big";

 Singleton = function(){
 return instance;
 };
 }

 var s1 = new Singleton();
 var s2 = new Singleton();
 s1.bang = 123;
 console.log(Singleton.bang);
 console.log(s1===s2);  //true
 console.log(s2.bang);  //123
 */


/*
 //example 6
 //这种搞的有点复杂，但是结构看起来更像C#或者Java中类的定义了。
 function Singleton(){
 var instance;   //缓存实例

 Singleton = function Singleton(){   //重设构造函数
 return instance;
 };

 Singleton.prototype = this;  //后期处理原型属性

 instance = new Singleton();  //实例化实例

 instance.constructor = Singleton; //重设构造函数指针

 instance.start_time = 0;    //其它属性
 instance.bang = "big";

 return instance;            //返回实例
 }

 var s1 = new Singleton();
 var s2 = new Singleton();
 console.log(s1===s2);       //true

 Singleton.prototype.nothing = true;

 var s3 = new Singleton();

 Singleton.prototype.everything = true;

 var s4 = new Singleton();

 console.log(s3.nothing);
 console.log(s4.nothing);
 console.log(s3.everything);
 console.log(s4.everything);
 console.log(s4.constructor===Singleton);
 */

//example 7
//
var Singleton;
(function () {
    var instance;

    Singleton = function () {
        if (instance) {
            return instance;
        }
        instance = this;

        this.start_time = 0;
        this.bang = "bing";
    };
}());

var s1 = new Singleton();
var s2 = new Singleton();
s1.bang = "bang bang bang";
console.log(s1 === Singleton); //false
console.log(s1 === s2);       //true
console.log(s2.bang);       //bang bang bang
