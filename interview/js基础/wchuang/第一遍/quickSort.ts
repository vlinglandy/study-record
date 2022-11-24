function swap(arr: any,l: any,r: any){
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
}

function quickSort(arr: any,l: any,r: any){
    if(l < r){
        let seed = Math.floor(Math.random() * (r - l))
        swap(arr, r, l + seed)
        let min = l - 1, max = r, mid = l

        while(mid < max){
            if(arr[mid] <= arr[r]){
                swap(arr, mid++, ++min)
            }else{
                swap(arr,mid, --max)
            }
        }

        swap(arr, mid, r)
        quickSort(arr,l,min)
        quickSort(arr,mid,r)
    }
}
let a = [1, 34, 2, 3]
quickSort(a, 0, 3)
console.log(a);
