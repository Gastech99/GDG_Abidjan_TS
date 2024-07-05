let toto = "Sidi va à l'école";
console.log(toto);

// Les types primitives en TypeScript
const age: number = 20;
const firsName: string = "Djimo";
const nullablee: null = null;
const undec = undefined;
const isClosed: boolean = true;

// Les types non primitives en TypeScript
const users: string[] = ["Toto"];
const users2: Array<string> = ["Tata"];

const contact: {
  id: number;
  nom: string;
  prenom: string;
  age: number;
  phone: string;
} = {
  id: 1,
  nom: "Gassama",
  prenom: "Djimo",
  age: 25,
  phone: "+221779818854",
};

// Utilisation de l'interface en TypeScript
interface User {
  id: number;
  nom: string;
  prenom: string;
  age: number;
  phone: string;
}

const agent: User = {
  id: 1,
  nom: "Gassama",
  prenom: "Djimo",
  age: 25,
  phone: "+221779818854",
};

// Les fonctions en TypeScript
function somme(a: number, b: number): number {
  return a + b;
}

somme(10, 5);

class Student {
  private Name: string;
  private LastName: string;

  constructor(Name: string, LastName: string) {
    this.Name = Name;
    this.LastName = LastName;
  }

  getName(): string {
    return this.Name;
  }

  setName(Name: string): void {
    this.Name = Name;
  }
}

const student_1 = new Student("PAPA", "SANTO");
console.log(student_1);
