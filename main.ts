import inquirer from "inquirer";

class Student {
    name: string
    constructor(n: string) {
        this.name = n
    }
}

class Person {
    students:
        Student[] = []


    addStudent(obj: Student) {
        this.students.push(obj)
    }
}
const persons = new Person()


const programmStart = async (persons: Person) => {
    let exitProgram = false;

    do {
        console.log("Welcome");

        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "With whom would you prefer to converse?",
            choices: ["staff", "student", "exit"]
        });

        if (ans.select === "staff") {
            console.log("You can go to the staff room.");
            console.log("But first, you have to take permission.");
        } else if (ans.select === "student") {
            const studentAns = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student would you like to engage in conversation with?"
            });

            const student = persons.students.find(val => val.name === studentAns.student);
            if (!student) {
                const newStudent = new Student(studentAns.student);
                persons.addStudent(newStudent);
                console.log(`Hello, I am ${newStudent.name} or I am fine.`);
                console.log(persons.students);
            } else {
                console.log(`Hello, I am ${student.name} or I am fine.`);
                console.log(persons.students);
            }
        } else if (ans.select === "exit") {
            console.log("Exiting program...");
            exitProgram = true;
        }

    } while (!exitProgram);
}
programmStart(persons)
