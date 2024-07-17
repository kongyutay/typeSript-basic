//一个对象类型被多次使用的时候，一般上会使用接口来描述对象的类型
interface IPerson {
    name: string
    age: number
    sayHi(): void
}

let person2: IPerson = {
    name: 'jack',
    age: 19,
    sayHi(){}
}

//接口和类型别名之间的区别：接口只可以给对象指定类型，而类型别名可以为任意类型指定别名
interface IPerson {
    name: string
    age: number
    sayHi(): void
}

//类型别名相当于声明变量，要等号=
type IPerson2 = {
    name: string
    age: number
    sayHi(): void
}

type NumStr = number | string

//接口继承
//如果有两个接口有相同的属性和方法
interface Point2D {x:number;y:number}
interface Point3D {x:number;y:number;z:number}

    //应该写成这样
interface Point2D {x:number;y:number}
interface Point3D extends Point2D {z:number}