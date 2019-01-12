function getmodelopen()
{
		$('#addMemberDiv').modal('show');
		$('.modal-title').html('Model box' );
	
		var currentTime = new Date();
		var timestamp = currentTime.getTime();
		$.post(BASE_URL+"home/testpage2", {timestamp:timestamp},
		function(response)
		{
			$('#modelbody').html(response);
		});
}

function getajaxcall(id)
{
	$('#acall').html(id);
}

$('#sdate').dcalendarpicker();	