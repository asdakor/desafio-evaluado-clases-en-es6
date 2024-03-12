"use strict";

var _cliente = require("./cliente.js");
var _impuestos = require("./impuestos.js");
var persona1 = new _cliente.Cliente();
var impuestos = new _impuestos.Impuestos();
persona1.nombre = 'juanito';
impuestos.montoBrutoAnual = 500000;
impuestos.deducciones = 25000;
persona1.impuestos = impuestos;
console.log(persona1);
console.log(persona1.calcularImpuesto(persona1.impuestos));