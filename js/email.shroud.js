$(document).ready(function(){
	var username = "nele.keirsmakers";
	var hostname = "hotmail.com";
	var linktext = username + "@" + hostname ;
	$('.emailshroud').html("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
	
	var tel1="0475";
	var tel2="77 65 19"
	$('.telshroud').html("<a href='" + "tel:" + tel1+tel2.replace(/ /g,'') + "'>" + tel1+' '+tel2 + "</a>");
});
