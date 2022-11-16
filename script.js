let n = +(prompt('Nhập số lượng mảng'))

function addElement() {
    let arr1 = [];
    for(let i = 0; i < n; i++) {
        let input = +(prompt('Nhập số:'))
        arr1.push(input);
    }
    return arr1
}

let array = addElement();

function minArray(arr) {
    if(arr.length == 0)
        return -1;
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

 alert('Số nhỏ nhất là: ' + minArray(array));