// reference type --> object
const user: {
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
  readonly comapany: "Programming Hero"; // literal types data fixed data value
} = {
  firstName: "Tanim",
  middleName: "Bin",
  lastName: "Aziz",
  isMarried: true,
  comapany: "Programming Hero",
};

// user.comapany = "ph"; // data cannot be changed bcz readonly fixed syntax used
