{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  //   const person1: Owner = "bike";
}
