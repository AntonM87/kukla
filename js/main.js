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
        autoplayTimeout: 5000,
        dots:true
    });
});

;(function () {
    var brandsContainer = document.querySelector('.brands-container');

    document.getElementById('allBrands').addEventListener('click', function () {
        brandsContainer.classList.toggle('brands-container-h400');
        brandsContainer.parentNode.classList.toggle('brands-h800');
    });


    var pixelPerfectBG = document.getElementById('pixelPerfectBG');
    var cursor = document.getElementById('cursor');

    cursor.addEventListener('click', function (e) {
        var target = e.target;
        if (target.innerHTML == 'OFF') {
            target.innerHTML = 'ON';
            pixelPerfectBG.style.display = 'none';
        }
        else if (target.innerHTML == 'ON'){
            target.innerHTML = 'OFF';
            pixelPerfectBG.style.display = 'inline';
        }
        if(target.innerHTML == '1'){
            pixelPerfectBG.style.opacity = 1;
        }
        if(target.innerHTML == '0.75'){
            pixelPerfectBG.style.opacity = 0.75;
        }
        if(target.innerHTML == '0.5'){
            pixelPerfectBG.style.opacity = 0.5;
        }
        if(target.innerHTML == '0.25'){
            pixelPerfectBG.style.opacity = 0.25;
        }
    })

})();