const myColor = document.querySelector(".color");
const myFon = document.querySelector(".fon")
const myPrints = document.querySelector(".prints")

const favcart = document.querySelector(".socksimg")

favcart.addEventListener('click', async (e) => {
  if (e.target.id == 'toFavorites') {
    const colorName = myColor.name;
    const fonName = myFon.name;
    const printsName = myPrints.name;

    const obj = { colorName, fonName, printsName };
    const response = await fetch('/addFavorite', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  }
})
