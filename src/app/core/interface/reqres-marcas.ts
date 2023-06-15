import { MarcasModels } from "../models/modelsGeneral";

export interface ResponseMarcas {
    DataMarcas: InterfaceMarcas[];
}


export interface InterfaceMarcas {
    rnc:                    string;
    tipo:                   string;
    estado:                 string;
    fecha_inicio_operacion: string;
    AmbienteID:             number;
    CanalID:                number;
}
