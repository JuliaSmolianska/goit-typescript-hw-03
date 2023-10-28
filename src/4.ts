class Key {
  constructor() {}

  getKey(): Key {
    return this;
  }
}

class MyHouse {
  private key: Key;
  private isDoorOpen: boolean;

  constructor(key: Key) {
    this.key = key;
    this.isDoorOpen = false;
  }

  openDoor(personKey: Key) {
    if (personKey === this.key) {
      this.isDoorOpen = true;
      console.log("The door is open");
    } else {
      console.log("The key does not valid!");
    }
  }

  comeIn(person: Person) {
    if (this.isDoorOpen) {
      console.log(`${person.getName()}, you are inside the house.`);
    } else {
      console.log("Firstly you need to open the door");
    }
  }
}

class Person {
  private key: Key;
  private name: string;

  constructor(key: Key, name: string = "Tonny Tim") {
    this.key = key;
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getKey(): Key {
    return this.key;
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
