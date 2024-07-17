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