#! /usr/bin/env node 

import chalk from "chalk";
import inquirer from "inquirer";
import  chalkAnimation, { Animation }  from 'chalk-animation';
import cfonts from "cfonts"
import gradient, { summer } from "gradient-string";
import { rainbow, pastel ,mind ,instagram , passion , fruit , retro, atlas } from 'gradient-string';

cfonts.say('Guessing Game!', {
	font: 'block',              
	align: 'center',                     
    colors : [ 'yellow', 'blue', 'cyan', 'green', 'red'  ],
	background: 'transparent',  
	letterSpacing: 1,           
	lineHeight: 1,              
	space: true,            
    gradient: [ 'cyan', 'green' ],
	maxLength: '0',                    
	independentGradient: false, 
	transitionGradient: false,  
    rawMode: false,             
	env: 'node' 
                
})




async function numberGuessingGame(){
    await startGame()     
}



async function startGame() { 
    let playerName = await inquirer.prompt([
        {
            name : "user",
            type : "input",
            message : summer("Enter your Name"),
            default : pastel("Player")
        }
    ])
   
      
    let ques = await inquirer.prompt(
        [
            {
                name : "game",
                type : "confirm",
                message : `${chalk.blue.underline(playerName.user)} ${rainbow ('Do you want to Play the Number Guessing Game')}`
            },
        ]
    )
       if(ques.game){
       
        console.log(
            ` ${instagram(`Great Let's Play the Game`)}`
        );
        console.log(
            `
            ${chalk.bgBlue('How To Play' )}
            I am a process on a computer 
            If you guess any number wrong You will ${chalk.bgRed('Killed')}
            So guess right number
            ${chalk.bgMagenta('Best of Luck')}
            `
        )
        await play_Game()
       
    } else{
        console.log(rainbow(`Try for next Time`))
        await end()
    }
}




async function play_Game() {
    let randomNumber = Math.floor(Math.random() * 10 )

    let ans = await inquirer.prompt(
        [
            {
                name : "guess_game",
                type : "number",
                message : passion("Guess the number between 1-10"),
                validate : (input)=> {
                    const num = Number(input)
                    if(isNaN(num)){
                        return "Please enter a valid number"

                    }else if(num < 0 || num > 10 ){
                        return "Please guess a number between 1-10"
                    }else{
                        return true;
                    }
                } 
            }
               
            
        ]
    )

    if(ans.guess_game === randomNumber ){
       console.log(retro(`Computer Gues Number : ${randomNumber} Your Guess Number : ${ans.guess_game}`))
           // console.log(retro(`Computer Guess Number : ${chalk.red.bold(`${randomNumber}`)} Your Guess Number : ${chalk.bold.red(`${ans.guess_game}`)}`));
        console.log(atlas(`   Congratulations You Win!! 🤩🤩 `))
    }else{
        console.log(retro(`Computer Gues Number : ${randomNumber} Your Guess Number : ${ans.guess_game}`))
        // console.log(retro(`Computer Guess Number : ${chalk.red.bold(`${randomNumber}`)} Your Guess Number : ${chalk.bold.red(`${ans.guess_game}`)}`));
        console.log(atlas(`   OHHO!!  You lose 💀💀 `))
    }
    await playAgain()
    
       
}


async function playAgain() {
    
let again = await inquirer.prompt(
    [
        {
            name : "again",
            type : "confirm",
            message:fruit("Do you want to Play Again"),
        }
    ]
)    
   
    if(again.again){
        await play_Game()
    }
    else{
        await end()
    }
}

async function end() {
    const rainbow = chalkAnimation.rainbow(`            Game Developed by Maheera Rehman   `,2); // Animation starts



    setTimeout(() => {
        rainbow.start(); // Animation resumes
    }, 1000);
    setTimeout(() => {
        rainbow.stop(); // Animation stops
    }, 1000);
}

numberGuessingGame()







