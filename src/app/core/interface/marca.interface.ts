import { RespAmbiente } from "./ambiente.interface";

export interface RespMarca {
    rnc: string;
    tipo: string;
    estado: string;
    fecha_inicio_operacion: string;
    AmbienteID: number;
    CanalID: number;
    ambiente?: RespAmbiente; // Propiedad opcional para almacenar el ambiente relacionado
}