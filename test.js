function moveZeros(arr) {
    let temp=[]
    for (let i=0;i<arr.length;i++){
      if(arr[i]==0){
        arr.splice(i,1)
        i=i-1
        temp.push(0)
        }
    
    }
    for(let i of temp){
        arr.push(i)
    }
    console.log(arr)
    return arr
  }
  
  moveZeros([
    'a', 'b', 'c', 'd', 1, 1, 3,
    1,   9,   9,   0,   0, 0, 0,
    0,   0,   0,   0,   0, 0
  ])


//   arr=[2,3,54,6,4]
//   console.log(arr[3])
//   a=arr.splice(2,1)
//   console.log(arr)
//   console.log(arr[3])