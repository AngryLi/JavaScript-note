## ES5写法
不会。。。没见过。

ES5中创建实例是这样的：
```
let person = {
    species : "人类",
    mySpecies : function () {
        return "我是" + Person.species;
    }
}
```
所以所在哪里加静态呢？？？在`species`或者`mySpecies`前面加`static`试试！

## ES6写法
```
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        Person.species = "人类"
    }

    static mySpecies() {
        return "我是" + Person.species;
    }
}
```

ES6之后增加`class`语法糖（并没有具体意义，只是语法糖，用ES5能够写出功能相同的代码），"成员属性"和"静态属性"都放在构造函数中绑定到this和"class"(其实就是构造函数，Person的log输出是`{ [Function: Person] species: '人类' }`，typeof是`function`)上。讲道理ES6增加了很多不错的特性。
