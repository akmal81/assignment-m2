
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10
    }
    else {
        return !value
    }
}


// const ans = formatValue("akmal")
// const ans2 = formatValue(20)
// const ans3 = formatValue(true)

// console.log(ans)
// console.log(ans2)
// console.log(ans3)

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));


//

const getLength = <T>(input: T): number | undefined => {
    if (typeof input === 'string') {
        return input.length as number;
    }
    else if (Array.isArray(input)) {
        return input.length as number
    }
}

// console.log(getLength('akmal'));
// console.log(getLength([10, 20, 30, 40]));


//? 3 ------------------


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());


// !4



type Books = { title: string, rating: number }

const filterByRating = (arr: Books[]): Books[] => {

    const filteredArr = [...arr]

    return filteredArr.filter((obj) => obj.rating >= 4)


}

// const books = [
//     { title: 'Book A', rating: 4.5 },
//     { title: 'Book B', rating: 3.2 },
//     { title: 'Book C', rating: 5.0 },
// ];
// const filterBookByRating = filterByRating(books)

// console.log(filterBookByRating)


// !5
interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (arr: IUser[]): IUser[] => {

    const newArr = [...arr];


    const filterActiveuser = newArr.filter((arr: IUser) => arr.isActive === true);


    return filterActiveuser;
}


// const users = [
//     { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//     { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//     { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// const result = filterActiveUsers(users)

// console.log(result);


// ! 6 

interface Book {

    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`)
}


// const myBook: Book = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     publishedYear: 1925,
//     isAvailable: false,
// };

// printBookDetails(myBook);


// !7 //? not done

const getUniqueValues = (arr1: string[] | number[], arr2: string[] | number[]) => {


    const result = [...arr1];

    // for (let i = 0; i < arr1.length; i++) {
    //     result.push(arr1[i]);
    // }
    // console.log(result)

    for (let i = 0; i < arr2.length; i++) {
        let match = false;

        for (let j = 0; j < result.length; j++) {

            if (arr2[i] === result[j]) {

                match = true;
            }

        }
        if (!match) {
            result.push(arr2[i])
        }
    }

    return result

}


// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));


// 
// !! 8

interface IProduct {
    name: string;
    price: number;
    quantity: number;
    discount?: number
}

const calculateTotalPrice = (arr: IProduct[]): number | undefined => {
    let price = 0;
    if (!arr) {
        return price
    }
    arr.forEach((item: IProduct) => {
        price = item.price*item.quantity + price
    });

    return price
}


// const products = [
//     { name: 'Pen', price: 10, quantity: 2 },
//     { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//     { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));





