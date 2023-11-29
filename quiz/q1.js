const baseballInfo = {
  player: [
    {
      name: "승엽",
      adress: "대구",
      team: "라이온스",
      year: 15,
      history: ["이글스", "랜더스", "트윈스", "라이온스"],
    },
    {
      name: "현진",
      adress: "대전",
      team: "이글스",
      year: 12,
      history: ["이글스"],
    },
    {
      name: "광현",
      adress: "인천",
      team: "랜더스",
      year: 11,
      history: ["이글스", "랜더스"],
    },
    {
      name: "대호",
      adress: "부산",
      team: "자이언츠",
      year: 17,
      history: ["이글스", "랜더스", "자이언츠"],
    },
    {
      name: "지환",
      adress: "서울",
      team: "라이온스",
      year: 3,
      history: ["라이온스"],
    },
    {
      name: "성범",
      adress: "광주",
      team: "타이거즈",
      year: 8,
      history: ["랜더스", "타이거즈"],
    },
    {
      name: "의지",
      adress: "서울",
      team: "라이온스",
      year: 10,
      history: ["다이노스", "라이온스"],
    },
    {
      name: "현인",
      adress: "수원",
      team: "위즈",
      year: 1,
      history: ["위즈"],
    },
    {
      name: "승환",
      adress: "서울",
      team: "라이온스",
      year: 12,
      history: ["라이온스"],
    },
    {
      name: "영화",
      adress: "하남",
      team: "랜더스",
      year: 17,
      history: ["이글스", "랜더스"],
    },
    {
      name: "민호",
      adress: "부산",
      team: "트윈스",
      year: 9,
      history: ["베어스", "트윈스"],
    },
    {
      name: "세웅",
      adress: "부산",
      team: "자이언츠",
      year: 1,
      history: ["자이언츠"],
    },
    {
      name: "찬호",
      adress: "서울",
      team: "트윈스",
      year: 20,
      history: ["베어스", "이글스"],
    },
    {
      name: "근우",
      adress: "인천",
      team: "이글스",
      year: 12,
      history: ["다이노스", "타이거즈", "이글스"],
    },
    {
      name: "선진",
      adress: "대구",
      team: "타이거즈",
      year: 8,
      history: ["라이온스", "베어스"],
    },
    {
      name: "현종",
      adress: "서울",
      team: "이글스",
      year: 10,
      history: ["타이거즈", "트윈스"],
    },
    {
      name: "희동",
      adress: "대전",
      team: "트윈스",
      year: 11,
      history: ["이글스", "랜더스", "트윈스"],
    },
    {
      name: "광길",
      adress: "수원",
      team: "다이노스",
      year: 5,
      history: ["라이온스", "베어스", "다이노스"],
    },
    {
      name: "동욱",
      adress: "서울",
      team: "이글스",
      year: 6,
      history: ["베어스", "이글스"],
    },
    {
      name: "영광",
      adress: "부산",
      team: "위즈",
      year: 7,
      history: ["이글스", "위즈"],
    },
  ],
  team: [
    {
      name: "이글스",
      home: "대전",
      ranking: 5,
    },
    {
      name: "랜더스",
      home: "인천",
      ranking: 4,
    },
    {
      name: "라이온스",
      home: "대구",
      ranking: 1,
    },
    {
      name: "다이노스",
      home: "창원",
      ranking: 3,
    },
    {
      name: "베어스",
      home: "서울",
      ranking: 6,
    },
    {
      name: "자이언츠",
      home: "부산",
      ranking: 2,
    },
    {
      name: "타이거즈",
      home: "대구",
      ranking: 7,
    },
    {
      name: "위즈",
      home: "수원",
      ranking: 9,
    },
    {
      name: "트윈스",
      home: "서울",
      ranking: 8,
    },
  ],
};

console.log(
  "Q1. 4등 이내의 팀 중에 한번이라도 소속 되었던 경력 5년 이상의 선수"
);

{
  let b = [];
  for (let i of baseballInfo.team) {
    if (i.ranking <= 4) {
      b.push(i.name);
    }
  }
  let test = [];

  for (let hi of baseballInfo.player) {
    for (let aaa of hi.history) {
      if (b.includes(aaa) && hi.year >= 5) {
        test.push(hi.name);
        break;
      } else {
      }
    }
  }

  console.log(test.join(","));
}

console.log("Q2. 현재 수도권(서울, 수원) 팀인 선수들의 경력의 총 합");
{
  let ho = [];

  for (let h of baseballInfo.team) {
    if (h.home == "서울" || h.home == "수원") {
      ho.push(h.name);
    }
  }
  // console.log(ho); // -> 팀의 주소가 수도권인 팀의 이름

  let hopl = [];
  for (let p of baseballInfo.player) {
    if (p.team == "베어스" || p.team == "위즈" || p.team == "트윈스") {
      hopl.push(p.year);
    }
  }
  //  console.log(hopl); // -> 수도권 팀인 선수들의 경력

  let result2 = 0;

  for (let r = 0; r < hopl.length; r++) {
    result2 += hopl[r];
  }
  console.log(result2); //-> 경력들의 총 합
}

console.log("Q3. 가장 많은 선수들이 거쳐간 팀의 순위");
{
  let te = [];

  for (let t of baseballInfo.player) {
    for (let tt of t.history) {
      te.push(tt);
    }
  }
  // console.log(te);

  let same = [];
  for (let ss of te) {
    if (same[ss]) {
      same[ss]++;
    } else {
      same[ss] = 1;
    }
    //console.log(same);
  }

  let result3;
  for (let res of baseballInfo.team) {
    if (res.name == "이글스") {
      result3 = res.ranking;
    }
  }
  console.log("순위는 " + result3 + " 입니다");
}
