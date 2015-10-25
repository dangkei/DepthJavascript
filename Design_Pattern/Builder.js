/**
 * Created by huangfeng on 15/10/23.
 */
/*
 在软件系统中，有时候面临着“一个复杂对象”的创建工作，其通常由各个部分的子对象用一定的算法构成；
 由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法确相对稳
 定。如何应对这种变化？如何提供一种“封装机制”来隔离出“复杂对象的各个部分”的变化，从而保持系统中
 的“稳定构建算法”不随着需求改变而改变？这就是要说的建造者模式。

 建造者模式可以将一个复杂对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。也就是
 说如果我们用了建造者模式，那么用户就需要指定需要建造的类型就可以得到它们，而具体建造的过程和细
 节就不需要知道了。*/


//example 1
//
function getBeerById(id, callback) {

    asyncRequest('GET', 'beer.ur;?id' + id, function (resp) {
        callback(resp.responseText);
    });
}

var el = document.querySelector('#test');
el.addEventListener('click', , false);

function getBeerByBridge(e) {
    getBeerById(this.id, function (beer) {
        console.log('Requested Beer: ' + beer);
    })
}
