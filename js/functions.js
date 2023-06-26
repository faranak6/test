// import 'bootstrap';
const MyCarousel=document.querySelector('#mycarousel')
const articleNav=document.querySelector('#article-nav')
const articleNavContent=document.querySelector('#article-nav-content')
const productNav=document.querySelector('#product-nav')
const productContainer=document.querySelector('#product-container')
const productRightDiv=document.querySelector('#product-right-div')
const productBox=document.querySelector('#product-box')
const divInvisible=document.querySelector('.div-invisible')
const DivInvisibleLi=document.querySelector('.div-invisible li')
const productLeftDiv=document.querySelector('.product-left-div')

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
// document.addEventListener('DOMContentLoaded',function () {
//    document.querySelector(".owl-carousel").owlCarousel();
//     });


// document.addEventListener('DOMContentLoaded',function () {
//     const carousel = new bootstrap.Carousel('#myCarousel')
//     MyCarousel.carousel({
//         interval: 5000,
//         pause: "hover"
//     });

// });

    // articleNav.addEventListener('click',function () {
    //     document.getElementsByTagName('html, body').animate({
    //         scrollTop: articleNavContent.offset().top
    //     }, 500);
    // });

    // productNav.addEventListener('click',function () {
    //     document.getElementsByTagName('html, body').animate({
    //         scrollTop:productContainer.offset().top
    //     }, 500);
    // });


 
    1

    // DivInvisibleLi.addEventListener("click ", function () {
    //     productLeftDiv.classList.remove("active");
    //     var itemId = "#" + document(this).getAttribute("for");
    //     document(itemId).classList.add("active");
    // });





productRightDiv.addEventListener("click", function () {
    productBox.classList.toggle("compress");
    if (divInvisible.classList.contains("top")) {
        divInvisible.classList.remove("top");
    } else {
        setTimeout(() => {
            divInvisible.classList.add("top");
        }, 1000);
    }
});

// const carousel = new bootstrap.Carousel(MyCarousel, {
//   interval: 2000,
//   wrap: false
// })