Ext.onReady(function() {
	// window.alert("Hola Mundo"); #Mensaje de alerta

	// var mensaje = prompt("Escribe tu mensaje"); #Solicitar variable
	// 	alert("Mucho gusto "+mensaje); #Mostrar Variable

	// var mensaje = parseFloat (prompt("Escribe tu mensaje")); #Convertir cadena a flotante
	// alert("Resultado "+mensaje); #Mostrar Resultado

	// var mensaje = parseInt(prompt("Escribe tu mensaje"),16); #Convercion intero en base 16
	// 	alert("Resultado "+mensaje); #Mostrar Resultado

	// var mensaje = (13).toString(prompt("Escribe tu mensaje")); #Convertir entero a cadena
	// 	alert("Resultado "+mensaje); #Mostrar Resultado

	// var base = parseFloat (prompt("Escriba la base del rectangulo")); #declarar variable base
	// var altura = parseFloat (prompt("Escriba la altura del rectangulo")); #declarar variable altura
	// var area = (base*altura); #realizar operaciones para calcular el area
	// alert("El area del rectangulo es: "+ area); #Mostrar el area

	// var base = parseFloat (prompt("Escriba la base del rectangulo"));
	// var altura = parseFloat (prompt("Escriba la altura del rectangulo"));
	// var area = (base*altura);
	// document.write("El area del rectangulo es: "+ area); #Escribir texto en el html
	// alert("El area del rectangulo es: "+ area);

	var x=new Array();
	var salida=0;
	for (i=0; i<10; i++) 
	{
		x[i]= parseFloat(prompt("Escribe un numero"));
		salida=(salida+x[i]);
	}

	// formateamos los decimales con el metodo math.round
	salida=Math.round(salida*100)/100;

	for (i=0; i<10; i++) {
		document.write(x[i]+" +");
	}
	// document.write(x[0]+" + "+x[1]+" + "+x[2]+" + "+x[3]+" + "+
	// 	x[4]+" + "+x[5]+" + "+x[6]+" + "+x[7]+" + "+x[8]+" + "+
	// 	x[9]+" = "+salida
	document.write("= "+salida
		+"<br />La sumatoria del vector es: "+ salida);
	alert("La sumatoria del vector es: "+ salida);
});