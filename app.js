const productDom = document.querySelector(".products-center");
const searchInput = document.querySelector("input");
const filterBoxButtons = document.querySelectorAll("a");

let allProducts = [];
const filters = {
  setFilters: "",
};

document.addEventListener("DOMContentLoaded", () => {
  axios.get("http://localhost:3000/items").then((res) => {
    allProducts = res.data;
    renderProuducts(allProducts, filters);
  });
});

function renderProuducts(_products, _filter) {
  const filteredProducts = _products.filter((prudut) => {
    return prudut.title
      .toLowerCase()
      .includes(_filter.setFilters.toLowerCase());
  });
  productDom.innerHTML = "";
  filteredProducts.forEach((filteredProduct) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    
    <img src="${filteredProduct.imageUrl}" alt="" class="pro-img">
    <div class="desk">
        <span>$${filteredProduct.price}</span>
        <span>${filteredProduct.title}</span>
    </div>

`;
    productDom.appendChild(productDiv);
  });
}

searchInput.addEventListener("input", (e) => {
  filters.setFilters = e.target.value;
  renderProuducts(allProducts, filters);
});

filterBoxButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.dataset.filter);
    filters.setFilters = e.target.dataset.filter;
    renderProuducts(allProducts, filters);
  });
});
