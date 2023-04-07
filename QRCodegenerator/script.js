let imgcontainer=document.querySelector("#imgcontainer");
let img=document.querySelector("#img");
let inp=document.querySelector("#inp");
let btn=document.querySelector("#btn");


btn.addEventListener('click',()=>
{
if(inp.value.length>0){
img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inp.value;
imgcontainer.classList.add("showimg");
}
else{
btn.classList.add("shake");
setTimeout(() => {
    btn.classList.remove("shake");
}, 1000);
inp.style.border="1px solid red";
}
});

const removered=()=>
{
    inp.style.border="1px solid blue"
}

