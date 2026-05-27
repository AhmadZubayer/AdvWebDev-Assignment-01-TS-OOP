// PROBLEM 1
const filterEvenNumbers = (numArr: number[]) => {
    return numArr.filter((num) => num % 2 ===0 );
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// PROBLEM 2
const reverseString = (str: string) => {
    let reverseStr : string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}
console.log(reverseString("typescript"));

// PROBLEM 3
type StringOrNumber = string | number;
const checkType = (val : StringOrNumber) => {
    if (typeof val === "string") {
        return "String";
    } else if (typeof val === "number") {
        return "Number";
    } else {
        return "Unknown";
    }
}
console.log(checkType(42));

// PROBLEM 4
const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "age"));

// PROBLEM 05
interface Book {
    title : string;
    author : string;
    publishedYear : number;
}

const toggleReadStatus = (bookInfo: Book) => {
  return {
    ...bookInfo,
    isRead: true
  };
};

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));

// PROBLEM 06
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


const student = new Student("Alice", 20, "A");
const result = student.getDetails();

console.log(result); 

// PROBLEM 07
const getIntersection = (arr1: number[], arr2: number[]) => {
  let newArr : number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

const result7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(result7);