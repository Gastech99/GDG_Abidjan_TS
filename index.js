var toto = "Sidi va à l'école";
console.log(toto);
// Les types primitives en TypeScript
var age = 20;
var firsName = "Djimo";
var nullablee = null;
var undec = undefined;
var isClosed = true;
// Les types non primitives en TypeScript
var users = ["Toto"];
var users2 = ["Tata"];
var contact = {
    id: 1,
    nom: "Gassama",
    prenom: "Djimo",
    age: 25,
    phone: "+221779818854",
};
var agent = {
    id: 1,
    nom: "Gassama",
    prenom: "Djimo",
    age: 25,
    phone: "+221779818854",
};
// Les fonctions en TypeScript
function somme(a, b) {
    return a + b;
}
somme(10, 5);
var Student = /** @class */ (function () {
    function Student(Name, LastName) {
        this.Name = Name;
        this.LastName = LastName;
    }
    Student.prototype.getName = function () {
        return this.Name;
    };
    Student.prototype.setName = function (Name) {
        this.Name = Name;
    };
    return Student;
}());
var student_1 = new Student("PAPA", "SANTO");
console.log(student_1);
