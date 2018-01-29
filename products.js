$(function(){
    $.getJSON('products.json', function(data) {
            for(var i=0; i<data.products.length; i++){
                $('title').append(data.products.title[i]);
                $('.product_code').append(data.products.code[i]);
                $('img').append(data.products.primaryImageUrl[i]);
                $('.product__link').append(data.products.description[i]);
                $('.url--link').append(data.products.assocProducts[i]);
                $('.url--link').append(data.products.assocProducts[i]);
            }
    });
});