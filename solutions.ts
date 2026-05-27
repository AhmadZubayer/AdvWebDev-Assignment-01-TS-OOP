const filterEvenNumbers = (numArr: number[]) => {
    return numArr.filter((num) => num % 2 === 0);
}


const reverseString = (str: string) => {
    let reverseStr: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}


type StringOrNumber = string | number;
const checkType = (val: StringOrNumber) => {
    if (typeof val === "string") {
        return "String";
    }  else {
        return "Number";
    }
}


const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};


interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (bookInfo: Book) => {
    return {
        ...bookInfo,
        isRead: true
    };
};


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const getIntersection = (arr1: number[], arr2: number[]) => {
    let newArr: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}

