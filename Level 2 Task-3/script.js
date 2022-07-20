const input =document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click',addList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e){
    const Pending=document.querySelector('.Pending');
    const Completed=document.querySelector('.Completed');
    const newLi = document.createElement('li');
    const doneBtn=document.createElement('button');
    const delBtn=document.createElement('button');

    doneBtn.innerHTML='Done';
    delBtn.innerHTML='Delete';

    if(input.value!==''){
        newLi.textContent=input.value;
        input.value='';
        Pending.appendChild(newLi);
        newLi.appendChild(doneBtn);
        newLi.appendChild(delBtn);
    }
    doneBtn.addEventListener('click',function(){
        const parent=this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        doneBtn.style.display='none';

    });

    delBtn.addEventListener('click',function(){
        const parent=this.parentNode;
        parent.remove();

    });

}