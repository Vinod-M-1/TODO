let btn = document.querySelector("button");
let ul = document.querySelector('ul');
let inp = document.querySelector('input');


btn.addEventListener('click' ,function(){
    let item = document.createElement('li');
    item.innerText = inp.value + ' ';

    let btn = document.createElement('button');
    btn.innerText = 'Completed';
    btn.classList.add('complete');

    item.appendChild(btn);
    ul.appendChild(item);
    
    inp.value="";
})

// let deletebtns = document.querySelectorAll('.delete');
// for(btns of deletebtns){
//     btns.addEventListener('click', function(){
//         let parent = this.par;
        
//     });
// }

ul.addEventListener('click', function(event){
    if(event.target.nodeName == 'BUTTON'){
        // console.log('Button clikced...');
        let listitem = event.target.parentElement;
        // console.log(listitem);
        listitem.remove();
    }else{
        // console.log('Item donot delete...');
    }
    
})