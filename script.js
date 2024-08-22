$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }

        }
    });
    // Typing animation
    var typed = new Typed(".typing" ,{
        strings:["Web Designer","Web Developer","Python Developer","Front-end Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    var typed = new Typed(".typing-2" ,{
        strings:["Web Designer","Web Developer","Python Developer","Front-end Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
});

// Sending email from javascript

// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");
// function sendemail(){
//     const bodyMessage = "Full Name" + fullname + "<br/>" + 
//     "Email" + email + "<br/>" + 
//     "Subject" + subject + "<br/>" 
//     + "Message" + message + "<br/>"
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "mohitvermag75@gmail.com",
//         Password : "9BFE37AF150E9D61B36AD7B7A812C237A96C",
//         To : 'mohitvermag75@gmail.com',
//         From : "mohitvermag75@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message => alert(message)
//     );
// }
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendemail();
// });