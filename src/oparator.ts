{
  //speard oparator
  // rest oparator
  //destructruring

  //learn spread oparator array
  const bro1: string[] = ["tanim", "chomok", "sagor"];
  const bro2: string[] = ["aziz", "shipon", "bishal"];

  bro1.push(...bro2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    rdbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //learn rest oparator
  const greetFriends = (...friends: string[]) => {
    // console.log(`hi ${friends1} ${friends2}${friends3}`);
    friends.forEach((friend: string) => console.log(`hi${friend}`));
  };

  greetFriends("abul", "kabul", "babul");

  //destructuring

  // object destructruing
  const user = {
    id: 60,
    name: {
      firstName: "Tanim",
      middleName: "Bin",
      lastName: "Aziz",
    },
    contactNo: "01719000060",
    address: "Bangladesh",
  };

  const {
    contactNo,
    name: { firstName, middleName, lastName },
  } = user;

  // array destructuring

  const myFriends = ["chomok", "shipon", "bishal", "nadim", "sagor"];

  const [, , bestfriend, ...rest] = myFriends;
}
