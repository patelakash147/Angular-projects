
const inquirer = require('inquirer')
const word = require('./word')
const figlet = require('figlet')
const chalk = require('chalk');
let count=0
const guessing=[]


module.exports.run = (flags) => {

  figlet('Mystery Game', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.magenta(data))
    main(flags.difficulty)
})
    
                
        }



function main(result){
     
    if (result=="easy")
        {
        const w = word.easy[Math.floor(Math.random() * 95)]
        
       
        dashes(w)
    }

            if(result=="hard")
            {
            const w = word.hard[Math.floor(Math.random() * 95)]
            
            dashes(w)
            }

            if(result==null){
              const w = word.hard[Math.floor(Math.random() * 95)]
            
            dashes(w)

            }
    }

function gamer(wo,dash){
    console.log (chalk.yellow('========== MYSTERY GAME ============'))
    console.log ('')
    console.log ('        '+dash)
    console.log ('')
    console.log (chalk.yellow('===================================='))

    
     userchoice(wo,dash)
 }

 function gameover(word) {

                 console.log(chalk.red('====================G A M E   O V E R================='))
                 console.log('')
                 console.log(chalk.red('                ANSWER:'+word+'                      '))
                 playagain()
}
 
 function gamewin(){
                 console.log(chalk.green('==================CONGRATES============================'))
                 console.log('')
                 console.log(chalk.green('======================================================'))
                 playagain()

}

function guessed(guessing)  {
     console.log(chalk.blue('==================Guessed letters================'))
            console.log('')
            console.log('        '+guessing)
            console.log('')
            console.log(chalk.blue('================================================='))
            

}




 function dashes(wo) {
     
        let dash=''
        for (let i in wo ) {
        dash = '-'+ dash 
     }
    gamer(wo,dash)
    }



function hint(word,dash){

     let k = Math.floor(Math.random() *word.length)
            dash= dash.substr(0, k) + word[k] + dash.substr(k + 1)
           gamer(word,dash)
}



function userchoice(word,dash) {
    inquirer.prompt([{
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['Guess the letter', 'Get hint', 'View guessed letters'],
            filter: function(input) {
                            
                    return input
                 }
      }]).then (function(input){
        
        afchoice(word,dash,input.choice)
      })
}


function afchoice(word,dash,uchoice) {
    if(uchoice === 'Guess the letter')
         {
            count++
            inquirer.prompt
            ([{
             type: 'input',
            name: 'letter',
            message: 'Guess the letter',
              }])
            .then(function (ch) {
            	let char =ch.letter
                count++
            guessing.push(char)
                    
                for(let i=0;i<word.length;i++){
                if(word[i].toLowerCase()===char){  
                   
                                
                 dash= dash.substr(0, i) + char + dash.substr(i + 1)
                 count--

                    }
                }
                   if(count>6){
                          gameover(word)
            }
            else{
            
            if(word.toLowerCase()===dash){
                gamewin()

            }
            else{
                gamer(word,dash)
        }
        }
         
})
}

 else if (uchoice === 'Get hint'){


    hint(word,dash)
           
       }
        
        else if(uchoice==='View guessed letters') {
             guessed(guessing)
            inquirer.prompt([{
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['Guess the letter', 'Get hint', 'View guessed letters'],
            filter: function(input) {
                            
                            return input

                  }
    }]).then (function(input){
        afchoice(word,dash,input.choice)
     })
        }
}

function playagain(){

   inquirer.prompt([{
             type: 'input',
            name: 'letter',
            message: 'Play Again? (yes or no) :',
         }]).then(function (answers) {
       if(answers.letter=='yes'){
       main()
 }
})
}


