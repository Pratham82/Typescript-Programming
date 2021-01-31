function SortArray(arr: any) {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = 0;
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    newArr.push(arr[i]);
  }

  return `Resulting array is ${newArr}`;
}

console.log(SortArray([23, 454, 56, 7, 67, 678, 8]));
