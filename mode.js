/* 
    Refrencing
    1. https://www.youtube.com/watch?v=CUEJkJ9HDbY (code the java Script)
*/

const toggle = document.getElementById('toggleDark');
const body = document.body;

toggle.addEventListener('click', function()
{
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill'))
  {
    body.classList.toggle('dark-mode');
  }
  else
  {
    body.classList.toggle('dark-mode');
  }
});