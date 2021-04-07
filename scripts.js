    $(document).ready(function(){


        $("#nonsmoking").css("border","2px solid black");
       /* $('[data-toggle="tooltip"]').tooltip();*/
        $("#smoking").hover(function(){
            $("#smoking").css("border","2px solid black");
            $("#nonsmoking").css("border","none");
        });
        $("#nonsmoking").hover(function(){
            $("#nonsmoking").css("border","2px solid black");
            $("#smoking").css("border","none");
        });

      $('#mycarousel').on('slid', '', function () {
            alert('slid');
        });
        $('.carousel').carousel({
            interval: 2000
        })
         $("#mycarousel").carousel( { interval: 2000 } );
            $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
            $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
            $("#carouselButton").click(function(){
                    
            });
           $(document).on('click',"#carouselButton",function(){
                
                console.log($("#carouselButton").children());
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
           $("#openlogin").click(function(){
                
                $("#loginModal").modal("show");
            });
           $("#openlogin1").click(function(){
                
                $("#loginModal").modal("show");
            });
            $(".close").click(function(){
                
                $("#loginModal").modal("hide");
            });
            $("#reservation").click(function(){
                
                $("#loginModalReserve").modal("show");
            });
           
            $(".close").click(function(){
                
                $("#loginModal").modal("hide");

                
                $("#loginModalReserve").modal("hide");
            });
            
    });
    

