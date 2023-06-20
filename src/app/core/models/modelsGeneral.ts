export class ModelsGeneral {
    push: any;
    filter(arg0: (item: { rnc: string; ambienteID: number; canalID: number; }) => boolean): any {
      throw new Error('Method not implemented.');
    }
    constructor(
        public rnc: string,
        public tipo: string,
        public estado: string,
        public fecha_inicio_operacion: string,
        public firmanteAutorizado: null,
        public solicitanteAutorizado: null,
        public aprobadorComercial: null,
        public administrador: null,
        public identificacion: string,
        public fechaRegistro: string,
        public fechaActualizacion: string,
        public e_CF: string,
        public secuenciaDesde: string,
        public secuenciaHasta: string,
        public nroAutorizacion: string,
        public realizadoEmision: string,
        public fechaRegistro2: string,
        public fechaDesde: string,
        public fechaHasta: string,
        public autorizadoAFacturar: null,
        public autorizadoSolicitarSecuencia: null,
        public esGrandeContribuyente: null,
        public AmbienteID: number,
        public CanalID: number,
    ) {}    
}