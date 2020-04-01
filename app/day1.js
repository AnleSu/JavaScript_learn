let name = '学习JS的第一天';

console.log(name);

let call = function () {
    console.log('call name: ', name);
};

call();

function sum(a, b) {
    return a + b;
};

let sub = function (a, b) {
    return a - b;
}

console.log(sub);

// 函数可以作为函数参数传递，也可以作为函数返回值。

function invoke (a, b, fun) {
    if(!a || !b) {
        return;
    }
    return fun(a, b);
}

let ret = function (a, b) {
    return a + b;
};

let result = invoke(3, 5, ret);
console.log(result);

// 函数有一个内部参数 arguments，它保存了函数调用时的所有参数
function kill(a, b) {
    // [Arguments] { '0': 3, '1': 2 }
    console.log(arguments);
    return a * a - b;
}

kill(3, 2);