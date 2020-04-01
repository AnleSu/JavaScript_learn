let person = new Object();

person.name = 'Han meimei';

person.age = 18;

person.welcome = function () {
    console.log('he name is ' + this.name + "and age is " + this.age);
};

let person2 = {
    name: "lily",
    age:22,
    welcome: function () {
        console.log('he name is ' + this.name + "and age is " + this.age);
    }
};

let animal = {
    // 这个属性通过 get、set 来访问和设置
    _name: 'animal',
};

//通过 defineProperty 为对象动态添加属性
/*
Configurable：可配置性，表明是否可以删除或修改该属性；
Enumerable：是否可通过 for 循环来遍历返回该属性；
Writeable：是否可对属性的值进行修改；
Value：属性的初始值；
*/ 
Object.defineProperty(animal, 'age', {
    configurable: true,
    enumerable: true,
    writable: true,
    value:10
});

//访问器属性

Object.defineProperty(animal, 'name', {
    configurable: true,
    enumerable: true,
    get() {
        return this._name;
    },

    set(newValue) {
        this._name = newValue;
    }
});

// 构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;

}