// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const moreinfoEl = document.getElementById('more-info')
moreinfoEl.setAttribute('href', ' ')
moreinfoEl.addEventListener('click',e=>{
  alert("Here's some info")
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const buttonEl = document.getElementById('dog')
buttonEl.addEventListener('click', e=>{
  e.stopPropagation()
  alert('Bow wow!')
})