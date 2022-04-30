let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList

        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('reset')) {
            count = 0;
        } else if (styles.contains('increase')) {
            count++
        }

        if (count < 0) {
            value.style.color = '#f76161'
        } else if (count > 0) {
            value.style.color = '#61f766'
        } else {
            value.style.color = 'white'
        }

        value.textContent = count
    })
})