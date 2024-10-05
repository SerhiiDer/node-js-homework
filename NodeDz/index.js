const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);

}

function recursiveIteration(array, index = 0) { 
    if (index === array.length) {
        return;
    }

    console.log(array[index])
    recursiveIteratuin(array, index + 1)
}