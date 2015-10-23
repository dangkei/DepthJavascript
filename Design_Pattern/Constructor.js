/**
 * Created by Feng Huang on 23/10/2015.
 */
/*
 构造函数模式
 构造函数大家都很熟悉了，不过如果你是新手，还是有必要来了解一下什么叫构造函数的。构造函数用于创建特定类型的对象
 ——不仅声明了使用的对象，构造函数还可以接受参数以便第一次创建对象的时候设置对象的成员值。你可以自定义自己的构造
 函数，然后在里面声明自定义类型对象的属性或方法。

 */

 /*
    //example 1
    //

function Car(model,year,miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.output = function(){
        return this.model+" driving " + this.miles + ' km.';
    }
}

var tom = Car("Tom",2008,2000);
console.log(tom);
console.log(global.output());*/

/*
    //example 2
    //

function Car(model,year,miles){
    this.model = models;
    this.year = year;
    this.miles = miles;
    this.output = formatCar;
}

function formatCar(){
    return this.model+" driving " + this.miles + ' km.';
}
*/

/*
    //example 3
    //
function Car(model,year,miles){
    this.model = models;
    this.year = year;
    this.miles = miles;
}

Car.prototype.output = function(){
    return this.model+" driving " + this.miles + ' km.';
};
*/

/*
    //example 4
    //如果不是new的对象强制new一个对象.

function Car(model,year,miles){
    if(!(this instanceof Car)){
        return new Car(model,year,miles);
    }
    this.model = models;
    this.year = year;
    this.miles = miles;
}
*/



