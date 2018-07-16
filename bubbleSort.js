/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.

var swap = function(a, b, array) {
    if (array[a] > array[b]) {
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
        return array;
    }
    return 0;
}

var bubbleSort = function(array) {
    for (var i = 0; i < array.length; i++) {
        var hasSwaps = 0;
        for (var j = 0; j < array.length - i; j++) {
            if (swap(j, j+1, array)) {
                hasSwaps++;
            }
        }
        if (!hasSwaps) break;
    }
    return array;
};

console.log(bubbleSort([1, 2, 0, 12, 14, 28, 6, 7, 9, 8, 2, 1, 3]));
console.log(bubbleSort([2, 1, 8, 4, 5, 6, 7, 8, 9, 1, 43, 23, 17, 20, 7]));