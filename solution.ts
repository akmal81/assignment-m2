
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









const getLength = (input: string | any[]): number => {
    if (typeof input === 'string') {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }

    return 0;
}














class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}















type Books = { title: string, rating: number }

const filterByRating = (arr: Books[]): Books[] => {

    const filteredArr = [...arr]

    return filteredArr.filter((obj) => obj.rating >= 4)
}












interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (arr: IUser[]): IUser[] => {

    const newArr = [...arr];

    const filterActiveUser = newArr.filter((arr: IUser) => arr.isActive === true);

    return filterActiveUser;
}













interface Book {

    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`)
}












const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {

    const result = [...arr1];

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












interface IProduct {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: IProduct[]): number => {
    let totalPrice = 0;
    products.forEach((product: IProduct) => {
        let calculatePrice = product.price * product.quantity

        if (product.discount) {
            let discountedPrice = calculatePrice - calculatePrice * (product.discount/100)
            totalPrice = discountedPrice + totalPrice
        }else{
            totalPrice = calculatePrice +totalPrice
        }

    });
    return totalPrice

}







