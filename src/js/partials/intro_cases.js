$(document).ready(function(){
    $(".intro_cases").hide();
});


$("#op").click(function(e) {
    e.preventDefault();
    // $(".intro_items").removeClass('active');
    // $(this).addClass('active');

    // $(".intro_items").addClass('display_none');
    $(".intro_items").hide();
    $(".intro_cases").show('speed');
});

// $(document).ready(function(){
// 	$("#op").click(function(){
// 		$(".intro_items").toggleClass("display_none"); return false;
// 	});
// });


// $("#btn-drop").click(function() {
//     if (flag['drop'] = !flag['drop']) {
//         $("#test-drop").hide("drop", { direction: "right" }, 1000);
//     }
//     else {
//         $("#test-drop").show("drop", { direction: "down" }, 500);
//     }
// });