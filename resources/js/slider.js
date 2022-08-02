<!-- Initialize Swiper -->
let paginationImages = [];

$('.swiper-paginate-images').each(function(i, obj) {
    paginationImages.push($(obj).attr('data-img_src'));
});

paginationImages.push('{{adv.getMediumPhotoUrl(image)}}');


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + '<img class="swiper-border" src=' + paginationImages[index] + ' >' + "</div>";
        },
    },
});
