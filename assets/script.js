document.body.style.backgroundColor = '#21212d';

(function() {  
    var nav = $('nav'),
    menu = $('nav h1'),
    main = $('main'),
    open = false,
    hover = false;

    menu.on('click', function() {
    open = !open ? true : false;
    nav.toggleClass('menu-active');
    main.toggleClass('menu-active');
    nav.removeClass('menu-hover');
    main.removeClass('menu-hover');
    console.log(open);
});
    menu.hover( 
        function() {
            if (!open) {
                nav.addClass('menu-hover');
                main.addClass('menu-hover');
            }
        }, function() {
            nav.removeClass('menu-hover');
            main.removeClass('menu-hover');
        }
        
    );
})();


var modal = document.getElementById('myModal');

var img = $('.image-slider');
var modalImg = $("#img1");
console.log(modalImg);
var captionText = document.getElementById("caption");
$('.image-slider').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}