//类型别名（自定义类型）
let arr3: (number | string)[] = [1,2,3,'test']

//写很多次的时候就很麻烦

type CustomArray = (number | string)[]
let arr4: CustomArray = [1,2]