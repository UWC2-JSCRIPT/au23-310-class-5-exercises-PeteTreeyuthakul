// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const newaEl = document.createElement('a')
newaEl.innerText = 'Buy Now!'
newaEl.id = 'cta'
const mainNode = document.getElementsByTagName('main')
mainNode[0].appendChild(newaEl)


// Access (read) the data-color attribute of the <img>,
// log to the console
const imgEl = document.getElementsByTagName('img')
console.log(imgEl[0].dataset.color)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const thirdLiEl = document.getElementsByTagName('li')[2]
thirdLiEl.className = 'highlight'

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const tagP =document.getElementsByTagName('p')
mainNode[0].removeChild(tagP[0])