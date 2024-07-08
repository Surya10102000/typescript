function swap<T,T2>(a : T, b : T2):[T2, T]{
    return [b , a ]
}

let ans = swap(2, "second")
console.log(ans)

export {}