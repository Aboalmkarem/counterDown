let h1 = document.getElementById('counter')
let counter = h1.innerText;
function countDown() {
    setTimeout(() => {
        counter = counter - 1;
        console.log(counter);
        h1.innerText = counter;
        if (counter === 0) {
            showCongratulations()
        } else {
            countDown()
        }
    }, 1000) 
}
function showCongratulations() {
    setTimeout(() => {
        window.alert("Congratulations")
        return
    }, 1000);
}

countDown()