function findMaxSubarray(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxEndingHere + arr[i]) {
            maxEndingHere = arr[i];
            tempStart = i;
        } else {
            maxEndingHere = maxEndingHere + arr[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum: maxSoFar,
        subarray: arr.slice(start, end + 1),
        start: start,
        end: end
    };
}

// Приклад використання:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSubarray(arr));
// Результат: { maxSum: 6, subarray: [4, -1, 2, 1], start: 3, end: 6 }



function addLargeNumbers(num1, num2) {
    const maxLength = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');
    
    let carry = 0;
    let result = '';
    
    for (let i = maxLength - 1; i >= 0; i--) {
        const digit1 = parseInt(num1[i]) || 0;
        const digit2 = parseInt(num2[i]) || 0;
        const sum = digit1 + digit2 + carry;
        
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    
    if (carry > 0) {
        result = carry + result;
    }
    
    return result;
}

// Приклад використання:
console.log(addLargeNumbers('999999999999999', '1'));
// Результат: '1000000000000000'



function arrayDifference(arr1, arr2) {
    const countMap = new Map();
    arr1.forEach(item => {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    });
    
    arr2.forEach(item => {
        if (countMap.has(item)) {
            const count = countMap.get(item);
            if (count === 1) {
                countMap.delete(item);
            } else {
                countMap.set(item, count - 1);
            }
        }
    });
    
    const result = [];
    countMap.forEach((count, item) => {
        for (let i = 0; i < count; i++) {
            result.push(item);
        }
    });
    
    return result;
}

const arr1 = [1, 2, 2, 2, 3, 4, 5];
const arr2 = [2, 3, 3, 4];
console.log(arrayDifference(arr1, arr2));
// Результат: [1, 2, 2, 5]