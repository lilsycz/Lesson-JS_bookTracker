const library = {
    libraryName: "myLibrary",
    books: [
        {"title": "A Brief History of Humankind", "author": "Yuval Noah Harari", "isRead": true},
        {"title": "Educated: A Memoir", "author": "Tara Westover", "isRead": false},
        {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "isRead": true},
        {"title": "To Kill a Mockingbird", "author": "Harper Lee", "isRead": false}
    ],

    addBook: function() {
        const title  = prompt("Please enter the title of the book you want to add:");
        const author = prompt("Please enter the author of the book you want to add:");
        const isReadInput = prompt("Have you read this book? (yes or no)");
        
        if (isReadInput.toLowerCase() !== "yes" && isReadInput.toLowerCase() !== "no") {
            console.log("Invalid input for read status. Please enter 'yes' or 'no'.");
            return;
        }
        
        const isRead = isReadInput.toLowerCase() === "yes";
        library.books.push({ title,author, isRead});
        console.log(`You have added "${title}" by ${author} to the library.`);
    },

    listBooks: function() {
        console.log(`Books in ${library.libraryName}:`);
        library.books.forEach(function(book) {
            console.log(`- ${book.title} by ${book.author} | ${book.isRead ? 'Read' : 'Not Read'}`);
        });
    },
    markAsRead: function() {
        const title = prompt("Please enter the title of the book you want to mark as read:");
        const book = library.books.find(function(b) {
            return b.title === title;
        });
        if (book) {
            book.isRead = true;
            console.log(`"${title}" has been marked as read.`);
        } else {
            console.log(`Book titled "${title}" not found in the library.`);
        }
    },
    removeBook: function() {
        const title = prompt("Please enter the title of the book you want to remove:");
        const book = library.books.find(function(b) {
            return b.title === title;
        });
        if (book) {
            library.books.splice(library.books.indexOf(book), 1);
            console.log(`You have removed ${title} from the library.`);
        } else {
            console.log(`Book titled ${title} not found.`);
        }
    },
    listUnreadBooks: function() {
        const unread = library.books.filter(function(b) {
            return !b.isRead;
        });
        console.log("Unread Books:");
        unread.forEach(function(book) {
            console.log(`- ${book.title} by ${book.author}`);
        });
    }
}

let running = true;

while (running) {
    const choice = prompt(
        `Book Tracker
        1. Add book
        2. List books
        3. Mark Book as Read
        4. Remove Book
        5. List Unread Books
        6. Exit
        Enter your choice;`
    );

    switch (choice) {
        case '1':
            library.addBook();
            break;
        case '2':
            library.listBooks();
            break;
        case '3':
            library.markAsRead();
            break;
        case '4':
            library.removeBook();
            break;
        case '5':
            library.listUnreadBooks();
            break;
        case '6':
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice. Please try again.");    
        }
}