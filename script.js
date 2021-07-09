let mainNum = document.querySelector('.numbers').textContent;
document.querySelector('.more').addEventListener('click',  (Event) => {
  event.preventDefault();
  mainNum++
  document.querySelector('.mainNum').textContent = mainNum
})


document.querySelector('.less').addEventListener('click',  (Event) => {
  event.preventDefault();
  mainNum--
  document.querySelector('.mainNum').textContent = mainNum
})