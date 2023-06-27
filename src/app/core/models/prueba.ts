import { modelDelegaciones } from "./delegaciones";
import { modelMarcas } from "./marcas";

export class ModeloGeneral3 {
    constructor(
        public MarcasM: modelMarcas[],
        public DelegacionesM: modelDelegaciones[]
    ){}
    
}