// $('#lala').css("background-color", "pink");
$('#lala').css("font-size", "1000%" );
// $('#lala').css("width", "1000px");
// $('#lala').css( 'padding', '1px');
// $('#lala').css('white-space', 'nowrap');
$('#lala').css('border-style','outset')
$('#lala').css("background-image","url('https://i.pinimg.com/originals/e1/b6/aa/e1b6aa8eba7701582b7acecf575cc99d.jpg')");
// $('#lala').css( "background-repeat", "no-repeat");
// $('#lala').css('background-size','cover')
// $('#lala').css('margin-top' ,'auto')
$('#momo').css('font-size' ,'16px')

$('#pg3').css("background-image","url('https://media3.giphy.com/media/4BQYJVg5zgc9i/giphy.gif?cid=ecf05e47cb1c6902e15c9f411362dec1d7d019e40de4c8bc&rid=giphy.gif')")



  $("#b1").click(function(){
  	    $('#pg3').css('display', 'block');
  	    $('#pg2').css('display', 'none');
  });

$("#b2").click(function(){
	$('#pg2').css('display', 'block');
    $('#pg3').css('display', 'none');
});


$("#saveKarate").click(function(){
	alert('hello '+ $('#nameKarate').val())
});

$("#saveJudo").click(function(){
	alert('hello '+ $('#nameJudo').val())
});

$("#saveBoxing").click(function(){
	alert('hello '+ $('#nameBoxing').val())
});