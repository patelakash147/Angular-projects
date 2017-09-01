//===============question 1 ====================
console.log('question 1')
function reverseWord(rev)
{
	return rev.split('').reverse().join('')
}

console.log(reverseWord('hello'))
console.log(reverseWord('world'))





//===============question 2 ====================
console.log('')
console.log('question 2')
function replaceVowels(vow){
	 return vow.replace(/[aeiou]+/g,'*')
}

console.log(replaceVowels('javascript'))
console.log(replaceVowels('angular'))




//===============question 3=====================
console.log('')
console.log('question 3')
let total=0
class calculator {
	

		constructor(val) {
			if(isNaN(val)==true){
				this.val=0
			}
			else
		this.val=val
	}

	multiply(vals){
		
		total= this.val*vals
		return total
	}

	add(vals){
		total=total+vals
		return total
	}

	divide(vals){
		total=total/vals
		return total
	}

	substract(vals){
		total=total-vals
		return total
	}

	print(){
		return total
	}

	clear(){
		total=0
		return total
	}


	

}
const calculator_v1 = new calculator(2)

calculator_v1.multiply(3)
calculator_v1.add(10)
calculator_v1.divide(2)
calculator_v1.substract(4)
console.log(calculator_v1.print())
calculator_v1.clear()
console.log(calculator_v1.print())
console.log('')


const calculator_v2 = new calculator()

calculator_v2.multiply(3)
calculator_v2.add(10)
calculator_v2.divide(2)
calculator_v2.substract(4)
console.log(calculator_v2.print())
calculator_v2.clear()
console.log(calculator_v2.print())
console.log('')




//=================question 4====================
console.log('')
console.log('question 4')

function convertToObject(array)
{
    
      let ob = {}
      array.forEach((val) => {

      ob[val[0]] = val[1]
})
      console.log(ob)

}

const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
convertToObject(media_arr)







//=================== question 5 ==========================


console.log('')
console.log('question 5')
	
 function convertToArray(val)
 {  
 	let res=[]
 	
 			res.push(Object.entries(val))
 			return res
 }
 const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
 console.log(convertToArray(media_obj))




    



