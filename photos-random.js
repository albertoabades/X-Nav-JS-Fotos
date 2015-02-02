var arrayFotos = ["http://upload.wikimedia.org/wikipedia/commons/c/c0/Bridgetown1.jpg",
"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Playa_de_Gran_Caim%C3%A1n-Islas_Caim%C3%A1n01.JPG/640px-Playa_de_Gran_Caim%C3%A1n-Islas_Caim%C3%A1n01.JPG",
"http://upload.wikimedia.org/wikipedia/commons/3/3c/Aerial_photographs_of_Belize_Laslovarga09.JPG",
"http://upload.wikimedia.org/wikipedia/commons/2/2f/Antarctica_--_Oden_the_Icebreaker_-i.jpg"];


function valorAleatorio(){
	var aleatorio = Math.random() * (arrayFotos.length-1);
	aleatorio = Math.round(aleatorio);
	aleatorio = parseInt(0) + aleatorio;
	return arrayFotos[aleatorio];
}

function cambiarFotoJS(id, newValue){
	var element = document.getElementById(id);
	element.setAttribute('src', newValue);
	element.style.visibility = 'visible';
}

function substituir(){
	var foto=valorAleatorio();
	cambiarFotoJS('imagen',foto);
}

function idAleatorio(){
	var indice = Math.random()*(arrayFotos.length-1);
	indice = Math.round(indice);
	indice = parseInt(0) + indice;
	var idAleat = "imagen"+indice;
	return idAleat;
}

function mostrarFotoHTML(id){
	var element = document.getElementById(id);
	element.style.visibility = 'visible';
}

function mostrar(){
	var foto=idAleatorio();
	mostrarFotoHTML(foto);
}
