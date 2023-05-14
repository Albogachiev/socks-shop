
const socks = document.querySelector(".btns");
const fons = document.querySelector(".btnsfon")
const logos = document.querySelector(".printbtns")
const reset = document.querySelector(".socksimg")

const color = document.querySelector("#color");
const fon = document.querySelector("#fon")
const logo = document.querySelector("#logo")


socks.addEventListener('click', (e) => {
  const selectedId = e.target.id
  const colorKey = {
    white: '<img className="color" name="white" src="/images/generatorFiles/colorSocks/original.png" alt="" />',
    black: '<img className="color" name="black" src="/images/generatorFiles/colorSocks/black.png" alt="" />',
    yello: '<img className="color" name="yello" name="yello" src="/images/generatorFiles/colorSocks/yello.png" alt="" />',
    violet: '<img className="color" name="violet" src="/images/generatorFiles/colorSocks/violet.png" alt="" />',
    pink: '<img className="color" name="pink" src="/images/generatorFiles/colorSocks/pink.png" alt="" />',
    blue: '<img className="color" name="blue" src="/images/generatorFiles/colorSocks/blue.png" alt="" />',
    green: '<img className="color" name="green" src="/images/generatorFiles/colorSocks/green.png" alt="" />'
  }
  let resColor
  for (let i in colorKey) {
    if (i == selectedId) {
      resColor = colorKey[i]
    }
  }
  color.innerHTML = resColor
})

fons.addEventListener('click', (e) => {
  const selectedId = e.target.id
  const fonKey = {
    triangle: '<img className="fon" name="triangle" src="/images/generatorFiles/colorSocks/triangl.png" alt="" />',
    dots: '<img className="fon" name="dots" src="/images/generatorFiles/colorSocks/dots.png" alt="" />',
    sky: '<img className="fon" name="sky" src="/images/generatorFiles/colorSocks/sky.png" alt="" />',
    geometry: '<img className="fon" name="geometry" src="/images/generatorFiles/colorSocks/geometry.png" alt="" />',
    skyInvert: '<img className="fon" name="skyInvert" src="/images/generatorFiles/colorSocks/skyInvert.png" alt="" />',
    geometryInvert: '<img className="fon" name="geometryInvert" src="/images/generatorFiles/colorSocks/geometryInvert.png" alt="" />',
    triangleInvert: '<img className="fon" name="triangleInvert" src="/images/generatorFiles/colorSocks/trianglInvert.png" alt="" />'
  }
  let resFon
  for (let i in fonKey) {
    if (i == selectedId) {
      resFon = fonKey[i]
    }
  }
  fon.innerHTML = resFon
})

logos.addEventListener('click', (e) => {
  const selectedId = e.target.id
  const logoKey = {
    cactus: '<img className="prints" name="cactus" src="/images/generatorFiles/colorSocks/cactus.png" alt="" />',
    yoda: '<img className="prints" name="yoda" src="/images/generatorFiles/colorSocks/yoda.png" alt="" />',
    duck: '<img className="prints" name="duck" src="/images/generatorFiles/colorSocks/duck.png" alt="" />',
    rum: '<img className="prints" name="rum" src="/images/generatorFiles/colorSocks/rum.png" alt="" />'
  }
  let resLogo;
  for (let i in logoKey) {
    if (i == selectedId) {
      resLogo = logoKey[i]
    }
  }
  logo.innerHTML = resLogo
})

reset.addEventListener('click', (e) => {
  if (e.target.id === "btnReset") {
    console.log('условие норм')
    color.innerHTML = '<img src="/images/generatorFiles/colorSocks/original.png" alt="" />'
    fon.innerHTML = ''
    logo.innerHTML = ''
  }
})
