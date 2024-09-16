let couples = [
  {
    bf: "guru",
    gf: "pooja",
  },
  {
    bf: "venky",
    gf: "roja",
  },
  {
    bf: "dinesh",
    gf: "chandu",
  },
  {
    bf: "hari",
    gf: "bhavya",
  },
  {
    bf: "lokesh",
    gf: "priya",
  },
  {
    bf: "rajesh",
    gf: "kavya",
  },
  {
    bf: "rudra",
    gf: "giri",
  },
   {
    bf: "ravi",
    gf: "rekha",
  },
]
let randomNumber=Math.floor(Math.random()*couples.length)
let result=document.getElementById("output")

function winnerOne(){
result.innerHTML=couples[randomNumber].bf+"❤️"+couples[randomNumber].gf
}

function winnerTwo(){
result.innerHTML=couples[randomNumber].bf+"❤️"+couples[randomNumber].gf
}

function winnerThree(){
result.innerHTML=couples[randomNumber].bf+"❤️"+couples[randomNumber].gf
}

