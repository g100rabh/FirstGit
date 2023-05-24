let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event 
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);

// Add item 
function addItem(event){
    event.preventDefault();
    
    // get input value

    let newItem = document.getElementById('item').value;

    //******** adding input value from 2nd input box */
    let space = document.createTextNode(' '); // adding space
    let newItem2 = document.getElementById('itemDes').value;

    // create new li element
    let li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(space);
    li.appendChild(document.createTextNode(newItem2));

    // Create delete button
    let deleteBtn = document.createElement('button');
    
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    // add Edit button 
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

// filter items
function filterItems(event){
    // convert text to lowercase
    let text = event.target.value.toLowerCase();
    // Get lis
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.textContent;      // just removing firstChild for filtering from itemDes let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


let items = document.querySelectorAll('.list-group-item');
    items.forEach(function(items){
        let editBtn = document.createElement('button');
        editBtn.className = "edit btn-light btn-sm float-right";
        editBtn.appendChild(document.createTextNode('Edit'));
        items.appendChild(editBtn);
    });
