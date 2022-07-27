Ext.onReady(function() {

	var a=new Array();
	var b=new Array();
	var promA=0;
	var promB=0;

	var a = [1,2,3,4,5];
	var b = [2,3,4,5,2];

	document.write("a[ ]= ");
	for (i=0;i<a.length;i++){
		document.writeln("[ "+a[i]+" ]");
	}

	document.write("<br />");
	document.write("b[ ]= ");
	for (i=0;i<a.length;i++){
		document.writeln("[ "+b[i]+" ]");
	}

	var a = a.reduce(function(a, b){ return a + b; });
	var b = b.reduce(function(a, b){ return a + b; });

	promA=a/5;
	promB=b/5;

	document.write("<br />");
	document.write("La suma de las notas del curso A son: "+a);
	document.write("<br />La suma de las notas del curso B son: "+b);
	document.write("<br />El promedio del curso A es: "+promA);
	document.write("<br />El promedio del curso B es: "+promB);

	if(promA>promB){
		document.writeln("<br />El curso con mayor promedio es el A con: "+promA);
	}
	else{
		document.writeln("<br />El curso con mayor promedio es el B con: "+promB);
	}
});