const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const book = getBook(1);
//book;

const { title, author, pages, publicationonDate, genres, hasMovieAdaptation } =
  book;

//console.log(title, author, genres);

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

//console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenre = [...genres, "Epic Fantacy"];
//newGenre;

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1210,
};

//updatedBook;
const summary = `${title} A book which is written by ${author}} `;
summary;

const isBigBook = pages > 1000 ? "Over a thousand" : "Less then thousand";
console.log(`The book has ${isBigBook} pages`);

const getYear = (str) => {
  return str.split("-")[0];
};

console.log(getYear(book.publicationDate));

//Nullish coalescing (??) if left handside value is null or undefined returns right hand side value
//Optional chaining operation (?) is the previous value is null then wont check the next value
const countReview = (book) => {
  const goodReads = book.reviews?.goodReads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + librarything;
};

console.log(`total review is ${countReview(book)} `);


const books = getBooks();

//Map funtion demo
const double = [1, 2, 3, 4].map((el) => {
  return el * 2;
});

//return title of all the books
const titles = books.map((book) => book.title);

titles;

const countReview = (book) => {
  const goodReads = book.reviews?.goodReads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + librarything;
};

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: countReview(book),
}));

essentialData;

//Filter Method of array

const bigBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

console.log(`total big books ${bigBooks.length}`);
console.log(`all  books ${books.length}`);

//filter out adventureBooks
const adventureBooks = books
  .filter((book) => {
    if (book.genres.includes("adventure")) {
      return book;
    }
  })
  .map((book) => book.title);
adventureBooks;

//Reduce method
const allBookPagesCount = books.reduce((sum, book) => sum + book.pages, 0);
allBookPagesCount;

//sort method
const x = [3, 6, 1, 2, 6, 8, 0];
x.sort((a, b) => a - b);
x;

x.sort((a, b) => b - a);
x;

//sort all the book page vise asc
const sortedByPagesInINCR = books
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((book) => ({
    title: book.title,
    pages: book.pages,
  }));
sortedByPagesInINCR;

const sortedByPagesInDEC = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => ({
    title: book.title,
    pages: book.pages,
  }));
sortedByPagesInDEC;

// Add new book to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K Rowling",
};
const booksAfterNew = [...books, newBook];
booksAfterNew;

//Delete book from the array with id = 3
const bookAfterDelete = booksAfterNew.filter((book) => book.id !== 3);
bookAfterDelete;

//Update book object
const booksAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;

//used promice method 
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((json) => console.log(json));
*/

//
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
console.log("HI my name is mehul");
