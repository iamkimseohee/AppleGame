let blanks = document.querySelectorAll(".blank");
let score = document.querySelector(".score");
let left = document.querySelector(".left");
let time = document.querySelector(".time");

let clickk = false;

let treePositon = [];
let clickList = [];
let timer;
let resultScore = 0;
let clickedElement;
let treeNumber;
let countrandom;
let applePosition = [];
let leftApple;

//<--- 나무가 난이도마다 총 몇개 어느 위치에 생길지 정하기 --->
function makeTree() {
  for (i = 0; i < treeNumber; i++) {
    let random = Math.floor(Math.random() * 9);
    if (treePositon.indexOf(random) === -1) {
      treePositon.push(random);
    } else {
      i--;
    }
  }
}
//<--- makeTree에서 정해진 수에 맞는 칸에 나무 이미지 붙여주기 --->
function createTree() {
  for (i = 0; i < treePositon.length; i++) {
    let tree = document.createElement("img");
    tree.src = "img/나무.png";
    tree.className = "tree";
    blanks[treePositon[i]].appendChild(tree);
  }
}

//<--- 타이머 --->
function gameTimer() {
  let leftTime = setInterval(function () {
    time.innerHTML = `남은시간 : ${timer--} 초`;
    if (timer < 0) {
      clearInterval(leftTime);
      time.innerHTML = "";
      score.innerHTML = `채취한 사과는 ${resultScore} 개`;
    }
  }, 1000);
}

function random() {
  countrandom = Math.floor(Math.random() * 3) + 1;
  applePosition = [];
  for (i = 0; i < countrandom; i++) {
    let randomnumber =
      treePositon[Math.floor(Math.random() * treePositon.length)];
    if (applePosition.indexOf(randomnumber) === -1) {
      applePosition.push(randomnumber);
    } else {
      i--;
    }
  }
  console.log(applePosition);
}

function createApple(id) {
  let apples = document.createElement("img");
  apples.src = "img/사과.png";
  apples.className = "apple";
  apples.style.left = Math.floor(Math.random() * 180) + "px";
  apples.style.top = Math.floor(Math.random() * 70) + "px";

  let treeId = document.getElementById(id);
  treeId.appendChild(apples);

  let lastApple = document.getElementsByClassName("apple").length; //남은 사과의 개수
  left.innerHTML = `남은 사과 수 : ${lastApple} 개`;

  apples.addEventListener("click", function () {
    clickedElement = parseInt(apples.parentElement.id);
    clickList.push(clickedElement);
    //<--- 나무에 사과가 하나도 없으면 clickList에서 그 칸의 숫자를 다 빼기 --->
    apples.remove();
    let leftApple = treeId.getElementsByClassName("apple").length;
    console.log(treeId, leftApple, id);
    if (leftApple <= 0) {
      clickList = clickList.filter(function (e) {
        return e != clickedElement;
      });
    }
    //<----- 사과 클릭하면 점수 올라가게 만들기 ----->
    resultScore++;
    score.innerHTML = `채취 사과 수 :${resultScore} 개`;
  });

  //<----- 사과 클릭 이벤트 ----->
}

function game(mode) {
  //<----- 중복 클릭 방지 ----->
  if (clickk) return;
  clickk = true;
  if (mode == "easy") {
    timer = 30;
    treeNumber = 3;
    sec = 2000;
  } else if (mode == "normal") {
    timer = 45;
    treeNumber = 6;
    sec = 3000;
  } else if (mode == "hard") {
    timer = 60;
    treeNumber = 9;
    sec = 2000;
  }
  makeTree();
  createTree();
  gameTimer();

  //<----- 사과 생성 ----->
  let firstApple = setTimeout(() => makingApple(), 200);
  let makeapple = setInterval(function () {
    makingApple();
    if (timer < 1) {
      clearInterval(makeapple);
    }
  }, sec);
}

function makingApple() {
  random();
  for (let i = 0; i < countrandom; i++) {
    let findId = blanks[applePosition[i]].id; //사과가 붙을 칸

    let randomBlankInt = parseInt(findId);
    let idEle = document.getElementById(findId);
    let leftApple = idEle.getElementsByClassName("apple").length;

    if (leftApple > 4) {
      continue;
    } else if (clickList.includes(randomBlankInt)) {
      continue;
    } else {
      createApple(findId);
    }
  }
}
