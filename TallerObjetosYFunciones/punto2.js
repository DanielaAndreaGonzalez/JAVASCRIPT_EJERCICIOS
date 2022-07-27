Ext.onReady(function() {
	function estudiante (nombre, edad, nota)
	{
		this.nombre = nombre;
		this.edad = edad;
		this.nota = nota;
	}

	var estudiantes = new Array();
	var nombre;
	var edad = 0;
	var nota = 0;
	var contEdad = 0;
	var promedioEdad = 0;
	var mayorNota = 0; 
	var contAprobados = 0;

	for (i=0; i<6; i++) {
		// nombre = prompt("Escriba el nombre del estudiante "+(i+1));
		// edad = parseInt(prompt("Escriba el edad del estudiante "+(i+1)));
		// nota = parseFloat(prompt("Escriba la nota del estudiante "+(i+1)));

		// estudiante[i] = new estudiante(nombre, edad, nota);

		estudiante[0] = new estudiante ("Alex",23,5);
		estudiante[1] = new estudiante ("Paco",18,4.5);
		estudiante[2] = new estudiante ("Daniel",24,3.4);
		estudiante[3] = new estudiante ("Cesar",23,2.3);
		estudiante[4] = new estudiante ("Diana",21,4);
		estudiante[5] = new estudiante ("Marcela",22,2.4);

		contEdad = contEdad + estudiante[i].edad;
	}

	promedioEdad = contEdad/6;
	var menorNota = estudiante[0].nota;

	for (i=0; i<6; i++){
		document.write("<br /> ("+i+") nombre: "+estudiante[i].nombre+", edad: "+estudiante[i].edad+", nota: "+estudiante[i].nota);

		if(estudiante[i].nota>mayorNota)
		{
			mayorNota=estudiante[i].nota;
		}
		if(estudiante[i].nota<menorNota)
		{
			menorNota=estudiante[i].nota;
		}
		if(estudiante[i].edad>=18 && estudiante[i].nota>=3)
		{
			contAprobados=(contAprobados+1);
		}
		if(estudiante[i].edad<18 && estudiante[i].nota>=3)
		{
			contAprobados=(contAprobados+1);
		}
	}

	document.write("<br />");
	document.write("<br />El acumulado de edad es: "+contEdad);
	document.write("<br />El promedio de edad del grupo de programación es: "+promedioEdad.toFixed(2));
	document.write("<br />La nota mas alta es: "+mayorNota);
	document.write("<br />La nota mas baja es: "+menorNota);
	document.write("<br />Las personas mayores y menores que aprobaron son: "+contAprobados);
});