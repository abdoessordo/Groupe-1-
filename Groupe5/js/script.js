$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('fixedHeader');
            
        }else{
            $('header').removeClass('fixedHeader');
        }
        
    });
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('#weightGain').click(function(){
        $(this).toggleClass('bgActive');
        $('#weightLoss').removeClass("bgActive");
    });
    $('#weightLoss').click(function(){
        $(this).toggleClass('bgActive');
        $('#weightGain').removeClass("bgActive");
    });
    $('.motivation').click(function(){
        $(this).toggleClass('bc-orange');
        $(this).children(0).children(0).toggleClass('bc-white');
    });
    // $('#submitPlan').click(function(event){
    //     event.preventDefault();
    // });
        $('#submitBMI').click(function(event){
            let age = $('#ageInput').val();
            let weight = $('#weightInput').val();
            let height = $('#heightInput').val();
            let gender = $('#genderInput').val();
            let bmi = (weight / Math.pow(height*Math.pow(10,-2),2)).toPrecision(4);
            event.preventDefault();
            if(weight <= 0 || height <= 0 || age <= 0 ){
                $('#bmiResult').html('<span>Please Enter A Proper Value</span> ');
            }
            else{
            if(gender == 'Male' ){
                if(bmi < 20){
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Underweight</span> ');
                }else if (bmi<= 25 && bmi>=20){
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Normal</span> ');
                }else if(bmi<= 30 && bmi>=26){
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Overweight</span> ');
                }else if(bmi<= 40 && bmi>=31){
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Obesity</span> ');
                }else {
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Sever Obesity</span> ');
                }
            } else if (gender == 'Female' ){
                if(bmi < 19){
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Underweight</span> ');
                }else if (bmi<= 24 && bmi>=19){
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Normal</span> ');
                }else if(bmi<= 30 && bmi>=25){
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Overweight</span> ');
                }else if(bmi<= 40 && bmi>=31){
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Obesity</span> ');
                }else {
                    $('#bmiResult').html('your bmi is '+bmi+'.. <span>Sever Obesity</span> ');
                }
            } else {
                $('#bmiResult').html('please select ur gender');
            }
        }
        });
         

        var typed = new Typed(".typing", {
            strings: ["نوض <span>تريني</span> نوض "],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        $('#btn1').click(function(event){
            event.preventDefault();
            $('#btn1').toggleClass('btnChecked');
            $('#btn2').removeClass('btnChecked');
            $('#btn3').removeClass('btnChecked');

        });
        $('#btn2').click(function(event){
            event.preventDefault();
            $('#btn1').removeClass('btnChecked');
            $('#btn2').toggleClass('btnChecked');
            $('#btn3').removeClass('btnChecked');

        });
        $('#btn3').click(function(event){
            event.preventDefault();
            $('#btn1').removeClass('btnChecked');
            $('#btn2').removeClass('btnChecked');
            $('#btn3').toggleClass('btnChecked');

        });


        
})