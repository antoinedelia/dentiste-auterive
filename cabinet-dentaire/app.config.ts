// app.config.ts

export default defineAppConfig({
  // Informations sur le cabinet
  cabinet: {
    title: 'Dentiste Auterive | Docteurs DELIA, MERIEUX et REGIS - Cabinet dentaire Michelet',
    phone: '05 61 50 73 51',
    email: 'contact@dentiste-auterive.fr',
    rdvUrl: '#', // Mettre le vrai lien Doctolib ou autre ici
    address: {
      street: '1 Rue Michelet',
      zip: '31190',
      city: 'Auterive'
    }
  },

  // Définition de la navigation principale
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

  // NOUVELLE SECTION : Données de l'équipe
  team: {
    doctors: [
      {
        name: "Dr. Christophe Delia",
        img: "delia.jpg", // Nom du fichier image dans /public/team/
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
      },
      {
        name: "Dr. Nicolas Régis",
        img: "regis.jpg",
        descriptions: [
          "Docteur en chirurgie dentaire, diplômé de la faculté de Toulouse",
          "Diplôme d'Université en Implantologie Orale et Biomécanique",
          "Formations en aligneurs invisibles (Smilers®) et SAPO IMPLANT",
        ],
      },
       {
        name: "Dr. Pierre Delia",
        img: null, // Pas d'image pour ce membre, un placeholder sera utilisé
        descriptions: [
          "Docteur en chirurgie dentaire",
          "Diplômé de la faculté de Toulouse",
        ],
        doctolibUrl: "https://www.doctolib.fr/interne-en-chirurgie-dentaire/auterive/pierre-delia"
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
  }
})
