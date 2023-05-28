import './style.css'

const testcard = [
  {
    name: "test1",
    price: 100,
    imgBackGround: "manu-third-shirt"
    // url: "";
  },
  {
    name: "test2",
    price: 200,
    imgBackGround: "manu-third-shirt-kid"
  },
  {
    name: "test3",
    price: 300,
    imgBackGround: "manu-rashford-shirt"
  },
  {
    name: "test4",
    price: 400,
    imgBackGround: "manu-training-stadium"
  }
  
]

testcard.map(card => {
  let card_value = document.createElement("div");
  card_value.innerHTML = `
  <div class="setcard-product">
      <div class="picture-card-product" id="${card.imgBackGround}"></div>
      <div class="section-text-product">
        <div class="name-product">
          <p class="set-font-size-product">${card.name}</p>
        </div>
        <div class="buy-product">
          <p class="set-font-size-product">${card.price}</p>
          <button type="button">Buy</button>
        </div>
      </div>
    </div>
  `;
  document.querySelector(".products-section").appendChild(card_value)
})

