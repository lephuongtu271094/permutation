array = []
function xuat() {
    let n = 3
    for (let i = 0; i < n; i++) {
        array[i] = i + 1;
    }
    permutation(array, n)
}
let swap = (array, x, y) => {
    let tmp = array[x]
    array[x] = array[y]
    array[y] = tmp
}
let count = 0;
let permutation = (array, n) => {
    n = n || array.length
    if (n === 1) {
        count++;
        str = count.toString() + '. '
        console.log(str + array);
    } else {
        for (let i = 1; i <= n; i += 1) {
            permutation(array, n - 1)
            if (n % 2) {
                var j = 1
            } else {
                var j = i
            }
            swap(array, j - 1, n - 1)
        }
    }
}
xuat();