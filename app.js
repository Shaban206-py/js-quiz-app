let id = (id) => document.getElementById(id);
let query = (q) => document.querySelectorAll(q);
let TimeElement = document.getElementById('Timer');
let currentQuestion =0;
    let Score =0;
    let Time;
    const TotalTime = 7;
        let sec = TotalTime;
        //Add Timer Function
        function Timer(){
                TimeElement.innerHTML = sec;
                sec--;
                if(sec==0){
                    sec = TotalTime;
                    clearInterval(Time);
                    currentQuestion++;
                    ShowQuestion();

                }
        }
        function ShowQuestion(){
            sec = TotalTime;
            clearInterval(Time);
            Timer();
            Time = setInterval(Time,1000);
            
        }
let question = id('header');
let a = id('opt1');
let b = id('opt2');
let c = id('opt3');
let d = id('opt4');
let btn = id('btn');
let option = query('.ques');
let scores =0;


// Making question

let quizapp = [
    {
        question : 'HTML stands for',
        a: 'Hyper Text Markup Language',
        b: 'Hyper Text Machine Language',
        c: 'Hyper Text Machine Log',
        d: 'Hyper Transfer Machine Language',
        correct: 'a'
    },
    {
        question: 'Which language runs in the browser?',
        a: 'TypeScript',
        b: 'Ruby',
        c: 'JavaScript',
        d: 'PHP',
        correct: 'c'
    },
    {
        question: 'Python is a?',
        a: 'Scripting Language',
        b: 'General Purpose Language',
        c: 'Option a only',
        d: 'Option a and b',
        correct: 'd'
    },
    {
        question: 'Name Three Programming Languge',
        a: 'Only Python',
        b: 'Only Java',
        c: 'Only Js',
        d: 'All of These',
        correct: 'd'
    },
];

let clear = () => {
    for (let i = 0; i < option.length; i++) {
        option[i].checked = false;
    }
};

let checked = () => {
    let chk;
    for (let i = 0; i < option.length; i++) {
        if(option[i].checked){
            chk = option[i].id;
        }
    }
    return chk;
};

let score = 0;
let initialstart = 0;
let load_quiz = () => {
    clear();
    let quizdata = quizapp[initialstart];
    question.innerText = quizdata.question;
    a.innerText = quizdata.a;
    b.innerText = quizdata.b;
    c.innerText = quizdata.c;
    d.innerText = quizata.d;
};
let answer = event.target.getAttribute('data-answer');
if (answer === 'correct') {
    score++;
    document.getElementById('score').innerText = 'Score: ' + score;
}
alert('Quiz Ended. Your score: ' + score + '. Your time: ' + document.getElementById('timer').innerText);


load_quiz();

btn.addEventListener('click', (e) => {
    let check = checked();
    if (check) {
        if (check === quizapp[initialstart].correct) {
            score++;
        }
        initialstart++;
        if (initialstart < quizapp.length) {
            load_quiz();
        } else {
            quiz.innerHTML = `
                <h2 class="last">Your Answer Score is ${score}/${quizApp.length}</h2>
                <button class="last-btn" onclick="history.go(0)">Start Again</button>
            `;
        }
    }
});














9