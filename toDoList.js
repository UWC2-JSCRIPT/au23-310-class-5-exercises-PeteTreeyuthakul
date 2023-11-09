// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

const todayListEl = document.getElementsByClassName('today-list')

todayListEl[0].addEventListener('click',e=>{
  
  if(e.target.className !== 'today-list'){
    if(e.target.className === 'delete'){
     e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }else if(e.target.className === 'Up-order'){
      moveUpOrder(e)
    }else if(e.target.className === 'Down-order'){
      moveDownOrder(e)
    }else{
     e.target.setAttribute('class', 'done')
    }
  }
});

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  // Finish function here

  const todayListEl = document.getElementsByClassName('today-list')
  let newLiEl = document.createElement('li')
  let newLiElSpan = document.createElement('span')
  newLiElSpan.innerText = text+' '
  let newLiElA = document.createElement('a')
  newLiElA.className = 'delete'
  newLiElA.innerText = 'Delete'
  newLiEl.appendChild(newLiElSpan)
  newLiEl.appendChild(newLiElA)

  //For Move order
  const buttonUp = document.createElement('button')
  buttonUp.className = 'Up-order'
  buttonUp.innerText ='Up'
  const buttonDown =document.createElement('button')
  buttonDown.className ='Down-order'
  buttonDown.innerText ='Down'
  newLiEl.appendChild(buttonUp)    
  newLiEl.appendChild(buttonDown) 

  todayListEl[0].appendChild(newLiEl)

};

const AddEl = document.getElementsByClassName('add-item')
AddEl[0].addEventListener('click',addListItem)

//Move order

const moveUpOrder = function (e){
  const allList = document.getElementsByTagName('li')
  for(let i =0; i<allList.length; i++){
    let listSpan = document.getElementsByTagName('span')
    if(listSpan[i].innerText === e.target.parentNode.children[0].innerText){ 
      let text1 = listSpan[i].innerText
      listSpan[i].innerText = listSpan[i-1].innerText
      listSpan[i-1].innerText = text1 

      let class1 = allList[i].className
      allList[i].className = allList[i-1].className
      allList[i-1].className = class1
      break;
    }
  }
}
const moveDownOrder = function (e){
  const allList = document.getElementsByTagName('li')
  for(let i =0; i<allList.length; i++){
    let listSpan = document.getElementsByTagName('span')
    if(listSpan[i].innerText === e.target.parentNode.children[0].innerText){ 
      let text1 = listSpan[i+1].innerText
      listSpan[i+1].innerText = listSpan[i].innerText
      listSpan[i].innerText = text1
 
      let class1 = allList[i+1].className
      allList[i+1].className = allList[i].className
      allList[i].className = class1 
      break;
    }
  }
}


