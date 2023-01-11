var userList = [
    {
      firstName: "은비",
      lastName: "정",
      email: "jeong@gmail.com",
    },
    {
      firstName: "해린",
      lastName: "강",
      email: "kang@gmail.com",
    },
    {
      firstName: "루다",
      lastName: "이",
      email: "lee@gmail.com",
    },
    {
      firstName: "레이",
      lastName: "김",
      email: "kim@gmail.com",
    },
  ];

  var userList2 = userList.map(function(user){ // map은 기존값 그대로 출려하는게 아니라 특정한 값만 특정하여 출력할 ㅜ 있다
    return {
        fullname : user.lastName + user.firstName,
/*         firstname : user.firstName,
        lastName : user.lastName,
        email : user.email */

    }
  })

  console.log(userList2);