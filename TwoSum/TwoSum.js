/**
    The TwoSum problem
    First solution, I came up is a brute force storing all combinations of Sum & then finding it
    Second Solution, find the new target by substracting the ith element from target & search.


    Create random array => randomArray = Array.from({length: 3000}, () => Math.floor(Math.random() * 3000));
    console.time("MyLabel"); runFn() & console.timeEnd("MyLabel");  => to measure time taken
    const t2 = performance.now(); runFn(); const t3 = performance.now();  =>  (t3 - t2)ms => time taken

*/

class TwoSum{

    storeNumbers= [];
    storeNumber(no){
        this.storeNumbers.push(no);
    }

    storeArray(inputArray){
        this.storeNumbers = [...inputArray];
    }

    /**
     * 1. Solution
     * the resulting array will contain duplicate entries after traversing like 0..1  0..2, 1..2 now 2..1
     * Size of the array created is n * (n-1)
     */
     
    
    result = [];
    bruteForceTest(target){
        for(let i = 0; i < this.storeNumbers.length; i++){
            for(let j = 1; j < this.storeNumbers.length; j ++){
                if(i != j)
                        this.result.push(this.storeNumbers[i] + this.storeNumbers[j]);
            }
        }
        console.log('resulting array which is of grows exponentially ...............', this.result);

        return this.result.indexOf(target) != -1;
    }

    // # 2. Solution
    test(target){
        var isTargetFound = false;
        for (let index = 0; index < this.storeNumbers.length; index++) {
            const element = this.storeNumbers[index];
            let myNewTarget = target - element;
            isTargetFound = this.storeNumbers.indexOf(myNewTarget) != -1;
            if(isTargetFound){
                break;
            }        
        }
        return isTargetFound;
    }

}

var twoSum = new TwoSum();

twoSum.storeArray([1,5,7,9,11]);

twoSum.storeNumber(3);
twoSum.storeNumber(2);
twoSum.storeNumber(13);
twoSum.storeNumber(11);
twoSum.storeNumber(9);


if(twoSum.test(15)){
    console.log('Match found....');
}else{
    console.log('No Match found....');
}



if(twoSum.bruteForceTest(10)){
    console.log('Match found....');
}else{
    console.log('No Match found....');
}


// TEST Performance

var randomArray = Array.from({length: 3000}, () => Math.floor(Math.random() * 3000));


let startTime = performance.now();
twoSum.storeArray(randomArray);
twoSum.bruteForceTest((randomArray[669] + randomArray[1669]));
let endTime = performance.now();
console.log("Call to doSomething took " + (endTime - startTime) + " milliseconds.");



startTime = performance.now();
twoSum.storeArray(randomArray);
twoSum.test((randomArray[669] + randomArray[1669]));
endTime = performance.now();
console.log("Call to doSomething took " + (endTime - startTime) + " milliseconds.");