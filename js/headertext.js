$(document).ready(function () {
    alert($(location).attr('href'));
    $.ajax({
        type: "GET",
        url: "./data/headertexts.xml",
        dataType: "xml",
        success: function (xml) {
        	var page="index.html";
        	var headertext=$(xml).find('headertext[page="'+page+'"]').text();
            $("#headerTextbox").empty();
            $("#headerTextbox").append(headertext);
        }
    });
});