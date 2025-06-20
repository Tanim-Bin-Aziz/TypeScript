{
  // union types
  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "B+" | "AB+";
  };

  const user1: User = {
    name: "Tanim Bin Aziz",
    email: "tanimbinaziz145@gmail.com",
    gender: "male",
    bloodGroup: "A+",
  };

  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDev = FrontendDev & BackendDev;

  const fullstackDev: FullstackDev = {
    skills: ["HTML", "CSS", "JS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
