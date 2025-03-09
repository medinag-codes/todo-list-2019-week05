// Create a todo list where you can add and delete items, check items off as complete, and rearrange items. have a running count of unchecked todo items

// Create an ordered list
    // Add item to your todo list (ordered list)
        // Create an array to hold the items on your todo list
            //  let toDoList = []
        // Create an input in HTML where you can write your next item 
        // create a submit button in HTML
            // Add a new item to the next index position in the array
        // save to the browser

// create a #done button
    // add an event listener 
        // if(document.querySelector('#done') === true){cross item off the list}
        // else 
// create a #delete button
    // Remove item from your todo list
        // add an event listener document.querySelector('#delete')
        // if(document.querySelector('#delete') === true){delete item from the list}
        // else 

// Rearrange imporance of items 




// create a form in html
// create input in html
// create submit button html
// create div for list in html
    // type task into input
        // document.quertSelector('input') = 
    // add event listener to the submit button
        // on click, 
            // if something in input
                // create li 
                // append to the ul 
            // else
        // clear input field add ''

// create clear completed button html
    // add event listener to the submit button
        // on click li.remove()

// create clear all button html
    // add event listener to the submit button
        // on click li.remove()




// user can enter text and click a button


    // add eventListener calls functon addToList()
    // function addToList()
        // get toDo out of input
        // create li
            // add toDO to innerText
        // create ul
            // append li to ul or ol
        // clear input
// user text added to list

// user can see list of items




// variables
let input = document.querySelector('#inputToDo')
let toDoList = document.querySelector('#toDoList')

// Event Listeners
document.querySelector('#add').addEventListener('click', addToList)
// document.querySelector('#add').addEventListener('keydown', pressEnterToAdd)
// document.querySelector('#clearAll').addEventListener('click', clearAll)


function addToList(){
    if(input.value === ''){
        alert("Please insert a to-do item")
    }else{
        let li = document.createElement('li')
        li.innerHTML = input.value.trim()
        toDoList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input.value = ''
    saveData()
}

// function pressEnterToAdd(){
//     if(keydown.key ===  'Enter' || keydown.key === 'Return'){
//         keydown.preventDefault()
//         addToList()
//     }
// }

// function clearAll(){
//     document.querySelector('li').value = " "
//     console.log('hello world')
// }


// toggle the checkbox
toDoList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// Save the list to the browser
function saveData(){
    localStorage.setItem('data', toDoList.innerHTML)
}

function showData(){
    toDoList.innerHTML = localStorage.getItem('data')
}
showData()

