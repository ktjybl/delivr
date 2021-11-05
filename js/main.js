const buttonAuth=document.querySelector('.button-auth');
const buttonOut=document.querySelector('.button-out');
const userName=document.querySelector('.user-name');
const modalAuth=document.querySelector('.modal-auth');
const logInForm=document.getElementById('logInForm');
const inputLogin=document.getElementById('login');
const inputPassword=document.getElementById('password');

const login=(user)=>{
    buttonAuth.style.display='none';
    buttonOut.style.display='flex';
    userName.style.display='flex';
    userName.textContent=user.login;
    modalAuth.classList.remove('is-open');

};

const logout=()=>{
     buttonAuth.style.display='flex';
    buttonOut.style.display='none';
    userName.style.display='none';
    userName.textContent='';
    modalAuth.classList.remove('is-open');
    localStorage.removeItem('user');
};

buttonOut.addEventListener('click', ()=>{
      logout();
});


buttonAuth.addEventListener('click', ()=>{
      modalAuth.classList.add('is-open');
});

modalAuth.addEventListener('click', event=>{
     event.preventDefault();
     const target=event.target;
     if(target.classList.contains('close-auth')){
      modalAuth.classList.remove('is-open');
};
 
});

logInForm.addEventListener('submit', event=>{
    event.preventDefault();
    
  const user={
    login:inputLogin.value,
    password:inputPassword.value
  }
  localStorage.setItem('user', JSON.stringify(user));

if(localStorage.getItem('user')){
   login(JSON.parse(localStorage.getItem('user')));
}
  login(user);
});
