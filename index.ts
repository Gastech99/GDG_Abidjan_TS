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
