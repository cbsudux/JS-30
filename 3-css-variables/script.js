// let spacingSlider = document.querySelector('.spacing-input')
// let blurSlider = document.querySelector('.blur-input')
// let baseColorSlider = document.querySelector('.base-color-input')

// spacingSlider.addEventListener('change', () => {
//     value = spacingSlider.value
//     console.log(value)
// })

const styleVariables = getComputedStyle(document.body)

let controls = document.querySelectorAll('.sliders input')

function handleUpdate(e) {
    suffix = this.dataset.sizing || ''

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(input => input.addEventListener('change', handleUpdate))