Ext.onReady(function() {

    var area=0;
	var contM=0;
	var contm=0;
	
	while (area < 100){
		
	   	var base = parseFloat (prompt("Escriba la base del rectangulo"));
		var altura = parseFloat (prompt("Escriba la altura del rectangulo"));
		var area = (base*altura);

		if(area > 100){
			contM += 1;
	   		// document.write("<br />El area del rectangulo es: "+ area);
		}

		else{
			contm += 1;
	   		// document.write("<br />El area del rectangulo es: "+ area);
		}
		
	}

	document.write("<br />Triangulos mayores a 100m^2 "+contM);
	document.write("<br />Triangulos menores a 100m^2 "+contm);

});