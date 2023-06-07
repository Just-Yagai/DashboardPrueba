


  buscarRNC() {
    // Resto del código...
  
    this.getDashboard.getRNC(this.rnc).subscribe(data => {
      if (data) {
        this.razonSocial = data.razonSocial;
        this.tipoCertificacion = data.tipo_certificacion;
        this.isSelectDisabled = false;
  
        const tipoEmisor = this.tipoCertificacion.find((tipo: any) => tipo.tipo === 'Emisor');
        const tipoProveedor = this.tipoCertificacion.find((tipo: any) => tipo.tipo === 'Proveedor');

  
        if (tipoEmisor) {
          this.selectedTipoCertificacion = 'Emisor';
          this.datosTipo.estado = tipoEmisor.estado;
          this.datosTipo.inicio_postulacion = tipoEmisor.inicio_postulacion;
          this.datosTipo.finalizacion_postulacion = tipoEmisor.finalizacion_postulacion;
        } else if (tipoProveedor) {
          this.selectedTipoCertificacion = 'Proveedor';
          this.datosTipo.estado = tipoProveedor.estado;
          this.datosTipo.inicio_postulacion = tipoProveedor.inicio_postulacion;
          this.datosTipo.finalizacion_postulacion = tipoProveedor.finalizacion_postulacion;
        } else {
          // No se encontró ninguno de los tipos de certificación esperados
          this.selectedTipoCertificacion = null;
          this.datosTipo.estado = '';
          this.datosTipo.inicio_postulacion = '';
          this.datosTipo.finalizacion_postulacion = '';
        }
  
        console.log('Razón Social:', this.razonSocial);
        console.log('Tipo de Certificación:', this.tipoCertificacion);
        console.log('Tipo de Certificación Seleccionado:', this.selectedTipoCertificacion);
        
      } else {
        // Resto del código...
      }
  
      // Resto del código...
    });
  }