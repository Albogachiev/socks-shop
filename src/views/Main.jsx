const React = require('react');
const Layout = require('./Layout');
const Generator = require('./components/Generator')
const Test = require('./components/Test')

module.exports = function Main({ user }) {
  return (
    <Layout user={user}>
      {!user ? (
        <>
          <div className="welcome_text_main">
            Самое время быть уникальным!
            {' '}
            <br />
            {' '}
            Смоделируй свою любимую пару носков!
            {' '}
            <br />
            {' '}
            Акция
            {' '}
            <br />
            {' '}
            при покупке 3х пар носков - доставка бесплатно
          </div>
          <div className="card-group">
            <div className="card">
              <img src="./images/color.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">COLOR</h5>
                <p className="card-text">Choose the colour you like!</p>
              </div>
            </div>
            <div className="card">
              <img src="./images/yoda.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">IMAGE</h5>
                <p className="card-text">Choose the image you like!</p>
              </div>
            </div>
            <div className="card">
              <img src="./images/starsAndMoons.png" className="card-img-top png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">BACKGROUND</h5>
                <p className="card-text">Choose the background you like</p>
              </div>
            </div>
          </div>
          <footer>
            <div className="card mb-123456">
              <div className="card2">
                <br />
                <br />
                <h5 className="card-title">FEEDBACK</h5>
                <p className="card-text">
                  info@enjoysocks.ru
                  {' '}
                  <br />
                  {' '}
                  г. Москва, Шоссе Энтузиастов 12 ст2,
                  {' '}
                  <br />
                  {' '}
                  +7 999 666 36 36
                  {' '}
                </p>
              </div>
            </div>
          </footer>

        </>
      ) : <Generator />
      }

    </Layout>
  );
};
