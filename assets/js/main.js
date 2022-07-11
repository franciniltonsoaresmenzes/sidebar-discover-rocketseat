// SHOW MENU

const nav = document.getElementById('nav'),
      toggle = document.getElementById('toggle'),
      item = document.querySelectorAll('.item'),
      main = document.getElementById('main'),
      buscar = document.getElementById('buscar')

buscar.addEventListener('click', showMenu)

toggle.addEventListener('click', showMenu)

function showMenu() {
  nav.classList.toggle('show')
  item.forEach(l => l.classList.toggle('none'))
  main.classList.toggle('left')
}
