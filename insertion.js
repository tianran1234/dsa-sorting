function insertionSort(arr) {
    let i = 1;
    
    while (i < arr.length) {
        let j = 0;
        while (j < i) {
            if (arr[i] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            j++;
        }
        i++;
    }
    return arr;
}

module.exports = insertionSort;