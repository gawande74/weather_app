const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
var messageOne = document.querySelector('#message-1')
var messageTwo = document.querySelector('#message-2')


messageOne.textContent = ''
messageTwo.textContent = ''
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    console.log('location')
    const url = '/weather?address=' + location

    messageOne.textContent='loading...'
    fetch(url).then((response) => {
        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = 'data.error'
                messageTwo.textContent = ''
            } else {
                messageOne.textContent = ''
                messageTwo.textContent = 'Location:' + data.location +  ' feelsLike: ' + data.feelslike + ' temperatur: ' + data.temperature
            }
        })
    })

})

