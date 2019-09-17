
// pos is position of where the user in the test or which question they're up to

let question; let answer; let chA; let chB; let chC; let chD; let ran;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
// if you don't want answers viewable in the code, then you should use PHP and mySQL database
const questions = [
  ['images/george.jpg', 'Steve Jobs', 'George Clooney', 'Robin Williams', 'Christian Bale', 'B'],
  ['images/susan.jpg', 'Melissa McCarthy ', 'Margot Robbie', 'Susan Sarandon', 'Selena Gomez', 'C'],
  ['images/robin.jpg', 'Robin Williams', 'Robin Williams', 'Christian Bale', 'Stephen Colbert', 'A'],
  ['images/drew.jpg', 'Robin Williams', 'Drew Carey', 'George Clooney', 'Steve Jobs', 'B'],
  ['images/samuel.jpg', 'Hugh Jackman', 'George Clooney', 'Steve Jobs', 'Samuel L. Jackson', 'D'],
  ['images/robert.jpg', 'George Clooney', 'Margot Robbie', 'Robin Williams', 'Robert Downey', 'D'],
  ['images/zooey.jpg', 'Selena Gomez', 'Melissa McCarthy', 'Zooey Deschanel', 'Hugh Jackman', 'C'],
  ['images/michael.jpg', 'George Clooney', 'Hugh Jackman', 'Michael Jordan', 'Steve Jobs', 'C'],
  ['images/jimmy.jpg', 'Jimmy Fallon', 'George Clooney', 'Robin Williams', 'Stephen Colbert', 'A'],
  ['images/matt.jpg', 'Stephen Colbert', 'Matt Dillon', 'Steve Jobs', 'George Clooney', 'B'],
  ['images/barbara.jpg', 'Helen Mirren', 'Margot Robbie', 'Barbara Streisand', 'Miley Cyrus', 'C'],
  ['images/oprah.jpg', 'Oprah Winfrey', 'Lady Gaga', 'Miley Cyrus', 'Madonna', 'A'],


  ['images/steve.jpg', 'Steve Jobs', 'Leonardo DiCaprio', 'Robin Williams', 'Bruce Willis', 'A'],
  ['images/sean.jpg', 'Sean Connery', 'Bradley Cooper', 'Robin Williams', 'Steve Jobs', 'A'],
  ['images/lady.jpg', 'Lady Gaga', 'Margot Robbie', 'Selena Gomez', 'Bruce Willis', 'A'],
  ['images/george2.jpg', 'George Clooney', 'Bruce Willis', 'Christian Bale', 'Steve Carell', 'A'],
  ['images/angelina.jpg', 'Angelina Jolie', 'Selena Gomez', 'Taylor Swift', 'Miley Cyrus', 'A'],
  ['images/charlize.jpg', 'Charlize Theron', 'Bruce Willis', 'Willem Dafoe', 'Steve Carell', 'A'],
  ['images/stephen.jpg', 'Stephen Colbert', 'Leonardo DiCaprio', 'Christian Bale', 'Hugh Jackman', 'A'],
  ['images/britney.jpg', 'Britney Spears', 'Selena Gomez', 'Helen Mirren', 'Madonna', 'A'],
  ['images/leonardo.jpg', 'Leonardo DiCaprio', 'Christian Bale', 'Bradley Cooper', 'Bruce Willis', 'A'],
  ['images/christopher.jpg', 'Christopher Walken', 'Leonardo DiCaprio', 'Bruce Willis', 'Hugh Jackman', 'A'],
  ['images/beyonce.jpg', 'Beyonce', 'Taylor Swift', 'Madonna', 'Nicole Kidman', 'A'],


  ['images/bruce.jpg', 'Bradley Cooper', 'Bruce Willis', 'Leonardo DiCaprio', 'Christian Bale', 'B'],
  ['images/tom1.jpg', 'Matt Damon', 'Tom Cruise', 'Steve Carell', 'Willem Dafoe', 'B'],
  ['images/madonna.jpg', 'Selena Gomez', 'Madonna', 'Helen Mirren', 'Miley Cyrus', 'B'],
  ['images/benedict.jpg', 'Leonardo DiCaprio', 'Benedict Cumberbatch', 'Christian Bale', 'Nicole Kidman', 'B'],
  ['images/adele.jpg', 'Selena Gomez', 'Adele', 'Margot Robbie', 'Nicole Kidman', 'B'],
  ['images/ryan.jpg', 'Leonardo DiCaprio', 'Ryan Gosling', 'Christian Bale', 'Matt Damon', 'B'],
  ['images/jennifer.jpg', 'Selena Gomez', 'Jennifer Aniston', 'Lady Gaga', 'Madonna', 'B'],
  ['images/jackie.jpg', 'Leonardo DiCaprio', 'Jackie Chan', 'Bradley Cooper', 'Steve Carell', 'B'],
  ['images/keira.jpg', 'Miley Cyrus', 'Keira Knightley', 'Margot Robbie', 'Lady Gaga', 'B'],
  ['images/miley.jpg', 'Nicole Kidman', 'Miley Cyrus', 'Margot Robbie', 'Taylor Swift', 'B'],


  ['images/anne.jpg', 'Margot Robbie', 'Nicole Kidman', 'Anne Hathaway', 'Nicole Kidman', 'C'],
  ['images/lady2.jpg', 'Margot Robbie', 'Selena Gomez', 'Lady Gaga', 'Bruce Willis', 'C'],
  ['images/julia.jpg', 'Selena Gomez', 'Margot Robbie', 'Julia Roberts', 'Nicole Kidman', 'C'],
  ['images/meryl.jpg', 'Blake Lively', 'Helen Mirren', 'Meryl Streep', 'Taylor Swift', 'C'],
  ['images/brad.jpg', 'Leonardo DiCaprio', 'Bradley Cooper', 'Brad Pitt', 'Steve Carell', 'C'],
  ['images/blake.jpg', 'Natalie Portman', 'Selena Gomez', 'Blake Lively', 'Ellen Page', 'C'],
  ['images/sandra.jpg', 'Ellen Page', 'Miley Cyrus', 'Sandra Bullock', 'Selena Gomez', 'C'],
  ['images/chris.jpg', 'Daniel Kaluuya', 'Matt Damon', 'Chris Pratt', 'Willem Dafoe', 'C'],
  ['images/avril.jpg', 'Rihanna', 'Natalie Portman', 'Avril Lavigne', 'Kate Winslet', 'C'],
  ['images/tom2.jpg', 'Matt Damon', 'Steve Carell', 'Tom Cruise', 'Willem Dafoe', 'C'],

  ['images/scarlett.jpg', 'Miley Cyrus', 'Margot Robbie', 'Selena Gomez', 'Scarlett Johansson', 'D'],
  ['images/rihanna.jpg', 'Margot Robbie', 'Madonna', 'Helen Mirren', 'Rihanna', 'D'],
  ['images/natalie.jpg', 'Nicole Kidman', 'Ellen Page', 'Rihanna', 'Natalie Portman', 'D'],
  ['images/kate.jpg', 'Nicole Kidman', 'Helen Mirren', 'Natalie Portman', 'Kate Winslet', 'D'],
  ['images/lindsay.jpg', 'Kate Winslet', 'Blake Lively', 'Nicole Kidman', 'Lindsay Lohan', 'D'],
  ['images/jessica.jpg', 'Miley Cyrus', 'Margot Robbie', 'Madonna', 'Jessica Alba', 'D'],
  ['images/jennifer.jpg', 'Margot Robbie', 'Madonna', 'Natalie Portman', 'Jennifer Lopez', 'D'],
  ['images/taylor.jpg', 'Blake Lively', 'Selena Gomez', 'Margot Robbie', 'Taylor Swift', 'D'],
  ['images/selena.jpg', 'Blake Lively', 'Helen Mirren', 'Kate Winslet', 'Selena Gomez', 'D'],

];
let numUsed = 1;
let usedQuestions = [];
let correct = 0;
let name;
let highest = 0;


function create(htmlStr) {
  const frag = document.createDocumentFragment();
  const temp = document.createElement('div');
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

function get(x) {
  return document.getElementById(x);
}

const rowD = create("<div class='flexbox' id='row'></div>");

const boxD = create("<div class='column' id='box'></div>");
const scoreD = create("<div class='column' id='score'></div>");


const titleD = create('<div id="title"><h1>Celebity Guessing Game</h1></div>');

const teststaD = create('<div id="test_status"></div>');
const picD = create('<div id="pic"></div>');

const pScoreD = create('<div id="p_score"></div>');
const userD = create('<div id="user"></div>');
const testD = create('<div id="test" class="column"></div>');

document.body.appendChild(titleD);
document.body.appendChild(rowD);


get('row').appendChild(boxD);
get('row').appendChild(scoreD);

get('box').appendChild(teststaD);
get('box').appendChild(picD);

get('score').appendChild(userD);
get('score').appendChild(pScoreD);
get('score').appendChild(testD);
/* document.body.appendChild(titleD);
document.body.appendChild(tScoreD);
document.body.appendChild(pScoreD);
document.body.appendChild(userD);
document.body.appendChild(teststaD);
document.body.appendChild(testD); */
// document.body.appendChild(buttom_div);

function getHighest() {
  let high = 0;
  for (let i = 0; i < localStorage.length; i += 1) {
    if (parseInt(localStorage.getItem(localStorage.key(i)), 10) > high) {
      high = parseInt(localStorage.getItem(localStorage.key(i)), 10);
    }
  }
  return high;
}
function frontpage() {
  get('title').innerHTML += '<h3> Can you guess every one of these famous celebrities when they were young?</h3><br>';
  get('p_score').innerHTML = "<h4><input type='text' id='name' placeholder='Your name...' > &nbsp <button type='button' class='button' id= 'start' onclick='nameValidate()'>START</button></h4> ";
}


// You can use native DOM methods to insert the fragment:

// this get function is short for the getElementById function

function renderQuestion() {
  if (localStorage.getItem(name) != null) {
    highest = localStorage.getItem(name);
  }

  get('title').innerHTML = `<div id="title"><h1>Celebity Guessing Game</h1><h3>Hi ! ${name} , your highest score : ${highest}</h3><h3>Overall highest score : ${getHighest()}</h3></div>`;


  if (usedQuestions.length >= 15) {
    if (localStorage.getItem(name) !== null && localStorage.getItem(name) >= correct) {
      // do nothing
    } else {
      localStorage.setItem(name, correct);
    }


    get('pic').innerHTML = `<h2>You nailed it </h2><h2>You got ${correct} celebrities correct! </h2>`;
    get('test_status').innerHTML = '';
    get('test').innerHTML = '';
    get('pic').innerHTML += '<button class="button" id="play" onclick="location.reload()">Play Again!</button>';
    get('title').innerHTML = `<div id="title"><h1>Celebity Guessing Game</h1><h3>Overall highest score : ${getHighest()}</h3><h3>Your highest score : ${localStorage.getItem(name)}</h3></div>`;

    // resets the variable to allow users to restart the test
    correct = 0;
    usedQuestions = [];
    numUsed = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  // get("test_status").innerHTML = "Who am I ?";

  ran = Math.floor(Math.random() * questions.length);

  while (usedQuestions.indexOf(ran) !== -1) {
    ran = Math.floor(Math.random() * questions.length);
  }


  [question] = questions[ran];
  [, chA] = questions[ran];
  [,, chB] = questions[ran];
  [,,, chC] = questions[ran];
  [,,,, chD] = questions[ran];


  get('pic').innerHTML = `<img src=${question} width="350" ><br>`;
  // test.innerHTML = "<h1><img src=" +question+ " width=\"400\" ></h1>";
  // the += appends to the data we started on the line above
  get('test').innerHTML = `<h2> Who am I ?</h2><h3>Picture # ${numUsed} </h3>`;
  get('test').innerHTML += `<button type='button' class='button' id='A' onclick="checkAnswer(this.id)"> ${chA} </button><br>`;
  get('test').innerHTML += `<button type='button' class='button' id='B' onclick="checkAnswer(this.id)"> ${chB} </button><br>`;
  get('test').innerHTML += `<button type='button' class='button' id='C' onclick="checkAnswer(this.id)"> ${chC} </button><br>`;
  get('test').innerHTML += `<button type='button' class='button' id='D' onclick="checkAnswer(this.id)"> ${chD} </button><br>`;
  get('test').innerHTML += `<h3><br><br><br>Current score : ${correct}</h3><br>`;


  usedQuestions.push(ran);
  return true;
  // questions.splice(ran,1);
}
function checkAnswer(id) { // eslint-disable-line no-unused-vars
  numUsed += 1;

  const clicked = document.getElementById(id);
  clicked.style.background = 'lightgreen';
  [,,,,, answer] = questions[ran];

  // checks if answer matches the correct choice
  if (id === answer) {
    // each time there is a correct answer this value increases
    correct += 1;
    clicked.style.background = 'lightblue';
  } else {
    document.getElementById(answer).style.background = 'rgba(255,0,0,0.6)';
  }
  setTimeout(renderQuestion, 500);
  // changes position of which character user is on
  // then the renderQuestion function runs again to go to next question
}// still raises defined but never used
function nameValidate() { // eslint-disable-line no-unused-vars
  // Get the value of the input field with id="numb"
  name = document.getElementById('name').value;

  if (name.match(/^[0-9a-zA-Z]+$/)) {
    // document.body.remove(document.body.childNodes[1]);

    get('p_score').innerHTML = '';

    renderQuestion();
  } else {
    if (name === '') {
      get('p_score').innerHTML += 'Please type you username';
    } else {
      get('p_score').innerHTML = "<h4><input type='text' id='name' placeholder='Your name...' > &nbsp <button type='button' class='button' id= 'start' onclick='nameValidate()'>START</button></h4> ";
      get('p_score').innerHTML += 'Username can only contain letters and numbers';
    }
    return false;
  }
  return true;

  // If x is Not a Number or less than one or greater than 10
} // still raises defined but never used

window.addEventListener('load', frontpage, false);
