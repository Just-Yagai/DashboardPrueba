import { modelDelegaciones } from "./delegaciones";
import { modelMarcas } from "./marcas";

export class ModeloGeneral {
        filter(arg0: (marca: { AmbienteID: number; CanalID: number; }) => boolean): ModeloGeneral[] {
          throw new Error('Method not implemented.');
        }
    // public MarcasM: modelMarcas2[];
        public MarcasM: modelMarcas[]
        public DelegacionesM: modelDelegaciones[]
    
}