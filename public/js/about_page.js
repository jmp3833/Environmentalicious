function autoResizeDiv(){
	console.log(document.getElementById('title_section').className.style);
	var size = window.innerHeight;
	if( size < 350){
		size = '100%'
	}else{
		size = size + 'px'
	}
	document.getElementById('title_section').style.height = size;
	document.getElementById('what_we_do_section').style.height = size;
	document.getElementById('map_it_section').style.height = size;
	document.getElementById('cleanup_section').style.height = size;
	document.getElementById('get_involved_section').style.height = size;
}

$( document ).ready(function(){
	window.onresize = autoResizeDiv;
	autoResizeDiv();
});
