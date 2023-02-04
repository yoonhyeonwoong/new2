const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector(".oldpaper h2");
const greeting2=document.querySelector(".oldpaper h3");

function loginEnter(event){
    event.preventDefault();
    const username=loginInput.value;
    localStorage.setItem("user",username);
    loginInput.value="";
    loginForm.classList.add("hidden");
    greeting.innerText=`Hello Mr(s) ${username}`;
    greeting2.innerText=`This is your schedule....`;

}

loginForm.addEventListener("submit",loginEnter);

const savedUsername=localStorage.getItem("user");
if(savedUsername !== null)
{
    loginForm.classList.add("hidden");
    greeting.innerText=`Hello Mr(s) ${savedUsername}`;
    greeting2.innerText=`This is your schedule....`;
}