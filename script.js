"use strict";
//Function constructor
function QuestionAndAnswers(qu, arr, ans){

	this.Question = qu;
	this.Answers = arr;
	this.correctAnswer = ans;

}

var objects = [];
var score = 0;//Not in prototype property because everytime it is called, score will reset to 0

//Questions
var question1 = new QuestionAndAnswers('What is my name?\n',
									   ['0. Ayush\n','1. John\n','2. David\n'], 0);

var question2 = new QuestionAndAnswers('Where do I live?\n',
								   		['0. India\n','1. Africa\n','2. France\n','3. Mauritius\n'], 3);

var question3 = new QuestionAndAnswers('What is my age?\n',
								   		['0. 22\n','1. 19\n','2. 14\n','3. 17\n'], 3);

var question4 = new QuestionAndAnswers('When was I born?\n',
									   ['0. 1998\n','1. 2000\n','2. 2003\n','3. 1995\n'], 1);

var question5 = new QuestionAndAnswers('Is Ayush rude?\n',
										['0. Yes\n', '1. No\n', '2. Maybe\n'], 0);


//==============================================PROTOTYPE PROPERTY=============================================================
QuestionAndAnswers.prototype.correct = function(ans){

	
	//this will refer to the instance that called the method, it does!
	if(ans == this.correctAnswer){//Allow type coercion because answer is of type string and correctAnswer, integer!
		console.log('Correct answer!');
		score += 1;
		
	}else{
		console.log('Wrong answer!');
		
	}
}
//==========================================END OF PROTOTYPE PROPERTY==========================================================

	//Adding every instance in an array

	//Preset value, to be updated manually, just look at the last question number and update k accordingly.
	var k = 5;
	for(var i = 1;  i <= k; i++){
	//Concatenating the value
	var str = 'question' + i;//Should perform coercion

	objects.push(window[str]);//It adds the string to the window object, and lets us use it as a property,which then becomes a variable name.
	
	}

	
//Randomly selecting an object and then display question and possible answers.
(function(){

	var random, randomObject, lastRandom;
	var str, answer;
	
 	for(var i = 0; i >= 0; i++){//Always run the game

	//Generate a random number
	random = Math.floor(Math.random() * (objects.length));
			
		answer = null;
		randomObject = objects[random];
		str = randomObject.Answers.join('');
		console.log(randomObject.Question + str);

		answer = prompt(randomObject.Question + 'Write \'exit\' to stop.');

		if(answer === 'exit'){
		console.log('Your total score is '+ score);
		break;//Exits the loop that is why does not log 'exit'

		}else{

				randomObject.correct(answer);//Couldn't retrieve value before because it was in private scope.
				console.log('Your current score is ' + score);
		  }
	
  }
})();//Data privacy achieved!
