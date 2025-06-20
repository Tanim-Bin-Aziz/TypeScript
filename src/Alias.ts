{
  //type alias
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Tanim Bin Aziz",
    age: 24,
    gender: "male",
    contactNo: "01719000060",
    address: "Bangladesh",
  };

  const student2: Student = {
    name: "chomok",
    age: 25,
    gender: "male",
    address: "bangladesh",
  };

  const student3: Student = {
    name: "shipon",
    age: 23,
    gender: "male",
    address: "bangladesh",
  };
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
