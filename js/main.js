$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        autoplay: true,
        autoplayTimeout: 1000
    });
});

;(
    function () {
        var brandsContainer = document.querySelector('.brands-container');

        document.getElementById('allBrands').addEventListener('click',function () {
            brandsContainer.classList.toggle('brands-container-h400');
            brandsContainer.parentNode.classList.toggle('brands-h800');
        });
    }
)();