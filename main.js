

var buttons = document.querySelectorAll('.list .delete');

buttons.forEach(function(button){
button.addEventListener('click',function(e){
    var li = e.target.parentElement;
    //li.parentNode.removeChild(li);
    li.parentNode.removeChild(li);
})
}
);


var list = document.querySelector('.list ul');

var addForm = document.forms['forms'];
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    var value = addForm.querySelector("input[type ='text']").value;
   
   
    var li = document.createElement('li');
    var bookName = document.createElement('span');
    var delBook = document.createElement('span');

  
  
   

    delBook.textContent = 'delete';
    bookName.textContent= value;

    bookName.classList.add('name');
    delBook.classList.add('delete');

    li.appendChild(bookName);
    li.appendChild(delBook);
    list.appendChild(li);

});


var hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if(hideBox.checked){
        list.style.display = 'none'
    }else {
        list.style.display = 'initial';
    }
})


var searching = document.forms['search'].querySelector('input');
searching.addEventListener('keyup',function(e){
    var term = e.target.value.toLowerCase();
    var books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        var title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) !=-1){
            book.style.display = 'normal';
        }else{
            book.style.display = 'none';
        }
    })
});

var tabs = document.querySelector('.tabs');
var panels = document.querySelectorAll('.panel');
tabs.addEventListener('click',function(e){
    if(e.target.tagName  == 'LI'){
        var targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel==targetPanel){
                panel.classList.add('active');
            }else{
                panel.classList.remove('active');
            }

        })
    
    }
})













// var h2 = document.querySelector('.title');
// h2.addEventListener('click', function(x){
//     console.log(x.target);
//     console.log(x);
// })


// var head)= document.querySelector('.header');
// head.querySelector('p').innerHTML += '<br> to cool for everyone to see'



// var head = document.querySelector('.header');
// console.log(head.parentElement.parentNode);


// var wrap = document.querySelectorAll('.list li');
// wrap.forEach(function(item){
//     console.log(item.textContent);
// })
// console.log(item);



// var titles= document.getElementsByClassName('title');
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item){
//     console.log(item)
// })



// document.getElementById('body').innerHTML= 'red';
// document.getElementById('body').style.color = 'red';
// document.getElementById('body').style.backgroundColor = 'yellow';