const React = require('react');
const Layout = require('./Layout');

module.exports = function Login(props) {
  return (
    <Layout>
      <script defer src="js/loginPublicScript.js"></script>
      <div className="formLOGorREG">
        <form method="POST" action="/registration" className="formLog">
          <div className="welcome_text"> LOG IN</div>
          <div className="mb-3 login">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3 login">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            <br />
            <button type="submit" className="btn btn-primary">SIGN IN</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
