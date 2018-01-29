$(function(){
    $.getJSON('products.json', function(data) {
            for(var i=0; i<data.length; i++){
                $('title').append(data.title[i]);
                $('.product_code').append(data.code[i]);
                $('img').append(data.primaryImageUrl[i]);
                $('.product__link').append(data.description[i]);
                $('.url--link').append(data.assocProducts[i]);
                $('.url--link').append(data.assocProducts[i]);
            }
    });
});