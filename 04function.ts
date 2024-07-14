//给函数指定类型的两种方式
//1. 单独指定参数、返回值的类型（个别交代参数类型）
function add(num1: number, num2: number): number {
    return num1 + num2
}

//函数表达式
const add2 = (num1: number, num2: number): number => {
    return num1 + num2
}

//2. 同时指定参数、返回值类型（一次过交代所有的类型）
const add3: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2
}
//当函数作为表达式的时候，可以通过类似箭头函数形式的语法来为函数添加类型
