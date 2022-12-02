//const sum =require('./sum');

// describe('addTwoNumvers', ()=>{
//    test('adds 1 and 2 to equal 3', ()=>{
 //       expect(sum(1,2),3), toBe(3);
 //   });
    // test('1 and 2 make 3', ()=> {
    //     //Arrange 
    //     const argA=1;
    //     const argB=2;
    //     const answer=3;
    //     //Act
    //     const result =sum(argA, argB);
    //     //Assert 
    //     expect(result).toBe(answer));
    // })
// })


//Given that I visit the site, when I first start, I expect my list to be empty.


const Book = require('./Book');
const readingList = require('./readingList');

describe('checking', ()=>{
    test('this is the empty list', ()=>{
        let cut= new readingList()
        expect(cut.getBooks()).toBe(0);
    })

    test(
        'if i add one book it should return length 1',
        ()=>{
            //Arrange
            let cut= new readingList()
            let book=new Book('The Happiness of Alchemy','Al-Ghazi',50,1300)
            //Act
            cut.addBook(book,'November 13,2022',5)
            //Assert 
            expect(cut.getBooks()).toBe(1);
        }

    
    )
})



