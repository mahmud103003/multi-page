$(function(){
    // banner slider

$('.banner-slider').slick({
    prevArrow: '.b-prev',
    nextArrow: '.b-next',
});

// testimonial

$('.exp-slider').slick({
    prevArrow: false,
    nextArrow: false,
    asNavFor: '.man-slider',
});
$('.man-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.exp-slider',
    autoplay: true,
    prevArrow: '.l-prev',
    nextArrow: '.r-next',
    centerMode: true,
    centerPadding: '0px',
});
$('.img-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '.prev',
    nextArrow: '.next',
    centerMode: true,
    centerPadding: '0px',
});
$('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '.bl-prev',
    nextArrow: '.bl-next',
    centerMode: true,
    centerPadding: '0px',
});
// project
$('.counter').counterUp({
    delay: 100,
    time: 5000,
});
new WOW().init();

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});



var colorSheets = [
    {
        color: "#ff8400",
        title: "Switch to Default",
        href: "./css/color-default.css"
    },
    {
        color: "blue",
        title: "Switch to blue",
        href: "./css/color-blue.css"
    },
    {
        color: "red",
        title: "Switch to red",
        href: "./css/color-red.css"
    },
    {
        color: "green",
        title: "Switch to green",
        href: "./css/color-green.css"
    },
    {
        color: "pink",
        title: "Switch to pink",
        href: "./css/color-pink.css"
    },
    {
        color: " #1febe0",
        title: "Switch to  #1febe0",
        href: "./css/color-#1febe0.css"
    },
    // {
    //     color: " #1febe0",
    //     title: "Switch to  #1febe0",
    //     href: "./css/color- #1febe0.css"
    // },
    // {
    //     color: " #1febe0",
    //     title: "Switch to  #1febe0",
    //     href: "./css/color- #1febe0.css"
    // },
    // {
    //     color: " #1febe0",
    //     title: "Switch to  #1febe0",
    //     href: "./css/color- #1febe0.css"
    // },
    // {
    //     color: " #1febe0",
    //     title: "Switch to  #1febe0",
    //     href: "./css/color- #1febe0.css"
    // },
    // {
    //     color: " #1febe0",
    //     title: "Switch to  #1febe0",
    //     href: "./css/color- #1febe0.css"
    // },
    // {
    //     color: " #1febe0",
    //     title: "Switch to  #1febe0",
    //     href: "./css/color- #1febe0.css"
    // },
    // {
    //     color: " #1febe0",
    //     title: "Switch to  #1febe0",
    //     href: "./css/color- #1febe0.css"
    // },
    // {
    //     color: " #1febe0",
    //     title: "Switch to  #1febe0",
    //     href: "./css/color- #1febe0.css"
    // },
    // {
    //     color: " #1febe0",
    //     title: "Switch to  #1febe0",
    //     href: "./css/color- #1febe0.css"
    // },
];

ColorSwitcher.init(colorSheets);

})

