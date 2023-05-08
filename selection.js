function selectionSort(arr) {
    let i = 0;
    while (i < arr.length) {
        let min = arr[i];
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                arr[j] = arr[i];
                arr[i] = min;
            }
        }
        i++;
    }
    return arr;
}

module.exports = selectionSort;