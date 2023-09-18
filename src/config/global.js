export default {
  global: {
    componenteFormativo: 'Normatividad textil',
    descripcionCurso:
      'La normatividad textil es uno de los puntos dentro de la supervisión de confecciones, se abordará su necesidad desde la visión del control de calidad y su clasificación general, así como los tipos de ensayos y pruebas realizadas lo cual dependerá de las necesidades de una empresa en cuanto a su producto y uso final, todo ello reflejado en normas que priorizan la estandarización de métodos que responden a criterios de calidad globalmente consensuados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Calidad en telas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normatividad en los textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Normatividad Colombiana NTC',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'NTC-ISO 2859',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'NTC 2567:1998 NTC1046',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'NTC 703:2001',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Sociedad Americana para Pruebas y Materiales (ASTM)',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Asociación Americana de Químicos Textiles y Coloristas (AATCC)',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normas aplicadas según prueba o ensayo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/922500-CF17-DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Otros métodos',
      referencia:
        'ASTM Internacional (s.f.) <i>ASTM D5034 Resistencia a la rotura /elongación . Método de agarre</i>.',
      tipo: 'PDF',
      descarga: '/downloads/ANEXO_8_ASTM_D5034.pdf',
    },
    {
      tema: 'Otros métodos',
      referencia:
        'ASTM Internacional (s.f.) <i>ASTM D1424 Resistencia al desgarro ELMENDRORF</i>.',
      tipo: 'PDF',
      descarga: '/downloads/ANEXO_9_ASTM_D1424.pdf',
    },
    {
      tema: 'Otros métodos',
      referencia:
        'ASTM Internacional (s.f.) <i>ASTM D 2261 resistencia al desgarre de las telas mediante el procedimiento de una pernera, lengua</i>.',
      tipo: 'PDF',
      descarga: '/downloads/ANEXO_10_ASTM_D2261.pdf',
    },
    {
      tema: 'Otros métodos',
      referencia: 'Lafayette (s.f.) <i>Ficha técnica Blanket fleece</i>.',
      tipo: 'PDF',
      descarga: '/downloads/ANEXO_11_FICHAS_TECNICAS_DE_TEXTILES.pdf',
    },
    {
      tema: 'Otros métodos',
      referencia: 'Coltejer (s.f.) <i>Manual de calidad de textiles</i>.',
      tipo: 'PDF',
      descarga: '/downloads/ANEXO_12_MANUAL_DE_CALIDAD_TEXTILES.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abrasión',
      significado:
        'es el mecanismo o acción de quitar algo sobre una superficie o elemento. ',
    },
    {
      termino: 'Defecto',
      significado:
        'irregularidad que baja la calidad o estropea las características de un textil.',
    },
    {
      termino: 'Ensayos',
      significado:
        'concepto que se atribuye en el sector textil para hacer referencia a las pruebas que se desarrollan en un laboratorio con pasos específicos.',
    },
    {
      termino: 'Hipoclorito de sodio',
      significado:
        'solución acuosa cuya disolución al agua se le conoce como cloro.',
    },
    {
      termino: 'Inspección',
      significado:
        'resultado de una serie de actividades como la medición o el ensayo de las características de un producto, además de la comparación de los resultados arrojados, para determinar si es posible lograr conformidad en cuanto a cada característica',
    },
    {
      termino: 'Ítem',
      significado:
        'todo lo que se puede describir y se determina de manera individual.',
    },
    {
      termino: 'Lote',
      significado:
        'conjunto de elementos que poseen características similares, agrupadas para un fin en común.',
    },
    {
      termino: 'Martindale',
      significado:
        'concepto atribuido al proceso de un equipo de medición de laboratorio textil que permite medir el frote de un textil ante diferentes elementos. ',
    },
    {
      termino: 'Muestreo',
      significado:
        'conjunto de elementos representativos para estudiar las características compositivas de un grupo más grande.',
    },
    {
      termino: 'NAC',
      significado:
        'Nivel Aceptable de Calidad. Es decir, el nivel que es posible validar para definir que su calidad es pertinente.',
    },
    {
      termino: 'Pilling',
      significado:
        'término asignado a elementos que se forman en un textil después de que pasa por procesos de frote o fricción, a estos elementos también suelen llamarles mota o bolitas.',
    },
    {
      termino: 'Rotura',
      significado:
        'es la acción de romper algo o de romperse un elemento u objeto.',
    },
    {
      termino: 'Solidez',
      significado:
        'término que permite determinar la cualidad de sólido o cualidad permanente de un elemento u objeto.',
    },
    {
      termino: 'Solidez de color',
      significado:
        'concepto atribuido a la cualidad de sólido o permanencia de un color.',
    },
    {
      termino: 'Sustrato',
      significado:
        'elemento que es base de un objeto o producto, por ejemplo el sustrato de un textil que contiene un color, el sustrato sería el elemento que le da color a un textil (tinte)',
    },
    {
      termino: 'Transpiración',
      significado:
        'es un líquido de base transparente que es generado por glándulas en la piel del ser humano y son expulsadas sobre ella a lo que se le conoce como sudor, la transpiración hace referencia al proceso por el cual se produce.',
    },
    {
      termino: 'Variaciones',
      significado:
        'son cambios presentados en un elemento o diferencias presentes en un elemento u objeto. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Fundibeq, S. (2021). ¿Qué es ISO? Retrieved 25 August 2021, from.',
      link: 'https://www.fundibeq.org/informacion/infoiso/que-es-iso',
    },
    {
      referencia: 'Icontec. (2019). NTC 2567:1998.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=178',
    },
    {
      referencia: 'Icontec. (2021). NTC 703:2001.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=5699',
    },
    {
      referencia: 'Icontec (2002) NTC-ISO 2859-1:2002.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=6224',
    },
    {
      referencia: 'Icontec. (2021). NTC-ISO 2859-3:2014.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=6227',
    },
    {
      referencia:
        'Lockuán Lavado, F. (2012). La Industria textil y su control de calidad.',
      link:
        'https://www.academia.edu/33609006/I_La_industria_textil_y_su_control_de_calidad',
    },
    {
      referencia:
        'Normas de los tejidos de protección - ISO / ASTM - Marina Textil. (2021). Retrieved 26 August 2021, from',
      link: 'https://marinatextil.com/es/norma-tejido-proteccion',
    },
    {
      referencia:
        'Ortiz, A.  (2017). Procesos textiles. Tomado el 8 de julio de 2021, recuperado de:',
      link: 'https://abortiz.wixsite.com/textiles/procesos-textiles',
    },
    {
      referencia:
        'Programa de Textilización - Ciencias Textiles. (2021). Retrieved 30 August 2021, from.',
      link:
        'https://programadetextilizacion.blogspot.com/2017/05/capitulo-12a-aseguramiento-de-calidad.html',
    },
    {
      referencia:
        'Testex. (2020). Control de calidad de prendas: una guía práctica para empresas de prendas de vestir. Testex',
      link:
        'https://www.testextextile.com/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=es&gurl=gu%C3%ADa-de-control-de-calidad-de-prendas/',
    },
    {
      referencia:
        'Testex. (2021). Notas de solidez del color de los textiles al lavado del método de prueba AATCC 61.',
      link:
        'https://www.testextextile.com/es/notas-de-solidez-del-color-de-los-textiles-al-lavado-del-m%C3%A9todo-de-prueba-aatcc-61/',
    },
    {
      referencia:
        'Zúñiga, M.  (2017).  <i>Acreditación de un laboratorio textil para la adecuada ejecución de los métodos de ensayo de control de calidad textil y confecciones</i>,',
      link: 'https://core.ac.uk/download/pdf/323342973.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Regional Antioquia',
        },
        {
          nombre: 'María Camila Álvarez Trujillo',
          cargo: 'Experta temática',
          centro: 'Centro Regional Antioquia',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisión metodológica y pedagógica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
