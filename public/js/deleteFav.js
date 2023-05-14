const favoriteSock = document.querySelector('.mainCardDiv');

favoriteSock.addEventListener('click', async (event) => {
  if (event.target.tagName === 'BUTTON') {
    const { id } = event.target;
    const response = await fetch('/deleteFav', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (response.status === 200) {
      favoriteSock.removeChild(event.target.parentNode.parentNode);
    }
  }
});
