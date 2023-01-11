var persons = [
    {
      name: "a",
      point: 78,
      city: "서울",
    },
    {
      name: "b",
      point: 92,
      city: "서울",
    },
    {
      name: "c",
      point: 76,
      city: "제주",
    },
    {
      name: "d",
      point: 81,
      city: "서울",
    },
  ];

  var pass = persons.filter(function(el){
    return el.point > 80
  });

  console.log(pass);


  //filter 문제

  var item = [
    {
        name : `버터와플`,
        price : 5000,
        
    },

    {
        name : `아이스티`,
        price : 6000,
        
    },

    {
        name : `포카리`,
        price : 2000,
        
    },

    {
        name : `하리보`,
        price : 3000,
        
    }
  ];

  var wkvksrl = item.filter(function(el){ //필터로 걸러내는 느낌의 문법 function으로 범위를 지정해서 그것대로 출력하게 한다.
    return el.price >= 3000
  })

  console.log(wkvksrl);