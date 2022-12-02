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
        return this.listOfBooks.length;
    }
    addBook(bookObj,dateRead, rating){

        this.listOfBooks.push({bookObj,dateRead,rating})
    }
    numberRead(){}
}


cut=new ReadingList()
console.log(cut.getBooks())
module.exports= ReadingList
