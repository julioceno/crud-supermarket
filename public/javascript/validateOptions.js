/*Update*/
function validate(event) {
    const name = document.getElementById('validate-name')
    const url = document.getElementById('validate-url')
    const brand = document.getElementById('validate-brand')
    const price = document.getElementById('validate-price')
    const amount = document.getElementById('validate-amount')


    if (!(name.value) && !(url.value) && !(brand.value) && !(price.value) && !(amount.value)) {
        event.preventDefault()
        document.getElementById('message-error').style.display = "block"
        return
    } else {
        document.getElementById('message-error').style.display = "none"

    }

    if (!(name.value) || !(url.value)|| !(brand.value) || !(price.value) || !(amount.value)) {
        name.removeAttribute("required")
        url.removeAttribute("required")
        brand.removeAttribute("required")
        price.removeAttribute("required")
        amount.removeAttribute("required")
    }
}