export class Impuestos{
    constructor(montoBrutoAnual, deducciones){
        this.montoBrutoAnual = montoBrutoAnual
        this.deducciones = deducciones
    }

    get getMontoBrutoAnual(){
        return this.montoBrutoAnual
    }
    set setMontoBrutoAnual(value){
        return this.montoBrutoAnual = value
    }

    get getDeducciones(){
        return this.deducciones
    }
    set setDeducciones(value){
        return this.deducciones = value
    }
}