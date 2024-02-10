let count=0;
let value=document.getElementById('value')
let buttons=document.querySelectorAll('.btn');
buttons.forEach((x)=>{
x.addEventListener('click',(e)=>{
if(e.currentTarget.classList.contains("increase"))
{
count++;
}
else if(e.currentTarget.classList.contains("increase"))
{
count++;
}
else if(e.currentTarget.classList.contains("reset"))
{
count=0;
}
if(count>0){
value.style.backgroundColor="green"
}

if(count===0){
value.style.backgroundColor="red"
}
value.textContent=count

})

})




