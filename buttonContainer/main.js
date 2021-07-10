let btn = document.getElementById('btn5')
let arr = [1, 2, 3, 6, 9, 8, 7, 4]
let ids=[1, 2, 3, 6, 9, 8, 7, 4];
btn.addEventListener('click', function(){
    arr.unshift(arr.pop())
    for (let i = 0; i < arr.length; i++) {
        document.getElementById('btn'+ids[i]).innerHTML = arr[i]
    }
});