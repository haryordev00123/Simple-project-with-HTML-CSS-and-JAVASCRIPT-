// Let's start with  the List of our programs 
const memes = ['meme1.png', 'meme2.png', 'meme3.png', 'meme4.png', 'meme5.png'];
const jokes = ['joke1.png', 'joke2.png', 'joke3.png', 'joke4.png', 'joke5.png'];
const qoutes = ['qoute1.png', 'qoute2.png', 'qoute3.png', 'qoute4.png', 'qoute5.png'];
const riddles = [
    {
        question: "Leave me and you will never find the treasure, Use me and you will attain ALLAH's pleasure. WHAT AM I ?",
        answer: "Qur'an"
    },
    {
        question: "If you have got me, you have got power , BUT the devilwill try increase the 'pride' within you Using 'me' every second, minute, hour... I will take you to heaven if you act upon me well. BUT if you misuse me, i'm also dangerous enough to take to hell. WHAT AM I ?",
        answer: "Knowledge"
    },
    {
        question: "When you use me wrongly you can't undo your mistake, so please control me for ALLAH'S sake. So use me well or at least try, now tell me WHO AM I ?",
        answer: "Tongue"
    },
    {
        question: "I am a security against the fire of hell for those who act upon me with sincerity and abstain from anythin which nullifie me. WHO AM I ?",
        answer: "Fasting"
    }
];

// Our DIVs containers
const memes_container = document.querySelector('.memes-content');

const jokes_container = document.querySelector('.jokes-content');

const qoutes_container = document.querySelector('.qoutes-content');

const riddles_container = document.querySelector('.riddles-content');

// Getting Random Data

const getRandomData = (data) => {
    const randomUrl = Math.floor(Math.random() * jokes.length);
    switch(data){
        case "meme":
            return memes[randomUrl];
            break;
        case "joke":
            return jokes[randomUrl];
            break;
        case "qoute":
            return qoutes[randomUrl];
            break;
        case "riddle":
            return riddles[randomUrl];
    }
}

// Clear functions
function clearAll(){
    memes_container.innerHTML = "";
    jokes_container.innerHTML = "";
    qoutes_container.innerHTML = "";
    riddles_container.innerHTML = "";
}

//  MEmes function
function show_memes(){
   const meme_img = getRandomData("meme");
   const imgTag = document.createElement('img');
   imgTag.setAttribute("src", meme_img);
   clearAll();
   memes_container.appendChild(imgTag);
}

//  Jokes function
function show_jokes(){
   const joke_img = getRandomData("joke");
   const imgTag = document.createElement('img');
   imgTag.setAttribute("src", joke_img);
   clearAll();
   jokes_container.appendChild(imgTag);
}
//  qoutes function
function show_qoutes(){
   const qoute_img = getRandomData("qoute");
   const imgTag = document.createElement('img');
   imgTag.setAttribute("src", qoute_img);
   clearAll();
   qoutes_container.appendChild(imgTag);
}
//  riddles function
function show_riddles(){
    const {question, answer} = getRandomData("riddle");
   const riddles_container = document.querySelector('.riddles-content');
//    Riddle Question Tag
   const riddle_question = document.createElement('p');
   riddle_question.textContent = question;
   riddle_question.setAttribute('class', 'riddle_tag');
//    Riddle answer Tag
   const riddle_answer = document.createElement('p');
   riddle_answer.textContent = "The Answer Is: " + answer;
   riddle_answer.setAttribute('id', 'riddle-answer');
   riddle_answer.hidden = true;
   clearAll();
   riddles_container.appendChild(riddle_question);
   riddles_container.appendChild(riddle_answer);
}
// answer function
function answer_riddles(){
    const riddles_container = document.querySelector('.riddles-content');
    const riddle = riddles_container.querySelector('.riddle_tag');
    const answer = riddles_container.querySelector('#riddle-answer');

    if(riddle && answer.hidden){
        answer.hidden = false;
    }else if(riddle && !answer.hidden){
        alert("Riddle Answer Is Already Revealed!")
    }else{
        alert("No Riddle To Reveal Answer For!")
    }
 }