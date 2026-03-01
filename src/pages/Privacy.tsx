import { Badge } from "@/components/ui/badge";

const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Badge className="mb-6 bg-primary/10 text-primary">Política de Privacidad</Badge>
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad de 5 Direcciones</h1>
        <p className="mb-4">En 5 Direcciones valoramos tu privacidad. Esta política describe cómo recopilamos, utilizamos y protegemos tus datos personales cuando utilizas nuestro sitio web.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Información que recopilamos</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Información de contacto (nombre, correo electrónico, teléfono) proporcionada de forma voluntaria en formularios o cuando nos contactas.</li>
          <li>Datos de ubicación y dirección IP obtenidos automáticamente al visitar el sitio.</li>
          <li>Datos de navegación mediante cookies y tecnologías similares (ver sección de cookies).</li>
          <li>Información adicional que decidas enviar al interactuar con nuestros servicios, como archivos o mensajes.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Uso de la información</h2>
        <p className="mb-4">Los datos recopilados se emplean para:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Responder a tus consultas y procesar solicitudes de información o servicios.</li>
          <li>Enviar boletines, promociones o comunicaciones que hayas aceptado recibir.</li>
          <li>Mejorar la calidad de nuestro sitio web y personalizar tu experiencia.</li>
          <li>Detectar y prevenir fraudes, garantizar la seguridad de la plataforma.</li>
        </ul>
        <p className="mb-4">No compartimos tus datos con terceros para fines comerciales sin tu consentimiento expreso. Podemos divulgar información cuando la ley lo requiera (órdenes judiciales, autoridades) o para proteger nuestros derechos.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Cookies y tecnologías similares</h2>
        <p className="mb-4">Utilizamos cookies propias y de terceros para analizar el tráfico, recordar tus preferencias y mejorar la navegación. Puedes configurar tu navegador para rechazarlas o eliminar las existentes; sin embargo, algunas funcionalidades del sitio pueden verse afectadas.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Retención de datos</h2>
        <p className="mb-4">Conservamos tu información durante el tiempo necesario para cumplir la finalidad para la cual fue recopilada o según obligaciones legales. Cuando ya no sea necesaria, la eliminaremos o anonimizarla.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Seguridad</h2>
        <p className="mb-4">Implementamos medidas técnicas y organizativas para proteger tus datos contra accesos no autorizados, pérdidas o alteraciones. Aunque trabajamos para mantener nuestros sistemas seguros, no podemos garantizar una seguridad absoluta en internet.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Derechos del usuario</h2>
        <p className="mb-4">Tienes derecho a acceder, rectificar, cancelar u oponerte al procesamiento de tus datos (ARCO). Para ejercerlos, escríbenos a <a href="mailto:info@5direcciones.com.co" className="text-primary underline">info@5direcciones.com.co</a>. También puedes presentar una queja ante la autoridad de protección de datos correspondiente.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Enlaces a sitios externos</h2>
        <p className="mb-4">Nuestra web puede contener enlaces a terceros. No somos responsables de las prácticas ni contenido de esos sitios; revisa sus propias políticas de privacidad.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Cambios en la política</h2>
        <p className="mb-4">Podemos actualizar esta política periódicamente. Publicaremos la fecha de "última actualización" en la parte inferior de esta página y te recomendamos revisarla con regularidad.</p>
        <p className="text-sm text-muted-foreground">Última actualización: marzo 2026.</p>
      </div>
    </div>
  );
};

export default Privacy;