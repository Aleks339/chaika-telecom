$(document).ready(function(){
    $stepperInput = $('.stepper-input');
    $rounded = Math.round(('.retailPrice') * 100) / 100;
    $(".up").on("click",function() {
        $stepperInput.val(parseInt($stepperInput.val()) + 1);
//        $('.retailPrice').text(parseFloat($rounded.text()+391.09);
    });
    $(".down").on("click",function() {
        $stepperInput.val(parseInt($stepperInput.val()) - 1);
//        $('.retailPrice').text(parseFloat($rounded.text())-391.09);
    });
    if ($stepperInput < 0){
        return false;
    }
//    $('.unit--select:nth-child(2)').on('click', function(){
//        $(this).addClass('.unit--active');
//        $(".up").on("click",function() {
//            $('.retailPrice').text(parseInt($('.retailPrice').text())*2.47);
//        });
//    })
});