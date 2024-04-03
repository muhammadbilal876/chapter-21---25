let originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."

let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhopura", "Kashmir"];

document.getElementById("originalStringBox").innerHTML = originalText

function lowerCase() {
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText ;
}
function upperCase() {
  let upperCaseText = originalText.toUpperCase();
  document.getElementById("output").innerHTML = upperCaseText;
}
function Capitalize() {
  let Capitalizetext = '<span style="text-transform: capitalize;">'+ originalText +'</span>'
  document.getElementById("output").innerHTML = Capitalizetext;
}

function betterFormating(){
  let text = document.getElementById("inputText").value;

  if (!text){
    alert("Please type your text")
    return
  }
  text = text.toLowerCase();
  document.getElementById('output').style.textTransform = 'capitalize';
  document.getElementById('output').innerHTML = text;
}

function printAllCities(){
  document.getElementById("output").innerHTML = ""
  for (let i  = 0; i < cities.length ; i++){
    let num = i + 1;
    document.getElementById("output").innerHTML += num +')' + cities[i] +"<br>" +'&emsp;'
  }
}

function addCity() {
  let city = document.getElementById("inputText").value;
  if(city.length<3){
    alert ("Please type your city name correctly")
    return
  }
let cityFirstLetter = city.slice(0,1).toUpperCase();
let cityAllLetters = city.slice(1).toLowerCase();

let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
let cityFound = false;
for (let i  = 0; i < cities.length ; i++){
if(cities[i] === cityWordInCapitalize){
  cityFound = true
   let html = '<span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '"</span>is already in list.';
  document.getElementById("output").innerHTML = html;
}
}
if(cityFound === false){
     cities.push(cityWordInCapitalize)
     let html = '<span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '"</span>has been successfully added into list.';
     document.getElementById("output").innerHTML = html;
}
}

function checkYourCity() {
  let city = document.getElementById("inputText").value;
  if(city.length<3){
    alert ("Please type your city name")
    return
  }
let cityFirstLetter = city.charAt(0).toUpperCase();
let cityAllLetters = city.slice(1).toLowerCase();

let cityWordInCapitalize = cityFirstLetter + cityAllLetters;

let cityFound = false;

for (let i  = 0; i < cities.length ; i++){
if(cities[i] === cityWordInCapitalize){
  cityFound = true
   let html = '<span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '"</span>is already in list.';
  document.getElementById("output").innerHTML = html;
}
}
if(cityFound === false){
     cities.push(cityWordInCapitalize)
     let html = "SORRY &#128524; We couldn't find your city <span style='color: red; font-size: 20px;'>" +'"' + cityWordInCapitalize + '"</span> in the list.<br>Click <span style="color: red; font-size: 16px;">"Add Your City In List"</span> to add your city &#128522;'
     document.getElementById("output").innerHTML = html;
}
}

function findWord() {
  let newOriginalText = originalText.toLowerCase();
  let word = document.getElementById("inputText").value;

  if (!word){
    alert("Please type a word for find.");
    return;
  }

  word = word.toLowerCase();

  let findWord = newOriginalText.indexOf(word);

  if(findWord !== -1){
    let html = 'Your word <span style="color: red; font-size: 18px;">"' + word + '"</span> fonud at index:' + findWord;
    document.getElementById("output").innerHTML = html;   
} else {

  let html = 'Your word <span style="color: red; font-size: 18px;">"' + word + '"</span> does not exist in the original string:';
  document.getElementById("output").innerHTML = html;
}
}

function replaceThiWord(){
  // let cnic = "33102-8172116-7"
  
  // let word = "-";
  // let replaceWith = "";

  // word = new RegExp(word, 'g');

  // let cnicWithoutDashes = cnic.replace(word, replaceWith);

  let newOriginalText = originalText.toLowerCase();

  let word = document.getElementById("inputText").value;

  if(!word){
    alert("Please type a word for replacing");
    return
  }
  let replaceWith = prompt("Inter a word that you want to replace with");

  if (!replaceWith) {
    alert('Please type a word to replace it with' + word + ".");
    return
  }
  word = word.toLowerCase();

  word = new RegExp(word, 'g');

  replaceWith = replaceWith.toLowerCase();

  let replaceWord = newOriginalText.replace(word, replaceWith);
  document.getElementById("output").innerHTML = replaceWord;
}

document.getElementById("clearOutputButton").onclick = function(){
  document.getElementById("output").innerHTML = ""
}
