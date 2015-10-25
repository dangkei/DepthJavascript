/**
 * Created by huangfeng on 15/10/24.
 */
/*
 与创建型模式类似，工厂模式创建对象（视为工厂里的产品）时无需指定创建对象的具体类。

 工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个
 类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

 这个模式十分有用，尤其是创建对象的流程赋值的时候，比如依赖于很多设置文件等。并且，
 你会经常在程序里看到工厂方法，用于让子类类定义需要创建的对象类型。
 */
/*
 //example 1
 //
 var Car = (function(){
 var Car = function(model,year,miles){  //constructor
 this.model = model;
 this.year = year;
 this.miles = miles;
 };

 return function(model,year,miles){   //this is factory
 return new Car(model,year,miles);
 }

 })();*/


/*
 //example 2
 //

 var productManager = {};

 productManager.createProductA = function(){
 console.log("Product A");
 };

 productManager.createProductB = function(){
 console.log("Product B");
 };

 productManager.factory = function(typeType){
 return new productManager[typeType];
 };

 productManager.factory("createProductA");
 productManager.factory("createProductB");
 */


//example 3
//
var page = page || {};
page.dom = page.dom || {};

page.dom.Text = function (where) {
    var txt = document.createTextNode(this.url);
    where.appendChild(txt);
};

page.dom.Link = function () {
    this.insert = function (where) {
        var link = document.createElement('a');
        link.href = this.url;
        link.appendChild(document.createTextNode(this.url));
        where.appendChild(link);
    };
};

page.dom.Image = function () {
    this.insert = function (where) {
        var im = document.createElement('img');
        im.src = this.url;
        where.appendChild(im);
    };
};

page.dom.factory = function (type) {
    return new page.dom[type];
};

var o = page.dom.factory('Link');
o.url = 'http://www.cnblogs.com';
o.insert(document.body);

/*
 什么时候使用工厂模式

 以下几种情景下工厂模式特别有用：

 对象的构建十分复杂
 需要依赖具体环境创建不同实例
 处理大量具有相同属性的小对象

 什么时候不该用工厂模式

 不滥用运用工厂模式，有时候仅仅只是给代码增加了不必要的复杂度，
 同时使得测试难以运行下去。
 */
