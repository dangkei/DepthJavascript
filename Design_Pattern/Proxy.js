/**
 * Created by Feng Huang on 27/10/2015.
 */
/*
代理，顾名思义就是帮助别人做事，GoF对代理模式的定义如下：

代理模式（Proxy），为其他对象提供一种代理以控制对这个对象的访问。

代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西。*/


var girl = function(name){
  this.name = name;
};

var dudu = function(girl){
  this.girl = girl;
  this.sendGift = function(gift){
      console.log("hi " + girl.name+ " dudu song ni yi ge: " + gift);
  }
};

var proxyTom = function(girl){
   this.girl = girl;
    this.sendGift = function(gift){
        (new dudu(girl)).sendGift(gift);  // 代理new了个继承者去送.
    }
};

var proxy = new proxyTom(new girl("suan nai xiao mei"));
proxy.sendGift("999 duo meigui");

var du = new dudu(new girl("suan nai xiao mei"));
du.sendGift("999 duo meigui!");
