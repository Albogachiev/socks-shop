const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration(props) {
  return (
    <Layout>
      <script defer src="js/registrationPublicScript.js"></script>
      <div className="formLOGorREG">
        <form method="POST" action="/registration" className='formReg'>
          <div className="welcome_text"> REGISTRATION</div>
          <div className="registration mb-3">
            <label htmlFor="exampleInputName" className="form-label">Your name</label>
            <input type="text" name="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
          </div>
          <div className="registration registrationTrue" mb-3>
            <label htmlFor="exampleInputEmail1" className="form-label">Your Email</label>
            <input  type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="registration mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            <br />
            <button type="submit" className="btn btn-primary">SIGN UP</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
