$(function () {
    $("#filter__range").slider({
       min: 0,
       max: 50000,
       values: [25000,35000],
       range: true,
       stop: function(event, ui) {
       $("input#priceMin").val($("#filter__range").slider("values",0));
       $("input#priceMax").val($("#filter__range").slider("values",1));
 
     },
     slide: function(event, ui){
       $("input#priceMin").val($("#filter__range").slider("values",0));
       $("input#priceMax").val($("#filter__range").slider("values",1));
 
     }
   });
 
   $("input#priceMin").on('change', function(){
       var value1=$("input#priceMin").val();
       var value2=$("input#priceMax").val();
     if(parseInt(value1) > parseInt(value2)){
           value1 = value2;
           $("input#priceMin").val(value1);
       
       }
       $("#filter__range").slider("values", 0, value1);
     
   });
 
   $("input#priceMax").on('change', function(){
       var value1=$("input#priceMin").val();
       var value2=$("input#priceMax").val();
       if (value2 > 50000) { value2 = 50000; $("input#priceMax").val(50000)}
       if(parseInt(value1) > parseInt(value2)){
           value2 = value1;
           $("input#priceMax").val(value2);
     
       }
       $("#filter__range").slider("values",1,value2);
   
   });
 });