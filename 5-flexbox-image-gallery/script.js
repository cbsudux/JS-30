// Get panel that's clicked
// Add open active and open class to them

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', (e) => {
        console.log(e.currentTarget)

        panel.classList.toggle('open')
        panel.classList.toggle('open-active')

    })
})




