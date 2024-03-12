export class Cliente{
    constructor(nombre){
        this.nombre = nombre
        this.impuestos = {}
    }
    get getNombre(){
        return this.nombre
    }
    set setNombre(value) {
        return this.nombre = value
    }

    calcularImpuesto(impuestos){
        const montoBrutoAnual = impuestos.montoBrutoAnual
        const deducciones = impuestos.deducciones
        const resultado = ((montoBrutoAnual-deducciones)*0.21)
        console.log(resultado)
        return resultado
    }
}