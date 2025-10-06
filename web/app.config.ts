// app.config.ts

export default defineAppConfig({
  // Informations sur le cabinet
  cabinet: {
    title: 'Dentiste Auterive 31190 Cabinet dentaire des Drs DELIA, MERIEUX et REGIS',
    phone: '05 61 50 89 12',
    email: 'cdm31190@orange.fr',
    rdvUrl: 'https://rdvdentiste.net/auterive/delia-aragon.html',
    address: {
      street: '1 Rue Michelet',
      zip: '31190',
      city: 'Auterive'
    },
    ordreNumber: '31 4 022294',
    openingHours: [
      { day: 'Lundi', morning: '9h-12h', afternoon: '14h-18h30' },
      { day: 'Mardi', morning: '9h-12h', afternoon: '14h-18h30' },
      { day: 'Mercredi', morning: '9h-12h', afternoon: '14h-18h30' },
      { day: 'Jeudi', morning: '9h-12h', afternoon: '14h-18h30' },
      { day: 'Vendredi', morning: '9h-12h', afternoon: '14h-18h30' },
      { day: 'Samedi', morning: 'Fermé', afternoon: '' },
      { day: 'Dimanche', morning: 'Fermé', afternoon: '' },
    ],
    googleMapsUrl: 'https://www.google.com/maps/place/Dr+Delia+-+Dentiste+%C3%A0+Auterive/@43.3498979,1.4829261,17z/data=!3m1!4b1!4m5!3m4!1s0x12aec2fd1e1f4b01:0x5343a2179d4a785a!8m2!3d43.3499786!4d1.4851509',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.2969936554086!2d1.4829261157157918!3d43.34989788000785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aec2fd1e1f4b01%3A0x5343a2179d4a785a!2sDr%20Delia%20-%20Dentiste%20%C3%A0%20Auterive!5e0!3m2!1sfr!2sfr!4v1606828167657!5m2!1sfr!2sfr'
  },

  navigation: [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'L\'équipe', href: '/equipe' },
    {
      name: 'Nos prestations',
      children: [
        { name: 'Implants dentaires', href: '/nos-prestations/implants' },
        { name: 'Orthodontie invisible', href: '/nos-prestations/orthodontie-invisible' },
        { name: 'Blanchiment dentaire', href: '/nos-prestations/blanchiment-dentaire' },
      ]
    },
    {
      name: 'Divers',
      children: [
        { name: 'Charte qualité', href: '/divers/charte-qualite' },
        { name: 'Fiches conseils', href: '/divers/fiches-conseils' },
        { name: 'Cone Beam', href: '/divers/cone-beam' },
      ]
    },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Plan d\'accès', href: '/plan-acces' },
  ],

  team: {
    doctors: [
      {
        name: "Dr. Christophe Delia",
        img: "delia.jpg",
        descriptions: [
          "Docteur en chirurgie dentaire, diplômé de la faculté de Toulouse",
          "Diplôme d'État de manipulateur d'électroradiologie médicale",
          "Diplôme universitaire d'odontologie légale et expertise",
          "Pratique l'implantologie depuis 2004",
          "Formations avancées en orthodontie invisible, ConeBeam et prothèses sur implant",
        ],
      },
      {
        name: "Dr. Pierre Mérieux",
        img: "pierre.jpg",
        descriptions: [
          "Docteur en chirurgie dentaire, diplômé de la faculté de Toulouse",
          "Formation en implantologie orale et endodontie moderne",
          "Attestation aux gestes d'urgence niveau 2",
        ],
        doctolibUrl: "https://www.doctolib.fr/dentiste/auterive/pierre-merieux-auterive",
      },
      {
        name: "Dr. Nicolas Régis",
        img: "regis.jpg",
        descriptions: [
          "Docteur en chirurgie dentaire, diplômé de la faculté de Toulouse",
          "Diplôme d'Université en Implantologie Orale et Biomécanique",
          "Formations en aligneurs invisibles (Smilers®) et SAPO IMPLANT",
        ],
        doctolibUrl: "https://www.doctolib.fr/dentiste/auterive/nicolas-regis".
      },
      {
        name: "Dr. Pierre Delia",
        img: null,
        descriptions: [
          "Docteur en chirurgie dentaire",
          "Diplômé de la faculté de Toulouse",
        ],
        doctolibUrl: "https://www.doctolib.fr/dentiste/auterive/pierre-delia"
      },
    ],
    assistants: [
      {
        name: "Laura",
        role: "Assistante dentaire qualifiée",
        img: "laura.jpg",
        descriptions: ["Diplômée de l'ESAD Toulouse, qualifiée depuis 2016"],
      },
      {
        name: "Alizée",
        role: "Assistante dentaire qualifiée",
        img: "alizee.jpg",
        descriptions: ["Diplômée de l'ESAD Toulouse, qualifiée depuis 2023"],
      },
      {
        name: "Lou",
        role: "Assistante dentaire qualifiée",
        img: "lou.jpg",
        descriptions: ["Diplômée de l'école AGORA Toulouse, qualifiée depuis 2015"],
      },
      {
        name: "Tiffany",
        role: "Assistante dentaire en formation",
        img: "tiffany.jpg",
        descriptions: [],
      },
    ]
  },
  gallery: [
    { src: 'neige.jpg', alt: "Le cabinet sous la neige", title: "Le cabinet sous la neige" },
    { src: 'arbre.jpg', alt: "Les deux cyprès du cabinet", title: "Les deux cyprès du cabinet" },
    { src: 'entree.jpg', alt: "L'entrée du cabinet", title: "L'accueil du cabinet" },
    { src: 'bureau.jpg', alt: "Le bureau du Docteur Delia", title: "Bureau du Docteur DELIA" },
    { src: 'cabinet-delia.jpg', alt: "Salle de soin du Docteur Delia", title: "Salle de soin du Docteur Delia" },
    { src: 'cabinet-delia-2.jpg', alt: "Salle de soin du Docteur Delia", title: "Salle de soin du Docteur Delia" },
    { src: 'cabinet-delia-3.jpg', alt: "Salle de soin du Docteur Delia", title: "Salle de soin du Docteur Delia" },
    { src: 'salle-soin-delia.jpg', alt: "Salle de soin du Docteur Delia", title: "Salle de soin du Docteur Delia" },
    { src: 'cabinet-merieux.jpg', alt: "Salle de soin du Docteur Merieux", title: "Salle de soin du Docteur Merieux" },
    { src: 'salle-sterilisation.jpg', alt: "Salle de stérilisation", title: "Salle de stérilisation" },
    { src: 'equipe.jpg', alt: "L'équipe du cabinet", title: "L'équipe du cabinet" },
    { src: 'delia_masque.jpg', alt: "Nous sommes équipés pour vous recevoir !", title: "Nous sommes équipés pour vous recevoir !" },
  ]
})
