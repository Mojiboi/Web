let counter = Number(document.getElementById("counter-lbl").innerText);
console.log('counter value is :', counter);

function Increase() {
    counter += 1;
    document.getElementById('counter-lbl').textContent = counter;
}

function Decrease() {
    counter>0 ? counter -= 1 : pass;
    document.getElementById('counter-lbl').textContent = counter;
}

function Reset() {
    counter = 0;
    document.getElementById('counter-lbl').textContent = counter;
}