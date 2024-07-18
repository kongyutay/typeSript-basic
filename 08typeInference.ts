//一些没有明确支出类型的地方，ts会用类型推论机制帮助提供类型
//初次声明变量的时候和决定函数返回值的时候都可以忽略不写类型

let age = 18
//这是第一次声明，所以不用写，机制会自动推论

function add(num1: number, num2: number) {
    return num1 + num2
}

//如果不写，就会失去类型保护
function add2(num1, num2: number) {
    return num1 + num2
}
//这样也不会报错
add2(false, 2)