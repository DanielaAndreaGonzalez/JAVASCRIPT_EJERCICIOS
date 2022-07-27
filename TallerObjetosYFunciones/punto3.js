Ext.onReady(function() {
	function empleado (nombre, cedula, edad, salario)
	{
		this.nombre = nombre;
		this.cedula = cedula;
		this.edad = edad;
		this.salario = salario;
	}

	var empleados = new Array();
	var nombre;
	var cedula;
	var edad = 0;
	var salario = 0;

	for (i=0; i<1; i++) {
		nombre = prompt("Escriba el nombre del empleado "+(i+1));
		cedula = prompt("Escriba la cedula del empleado "+(i+1));
		edad = parseInt(prompt("Escriba el edad del empleado "+(i+1)));
		salario = parseFloat(prompt("Escriba el salario del empleado "+(i+1)));

		empleado[i] = new empleado(nombre, cedula, edad, salario);
	}

	function netoAPagar()
	{
		var totalAPagar;
		for (i=0; i<1; i++){
			if(empleado[i].salario>879.000)
			{
				totalAPagar=empleado[i].salario-(empleado[i].salario*0.07);
			}
			else
			{
				totalAPagar=empleado[i].salario;
			}
		}
		return totalAPagar.toFixed(2);
	}
	function salud()
	{
		var totalSalud;
		for (i=0; i<1; i++){
			totalSalud=empleado[i].salario*12.5;
		}
		return totalSalud.toFixed(2);
	}
	function pension()
	{
		var totalPension;
		for (i=0; i<1; i++){
			totalPension=empleado[i].salario*16.0;
		}
		return totalPension.toFixed(2);
	}
	function riesgosProfesionalesARL()
	{
		var totalRiesgosLaborales;
		for (i=0; i<1; i++){
			totalRiesgosLaborales=empleado[i].salario*3.5;
		}
		return totalRiesgosLaborales.toFixed(2);
	}

	for (i=0; i<1; i++){
		document.write("<br />nombre: "+empleado[i].nombre+", cedula: "+empleado[i].cedula+
			", edad: "+empleado[i].edad+", salario: "+empleado[i].salario);
	}

	document.write("<br />");
	document.write("<br />Neto a Pagar: "+netoAPagar());
	document.write("<br />Salud: "+salud());
	document.write("<br />Pension: "+pension());
	document.write("<br />Riesgos Profesionales ARL: "+riesgosProfesionalesARL());
});