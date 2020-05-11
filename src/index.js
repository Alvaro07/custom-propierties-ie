import '../src/assets/js/vendor/ie11CustomProperties.js'
import './assets/scss/index.scss'

document.getElementById('checkbox').addEventListener('change', function (e) {
  document.querySelector('body').classList.toggle('secondary-theme')
})

document.getElementById('changePrimary').addEventListener('click', function () {
  document.querySelector('body').style.setProperty('--primary-color', 'black')
})
