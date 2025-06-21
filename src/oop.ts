{
  //
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
  }
  const dog = new Animal("German Sherpard Bhai", "Dog", "Ghew Ghew");
  const cat = new Animal("maow", "cat", "meow meow");
  ///
}
