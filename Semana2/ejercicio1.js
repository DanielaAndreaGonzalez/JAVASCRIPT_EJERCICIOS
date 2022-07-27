Ext.onReady(function() {
	var opc="0";
	while (opc != "T")
	{
		opc=prompt("Escribe la letra de la opción deseada: (S) Sumar - (R) Raíz Cuadrada - (L) logaritmo - (A) Ayuda - (T) Terminar","");
		if (opc=="S") suma();
		if (opc=="R") raiz();
		if (opc=="L") logaritmo();
		if (opc=="A") ayuda();
	}
	function suma()
	{
		var a,b;
		a=prompt("Escribe el primer sumando","");
		a=parseFloat(a);
		b=prompt("Escribe el segundo sumando","");
		b=parseFloat(b);
		alert("La suma de "+ a + " y "+ b +" es: "+(a+b));
	}
	function raiz()
	{
		var a;
		a=prompt("Escribe el radicando ","");
		a=parseFloat(a);
		alert("La raíz cuadrada de "+ a +" es: "+Math.sqrt(a));
	}
	function logaritmo()
	{
		var a;
		a=prompt("Escribe la base ","");
		a=parseFloat(a);
		alert("El logaritmo de "+ a +" es: "+Math.log(a));
	}
	function ayuda()
	{
		alert("Es bastante tonto que me pidas ayuda\npero aquí la tienes:\n\tPulsa S si quieres sumar\n\t"
			+"Pulsa R para la raíz cuadrada\n\tPulsa L para el logaritmo\n\tPulsa A para acceder a la ayuda\n\tPulsa T para acabar");
	}
});