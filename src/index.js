import '../src/assets/js/vendor/ie11CustomProperties.js'
import './assets/scss/index.scss'

const themeSwitch = document.getElementById('checkbox')
themeSwitch.addEventListener('change', function (e) {
  document.querySelector('body').classList.toggle('secondary-theme')
})
