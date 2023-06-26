$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });




const MyCarousel=document.querySelector('#myCarousel')
// const articleNav=document.querySelector('#article-nav')
const articleNavContent=document.querySelector('#article-nav-content')
// const productNav=document.querySelector('#product-nav')
const productContainer=document.querySelector('#product-container')
const productRightDiv=document.querySelector('#product-right-div')
const productBox=document.querySelector('#product-box')
const divInvisible=document.querySelector('.div-invisible')
const DivInvisibleLi=document.querySelector('.div-invisible li')
const productLeftDiv=document.querySelector('.product-left-div')




document.addEventListener("click", function() {

    MyCarousel.carousel({
        interval: 5000,
        pause: "hover"
    });
});


    // articleNav.click(function () {
    //     $('html, body').animate({
    //         scrollTop: articleNavContent.offset().top
    //     }, 500);
    // });

    // productNav.click(function () {
    //     $('html, body').animate({
    //         scrollTop:productContainer.offset().top
    //     }, 500);
    // });


    


    


productRightDiv.addEventListener("click", function () {
        
    productBox.classList.toggle('compress');
    if (divInvisible.classList.contains("top")) {
        divInvisible.classList.remove("top");
    } else {
        setTimeout(() => {
            divInvisible.classList.add("top");
        }, 1000);
    }

}
);
// DivInvisibleLi.addEventListener("click ", function () {
//         productLeftDiv.classList.remove("active");
//         var itemId = "#" + $(this).getAttribute("for");
//         $(itemId).classList.add("active");
//     });
