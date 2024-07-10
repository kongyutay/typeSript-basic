let age: number = 18
//当中的: number就是类型注解，约定并约束了类型

//Js已经有的类型
//原始类型：number/string/boolean/null/undefined/symbol
//对象类型：object 例如数组，函数和对象

//TS新增类型
//联合类型、自定义类型（类型别名）、接口给、元组、字面量类型、枚举、void、any等等

//原始类型
let age2: number = 18
let myName: string = 'my name'
let isLoading: boolean = true
let a: null = null
let b: undefined = undefined
let s: symbol = Symbol()

//对象类型：分得比较仔细，每个对象类型都有自己的类型语法
//数组的两种写法
let array: number[] = [1, 2, 3]                 //数字类型的数组
let array2: Array<string> = ['1', '2', '3']     //string类型的数组
let array3: boolean[] = [true, false]
let arr: (string | number)[] = ['test', 2]