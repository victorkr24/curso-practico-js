//Codigo del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide : "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es : "+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es : "+ areaCuadrado + "cm2");
console.groupEnd();
//Codigo del traingulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("los laods del triangulo miden  : "+ ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm");
// const alturaTriangulo = 5.5;
console.log("Los altura del traingulo es de  : "+ alturaTriangulo + "cm"); 

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2;
console.log("El perimetro del traingulo es   : "+ perimetroTriangulo + "cm"); 

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es  traingulo es : "+ areaTriangulo + "cm"); 

console.groupEnd();

//Codigo del circulo 
console.group("Circulos");
//Radio 
const radioCirculo = 4;
console.log("El radio del circulo es    : "+ radioCirculo + "cm"); 

//Diametro
const diametroCirculo=radioCirculo*2;
console.log("El diametro del circulo es    : "+ diametroCirculo + "cm"); 
//Pi
const PI =Math.PI;
console.log("Pi es :" + PI + "cm");
//Circungferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo    : "+ perimetroCirculo + "cm"); 
//area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es    : "+ areaCirculo + "cm2"); 
console.groupEnd();


// +---------

