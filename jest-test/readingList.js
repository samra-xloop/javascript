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
    listOfBooks=[]
    getBooks(){
        return this.listOfBooks.length;
    }
    addBook(bookObj,dateRead, rating){
        
    }
}


cut=new ReadingList()
console.log(cut.getBooks())
module.exports= ReadingList
