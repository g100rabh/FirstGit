let form = document.getElementById('addForm');
let itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event 
itemList.addEventListener('click', removeItem);

// Add item 
function addItem(event){
    event.preventDefault();
    
    // get input value

    let newItem = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    let deleteBtn = document.createElement('button');
    
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    let editBtn = document.createElement('button');

    editBtn.className = "edit btn-light btn-sm float-right";
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    itemList.appendChild(li);
}

// Remove Item 
function removeItem(event){
    if(event.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


