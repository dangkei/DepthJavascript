/**
 * Created by huangfeng on 15/10/25.
 */
/*
 装饰者提供比继承更有弹性的替代方案。 装饰者用用于包装同接口的对象，
 不仅允许你向方法添加行为，而且还可以将方法设置成原始对象调用（例如
 装饰者的构造函数）。

 装饰者用于通过重载方法的形式添加新功能，该模式可以在被装饰者前面或者
 后面加上自己的行为以达到特定的目的。*/


//example 1
//
function Macbook() {
    this.cost = function () {
        return 1000;
    }
}

function Memory(macbook) {
    this.cost = function () {
        return macbook.cost() + 75;
    };
}

function BlurayDrive(macbook) {
    this.cost = function () {
        return macbook.cost() + 300;
    };
}

function Insurance(macbook) {
    this.cost = function () {
        return macbook.cost() + 250;
    };
}

var myMacbook = new Insurance(new BlurayDrive(new Memory(new Macbook())));
console.log(myMacbook.cost());