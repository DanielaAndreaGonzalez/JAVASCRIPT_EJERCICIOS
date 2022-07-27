Ext.onReady(function() {

	var x=new Array();
	var y=new Array();
	var z=new Array();

	document.write("x[ ]= ");
	for (i=0; i<=3; i++) 
	{
		x[i]= parseFloat(prompt("Escribe un numero para el arreglo1"));
		document.writeln("["+x[i]+"]");
	}
	
	document.write("<br />");
	document.write("y[ ]= ");
	for (i=0; i<=3;i++){
		y[i]= parseFloat(prompt("Escribe un numero para el arreglo2"));
		document.writeln("["+y[i]+"]");
	}

	document.write("<br />");
	document.write("z[ ]= ");
	for (i=0; i<=3;i++){
		z[i]= x[i]+y[i];
		document.writeln("["+z[i]+"]");
	}

});