//对象是由属性和方法构成，所以主要是描述对象结构
let person: { name: String; age: number; sayHi(name: string): void } = {
    name: 'jack',
    age: 19,
    sayHi(name) {}
}
//方法的类型也可以用箭头函数形式比如sayHi: ()=> void