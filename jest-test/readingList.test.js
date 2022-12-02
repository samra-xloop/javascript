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

const readingList = require('./readingList');

describe('checking', ()=>{
    test('this is the empty list', ()=>{
        let cut= new readingList()
        expect(cut.getBooks()).toBe(0);
    })
})

