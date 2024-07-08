enum Arithmatic {
    Add, 
    Sub,
    Div,
    Mul
}


function calculate(a : number , b : number , type : Arithmatic){
    console.log(type)
    return 1
}

const ans = calculate( 1, 2 , Arithmatic.Div)