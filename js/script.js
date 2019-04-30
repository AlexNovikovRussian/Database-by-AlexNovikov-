var mobile = false;

window.onload = function (){
	$('.modal').modal();
	
	var userAgent = navigator.userAgent.toLowerCase();
	if(userAgent.indexOf("android") > -1 || userAgent. indexOf("iphone") > -1){
		mobile = true;
	}
}

function findComplete(){
	var name = $('#findName').val();
	
	$('#findName').val("");
	$('#findName').next().removeClass('active');
	
	if(name != "" && localStorage.getItem(name) != null){
		var result = localStorage.getItem(name);
		if(mobile){
			Materialize.toast(`Name: ${name},\nValue: ${result}`);
		}
		else{
			var resText = "Имя элемента: "+name+"<br/>Данные элемента: "+result;
			$('#resText').html(resText);
			$('#result').modal('open');
		}
	}
	else{
		if(mobile){
				Materialize.toast("Error!");
			}
			else{
				$('#error').modal('open');
			}
	}
};

function addComplete(){
	var name = $('#addName').val();
	var val = $('#addVal').val();
	
	$('#addName').val("");
	$('#addName').next().removeClass('active');
	
	$('#addVal').val("");
	$('#addVal').next().removeClass('active');
	
	if(name != "" && val != ""){
		if(localStorage.getItem(name) == null){
			localStorage.setItem(name, val);
		}
		else{
			if(mobile){
				Materialize.toast("This object is already exists!");
			}
			else{
				$('#error').modal('open');
			}
		}
	}
	else{
		if(mobile){
				Materialize.toast("Fill in Name and Value!");
			}
			else{
				$('#error').modal('open');
			}
	}
};

function remComplete(){
	
	var name = $('#remName').val();
	
	$('#remName').val("");
	$('#remName').next().removeClass('active');
	
	if(name != "" && localStorage.getItem(name) != null){
		localStorage.removeItem(name);
	}
	else{
		if(mobile){
			Materialize.toast("Error!");
		}
		else{
			$('#error').modal('open');
		}
	}
	
};

function getV(){
	alert(localStorage.getItem("some"));
}

function rem(){
	localStorage.removeItem("some");
}