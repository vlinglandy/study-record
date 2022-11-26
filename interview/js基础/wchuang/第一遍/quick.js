function swap(arr, l, r){
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
}

function quickSort(arr, l, r){
    if(l < r){
        let seed = l + Math.floor(Math.random() * (r - l + 1))
        swap(arr, r, seed)
        let min = l - 1, max = r, mid = l
        console.log(arr);
        while(mid < max){
            if(arr[mid] < arr[r]){
                swap(arr, mid++, ++min)
            }else if(arr[mid] > arr[r]){
                swap(arr, mid, --max)
            }else mid++
        }

        swap(arr, max, r)
        quickSort(arr,l,min)
        quickSort(arr,mid,r)
    }
}
let a = [1, 34, 2, 3]
quickSort(a, 0, 3)
console.log(a);
