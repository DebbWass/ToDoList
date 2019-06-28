//check off specific Todos by clicking
$("ul").on("click","li",function(){
	//if not checked then check. 
	//if checked then  uncheck. 
	$(this).toggleClass( "checkedTask");
});

//Delete task
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Create new task
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var toDoText = $(this).val();
		//cleare todo input field
		$("input").val("");
		//create new li in the ul: 
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + toDoText + "</li>");
	}
})