Ext.onReady(function() {
	function producto (nombre, categoria, precioNeto, precioTotal, iva)
	{
	this.nombre=nombre;
	this.categoria=categoria;
	this.precioNeto=precioNeto;
	this.precioTotal=precioTotal;
	this.iva=iva;
	}

	var productos = new Array();
	var nombre;
	var categoria;
	var precioNeto = 0;
	var precioTotal = 0;
	var iva = 0;
	var contPrecioNeto = 0;
	var contPrecioTotal = 0;
	var promPrecioTotal = 0;
	var promPrecioNeto = 0;
	var opc = "0";

	for (i=0; i<12; i++) {
		// nombre = prompt("Escriba el nombre del producto "+(i+1));
		// categoria = prompt("Escriba la categoria del producto "+(i+1));
		// precioNeto = parseFloat(prompt("Escriba el precioNeto del producto "+(i+1)));
		// precioTotal = parseFloat(prompt("Escriba el precioTotal del producto "+(i+1)));
		// iva = parseFloat(prompt("Escriba el iva del producto "+(i+1)));

		// producto[i] = new producto(nombre, categoria, precioNeto, precioTotal, iva);
		producto[0] = new producto("Leche","Lacteos",2.33,2.199,2);
		producto[1] = new producto("Sal","Otros",2.66,1.199,2);
		producto[2] = new producto("CocaCola","Bebidas",1.22,1.499,3);
		producto[3] = new producto("Cereal","Fibra",2.23,3.499,3);
		producto[4] = new producto("Arroz","Otros",3.56,2.999,3);
		producto[5] = new producto("Atún","Enlatados",3.45,2.999,4);
		producto[6] = new producto("Aceite","Otros",3.22,3.999,4);
		producto[7] = new producto("Azucar","Otros",2.15,1.999,2);
		producto[8] = new producto("Tomate","Verduras",0.99,2.99,1);
		producto[9] = new producto("Cebolla","Verduras",0.88,1.99,1);
		producto[10] = new producto("Queso","Lacteos",2.11,1.999,2);
		producto[11] = new producto("Yogur","Lacteos",2.45,2.999,3);
	}

	while (opc != "S")
	{
		opc=prompt("Escribe la letra de la opción deseada: (T) acumuladoPrecioTotal - (N) promedioPrecioNeto - (A) acumuladoPrecioNeto - (P) promedioPrecioTotal - (S) Salir","");
		if (opc=="T") acumuladoPrecioTotal();
		if (opc=="N") promedioPrecioNeto();
		if (opc=="A") acumuladoPrecioNeto();
		if (opc=="P") promedioPrecioTotal();
	}
	function acumuladoPrecioTotal()
	{
		var contPrecioTotal = 0;
		for (i=0; i<12; i++){
			contPrecioTotal=contPrecioTotal+producto[i].precioTotal;
		}
		alert("acumulado precio Total: "+contPrecioTotal.toFixed(2));
	}
	function promedioPrecioNeto()
	{
		var contPrecioNeto = 0;
		var promPrecioNeto = 0;
		for (i=0; i<12; i++){
			contPrecioNeto=contPrecioNeto+producto[i].precioNeto;
		}

		promPrecioNeto=contPrecioNeto/12;
		alert("promedio precio Neto: "+promPrecioNeto.toFixed(4));
	}
	function acumuladoPrecioNeto()
	{
		var contPrecioNeto = 0;
		for (i=0; i<12; i++){
			contPrecioNeto=contPrecioNeto+producto[i].precioNeto;
		}
		alert("acumulado precio Neto: "+contPrecioNeto.toFixed(2));
	}
	function promedioPrecioTotal()
	{
		var contPrecioTotal = 0;
		var promPrecioTotal = 0;
		for (i=0; i<12; i++){
			contPrecioTotal=contPrecioTotal+producto[i].precioTotal;
		}
		promPrecioTotal=contPrecioTotal/12;
		alert("promedio precio Total: "+promPrecioTotal.toFixed(4));
	}
	
	for (i=0; i<12; i++){
		document.write("<br /> ("+i+") nombre: "+producto[i].nombre+", categoria: "+producto[i].categoria+
			", precioNeto: "+producto[i].precioNeto+", precioTotal: "+producto[i].precioTotal+
			", iva: "+producto[i].iva);

		contPrecioTotal=contPrecioTotal+producto[i].precioTotal;
		contPrecioNeto=contPrecioNeto+producto[i].precioNeto;
	}

	promPrecioNeto=contPrecioNeto/12;
	promPrecioTotal=contPrecioTotal/12;

	document.write("<br />");
	document.write("<br />acumulado precio Neto: "+contPrecioNeto.toFixed(2));
	document.write("<br />promedio precio Neto: "+promPrecioNeto.toFixed(4));
	document.write("<br />");
	document.write("<br />acumulado precio Total: "+contPrecioTotal.toFixed(2));
	document.write("<br />promedio precio Total: "+promPrecioTotal.toFixed(4));
})
