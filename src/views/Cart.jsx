const React = require('react');
const Layout = require('./Layout');
const FormOrder = require('./FormOrder');



module.exports = function Cart ({user, userCart}) {
  console.log("8", userCart);
  return (
    <Layout user={user}>
    <div className='container bg-light text-dark bg-opacity-75'>
       <div className='text-center'>Cart</div>
       <form className="row g-3 " method='post' action='/cart'>
    {userCart.map((el) => (
      <div className="form-check" key={el.id}>
          <input  data-nosok={`Носок ${el.id}: цвет: ${el.color} узор:${el.pattern} принт: ${el.print}`} className="form-check-input" type="checkbox" id="gridCheck" />
        <div name="nosok"> Носок {el.id}: цвет: {el.color} узор:{el.pattern} принт: {el.print} </div>
        </div>
))}
        

      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Name</label>
        <input type="text" name="name" className="form-control" id="inputPassword4" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input name="email" type="email" className="form-control" id="inputEmail4" />
      </div>

      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
        </div>
      </div>
      <div className="col-6">
        <button type="submit" className="btn btn-primary">Make an order</button>
      </div>
    </form>
      {/* <FormOrder/>  */}
    
      </div>
    
      </Layout>
  )
}

