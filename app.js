const questionEl = document.querySelector ('.question');
const choiceEl = document.querySelector ('.choice');
const result = document.querySelector ('.result');
const nextbtn = document.querySelector ('.next');
let score=0;
let now=0;
let quiz = [
	{
		question:"what is the capital of france?",
		choice : ['Berlin','Madrid','Paris','Rome'],
		correct : 'Paris',
	},
	{
		question:"What is 1000+2000?",
		choice: ['1500','5000','3000','900'],
		correct : '3000',
	},
	{
		question: "Mongol uls ali tewd baidg we?",
		choice : ['Azi','Ewrop','Apric','Brazil'],
		correct : 'Azi',
	}
];
console.log(quiz);
console.log(quiz[now].question);

function display(){
	questionEl.innerText = quiz[now].question;
	quiz[now].choice.forEach(data=>{
		console.log(data);
		let btn = document.createElement('button');
		btn.innerText=data;
		choiceEl.appendChild(btn);
		btn.addEventListener('click',()=> checkAnswer(data));
	});
	nextbtn.style.display="none";
}
function checkAnswer(data){
	//alert(data);
	if(data==quiz[now].correct){
		result.innerText="Correct!";
		score++;
	}else{
		result.innerText="Wrong! Answer is"+quiz[now].correct;
	}
	nextbtn.style.display="block";
}
nextbtn.addEventListener('click',()=>{
	now++;
	if(now==quiz.length){
		question.innerText="";
		result.innerText="Quiz finished. Your score is " +score+"/"+quiz.length;
		nextBtn.style.display="none";
	}
	display();
});
display();