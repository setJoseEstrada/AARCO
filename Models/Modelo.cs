//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AARCO.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Modelo
    {
        public Modelo()
        {
            this.Descripcion = new HashSet<Descripcion>();
        }
    
        public int id { get; set; }
        public short Modelo1 { get; set; }
        public int idSubMarca { get; set; }
    
        public virtual ICollection<Descripcion> Descripcion { get; set; }
        public virtual Submarcas Submarcas { get; set; }
    }
}