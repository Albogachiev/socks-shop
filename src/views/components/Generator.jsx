const React = require('react');

module.exports = function Generator() {
  return (
    <>
      <script defer src="js/generatorScripts.js"></script>
      <script defer src="js/CartAndFav.js"></script>

      <div className="generatorBox">
        <div className="generator">
          <div className="generatorhead">
            <h1>Your Socks</h1>
          </div>
          <div className="generatorbody">
            <div className="btns">
              <div id="white" className="btn"></div>
              <div id="black" className="btn"></div>
              <div id="yello" className="btn"></div>
              <div id="violet" className="btn"></div>
              <div id="pink" className="btn"></div>
              <div id="blue" className="btn"></div>
              <div id="green" className="btn"></div>
            </div>

            <div className="socksimg">
              <div id="color" style={{ position: "absolute" }} >
                <img className='color' name="white" src="/images/generatorFiles/colorSocks/original.png" alt="" />
              </div >
              <div id="fon" style={{ position: "absolute" }}>
                <img className="fon" name="triangle" alt="" />
              </div>
              <div id="logo" style={{ position: "absolute" }}>
                <img className="prints" name="duck" alt="" />
              </div>
              <div className="backBTNs">
                <div className="backBut" id="btnReset">Reset</div>
                <div className="backBut" id="toCart">&#128722;</div>
                <div className="backBut" id="toFavorites">&#128153;</div>
              </div>
            </div>

            <div className="btnsfon">
              <div id="triangle" className="btn"></div>
              <div id="dots" className="btn"></div>
              <div id="sky" className="btn"></div>
              <div id="geometry" className="btn"></div>
              <div id="skyInvert" className="btn"></div>
              <div id="geometryInvert" className="btn"></div>
              <div id="triangleInvert" className="btn"></div>
            </div>
          </div>

          <div className="printbtns">
            <div id="cactus" className="prints"></div>
            <div id="yoda" className="prints"></div>
            <div id="duck" className="prints"></div>
            <div id="rum" className="prints"></div>
          </div>
        </div>
      </div>
    </>
  )
}
