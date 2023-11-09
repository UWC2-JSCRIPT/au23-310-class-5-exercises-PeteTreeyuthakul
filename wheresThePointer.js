// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const table = document.getElementsByTagName('table')

table[0].addEventListener('click', e =>{
    let event = e.target
    event.innerText =`${e.clientX},${e.clientY}`
})