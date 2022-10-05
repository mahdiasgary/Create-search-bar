const productDom = document.querySelector(".products-center");




const filters={
    setFilters:""
}

function renderProuducts(_products,_filter){

const filteredProducts=_products.filter((prudut)=>{
    return prudut.title.toLowerCase()
    .includes(_filter.setFilters.toLowerCase())
});
productDom.innerHTML="";


}