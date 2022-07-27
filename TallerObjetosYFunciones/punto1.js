Ext.onReady(function() {

	var x=new Array();
	var acumulado=0;
	var contX=0;
	var conX=0;
	
	for (i=0; i<8; i++) 
	{
		x[i]= parseFloat(prompt("Escribe un numero"));
		acumulado=(acumulado+x[i]);

		if(x[i]<20){
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
	document.write("<br />El valor acumulado es: "+ acumulado);
	document.write("<br />El acumulado menor a 20 es: "+ conX);
	document.write("<br /> Los elementos mayores a 50 son: "+contX);
});