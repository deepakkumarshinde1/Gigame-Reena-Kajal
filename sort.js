// bubble sort [10,2,5,3,7,1] => i = 0 , j = 0 , j+1 = 1
// [2,10,5,3,7,1]  => i = 0 , j = 1 , j+1 = 2
// [2,5,10,3,7,1]  => i = 0 , j = 2 , j+1 = 3
// [2,5,3,10,7,1]  => i = 0 , j = 3 , j+1 = 4
// [2,5,3,7,10,1]  => i = 0 , j = 4 , j+1 = 5
// [2,5,3,7,1,10]  => i = 0 , j = 5 , j+1 = 6

// [2,5,3,7,1,10]  => i = 1 , j = 0 , j+1 = 6 , 6-5-1 = 0
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// insertion sort [10,2,5,3,7,1] => i = 1 , j = -1  , n = 6 , key = 2
// [2,10,5,3,7,1] => i = 2 , key = 5 , j=0
// [2,5,10,3,7,1] => i = 3 , key = 3 , j=0
// [2,3,5,10,7,1] => i = 4 , key = 7 , j=2
// [2,3,5,7,10,1] => i = 5 , key = 1 , j=4
// [1,2,3,5,7,10]Performance Hooks And HOC
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
// merge sort [1,2,3,5,7,10]
//      =>  mid = 3 , left = [2,5,10] , right = [1,3,7]
//      Left
//       [10,2,5] =>  mid = 1 , left = [10] , right = [2,5]
//          [2,5] =>  mid = 0 , left = [2] , right = [5]
//      Right
//       [3,7,1] =>  mid = 1 , left = [3] , right = [1,7]
//       [7,1] =>  mid = 0 , left = [7] , right = [1]
let arr = [10, 2, 5, 3, 7, 1];
mergeSort(arr);
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  console.log(left, right);
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(slice(i)).concat(slice(j)); // [2,5]
}

// quick sort  [10,2,5,3,7,1] => p = 3 , left = [2,1] => [1,2] , right = [10,5,7] => [5,7,10] => [...[1,2], 3, ...[5,7,10]] => [1,2,3,5,7,10]
//   left
//     [2,1] => p = 1 , left = [] , right = [2]   =>[ ...[], 1 , ...[2]] => [1,2]
//   right
//     [10,5,7] => p = 5 , left = [] , right = [10,7] => [7,10] => [...[], 5, ...[7,10]]  => [5,7,10]
//       [7,10] => p = 7 , left = [] , right = [10] => [...[], 7, ...[10]] => [7,10]
let arr1 = [10, 2, 5, 3, 7, 1];
quickSort(arr1);
function quickSort(arr) {
  console.log(arr);
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = arr.filter((x) => x < pivot);
  let right = arr.filter((x) => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// heap sort
