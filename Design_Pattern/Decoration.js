/**
 * Created by huangfeng on 15/10/25.
 */
/*
 装饰者提供比继承更有弹性的替代方案。 装饰者用用于包装同接口的对象，
 不仅允许你向方法添加行为，而且还可以将方法设置成原始对象调用（例如
 装饰者的构造函数）。

 装饰者用于通过重载方法的形式添加新功能，该模式可以在被装饰者前面或者
 后面加上自己的行为以达到特定的目的。*/


/*
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
console.log(myMacbook.cost());*/


/*
    //example 2
    //有点像接口和实现的意思.AbstractDecorator类定义了接口ConcreteClass,它的子类随没有强制
    // 但是其实必须实现接口preTask,和postTask否则报错. interesting!

function ConcreteClass(){
    this.performTask = function(){
        this.preTask();
        console.log('doing something');
        this.postTask();
    };
}

function AbstractDecorator(decorated){
    this.performTask = function () {
        decorated.performTask();
    };
}


function ConcreteDecoratorClass(decorated){
    this.base = AbstractDecorator;
    this.base(decorated);

    decorated.preTask = function(){
        console.log('pre-calling..');
    };

    decorated.postTask = function(){
        console.log('post-calling..');
    };
}

var concrete = new ConcreteClass();
var decorator1 = new ConcreteDecoratorClass(concrete);
var decorator2 = new ConcreteDecoratorClass(decorator1);
decorator2.performTask();
var decorator3 = new ConcreteDecoratorClass(new ConcreteDecoratorClass((new ConcreteClass())));
decorator3.performTask();*/


    //example 3
    //

var tree = {};
tree.decorate = function(){
    console.log("Make sure the tree won\'t  fall");
};

tree.getDecorator = function (deco){
    console.log(deco);
    tree[deco].prototype  = this;           //tree的传入参数的属性的原型设为调用者.
    return new tree[deco];
};

tree.RedBalls = function(){
    this.decorate = function(){
        this.RedBalls.prototype.decorate();
        console.log("Put on some red balls.");
    }
};


tree.BlueBalls = function(){
    this.decorate = function(){
        this.BlueBalls.prototype.decorate();
        console.log("Put on some blue balls.");
    }
};

tree.Angel = function(){
    this.decorate = function(){
        this.Angel.prototype.decorate();
        console.log("Add angel on the top.")
    };
};
                                            //在这句前 tree = {};
tree = tree.getDecorator('BlueBalls');      // BlueBalls tree = new tree
tree = tree.getDecorator('Angel');          // Angel tree = new Bl
tree = tree.getDecorator('RedBalls');

tree = tree.getDecorator('BlueBalls').getDecorator('Angel').getDecorator('RedBalls');

tree.decorate();

