const React = require('react');

module.exports = function Layout({ user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <link rel="stylesheet" href="./css/normalize.css" />
        <link rel="stylesheet" href="./css/publicStyles.css" />
        <link rel="stylesheet" href="./css/generatorStyles.css" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
        <script defer src="https://smtpjs.com/v3/smtp.js">
        </script>
        <title>enjoy socks</title>
      </head>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                {' '}
                <img src="./images/socks.jpg" alt="" width={35} />
                {' '}
                Main page
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  {user ? (
                    null

                  ) : (
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/login">SIGN IN</a>
                    </li>
                  )}

                  {user ? (
                    null
                  ) : (
                    <li className="nav-item">
                      <a className="nav-link" href="/registration">SIGN UP</a>
                    </li>
                  )}
                  <li className="nav-item" />
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      FAVORITES / CART
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/favorites">
                          Favorites
                          {' '}
                          <img src="./images/star.jpg" width={20} alt="" />
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/cart">
                          Cart
                          {' '}
                          <img src="./images/cart.png" width={15} alt="" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  {user ? (
                    <li className="nav-item">
                      <a className="nav-link" href="/logout">EXIT</a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
};
