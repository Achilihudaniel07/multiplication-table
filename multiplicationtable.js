    // Generate a multiplication table for number 1 to 12

    var singlenumber = parseInt(prompt("ENTER THE NUMBER YOU WANT TO GET THE MULTIPLCATION TABLE")) 
    let mul = ''

    function genSingleTableOf(n){
        console.log(`TIMES TABLE OF ${n}`)

    for(let i = 1; i<=12; i++){
    mul = n * i
        console.log(`${n} * ${i} = ${mul}`)
    }
    }

    genSingleTableOf(singlenumber)
  
  
    // OR

    
    var firstnum = parseInt(prompt("ENTER THE FIRST NUMBER YOU WANT TO GET THE MULTIPLCATION TABLE")) 
    var secnum = parseInt(prompt("ENTER SEC THE NUMBER YOU WANT TO GET THE MULTIPLCATION TABLE")) 
    
    function RandomtimesTableOf(begin,end){
        console.log(`TABLE From ${begin} to ${end}`)

    for(i = begin; i<=end; i++){
        console.log(`TIMES TABLE OF ${i}`)

    for(let j = 1; j<=12; j++){
    mul = i*j
        console.log(`${i} * ${j} = ${mul}`)                  
    }
    }
    }

    RandomtimesTableOf(firstnum,secnum)
