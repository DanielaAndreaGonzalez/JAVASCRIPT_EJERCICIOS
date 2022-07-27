Ext.onReady(function() {
	function estudiante (codigo, nombre, nota)
	{
		this.codigo = codigo;
		this.nombre = nombre;
		this.nota = nota;
	}

	var estudiantes = new Array();
	var codigo;
	var nombre;
	var nota = 0;
	var sumatoria = 0;
	var promedio = 0;

	for (i=0; i<3; i++) {
		codigo = prompt("Escriba el codigo del estudiante "+(i+1));
		nombre = prompt("Escriba el nombre del estudiante "+(i+1));
		nota = parseFloat(prompt("Escriba la nota del estudiante "+(i+1)));

		estudiante[i] = new estudiante(codigo, nombre, nota);

		sumatoria = sumatoria + estudiante[i].nota;
	}
	
	promedio = sumatoria/(estudiante.length);

	for (i=0; i<3; i++){
		document.write("<br />codigo: "+estudiante[i].codigo+", nombre: "+estudiante[i].nombre+", nota: "+estudiante[i].nota);
	}

	document.write("<br />");
	document.write("<br />La sumatoria es: "+sumatoria);
	document.write("<br />El promedio del grupo S.I es: "+promedio);
});