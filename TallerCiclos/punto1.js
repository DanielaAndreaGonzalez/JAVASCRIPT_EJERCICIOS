Ext.onReady(function() {

	var x=new Array();
	var salida=0;
	var contX=0;
	var conX=0;
	
	for (i=0; i<8; i++) 
	{
		x[i]= parseFloat(prompt("Escribe un numero"));
		salida=(salida+x[i]);

		if(x[i]>36){
			conX=(conX+x[i]);
		}

		if(x[i]>50){
			contX=(contX+1);
		}
		document.write("( "+i+" )");
	}

	document.write("<br />");

	for (i=0;i<x.length;i++){
		document.write("[ "+x[i]+" ]");
	}

	document.write("<br />");
	document.write("<br />El valor acumulado es: "+ salida);
	document.write("<br />El acumulado mayor a 36 es: "+ conX);
	document.write("<br /> Los elementos mayores a 50 son: "+contX);
});