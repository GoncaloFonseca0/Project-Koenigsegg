let cars = [
  {
    id: 1,
    Brand: "koenigsegg",
    Model: "Gemera",
    Price: 2000000,
    Discount: 5,
    Image:
      "https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/1920x1400/azure/2022-03/DSC04041-Edit%20copy%203juu.png?h=4d26ff52&itok=MUo6t6IX",
  },
  {
    id: 2,
    Brand: "koenigsegg",
    Model: "Jesko",
    Price: 2500000,
    Discount: 5,
    Image:
      "https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/1920x1400/azure/2022-04/Pre-series%20Jesko%202.jpg?h=053a0b09&itok=uNbJxASB",
  },
  {
    id: 3,
    Brand: "koenigsegg",
    Model: "Jesko Absolut",
    Price: 3500000,
    Discount: 5,
    Image:
      "https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/1920x1400/azure/2022-03/Koenigsegg%20Jesko%20Absolut%20Header%20V3.png?h=6ca15b42&itok=gnzttTIF",
  },
  {
    id: 4,
    Brand: "koenigsegg",
    Model: "cc850",
    Price: 4500000,
    Discount: 5,
    Image:
      "https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/1920x1400/azure/2022-08/10_1.jpg?h=6aca2864&itok=zNXUu4W0",
  },
];

function calculatePriceWithDiscount(product) {
  return product.Price * (1 - product.Discount / 100);
}

cars.forEach((cars) => {
  let element = document.createElement("div");
  element.innerHTML = `
      <div class="carName${cars.id}"
      <div class="car-img">
      <img src="${cars.Image}" style="width: 200px"/>
      </div>
      <div><label>Name: </label><span>${cars.Model}</span></div>
      <div><label>Brand: </label><span>${cars.Brand}</span></div>
      <div><label>Price: </label> <s>${cars.Price}€</s> <span></div>
      <div><label>Discount: </label><span>${cars.Discount}%</span></div>
      </div>
      <div> 
      <button onclick="addToCart('${cars.id}')" onchange="carTotal()">Add to Cart</button>
      <div>
      </div>
  
      <br>
      `;
  document.querySelector(".product-cars").appendChild(element);
});

let carTotal = 0;

function addToCart(productId) {
  let product = cars.find((product) => product.id == productId);
  carTotal = carTotal + calculatePriceWithDiscount(product);
  document.querySelector("addTocart").appendChild(div);
}

function myFunction() {}
