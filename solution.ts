const formatValue = (value: string | number | boolean): string | number | boolean => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'number') {
    return value * 10;
  }
  return !value;
};


const getLength = (value: string | any[]): number => {
  if (typeof value === 'string') {
    return value.length;
  }
  return value.length;
};


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}



type RatedItem = { title: string; rating: number };

const filterByRating = (items: RatedItem[]): RatedItem[] => {
  return items.filter(item => item.rating >= 4);
};

type User = { id: number; name: string; email: string; isActive: boolean };

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(user => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`;
};


const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {
  const result: (string | number)[] = [];
  for (const item of arr1) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  for (const item of arr2) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};


type Product = { name: string; price: number; quantity: number; discount?: number };

const calculateTotalPrice = (products: Product[]): number => {
  return products
    .map(product => {
      const base = product.price * product.quantity;
      if (product.discount) {
        return base - (base * product.discount) / 100;
      }
      return base;
    })
    .reduce((sum, current) => sum + current, 0);
};