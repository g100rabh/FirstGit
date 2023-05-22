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

//---------------Selectors-------------------------
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

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';


for(let i = 0; i<li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}
li[0].style.color = "rgb(200,200,100)";
li[2].style.color = "rgb(0,255,100)";
li[3].style.color = "rgb(200,25,100)";

for(let i = 0; i<li.length; i++){
    li[i].style.fontWeight = 'bold';
}

// after adding new li element ---
document.getElementsByClassName('list-group-item2')[0].style.listStyle = 'none';
document.getElementsByClassName('list-group-item2')[0].textContent = 'Hello 5';

document.getElementsByTagName('li')[4].textContent = 'Hello 5 by tag';
document.getElementsByTagName('li')[4].style.color = 'rgb(250, 100, 55)';
