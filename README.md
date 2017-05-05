# permutation

## hàm chuyển vị trí các phần tử
```
    let swap = (array, x, y) => {
    let tmp = array[x]
    array[x] = array[y]
    array[y] = tmp
}

```
## vòng lặp gọi đệ quy
```
        for (let i = 1; i <= n; i += 1) {
            permutation(array, n - 1)
            if (n % 2) {
                var j = 1
            } else {
                var j = i
            }
            swap(array, j - 1, n - 1)
        }

```