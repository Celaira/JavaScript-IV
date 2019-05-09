// CODE here for your Lambda Classes

/* `lambda-classes` - We need a roster of Lambda School personnel. Build it!

* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

```js
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
```

#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(teacherAttribs) {
        super(teacherAttribs);
        this.specialty = teacherAttribs.specialty; // What they teach
        this.favLanguage = teacherAttribs.favLanguage; // Language they code in
        this.catchPhrase = teacherAttribs.catchPhrase; // Something they say often
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}.`;
    }

    scoring(student, grade) {
            if(student.grade === 100) {
               return `${student.name}'s grade is now ${student.grade = student.grade - Math.floor(Math.random() * 100)}`;
            } else if(student.grade < 100) {
                return `${student.name}'s grade is now ${student.grade = student.grade + Math.floor(Math.random() * 10)}`;
            }
        }
}


class Student extends Person {
    constructor(studentAttribs) {
        super(studentAttribs);
        this.previousBackground = studentAttribs.previousBackground;
        this.className = studentAttribs.className;
        this.favSubjects = studentAttribs.favSubjects;
        this.grade = studentAttribs.grade;
    }
    listsSubjects(subject1, subject2, subject3) {
        return `My favorite subjects are ${subject1}, ${subject2}, and ${subject3}.`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has started begun the sprint challenge on ${subject}.`;
    }

    graduate(student, grade) {
        if(student.grade >= 70) {
            return `${student.name} graduated!`;
        } else if(student.grade < 70) {
            return `${student.name} has entered the flex program.`;
        }
    }
}

class projectManager extends Instructor {
    constructor(pmAttribs) {
        super(pmAttribs);
        this.gradClassName = pmAttribs.gradClassName;
        this.favInstructor = pmAttribs.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standby time!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const velma = new Instructor ({
    name: 'Velma',
    location: 'Coolsville',
    age: 30,
    favLanguage: 'CSS',
    specialty: 'Redux',
    catchPhrase: 'Jinkies!'
});

const jer = new projectManager({
    name: 'Jeremiah',
    location: 'Denver',
    age: 27,
    gradClassName: 'Web17',
    favInstructor: 'Fred'
});

const dan = new projectManager({
    name: 'Dan',
    location: 'California',
    age: 30,
    gradClassName: 'Web12',
    favInstructor: 'Velma',
});

const jason = new Student({
    name: 'Jason',
    location: 'San Fransisco',
    age: 28,
    previousBackground: 'Nurse',
    className: 'Web20',
    grade: 100,
    favSubjects: ['JavaScript', 'CSS', 'React', 'HTML']
});

const morgan = new Student({
    name: 'Morgan',
    location: 'Virginia',
    age: 22,
    previousBackground: 'Accountant',
    className: 'Web21',
    grade: 100,
    favSubjects: ['JavaScript', 'CSS', 'React', 'HTML']
});

console.log(morgan.speak());
console.log(morgan.PRAssignment(morgan.favSubjects[0]));
console.log(velma.speak());
console.log(fred.grade(morgan, morgan.favSubjects[0]));
console.log(jason.sprintChallenge(jason.favSubjects[2]));
console.log(jason.listsSubjects(...jason.favSubjects));
console.log(jer.standUp('#Web20-Jeremiah'));
console.log(dan.debugsCode(jason, ...jason.favSubjects))
console.log(dan.scoring(morgan, morgan.grade));
console.log(velma.scoring(morgan, morgan.grade));
console.log(morgan.graduate(morgan, morgan.grade));