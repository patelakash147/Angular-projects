
// ================= question 1 ==================

console.log('question 1')
console.log(' ');
function reverseWord(z) {
 let c = '';
  for (let i = z.length - 1; i >= 0; i--)
    c += z[i];
  return c;
}
const n='hello'
const p='world'
console.log(reverseWord(n))
console.log(reverseWord(p))
console.log(' ')








//================= question 2 ====================
console.log('question 2')
console.log(' ')
function replaceVowels(a) 
 
{   
   
   
    let sr=[]
   

 for(let i = 0; i < a.length; i++) {
        if(a[i]=='a' || a[i]== 'e'||a[i]== 'i'||a[i]== 'o'||a[i]== 'u' )
        {
            sr[i]='*'
        }
        else{
        sr[i]=a[i]
    }
       
    
    }  
    for(let i = 0; i < a.length; i++) {
 
   
 process.stdout.write(sr[i])


}
}
const t1='javascript '
const t2='angular '
console.log(replaceVowels(t1))
console.log(replaceVowels(t2))
console.log(' ')







//======================question 3 ========================

















//================question 4 ========================
console.log('question 4')
console.log(' ')

function oddAndEvens(arr){
    let odd=[]
    let even=[]

    for(let i = 0; i <= arr.length; i++){
        if(arr[i]%2== 0)
        {
                   even.push(arr[i])}
                   else
                   {
                    odd.push(arr[i])
                   }
               }
            console.log('odds = ['+odd+']')
            console.log('evens = ['+even+']')

        
    
}
const values= [ 21, 99, 43, 1, 8, 2, 48, 82]
console.log(oddAndEvens(values))
console.log(' ')





   // ================== question  5 ==================
   console.log('question 5')
   console.log(' ')
   function averageArray(nums) {
   let total=0
   let total1=0
   let count=0
    for (let i=0; i<=nums.length;i++){

     let pars = parseInt(nums[i])

     if(isNaN(pars)== true){
        pars=0
     }
     else{
       count++
        total += pars

     }
    }
    total1=total/count
    console.log(total1)
 }
 const ar =[3,9,'hello',4,'95','abc','1',8,{ key: 'value ' }]
console.log(averageArray(ar))
console.log(' ')







// ================== question  6 ==================


console.log('question 6')
   console.log(' ')

function markup (arr, n){
let total = 0

{
     console.log('{'+'cars:')
     for (let i=0; i<cars.length ; i++)
     {
        let val = cars[i].wholesale*((n+100)/100)

         console.log( '['+cars[i].type+ ' : ' +val + ']')
        let vals = (cars[i].wholesale*n/100)
        total = total + vals
     } 
     console.log('{'+'total : ' + total+'}')
}
}
const cars = 
[
  { type: 'hybrid', wholesale: 25000 },
  { type: 'minivan', wholesale: 28000 },
  { type: 'sedan', wholesale: 31500 },
  { type: 'convertible', wholesale: 45750 }
]
console.log()

console.log(markup(cars,10.5))
console.log(' ')





 