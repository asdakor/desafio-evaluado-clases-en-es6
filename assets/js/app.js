import { Cliente } from './cliente.js';
import { Impuestos } from './impuestos.js';

const persona1 = new Cliente()
const impuestos = new Impuestos()

persona1.nombre = 'juanito'
impuestos.montoBrutoAnual = 500000
impuestos.deducciones = 25000
persona1.impuestos = impuestos
console.log(persona1)
console.log(persona1.calcularImpuesto(persona1.impuestos))