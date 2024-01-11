import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmStart = async (persons) => {
    console.log("welcome");
    const ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "how can i help you ?",
        choices: ["staff", "teacher",]
    });
    if (ans.select == "staff") {
        console.log("you can go to the staff room.");
        console.log("but, first you have to take permission");
    }
    if (ans.select == "teacher") { }
};
programmStart(persons);
