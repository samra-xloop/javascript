// class ReadingList{
//     listOfBooks=[]
//     getBooks(){
//         return this.listOfBooks.length;
//     }
// }


// cut=new ReadingList()
// console.log(cut.getBooks())
// module.exports= ReadingList
const readingList = require('./Book');
class ReadingList{
   
    constructor(){
    this.listOfBooks=[]
    }
    getBooks(){
        getBooksList=[]
        for(let i of this.listOfBooks){
            getBooksList.push(`${i["Book"].title}, ${i["Book"].length} pages, read on ${i["Book"].year}, ${i["rating"]*"*"}`)
        }
        return getBooksList;
    }
    addBook(bookObj,dateRead, rating){

        this.listOfBooks.push({
            "Book":bookObj,
            "dateRead":dateRead,
            "rating":rating
        })
    }
    numberRead(){
        return this.listOfBooks.length;
    }

    removeBook(titleOfBookToBeRemoved){

    }
}


cut=new ReadingList()
console.log(cut.listOfBooks())
module.exports= ReadingList
