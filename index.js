// Write your code here!
const main = document.getElementById('main')

main.remove()

const newHeader = document.createElement('h1')

newHeader.setAttribute('id', 'victory')

newHeader.innerHTML = "<h1 id='victory'>is the champion</h1>"
console.log(newHeader)