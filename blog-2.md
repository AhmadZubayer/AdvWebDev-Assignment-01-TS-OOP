# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Generics refers to dynamically generalize something. In typescript Generics generalizes a function or a component that can be used with different types and data structures. It works as a placeholder and functions as a reusable component that serves similar functions with different types.

The following code examples breifly explains the importance of generics in terms of resusability:

```typescript
const createArrWithStr = (val : string) => [val];
const createArrWithNum = (val : number) => [val];
const createArrWithUserObj = (value: {name: string, age: number}) => {
    return [value];
}
```

In the above code snippet, the goal is to coverts simple numbers or strings to arrays of their respective types. The problem is for a similar task , two different function has to be written,  which is not ideal in thems of reusablility.

The following can be done using generics. A single function is created which creates an array of the inputs types,  regardless of their types.

```typescript
const createArrWthGeneric =<T> (val:T) => {
    return [val];
}
const arrStr = createArrWthGeneric<string>("TypeScript");
const arrNum = createArrWthGeneric<number>(23);
```

In terms of more complex data structure, Generics makes things more simpler.  In the following code snippet the goal is to create a function that combines student information altogether. But the problem arises when different student objects can contain different properties, which requires creating seperate interfaces for each object.

```typescript
const addStudentInfo = (studentInfo: StudentWithSemester | StudentWithCgpa) => {
    return {
        course: "CSC: 1221",
        ...studentInfo
    };
}

interface StudentWithSemester {
    id: number;
    name: string;
    semester: number;
}

interface StudentWithCgpa {
    id: number;
    name: string;
    cgpa: number;
}
const student1 = { id: 54734, name: "Ahmad Zubayer", semester: 9 };
const student2 = { id: 64710, name: "Naveed", cgpa: 3.99 };

const result1 = addStudentInfo(student1);
const result2 = addStudentInfo(student2);
```

The above implementation is not ideal. It significantly increases the lines of code by adding unnecessary repititive code blocks.

The same task can be done by using Generics which creates a dynamically general format for objects of different properties and implements the function.

```typescript
const addStudentInfo = <T>(studentInfo : T) => {
    return {
        course : "CSC: 1221",
        ...studentInfo
    };
}

const student1 = {
    id : 54734, 
    name : "Ahmad Zubayer",
    semester : 9
}
const student2 = {
    id : 64710,
    name : "Naveed",
    cgpa: 3.99
}

const result1 = addStudentInfo(student1);
const result2 = addStudentInfo(student2);
```

So Generics significantly reduced repetitive code blocks by dynamically generalizing components and functions regardless of the data structures passed in.
