const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
let testBook = new Book("Князев, Василий Васильевич", "Песни Красного звонаря", 1919, 125);
library.addBook(testBook);
console.log(library.findBookBy("releaseDate", 1919).name);
console.log("Количество книг до выдачи: " + library.books.length); 
library.giveBookByName(testBook.name);
console.log("Количество книг после выдачи: " + library.books.length);
testBook.state = 10;
testBook.fix();
library.addBook(testBook);