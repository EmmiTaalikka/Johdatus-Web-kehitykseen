console.log("Assignment 4 is running.");

// PART A
const borrower = {
    id: "A12345",
    name: "Anna",
    age: 21,
    borrowedBooks: ["Dune", "The Hobbit", "The Left Hand of Darkness"],
    email: "anna@example.com",
};

borrower.borrowedBooks.push("Pride and Prejudice");

console.log("Borrower receipt");
console.log(`Name: ${borrower.name}`);
console.log(`Email: ${borrower.email}`);
console.log("Borrowed books:");
for (const book of borrower.borrowedBooks) {
    console.log(`- ${book}`);
}
console.log(`Total number of books: ${borrower.borrowedBooks.length}`);

console.log("-------------------------------");
// PART B
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }

    getAge() {
        return new Date().getFullYear() - this.year;
    }
}

const book1 = new Book("Dune", "Frank Herbert", 1965);
const book2 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book3 = new Book("The Left Hand of Darkness", "Ursula K. Le Guin", 1969);
const books = [book1, book2, book3];


book2.isAvailable = false;

console.log("Book availability");
for (const book of books) {
    console.log(`${book.title}: ${book.isAvailable ? "Available" : "Unavailable"}`);
    console.log(`Age: ${book.getAge()} years`);
}

console.log("-------------------------------");
// PART C
const jsonText = `[
{ "name": "Anna", "loans": 5 },
{ "name": "Matti", "loans": 3 },
{ "name": "Pertti", "loans": 1 },
{ "name": "Joni", "loans": 7 },
{ "name": "Miisa", "loans": 3 },
{ "name": "Matias", "loans": 8 },
{ "name": "Sara", "loans": 4 }
]`;

const loanData = JSON.parse(jsonText);
console.log("Borrower names:", loanData.map((loan) => loan.name));

const totalLoans = loanData.reduce((total, loan) => total + loan.loans, 0);
const averageLoans = totalLoans / loanData.length;
console.log("Average loans:", averageLoans);
console.log("Data converted back to JSON:", JSON.stringify(loanData));

console.log("-------------------------------");
// PART D
function printReceipt() {
    console.log("Receipt printed");
}

function registerLoan() {
    printReceipt();
}

function startLoan() {
    registerLoan();
}

startLoan();

console.log("-------------------------------");
// PART E
function validateLoanDays(days) {
    if (typeof days !== "number") {
        throw new TypeError("Loan days must be a number.");
    }
    if (days < 1 || days > 28) {
        throw new RangeError("Loan days must be between 1 and 28.");
    }
    return days;
}

const loanDayTests = [7, "abc", 0, 29];
for (const days of loanDayTests) {
    try {
        console.log(`Valid loan period: ${validateLoanDays(days)} days`);
    } catch (error) {
        console.log(`Could not validate loan period ${String(days)}: ${error.message}`);
    }
}

try {
    const invoice = JSON.parse(
        '{"invoiceNumber":"INV-1042","customerName":"Kroisos "KP" Pennonen","total":42}',
    );
    console.log(invoice);
} catch (error) {
    console.log(`The invoice data could not be read: ${error.message}`);
}



