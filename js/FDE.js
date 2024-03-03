const btn = document.querySelector('.solve');
const unkA = document.getElementById('numberA');
const unkB = document.getElementById('numberB');
const resultShow = document.querySelector('.result');

btn.addEventListener('click', () => {

    let valA = Number(unkA.value);
    let valB = Number(unkB.value);

    resultShow.textContent = 'x = ' + `${ solver(valA, valB).toFixed(2)}`
})

const solver = (a, b) => {
    let result = -(b / a);
    return result;
}
