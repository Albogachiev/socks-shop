const formLog = document.querySelector('.formLog');

formLog.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (email && password) {
    const obj = { email, password };
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    if (result.logIn) {
      window.location.href = '/';
    } else if (result.error) {
      alert(result.error);
    } else if (result.notFound) {
      alert(result.notFound);
    }
  } else {
    alert('Fill in all the fields');
  }
});
