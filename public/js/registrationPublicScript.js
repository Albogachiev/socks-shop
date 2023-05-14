const formReg = document.querySelector('.formReg');
const mailDiv = document.querySelector('.registrationTrue');

formReg.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (name && email && password) {
    const obj = { name, email, password };
    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    if (result.emailExists) {
      const error = document.createElement('div');
      error.innerHTML = '<div class="mb-3" class="registration"> <label htmlFor="exampleInputEmail1" class="form-label">Your Email</label> <input  type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> Этот адрес уже используется </div>';
      mailDiv.innerHTML = '';
      mailDiv.appendChild(error);
    } else {
      window.location.href = '/';
    }
  } else {
    alert('Fill in all the fields');
  }
});
