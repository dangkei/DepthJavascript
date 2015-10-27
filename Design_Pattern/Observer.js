/**
 * Created by Feng Huang on 27/10/2015.
 */
/*
观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，
这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。

使用观察者模式的好处：

支持简单的广播通信，自动通知所有已经订阅过的对象。
页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。
目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用*/

var pubsub = {};
(function(q){
    var topics = {};
    subUid = -1;

    q.publish = function(topic,args){
        if(!topics[topic]){
            return false;
        }

        setTimeout(function(){
            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0;

            while(len--){
                subscribers[len].func(topic,args);
            }
        },0);
        return true;
    };

    q.subscribe = function(topic,func){
      if(!topics[topic]){
          topics[topic] = [];
      }

        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

    q.unsubscribe = function(token){
        for ( var m in topics){
            if(topics[m]){
                for(var i= 0,j=topics[m].length;i<j;i++){
                    if(topics[m][i].token === token){
                        topics[m].splice(i,1);
                        return token;
                    }
                }
            }
        }
    }

}(pubsub));


var testSubscription = pubsub.subscribe('example1',function(topics,data){
    console.log(topics + ": " + data);
});


pubsub.publish('example1',"hello world1");
pubsub.publish('example1',['test','a','b','c']);
pubsub.publish('example1',[{'color':"blue"},{"text":"hello"}]);

setTimeout(function(){
    pubsub.unsubscribe(testSubscription);
},0);

pubsub.publish('example1','hello again! (this will fail)');