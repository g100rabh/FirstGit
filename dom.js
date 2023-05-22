// // console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// ---------------Selectors-------------------------
// 1. Get element by Id.

// console.log(document.getElementById('header-title'));

// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000'

// Get element by class name

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';


// for(let i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }
// items[0].style.color = "rgb(200,200,100)";
// items[2].style.color = "rgb(0,255,100)";
// items[3].style.color = "rgb(200,25,100)";

// for(let i = 0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }


// -Get element by class name ----------------------------------

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';


// for(let i = 0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }
// li[0].style.color = "rgb(200,200,100)";
// li[2].style.color = "rgb(0,255,100)";
// li[3].style.color = "rgb(200,25,100)";

// for(let i = 0; i<li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }

// // after adding new li element ---
// document.getElementsByClassName('list-group-item2')[0].style.listStyle = 'none';
// document.getElementsByClassName('list-group-item2')[0].textContent = 'Hello 5';

// document.getElementsByTagName('li')[4].textContent = 'Hello 5 by tag';
// document.getElementsByTagName('li')[4].style.color = 'rgb(250, 100, 55)';

// after adding new li element ---
// document.getElementsByClassName('list-group-item2')[0].style.listStyle = 'none';
// document.getElementsByClassName('list-group-item2')[0].textContent = 'Hello 5';

// Query Selector ----------------------

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 10px #eead';

// let input = document.querySelector('input');
// input.value = 'Hello World'; 

// let items = document.querySelector('.list-group-item');

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// QuerySelectorAll =---------------------

// let secondItem = document.querySelectorAll('li:nth-child(2)');
// secondItem[0].style.color = 'green';
// secondItem[0].style.fontWeight = 'bold';

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for(let i =0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

//------------------------------
// creating nodes and modifying

// 1. parentElement 
let itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

// 2. lastelementchild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// 3. lastChild

// console.log(itemList.lastChild);

// 4. createChild 



// 5. firstchild element 

// console.log(itemList.firstElementChild);

// 6. firstChild

// console.log(itemList.firstChild);

// 7. next Sibiling

// console.log(itemList.nextSibling);

// 8. next element sibiling 

// console.log(itemList.nextElementSibling);

// 9. perivous sibiling

// console.log(itemList.previousSibling);

// 10. previous element sibiling 

// console.log(itemList.previousElementSibling);

// 11. create element

let newDiv = document.createElement('div');

// add class 
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// 12. Add attribute
newDiv.setAttribute('title', 'Hello Div');

// 13. create text node
let newDivText = document.createTextNode('Hello World');

// 14. append child

newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);