app.use(express.static('public'))
const update = document.querySelector('#update-button')
update.addEventListener('click', _ => {
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Md hashim',
        quote: 'lucky'
      })
    })
  })