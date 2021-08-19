$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
      $('navbar').addClass('sticky');
        }
        else{
            $('navbar').removeClass('sticky');

        }
        if(this.scroll > 5000){
            $('.scroll_up_btn').addClass("show");
        }
        else{
        $('.scroll_up_btn').removeClass("show");
            };
        });
        $(".scroll_up_btn").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#elementToScrollToClass").offset().top
            }, 2000);
        });
        });
