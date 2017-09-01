//===================== quetion 1===============
console.log('question 1')
console.log(' ')
function countDown(vars){
	const va = setInterval(() => {

    if (vars === 0)
        clearInterval(va)
    else
        console.log(vars)

    vars--
   }, 10)
	

}
countDown(5)



//==================question 2================0
console.log('question 2')
console.log(' ')
const pro = (arr) => {
    return new Promise((resolve, reject) => {
        
        
        if (arr==arr.toUpperCase())
            resolve('this leter was rejected: '+arr)
        else
            resolve('this letter was resolved: '+arr)

    
    })
     return rejectPromise();
}




const letters = ['A', 'b', 'c', 'D', 'e']
const sortLetters = (letters) => {
     letters.forEach((n) => {
        pro(n)
       .then ((result) => {
            console.log(result)
        })
    })
}
   
sortLetters(letters)


//================number 3===================


console.log('question 3')
console.log(' ')

 const reverseWord = (word,callback) => {
 	 
 	  let c = word.split('').reverse().join('')
      callback(c)

 }

  const compare =(word,result,callback) =>{
 	if(result== word)

 	{
 		callback('true')
	}
 	else
 	{
       callback('false')

 	}
    
 }
  
const print =(n) =>{
    reverseWord(n,(result)=>{
        compare(n,(result),(result)=>{
            console.log(result)
        })
    })
}

print('kayak')
print('canoe')
