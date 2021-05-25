// $(document).ready(function() {
//     $('#sidebarCollapse').on('click', function() {
//         $('#sidebar').toggleClass('active');
//         $(this).toggleClass('active');
//     });
// });
// $(".sidebar-link").click(function () {
//   // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
//   if ($(this).hasClass("active")) {
//     $(".sidebar-link").removeClass("active");
//   }
//   // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
//   else {
//     $(".sidebar-link").removeClass("active");
//     $(this).addClass("active");
//   }
// });
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) { console.log(section.attributes.id)
        var currentId = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);
      
    }
  });
};

var removeAllActiveClasses = function () {
    document.querySelectorAll("nav a").forEach((el) => {
      el.classList.remove("active");
    });
  };

var addActiveClass = function(id) {

 // console.log(id);
 var selector = `nav a[href="#${id}"]`;
 document.querySelector(selector).classList.add("active");

}
var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
 

        $(document).ready(function() {
            $('#sidebarCollapse').on('click', function() {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });