// Utility function to automatically import all images from 100_serie directories
function importAllImages() {
  const images = {};

  // Use multiple static glob calls for different formats (import.meta.glob requires static strings)
  const jpegModules = import.meta.glob(
    "./assets/products/100_serie_*/[0-3].jpeg",
    { eager: true },
  );

  const jpgModules = import.meta.glob(
    "./assets/products/100_serie_*/[0-3].jpg",
    { eager: true },
  );

  const pngModules = import.meta.glob(
    "./assets/products/100_serie_*/[0-3].png",
    { eager: true },
  );

  const webpModules = import.meta.glob(
    "./assets/products/100_serie_*/[0-3].webp",
    { eager: true },
  );

  // Merge all image modules into one object
  const imageModules = {
    ...jpegModules,
    ...jpgModules,
    ...pngModules,
    ...webpModules,
  };

  // Process each image path
  Object.keys(imageModules).forEach((path) => {
    // Extract series name and image number from path
    // path format: "./assets/products/100_serie_colores/0.jpeg" or "./assets/products/100_serie_colores/0.png"
    const match = path.match(
      /\/100_serie_([^/]+)\/(\d+)\.(jpeg|jpg|png|webp)$/,
    );

    if (match) {
      const [, seriesName, imageNumber] = match;

      // Initialize array for this series if it doesn't exist
      if (!images[seriesName]) {
        images[seriesName] = [];
      }

      // Add the image to the appropriate series
      images[seriesName][parseInt(imageNumber)] = imageModules[path].default;
    }
  });

  // Sort arrays and remove any undefined values
  Object.keys(images).forEach((seriesName) => {
    images[seriesName] = images[seriesName].filter((img) => img !== undefined);
  });

  return images;
}

// Import all images automatically
const serieImages = importAllImages();

// Series information for generating products
const seriesInfo = {
  blanca: {
    name: "Blanca",
    color: "white",
    shein:
      "https://www.shein.com.mx/LED-String-Lights-Colorful-Lighting-100-LED-String-Lights-Outdoor-Waterproof-Fairy-Lights-Christmas-Decoration-For-Bedroom-Garden-And-Party-p-244517265.html?fbclid=IwY2xjawOUdj5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeEaMARvFH6gH_1k3Ih6-8ivHoq-ID4ixCY57jUK3wULVMBPmO6r1XVO8e2oY_aem_HeoEX67t-t6AkuSBGEVdiQ&main_attr=27_447",
  },
  calida: {
    name: "Cálida",
    color: "warm",
    shein:
      "https://www.shein.com.mx/LED-String-Lights-Colorful-Lighting-100-LED-String-Lights-Outdoor-Waterproof-Fairy-Lights-Christmas-Decoration-For-Bedroom-Garden-And-Party-p-41428015.html?fbclid=IwY2xjawOUdj5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeEaMARvFH6gH_1k3Ih6-8ivHoq-ID4ixCY57jUK3wULVMBPmO6r1XVO8e2oY_aem_HeoEX67t-t6AkuSBGEVdiQ&main_attr=27_739",
  },
  colores: {
    name: "Multicolor",
    color: "multicolor",
    shein:
      "https://www.shein.com.mx/LED-String-Lights-Colorful-Lighting-100-LED-String-Lights-Outdoor-Waterproof-Fairy-Lights-Christmas-Decoration-For-Bedroom-Garden-And-Party-p-41428027.html?fbclid=IwY2xjawOUdj5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeEaMARvFH6gH_1k3Ih6-8ivHoq-ID4ixCY57jUK3wULVMBPmO6r1XVO8e2oY_aem_HeoEX67t-t6AkuSBGEVdiQ",
  },
  jade: {
    name: "Jade",
    color: "jade",
    shein:
      "https://www.shein.com.mx/LED-String-Lights-Colorful-Lighting-100-LED-String-Lights-Outdoor-Waterproof-Fairy-Lights-Christmas-Decoration-For-Bedroom-Garden-And-Party-p-245655331.html?fbclid=IwY2xjawOUdj5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeEaMARvFH6gH_1k3Ih6-8ivHoq-ID4ixCY57jUK3wULVMBPmO6r1XVO8e2oY_aem_HeoEX67t-t6AkuSBGEVdiQ&main_attr=27_762",
  },
  morada: {
    name: "Morada",
    color: "purple",
    shein:
      "https://www.shein.com.mx/LED-String-Lights-Colorful-Lighting-100-LED-String-Lights-Outdoor-Waterproof-Fairy-Lights-Christmas-Decoration-For-Bedroom-Garden-And-Party-p-44047364.html?src_identifier=on%3Dstore%60cn%3DNovedades%20A%26D%60hz%3D0%60ps%3D1_1%60jc%3DthirdPartyStoreHome_5557689290&src_module=DetailBrand&src_tab_page_id=page_goods_detail1764200918998&mallCode=2&pageListType=4",
    mercado: null,
  },
  roja: {
    name: "Roja",
    color: "red",
    shein:
      "https://www.shein.com.mx/LED-String-Lights-Colorful-Lighting-100-LED-String-Lights-Outdoor-Waterproof-Fairy-Lights-Christmas-Decoration-For-Bedroom-Garden-And-Party-p-41588781.html?fbclid=IwY2xjawOUdj5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeEaMARvFH6gH_1k3Ih6-8ivHoq-ID4ixCY57jUK3wULVMBPmO6r1XVO8e2oY_aem_HeoEX67t-t6AkuSBGEVdiQ&main_attr=27_2436",
  },
  rosa: {
    name: "Rosa",
    color: "pink",
    shein:
      "https://www.shein.com.mx/LED-String-Lights-100-LED-Fairy-Lights-Waterproof-Outdoor-String-Lights-Christmas-Lights-Decoration-For-Bedroom-Garden-And-Party-p-205310861.html?src_identifier=on%3Dstore%60cn%3DNovedades%20A%26D%60hz%3D0%60ps%3D1_1%60jc%3DthirdPartyStoreHome_5557689290&src_module=DetailBrand&src_tab_page_id=page_goods_detail1764200918998&mallCode=2&pageListType=4",
    mercado: null,
  },
  verde: { name: "Verde", color: "green" },
  azul: {
    name: "Azul",
    color: "blue",
    shein:
      "https://www.shein.com.mx/LED-String-Lights-100-LED-Fairy-Lights-Waterproof-Outdoor-String-Lights-Christmas-Lights-Decoration-For-Bedroom-Garden-And-Party-p-205310260.html?src_identifier=on%3Dstore%60cn%3DNovedades%20A%26D%60hz%3D0%60ps%3D1_1%60jc%3DthirdPartyStoreHome_5557689290&src_module=DetailBrand&src_tab_page_id=page_goods_detail1764200918998&mallCode=2&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-2&pageListType=4",
  },
};

// Generate products automatically for each available series
export const products = Object.keys(serieImages)
  .sort()
  .filter(
    (seriesKey) => serieImages[seriesKey] && serieImages[seriesKey].length > 0,
  )
  .map((seriesKey, index) => ({
    id: index + 1,
    name: `Serie LED ${seriesInfo[seriesKey]?.name || seriesKey} de 100 focos, 5 metros`,
    color: seriesInfo[seriesKey]?.color || seriesKey,
    price: 50,
    originalPrice: 125,
    features: [
      "5 metros de longitud total",
      "100 focos LED de alta calidad",
      "Cable transparente",
      "Exteriores en interiores",
      "Incluye enchufe mexicano estándar",
    ],
    img: serieImages[seriesKey],
    shein: seriesInfo[seriesKey]?.shein,
    mercado: seriesInfo[seriesKey]?.mercado,
    category: "100_serie",
  }));

// Additional data for the enhanced experience
export const businessInfo = {
  phone: "5617372008",
  whatsapp: "5617372008",
  shein:
    "https://www.shein.com.mx/store/home?store_code=5557689290&ici=PageGoodsDetail&main_cate_id=4024&main_goods_id=30589261&rule_poskey=DetailShopItemList&src_identifier=on%3Dstore%60cn%3DNovedades%20A%26D%60hz%3D0%60ps%3D1_1%60jc%3DthirdPartyStoreHome_5557689290&src_module=DetailBrand&src_tab_page_id=page_goods_detail1764200918998&tab=home",
  mercado: null,
  instagram: null,
  facebook: null,
  tiktok: null,
};

export const testimonials = [
  {
    name: "María González",
    location: "CDMX - Zona Rosa",
    rating: 5,
    text: "Excelente calidad y muy buen precio. La entrega en el metro súper puntual y las luces funcionan perfecto. Ya es mi segunda compra.",
    product: "Serie LED Básica",
  },
  {
    name: "Carlos Rodríguez",
    location: "CDMX - Satelite",
    rating: 5,
    text: "Muy recomendable, la atención por WhatsApp excelente. Me entregaron en metro Cuatro Caminos y todo perfecto.",
    product: "Serie Multicolor",
  },
  {
    name: "Ana López",
    location: "CDMX",
    rating: 5,
    text: "Compré para mi negocio y quedé muy satisfecha. Buena calidad y excelente servicio.",
    product: "Serie Profesional",
  },
  {
    name: "Roberto Martínez",
    location: "CDMX - Naucalpan",
    rating: 5,
    text: "Las luces solares son increíbles, no pago nada de luz extra y se ven hermosas toda la noche. La entrega en metro Tacuba muy puntual.",
    product: "Serie Solar",
  },
];

export const faqData = [
  {
    question: "¿Cómo funciona la entrega?",
    answer:
      "Solo hacemos entregas en estaciones de metro de la CDMX los sábados y domingos. Coordinamos contigo la estación y horario más conveniente por WhatsApp.",
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer:
      "Solo aceptamos efectivo contra entrega. El pago se realiza en el momento de recibir tu producto en la estación de metro acordada.",
  },
  {
    question: "¿Los productos vienen probados?",
    answer:
      "Sí, todos nuestros productos los probamos antes de entregártelos para asegurar que funcionen perfecto. Además tienes 15 días para probarlos tú mismo.",
  },
  {
    question: "¿Puedo devolver el producto si no me gusta?",
    answer:
      "Tienes 15 días para probar tu producto. Si no te gusta o no funciona como esperas, te devolvemos tu dinero sin problemas.",
  },
  {
    question: "¿Ofrecen instalación o asesoría?",
    answer:
      "No ofrecemos servicio de instalación ni asesoría técnica. Nuestros productos son fáciles de instalar y vienen con instructivo básico.",
  },
  {
    question: "¿Cuánto duran las luces LED?",
    answer:
      "Nuestras luces LED duran entre 25,000 y 80,000 horas dependiendo del modelo. Eso equivale a 2-8 años de uso diario.",
  },
  {
    question: "¿En qué estaciones de metro entregan?",
    answer:
      "Podemos entregar en cualquier estación de metro de la CDMX. Coordinamos contigo la más conveniente según tu ubicación.",
  },
];

// Export the images object for use in other components if needed
export { serieImages };
