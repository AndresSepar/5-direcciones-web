import { Badge } from "@/components/ui/badge";

const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Badge className="mb-6 bg-accent/10 text-accent">Términos de Uso</Badge>
        <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
        <p className="mb-4">Bienvenido a 5 Direcciones. Al utilizar nuestro sitio web y/o servicios estás aceptando los términos y condiciones descritos a continuación. Si no estás de acuerdo con alguno, por favor no uses nuestra plataforma.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Definiciones</h2>
        <p className="mb-4">"Usuario": cualquier persona que accede o utiliza el sitio.<br/>"Contenido": textos, imágenes, videos, documentos y demás información disponible en el sitio.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Acceso y uso</h2>
        <p className="mb-4">Puedes navegar libremente, crear cuentas o rellenar formularios según se indique. No puedes usar el sitio para actividades ilegales, engañosas o que infrinjan derechos de terceros.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Registro y cuentas</h2>
        <p className="mb-4">Si te registras, eres responsable de mantener tu información de acceso confidencial y de cualquier actividad bajo tu cuenta. Notifícanos inmediatamente si detectas un acceso no autorizado.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Propiedad intelectual</h2>
        <p className="mb-4">Todos los derechos de propiedad intelectual del sitio, incluyendo diseños, logos, marcas y contenido, pertenecen a 5 Direcciones o sus licenciantes. Queda prohibida la reproducción, distribución o modificación sin permiso expreso.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Contenido generado por usuarios</h2>
        <p className="mb-4">Si envías comentarios, reseñas o archivos, otorgas una licencia no exclusiva y libre de regalías para su uso por parte de 5 Direcciones. No publiques material ofensivo ni que viole derechos de terceros.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Servicios externos y enlaces</h2>
        <p className="mb-4">Podemos proporcionar enlaces a terceros; no somos responsables del contenido ni de las prácticas de esos sitios. Usas esos enlaces bajo tu propia responsabilidad.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Limitación de responsabilidad</h2>
        <p className="mb-4">En la medida permitida por la ley, 5 Direcciones no será responsable por daños indirectos, incidentales o consecuentes derivadas del uso de este sitio. No garantizamos la disponibilidad ininterrumpida ni la exactitud absoluta de la información.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Modificaciones</h2>
        <p className="mb-4">Podemos modificar estos términos en cualquier momento. Las versiones actualizadas se publicarán en esta página con la fecha de "Última actualización". Tu uso continuado constituye aceptación de los cambios.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Legislación aplicable</h2>
        <p className="mb-4">Estos términos se rigen por las leyes de Colombia. Cualquier disputa se someterá a los tribunales competentes de Medellín.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contacto</h2>
        <p className="mb-4">Si tienes preguntas sobre estos términos, contáctanos en <a href="mailto:info@5direcciones.com.co" className="text-accent underline">info@5direcciones.com.co</a>.</p>
        <p className="text-sm text-muted-foreground">Última actualización: marzo 2026.</p>
      </div>
    </div>
  );
};

export default Terms;