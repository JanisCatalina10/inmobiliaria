
//PROPIEDADES EN VENTA
const propertiesForSale = [
    {
      nombre: 'Chalet de Lujo',
      src: 'https://estaticos-cdn.prensaiberica.es/clip/83dbe513-118d-474e-bcbb-57e80de140ef_alta-libre-aspect-ratio_default_0.jpg',
      descripcion: 'Chalet con jardín grande y piscina privada.',
      ubicacion: 'Zona Residencial, Ciudad X',
      habitaciones: 5,
      costo: 4500, 
      smoke: true,
      pets: true
    },
    {
      nombre: 'Mansión de Lujo',
      src: 'https://genexigente.com/wp-content/uploads/2023/09/Grandes-mansiones-del-mundo.jpg',
      descripcion: 'Mansión con vistas panorámicas y múltiples comodidades.',
      ubicacion: 'Zona Exclusiva, Ciudad B',
      habitaciones: 6,
      costo: 9000, 
      smoke: false,
      pets: true
    },
    {
        nombre: 'Loft Minimalista',
        src: 'https://i.ytimg.com/vi/OHlHeYlBk1s/maxresdefault.jpg',
        descripcion: 'Loft con diseño minimalista y grandes ventanales.',
        ubicacion: 'Zona Urbana, Ciudad A',
        habitaciones: 1,
        costo: 1800, 
        smoke: false,
        pets: true
      },
    {
      nombre: 'Piso Moderno',
      src: 'https://hips.hearstapps.com/hmg-prod/images/salon-comedor-moderno-wood-estudio-648f07913ed21.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
      descripcion: 'Piso con acabados modernos en el corazón de la ciudad.',
      ubicacion: 'Centro Histórico, Ciudad L',
      habitaciones: 3,
      costo: 2800, 
      smoke: false,
      pets: true
    },
    {
        nombre: 'Casa de Campo',
        src: 'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
        descripcion: 'Hermosa casa de campo rodeada de naturaleza.',
        ubicacion: 'Rural, Ciudad Z',
        habitaciones: 4,
        costo: 3500, 
        smoke: true,
        pets: true
      },
    {
      nombre: 'Casa en la Playa',
      src: 'https://www.playalobos.cl/images/casas/topocalma/topocalma8.jpg',
      descripcion: 'Casa con acceso directo a la playa y vistas al mar.',
      ubicacion: 'Playa Dorada, Ciudad M',
      habitaciones: 4,
      costo: 5000, 
      smoke: true,
      pets: true
    },
];

//PROPIEDADES DE ALQUILER
const propertiesForRent = [
    {
      nombre: 'Departamento',
      src: 'https://i0.wp.com/www.socovesa.cl/wp-content/uploads/2021/10/depto-C.jpg?resize=771%2C450&ssl=1',
      descripcion: 'Departamento en el centro de la ciudad con excelente vista.',
      ubicacion: 'Centro, Ciudad X',
      habitaciones: 2,
      costo: 800,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Ático de Lujo',
      src: 'https://villageverdesotogrande.com/wp-content/uploads/2021/06/best-luxury-apartments-sotogrande-foto.jpg',
      descripcion: 'Ático con vistas panorámicas y acabados de alta gama.',
      ubicacion: 'Zona Alta, Ciudad O',
      habitaciones: 2,
      costo: 4500, 
      smoke: false,
      pets: true
   },
    {
      nombre: 'Estudio Acogedor',
      src: 'https://www.propertypro.ng/blog/wp-content/uploads/2023/07/pexels-max-rahubovskiy-6782426-780x470.jpg',
      descripcion: 'Estudio ideal para una persona, cercano a transporte público.',
      ubicacion: 'Centro, Ciudad Z',
      habitaciones: 1,
      costo: 500,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Penthouse de Lujo',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Penthouse_Rendering.jpg/1200px-Penthouse_Rendering.jpg',
      descripcion: 'Penthouse con terraza privada y acabados de lujo.',
      ubicacion: 'Zona exclusiva, Ciudad A',
      habitaciones: 3,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Cabaña en las Montañas',
      src: 'https://static.mansionglobal.com/production/media/article-images/40aa54ac9ed0f893fcc70ce849a0972a/large_BN-LR207_1221SK_GR_20151211154405.jpg',
      descripcion: 'Cabaña acogedora ideal para escapadas de fin de semana.',
      ubicacion: 'Montañas, Ciudad B',
      habitaciones: 2,
      costo: 600,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Casa Familiar',
      src: 'https://thumbs.dreamstime.com/b/casa-familiar-de-lujo-decorada-con-flores-y-camino-hormig%C3%B3n-la-entrada-158685770.jpg',
      descripcion: 'Casa espaciosa perfecta para familias grandes.',
      ubicacion: 'Suburbios, Ciudad Y',
      habitaciones: 4,
      costo: 1200,
      smoke: true,
      pets: true
    }
  ];

  //RENDERIZAR PROPIEDADES
  function renderProperties(properties, containerId, limit) {
    console.log("Renderizando propiedades para:", containerId);
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Contenedor con ID ${containerId} no encontrado`);
      return;
    }
    container.innerHTML = '';

    const propertiesToShow = limit ? properties.slice(0, limit) : properties;

    for (const property of propertiesToShow) {
      console.log("Procesando propiedad:", property.nombre);
      const propertyDiv = document.createElement('div');
      propertyDiv.classList.add('property');

      //CONDICION PARA ALERT
      if (window.location.pathname.includes('propiedades_venta.html') || window.location.pathname.includes('propiedades_alquiler.html')) {
        if (!property.smoke) {
          alert(`La propiedad ${property.nombre} no permite fumar.`);
        }
        if (!property.pets) {
          alert(`La propiedad ${property.nombre} no permite mascotas.`);
        }
      }

      propertyDiv.innerHTML += `
        <img src="${property.src}" alt="${property.nombre}" />
        <h2>${property.nombre}</h2>
        <p><strong>${property.descripcion}</strong></p>
        <p><strong>Ubicación:</strong> ${property.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${property.habitaciones}</p>
        <p><strong>Costo: </strong>${property.costo}</p>
        <p style="color: ${property.smoke ? 'green' : 'red'};">
        <i class="fas ${property.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${property.smoke ? 'Permite fumar' : 'No permite fumar'}
      </p>
      <p style="color: ${property.pets ? 'green' : 'red'};">
        <i class="fas ${property.pets ? 'fa-paw' : 'fa-ban'}"></i> ${property.pets ? 'Permite mascotas' : 'No permite mascotas'}
      </p>
      `;
      container.appendChild(propertyDiv);
    }
    
  }

    // MOSTRAR PROPIEDADES
    if (window.location.pathname.includes('index.html')) {
      renderProperties(propertiesForSale, 'venta', 3);
      renderProperties(propertiesForRent, 'alquiler', 3);
    } else if (window.location.pathname.includes('propiedades_venta.html')) {
      renderProperties(propertiesForSale, 'sales-properties');
    } else if (window.location.pathname.includes('propiedades_alquiler.html')) {
      renderProperties(propertiesForRent, 'rent-properties');
    }

    function navigateTo(url) {
      window.location.href = url;
    }