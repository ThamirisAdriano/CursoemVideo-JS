let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`vetor tem ${num.length} posições`)
console.log(num)
let pos = num.indexOf(4)

if (pos == -1){
    console.log('o valor não foi encontrado!')
} else {console.log(`O valor 8 está na posição ${pos}`)

}


