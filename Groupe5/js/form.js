
        
    $(document).ready(function(){    
        
        $('#register').click(function(event){
            event.preventDefault();
            let firstNameInput = $('#firstNameInput').val();
            let lastNameInput = $('#lastNameInput').val();
            let emailInput = $('#emailInput').val();
            let phoneInput = $('#phoneInput').val();
            let ageInput = $('#ageInput').val();
            let weightInput = $('#weightInput').val();
            let heightInput = $('#heightInput').val();
            let genderInput = $('#genderInput').val();
            let messageInput = $('#messageInput').val();
            // let motiv1 = "<p>IMPROVING HEALTH</p>";
            // let motiv2 = "<p>BOOSTING IMMUNE SYSTEM</p>";
            // let motiv3 = "<p>LOOKING BETTER</p>";
            // let motiv4 = "<p>BUILDING STRENGTH AND ENDURANCE</p>";
            // let motiv5 = "<p>BOOSTING LIBIDO</p>";
            let weightGain = "Muscle Gain";
            let weightLoss = "Weight Loss";
            let basic = "basic";
            let standard = "standard";
            let premium = "premium";
            let months = $('#months').val();
            
            
            if($('#motivation1').hasClass('bc-orange')){
                var motiv1 = "<p>IMPROVING HEALTH</p>";
            }else{
                var motiv1 = "";
            }
            if($('#motivation2').hasClass('bc-orange')){
                var motiv2 = "<p>BOOSTING IMMUNE SYSTEM</p>";
            }else{
                var motiv2 = "";
            }
            if($('#motivation3').hasClass('bc-orange')){
                 var motiv3 = "<p>LOOKING BETTER</p>";
            }else{
                var motiv3 = "";
            }
            if($('#motivation4').hasClass('bc-orange')){
                var motiv4 = "<p>BUILDING STRENGTH AND ENDURANCE</p>";
            }else{
                var motiv4 = "";
            }
            if($('#motivation5').hasClass('bc-orange')){
                 var motiv5 = "<p>BOOSTING LIBIDO</p>";
            }else{
                var motiv5 = "";
            }
            $('#motivateMe').append(motiv1+motiv2+motiv3+motiv4+motiv5);
            if($('#motivateMe').text() == ""){
                $('#motivateMe').append('<p>No Motivation is selected !</p>');
            }
            if($('#weightLoss').hasClass('bgActive')){
                $('#weightGoal').append('<p>Weight Loss</p>');
            }else if($('#weightGain').hasClass('bgActive')){
                $('#weightGoal').append('<p>Muscle Gain</p>');
            }else {
                $('#weightGoal').append('<p>No Goal !</p>');
            }
            if($('#btn1').hasClass('btnChecked')){
                $('#pack').val(basic + " 100 MAD/mo");
            }else if($('#btn2').hasClass('btnChecked')){
                $('#pack').val(standard + " 200 MAD/mo");
            }else if($('#btn3').hasClass('btnChecked')){
                $('#pack').val(premium + " 300 MAD/mo");
            }
            $('#firstName').val(firstNameInput);
            $('#lastName').val(lastNameInput);
            $('#email').val(emailInput);
            $('#phone').val(phoneInput);
            $('#age').val(ageInput);
            $('#weight').val(weightInput);
            $('#height').val(heightInput);
            $('#gender').val(genderInput);
            $('#message').val(messageInput);

            $('#confirmBlock').addClass('formBlock');
            $('#confirmBlock').removeClass ('none');
            $('#registerBlock').addClass('none');
        });
    });