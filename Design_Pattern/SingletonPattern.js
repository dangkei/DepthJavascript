/**
 * Created by Feng Huang on 22/10/2015.
 */

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

