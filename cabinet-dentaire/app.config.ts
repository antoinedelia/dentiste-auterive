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
      // Les sous-menus seront gérés directement dans le composant Header
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
  ]
})
