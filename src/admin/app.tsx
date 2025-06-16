export default {
  config: {
    locales: [
      'fr',
      // 'zh',
    ],
    defaultLocale: 'fr',
    translations: {
      'fr': {
      
        Event: 'Evènement',
        Course: 'Cours',
        User: 'Utilisateur',
        Director: 'Directeur',
        Post: 'News',
        Teacher: 'Professeur',
        Student: 'Étudiant',
        Home: 'Accueil',
        About: 'À propos',
        Download: 'Téléchargements',
        Institute: 'Institut',
        "content-manager.containers.ListPage.table-headers.title": 'Titre',
        "content-manager.containers.ListPage.table-headers.createdAt": 'Créé le',
        "content-manager.containers.ListPage.table-headers.updatedAt": 'Mis à jour le',
        "content-manager.containers.ListPage.table-headers.publishedAt": 'Publié le',
        "content-manager.containers.ListPage.table-headers.main": 'Contenu',
        "content-manager.containers.ListPage.table-headers.name": 'Nom',
        "content-manager.containers.ListPage.table-headers.short": 'Résumé',
        "content-manager.containers.ListPage.table-headers.courses": 'Cours',
        "content-manager.containers.ListPage.table-headers.teacher": 'Professeur',
        "content-manager.containers.ListPage.table-headers.teachers": 'Professeurs',
        "content-manager.containers.ListPage.table-headers.students": 'Étudiants',
        "content-manager.containers.ListPage.table-headers.directors": 'Directeurs',
        "content-manager.containers.ListPage.table-headers.posts": 'News',
        "content-manager.containers.ListPage.table-headers.events": 'Evènements',
        "content-manager.containers.ListPage.table-headers.done": 'Traité',
        // I can't find how to translate "Content available in"
        // "content-manager.containers.ListPage.table-headers.localizations": 'Disponible en',
        // "content-manager.containers.ListPage.table-headers.localizations.fr": 'Français',
        // "content-manager.containers.ListPage.table-headers.localizations.en": 'Anglais',
    },
  },
  bootstrap(app) {
    console.log(app);
  },
}}
