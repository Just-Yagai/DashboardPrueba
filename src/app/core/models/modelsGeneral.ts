import { modelDelegaciones } from "./delegaciones";
import { modelMarcas } from "./marcas";

export class ModelsGeneral {
        public rnc: string;
        public tipo: string;
        public estado: string;
        public fecha_inicio_operacion: string;
        public firmanteAutorizado: boolean;
        public solicitanteAutorizado: boolean;
        public aprobadorComercial: boolean;
        public administrador: boolean;
        public identificacion: string;
        public fechaRegistro: string;
        public fechaActualizacion: string;
        public e_CF: string;
        public secuenciaDesde: string;
        public secuenciaHasta: string;
        public nroAutorizacion: string;
        public realizadoEmision: string;
        public fechaRegistro2: string;
        public fechaDesde: string;
        public fechaHasta: string;
        public autorizadoAFacturar: boolean;
        public autorizadoSolicitarSecuencia: boolean;
        public esGrandeContribuyente: boolean;
        public AmbienteID: number;
        public CanalID: number;
}

