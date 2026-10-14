/**
 * Configuración editable del sitio.
 * Reemplazar los datos de ejemplo por los reales del cliente.
 */
const SITE_CONFIG = {
  brand: "Resortes Industriales",
  tagline: "Fabricación de resortes de metal a medida",
  // Número de WhatsApp en formato internacional, solo dígitos (ej: 5491112345678)
  whatsapp: "5491100000000",
  email: "ventas@ejemplo.com",
  phone: "+54 11 0000-0000",
  address: "Calle Ejemplo 1234, Ciudad, País",
  hours: "Lunes a viernes de 8:00 a 17:00",
  products: [
    {
      name: "Resortes de compresión",
      description: "Los más utilizados. Absorben cargas y vuelven a su longitud original al comprimirse.",
      icon: "compression",
      image: "img/compresion.png",
    },
    {
      name: "Resortes de tracción",
      description: "Con ganchos en los extremos, trabajan estirándose y ofrecen tensión constante.",
      icon: "extension",
      image: "img/traccion.png",
    },
    {
      name: "Resortes de torsión",
      description: "Transmiten un par de giro. Ideales para bisagras, pinzas y mecanismos de retorno.",
      icon: "torsion",
      image: "img/torsion.png",
    },
    {
      name: "Resortes a medida",
      description: "Diseñamos y fabricamos según tus planos, muestras o requisitos de carga.",
      icon: "custom",
      image: "img/a-medida.png",
    },
    {
      name: "Alambre conformado",
      description: "Piezas de alambre con formas especiales para aplicaciones industriales.",
      icon: "wireform",
      image: "img/alambre-conformado.png",
    },
    {
      name: "Resortes de acero inoxidable",
      description: "Resistentes a la corrosión, para ambientes húmedos, químicos o alimentarios.",
      icon: "stainless",
      image: "img/acero-inoxidable.png",
    },
  ],
};
