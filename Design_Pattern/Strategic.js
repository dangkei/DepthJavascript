/**
 * Created by Feng Huang on 28/10/2015.
 */
/*
 策略模式定义了算法家族，分别封装起来，让他们之间可以互相替换，此模式让算法的变化不会影响到使用算法的客户。*/

    //example 1

var validator = {
    checkers: {},                                          //types:{}  我觉得结合上下文命名为checkers更为贴切一些.
    messages: [],
    config: {},

    validate : function(data){
        var i, msg, type, checker, result_ok;

        this.messages = [];

        for(i in data){
            if(data.hasOwnProperty(i)){
                type = this.config[i];                      //配置类里有没有定义属性需要验证. 如果有它的值就是验证类型.
                checker = this.checkers[type];              //去types里查找这种验证类型对应的方法(function).

                if(!type){                                  //验证类型为空,说明这个属性不需要验证,什么都不做.
                    continue;
                }
                if(!checker){
                    throw{
                        name : "ValidationError",
                        message: "No handler to validate type: " + type
                    }
                }

                result_ok = checker.validate(data[i]);      //用得到的验证方法来验证属性值是否合法.
                if(!result_ok){                             //如果不合法像错误消息队列中推入错误信息.
                    msg = "Invalid value for * " + i + " *, "+checker.instructions;
                    this.messages.push(msg);
                }
            }

        }
        return this.hasError();
    },

    hasError : function(){
        return this.messages.length !==0;
    }
};

validator.checkers.isNonEmpty = {
  validate: function(value){
      return value !== "";
  },
    instructions: "传入值不能为空."
};

validator.checkers.isNumber = {
  validate: function(value){
      return !isNaN(value);
  }  ,
    instructions: "传入值只能是合法数字,例如:1,3.14 or 2010"
};

validator.checkers.isAlphaNum = {
  validate: function(value){
      return !/[^a-z0-9]/i.test(value);
  },
    instructions: "传入值只能包含字符和数字,不能包含特殊字符"
};

var data = {
  first_name: "Tom",
    last_name : "Xu",
    age : "unknow",
    username : "TomXu"
};


validator.config = {
  first_name: 'isNonEmpty',
    age : 'isNumber',
    username: 'isAlphaNum'
};

validator.validate(data);

if(validator.hasError()){
    console.log(validator.messages.join("\n"));
}