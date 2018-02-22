function main(){

    console.log(simpleAdding(5));
    console.log(simpleAdding(16));
    console.log(simpleAdding(20));
    console.log(simpleAdding(100));
    console.log(simpleAdding(1000));

    console.log(factorial(10));
    console.log(factorial(5));
    console.log(factorial(16));

    var arr=[35,40,95,16,77,108,90];
    console.log(findLargest(arr));
    console.log(findSmallest(arr));
    console.log(findMean(arr));
    console.log(findRange(arr));
    console.log(contains(arr,55));
}

/*Adds every number leading up to that number together. E.g. simpleAdding(4)
  returns 10 (because 1+2+3+4 = 10).
  Use the for loop to go through every number.*/
  function simpleAdding(number){
      var result = 0;
      for (i=0;i<=number;i++){
        result=result+i;
      }
      return result;
  }

/*Returns the factorial of the given number. E.g. factorial(4)
  returns 24 (because 4*3*2*1 = 24)
  Use the for loop to go through every number.*/
  function factorial(number){
      var result=1;
      for (i=1;i<=number;i++){
        result=result*i;
      }
      return result;

  }

  // Accepts an array of numbers and returns the largest value in the array.
  function findLargest(numberset){
    var max = 0;
    for (i=0;i<numberset.length;i++){
      if (numberset[i]>max){
        max=numberset[i];
      }
    }
    return max;
  }

  // Accepts an array of numbers and returns the smallest value in the array.
  function findSmallest(numberset){
    var min=numberset[0];
    for (i=0;i<numberset.length;i++){
      if (numberset[i]<min){
        min=numberset[i];
      }
    }
    return min;
  }

  function findMean(numberset){
    var sum=0;
    for (i=0;i<numberset.length;i++){
      sum = sum+numberset[i];
    }
    return sum/numberset.length;
  }

  function findRange(numberset){
    var small=findSmallest(numberset);
    var big=findLargest(numberset);
    var range = big - small;
    return range;
  }

  function contains(numberset,x){
    for (i=0;i<numberset.length;i++){
      if (numberset[i]===x){
        return true;
      }
    }
    if (numberset[i] !=x){
      return false;
    }
  }
