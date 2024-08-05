const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

addCardBtn.click()


var list = document.getElementById('myList');

  // Attach event listener to the parent element
  list.addEventListener('click', function(event) {
    // Check if the clicked element is an <li> element
    // if (event.target.tagName === 'LI') {
    //   // Log the text content of the clicked <li> element
    //   console.log('Clicked on: ' + event.target.textContent);
    // }

    console.log(event.target.tagName==='LI'?`${event.target.remove()} console.log("remoed")`:"nope")
  });
