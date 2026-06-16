import { Language } from './i18n'

export interface TranslationStrings {
  // Header
  home: string
  schedule: string
  gallery: string
  toolsLabel: string
  timezoneConverter: string
  bracketMaker: string
  standings: string
  teams: string
  news: string
  faq: string

  // Home
  worldCup2026: string
  yourUltimateCompanion: string
  tournamentInProgress: string
  dayOfWorldCup: string
  daysUntilFinal: string
  finalToday: string
  matchesToday: string
  status: string
  totalMatches: string
  daysToFinal: string
  teamsCount: string
  todaysMatches: string
  upcomingMatches: string
  viewFullSchedule: string
  essentialTools: string
  groupStandings: string
  viewAllStandings: string
  latestNews: string
  viewAllArticles: string
  freeDownloads: string
  browseDownloads: string

  // Schedule
  matchSchedule: string
  filterByGroup: string
  filterByStage: string
  timezone: string
  allGroups: string
  allStages: string
  groupStage: string
  roundOf16: string
  quarterfinals: string
  semifinals: string
  final: string
  resetFilters: string
  totalMatchesLabel: string
  knockout: string
  venue: string
  noMatchesFound: string

  // Gallery
  photoGallery: string
  matchHighlights: string
  teamsLabel: string
  venuesLabel: string
  fansLabel: string
  topMoments: string
  allPhotos: string
  searchPhotos: string
  totalPhotos: string
  showing: string
  categories: string
  highQuality: string
  hdImages: string
  noPhotosFound: string
  addPhotosGuide: string
  howToAddPhotos: string
  findFreeImages: string
  step1: string
  step2: string

  // Standings
  groupStandingsTitle: string
  liveTracking: string
  played: string
  won: string
  drawn: string
  lost: string
  goalDifference: string
  points: string
  advance: string
  bestThirdPlace: string
  understandingFormat: string
  groupStageStructure: string
  tiebreakerRules: string
  knockoutStage: string
  keyChanges: string
  qualificationScenarios: string

  // Tools
  timezoneConverterTitle: string
  convertMatchTimes: string
  selectTimezone: string
  matchTimes: string
  bracketMakerTitle: string
  predictResults: string
  makeYourPredictions: string
  clearAll: string
  savePredictions: string
  sharePredictions: string
  teamsTitle: string
  teamSquads: string

  // Footer
  information: string
  about: string
  contact: string
  privacyPolicy: string
  terms: string
  disclaimer: string
  disclaimerText: string
  notAffiliated: string
  allRightsReserved: string
  buyUsCoffee: string
}

const translations: Record<Language, TranslationStrings> = {
  en: {
    // Header
    home: 'Home',
    schedule: 'Schedule',
    gallery: 'Gallery',
    toolsLabel: 'Tools',
    timezoneConverter: 'Time Zone',
    bracketMaker: 'Bracket',
    standings: 'Standings',
    teams: 'Teams',
    news: 'News',
    faq: 'FAQ',

    // Home
    worldCup2026: 'FIFA World Cup 2026',
    yourUltimateCompanion: 'Your Ultimate Companion for the 48-Team Tournament',
    tournamentInProgress: '🏆 Tournament In Progress',
    dayOfWorldCup: 'Day {n} of the World Cup',
    daysUntilFinal: '{n} days until the Final',
    finalToday: '🏆 Final Today!',
    matchesToday: '{n} match(es) today',
    status: 'Status',
    totalMatches: 'Total Matches',
    daysToFinal: 'Days to Final',
    teamsCount: 'Teams',
    todaysMatches: "Today's Matches",
    upcomingMatches: 'Upcoming Matches',
    viewFullSchedule: 'View Full Schedule →',
    essentialTools: 'Essential World Cup Tools',
    groupStandings: 'Group Standings',
    viewAllStandings: 'View All Standings →',
    latestNews: 'Latest News & Analysis',
    viewAllArticles: 'View All Articles →',
    freeDownloads: 'Free Downloads',
    browseDownloads: 'Browse Downloads →',

    // Schedule
    matchSchedule: 'World Cup 2026 Match Schedule',
    filterByGroup: 'Filter by Group',
    filterByStage: 'Filter by Stage',
    timezone: 'Timezone',
    allGroups: 'All Groups',
    allStages: 'All Stages',
    groupStage: 'Group Stage',
    roundOf16: 'Round of 16',
    quarterfinals: 'Quarterfinals',
    semifinals: 'Semifinals',
    final: 'Final',
    resetFilters: 'Reset Filters',
    totalMatchesLabel: 'Total Matches',
    knockout: 'Knockout',
    venue: 'Venue',
    noMatchesFound: 'No matches found matching your criteria.',

    // Gallery
    photoGallery: 'World Cup 2026 Photo Gallery',
    matchHighlights: 'Match Highlights',
    teamsLabel: 'Teams',
    venuesLabel: 'Venues',
    fansLabel: 'Fans',
    topMoments: 'Top Moments',
    allPhotos: 'All Photos',
    searchPhotos: 'Search photos...',
    totalPhotos: 'Total Photos',
    showing: 'Showing',
    categories: 'Categories',
    highQuality: 'High Quality',
    hdImages: 'HD Images',
    noPhotosFound: 'No photos found',
    addPhotosGuide: 'Add Photos Guide ↓',
    howToAddPhotos: 'How to Add Photos',
    findFreeImages: 'Find Free Images',
    step1: 'Step 1: Find Free Images',
    step2: 'Step 2: Add to Code',

    // Standings
    groupStandingsTitle: 'World Cup 2026 Group Standings',
    liveTracking: 'Live tracking of all group stage results and standings. Updated after every match.',
    played: 'P',
    won: 'W',
    drawn: 'D',
    lost: 'L',
    goalDifference: 'GD',
    points: 'Pts',
    advance: 'Advance (Top 2)',
    bestThirdPlace: 'Best Third Place',
    understandingFormat: 'Understanding the 2026 World Cup Format',
    groupStageStructure: 'Group Stage Structure',
    tiebreakerRules: 'Tiebreaker Rules',
    knockoutStage: 'Knockout Stage',
    keyChanges: 'Key Changes from 2022',
    qualificationScenarios: 'Qualification Scenarios',

    // Tools
    timezoneConverterTitle: 'World Cup 2026 Time Zone Converter',
    convertMatchTimes: 'Convert match times to your local timezone',
    selectTimezone: 'Select timezone',
    matchTimes: 'Match Times',
    bracketMakerTitle: 'World Cup 2026 Bracket Maker',
    predictResults: 'Predict the tournament results',
    makeYourPredictions: 'Make Your Predictions',
    clearAll: 'Clear All',
    savePredictions: 'Save Predictions',
    sharePredictions: 'Share Predictions',
    teamsTitle: 'World Cup 2026 Team Squads',
    teamSquads: 'Complete directory of all 48 participating teams',

    // Footer
    information: 'Information',
    about: 'About',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms of Service',
    disclaimer: 'Disclaimer',
    disclaimerText: 'This site provides tools and information only. We do not broadcast, stream, or provide any match coverage. All data is for informational purposes only.',
    notAffiliated: 'Not affiliated with FIFA. All trademarks belong to their respective owners.',
    allRightsReserved: 'All rights reserved.',
    buyUsCoffee: '☕ Buy us a coffee',
  },

  es: {
    // Header
    home: 'Inicio',
    schedule: 'Calendario',
    gallery: 'Galería',
    toolsLabel: 'Herramientas',
    timezoneConverter: 'Zona Horaria',
    bracketMaker: 'Parrilla',
    standings: 'Clasificación',
    teams: 'Equipos',
    news: 'Noticias',
    faq: 'FAQ',

    // Home
    worldCup2026: 'Copa Mundial de la FIFA 2026',
    yourUltimateCompanion: 'Tu Compañero Definitivo para el Torneo de 48 Equipos',
    tournamentInProgress: '🏆 Torneo en Progreso',
    dayOfWorldCup: 'Día {n} de la Copa Mundial',
    daysUntilFinal: '{n} días para la Final',
    finalToday: '🏆 ¡Final Hoy!',
    matchesToday: '{n} partido(s) hoy',
    status: 'Estado',
    totalMatches: 'Total Partidos',
    daysToFinal: 'Días para la Final',
    teamsCount: 'Equipos',
    todaysMatches: 'Partidos de Hoy',
    upcomingMatches: 'Próximos Partidos',
    viewFullSchedule: 'Ver Calendario Completo →',
    essentialTools: 'Herramientas Esenciales',
    groupStandings: 'Clasificación de Grupos',
    viewAllStandings: 'Ver Toda la Clasificación →',
    latestNews: 'Últimas Noticias',
    viewAllArticles: 'Ver Todos los Artículos →',
    freeDownloads: 'Descargas Gratuitas',
    browseDownloads: 'Explorar Descargas →',

    // Schedule
    matchSchedule: 'Calendario de Partidos Copa Mundial 2026',
    filterByGroup: 'Filtrar por Grupo',
    filterByStage: 'Filtrar por Etapa',
    timezone: 'Zona Horaria',
    allGroups: 'Todos los Grupos',
    allStages: 'Todas las Etapas',
    groupStage: 'Fase de Grupos',
    roundOf16: 'Octavos de Final',
    quarterfinals: 'Cuartos de Final',
    semifinals: 'Semifinales',
    final: 'Final',
    resetFilters: 'Restablecer Filtros',
    totalMatchesLabel: 'Total Partidos',
    knockout: 'Eliminatoria',
    venue: 'Sede',
    noMatchesFound: 'No se encontraron partidos.',

    // Gallery
    photoGallery: 'Galería de Fotos Copa Mundial 2026',
    matchHighlights: 'Momentos Destacados',
    teamsLabel: 'Equipos',
    venuesLabel: 'Sedes',
    fansLabel: 'Aficionados',
    topMoments: 'Mejores Momentos',
    allPhotos: 'Todas las Fotos',
    searchPhotos: 'Buscar fotos...',
    totalPhotos: 'Total Fotos',
    showing: 'Mostrando',
    categories: 'Categorías',
    highQuality: 'Alta Calidad',
    hdImages: 'Imágenes HD',
    noPhotosFound: 'No se encontraron fotos',
    addPhotosGuide: 'Guía para Agregar Fotos ↓',
    howToAddPhotos: 'Cómo Agregar Fotos',
    findFreeImages: 'Encontrar Imágenes Gratuitas',
    step1: 'Paso 1: Encontrar Imágenes',
    step2: 'Paso 2: Agregar al Código',

    // Standings
    groupStandingsTitle: 'Clasificación de Grupos Copa Mundial 2026',
    liveTracking: 'Seguimiento en vivo de todos los resultados. Actualizado después de cada partido.',
    played: 'PJ',
    won: 'G',
    drawn: 'E',
    lost: 'P',
    goalDifference: 'DF',
    points: 'Pts',
    advance: 'Clasifican (Top 2)',
    bestThirdPlace: 'Mejor Tercero',
    understandingFormat: 'Entender el Formato 2026',
    groupStageStructure: 'Estructura Fase de Grupos',
    tiebreakerRules: 'Reglas de Desempate',
    knockoutStage: 'Fase Eliminatoria',
    keyChanges: 'Cambios Clave vs 2022',
    qualificationScenarios: 'Escenarios de Clasificación',

    // Tools
    timezoneConverterTitle: 'Convertidor de Zona Horaria Copa Mundial 2026',
    convertMatchTimes: 'Convierte horarios a tu zona horaria',
    selectTimezone: 'Seleccionar zona',
    matchTimes: 'Horarios',
    bracketMakerTitle: 'Creador de Parrilla Copa Mundial 2026',
    predictResults: 'Predice los resultados',
    makeYourPredictions: 'Haz tus Predicciones',
    clearAll: 'Limpiar Todo',
    savePredictions: 'Guardar',
    sharePredictions: 'Compartir',
    teamsTitle: 'Planteles Copa Mundial 2026',
    teamSquads: 'Directorio completo de los 48 equipos',

    // Footer
    information: 'Información',
    about: 'Nosotros',
    contact: 'Contacto',
    privacyPolicy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    disclaimer: 'Aviso Legal',
    disclaimerText: 'Este sitio solo proporciona herramientas e información. No transmitimos partidos. Todos los datos son solo informativos.',
    notAffiliated: 'No afiliado a FIFA. Todas las marcas registradas pertenecen a sus respectivos propietarios.',
    allRightsReserved: 'Todos los derechos reservados.',
    buyUsCoffee: '☕ Cómpranos un café',
  },

  fr: {
    // Header
    home: 'Accueil',
    schedule: 'Programme',
    gallery: 'Galerie',
    toolsLabel: 'Outils',
    timezoneConverter: 'Fuseau Horaire',
    bracketMaker: 'Tableau',
    standings: 'Classement',
    teams: 'Équipes',
    news: 'Actualités',
    faq: 'FAQ',

    // Home
    worldCup2026: 'Coupe du Monde de la FIFA 2026',
    yourUltimateCompanion: 'Votre Compagnon Ultime pour le Tournoi à 48 Équipes',
    tournamentInProgress: '🏆 Tournoi en Cours',
    dayOfWorldCup: 'Jour {n} de la Coupe du Monde',
    daysUntilFinal: '{n} jours avant la Finale',
    finalToday: '🏆 Finale Aujourd\'hui!',
    matchesToday: '{n} match(s) aujourd\'hui',
    status: 'Statut',
    totalMatches: 'Total Matchs',
    daysToFinal: 'Jours avant Finale',
    teamsCount: 'Équipes',
    todaysMatches: 'Matchs du Jour',
    upcomingMatches: 'Prochains Matchs',
    viewFullSchedule: 'Programme Complet →',
    essentialTools: 'Outils Essentiels',
    groupStandings: 'Classements des Groupes',
    viewAllStandings: 'Tous les Classements →',
    latestNews: 'Dernières Actualités',
    viewAllArticles: 'Tous les Articles →',
    freeDownloads: 'Téléchargements Gratuits',
    browseDownloads: 'Parcourir →',

    // Schedule
    matchSchedule: 'Programme des Matchs Coupe du Monde 2026',
    filterByGroup: 'Filtrer par Groupe',
    filterByStage: 'Filtrer par Phase',
    timezone: 'Fuseau Horaire',
    allGroups: 'Tous les Groupes',
    allStages: 'Toutes les Phases',
    groupStage: 'Phase de Groupes',
    roundOf16: 'Huitièmes de Finale',
    quarterfinals: 'Quarts de Finale',
    semifinals: 'Demi-finales',
    final: 'Finale',
    resetFilters: 'Réinitialiser',
    totalMatchesLabel: 'Total Matchs',
    knockout: 'Éliminatoire',
    venue: 'Stade',
    noMatchesFound: 'Aucun match trouvé.',

    // Gallery
    photoGallery: 'Galerie Photos Coupe du Monde 2026',
    matchHighlights: 'Moments Forts',
    teamsLabel: 'Équipes',
    venuesLabel: 'Stades',
    fansLabel: 'Supporters',
    topMoments: 'Meilleurs Moments',
    allPhotos: 'Toutes les Photos',
    searchPhotos: 'Rechercher...',
    totalPhotos: 'Total Photos',
    showing: 'Affichage',
    categories: 'Catégories',
    highQuality: 'Haute Qualité',
    hdImages: 'Images HD',
    noPhotosFound: 'Aucune photo trouvée',
    addPhotosGuide: 'Guide pour Ajouter ↓',
    howToAddPhotos: 'Comment Ajouter des Photos',
    findFreeImages: 'Trouver des Images Gratuites',
    step1: 'Étape 1: Trouver',
    step2: 'Étape 2: Ajouter au Code',

    // Standings
    groupStandingsTitle: 'Classements Groupes Coupe du Monde 2026',
    liveTracking: 'Suivi en direct de tous les résultats. Mis à jour après chaque match.',
    played: 'J',
    won: 'G',
    drawn: 'N',
    lost: 'P',
    goalDifference: 'Diff',
    points: 'Pts',
    advance: 'Qualifiés (Top 2)',
    bestThirdPlace: 'Meilleur 3ème',
    understandingFormat: 'Comprendre le Format 2026',
    groupStageStructure: 'Structure Phase de Groupes',
    tiebreakerRules: 'Règles de Départage',
    knockoutStage: 'Phase Finale',
    keyChanges: 'Changements vs 2022',
    qualificationScenarios: 'Scénarios de Qualification',

    // Tools
    timezoneConverterTitle: 'Convertisseur Fuseau Horaire CM 2026',
    convertMatchTimes: 'Convertissez les horaires',
    selectTimezone: 'Sélectionner',
    matchTimes: 'Horaires',
    bracketMakerTitle: 'Créateur de Tableau CM 2026',
    predictResults: 'Prédisez les résultats',
    makeYourPredictions: 'Vos Predictions',
    clearAll: 'Tout Effacer',
    savePredictions: 'Sauvegarder',
    sharePredictions: 'Partager',
    teamsTitle: 'Effectifs CM 2026',
    teamSquads: 'Toutes les 48 équipes',

    // Footer
    information: 'Information',
    about: 'À Propos',
    contact: 'Contact',
    privacyPolicy: 'Politique de Confidentialité',
    terms: "Conditions d'Utilisation",
    disclaimer: 'Avertissement',
    disclaimerText: 'Ce site fournit uniquement des outils. Nous ne diffusons pas de matchs. Données uniquement informatives.',
    notAffiliated: 'Non affilié à FIFA. Marques déposées propriété de leurs détenteurs.',
    allRightsReserved: 'Tous droits réservés.',
    buyUsCoffee: '☕ Payez-nous un café',
  },

  de: {
    // Header
    home: 'Startseite',
    schedule: 'Spielplan',
    gallery: 'Galerie',
    toolsLabel: 'Werkzeuge',
    timezoneConverter: 'Zeitzone',
    bracketMaker: 'Turnierbaum',
    standings: 'Tabelle',
    teams: 'Mannschaften',
    news: 'News',
    faq: 'FAQ',

    // Home
    worldCup2026: 'FIFA Fußball-Weltmeisterschaft 2026',
    yourUltimateCompanion: 'Ihr ultimativer Begleiter für das 48-Team-Turnier',
    tournamentInProgress: '🏆 Turnier Läuft',
    dayOfWorldCup: 'Tag {n} der Weltmeisterschaft',
    daysUntilFinal: '{n} Tage bis zum Finale',
    finalToday: '🏆 Finale Heute!',
    matchesToday: '{n} Spiel(e) heute',
    status: 'Status',
    totalMatches: 'Spiele Gesamt',
    daysToFinal: 'Tage bis Finale',
    teamsCount: 'Mannschaften',
    todaysMatches: 'Heutige Spiele',
    upcomingMatches: 'Kommende Spiele',
    viewFullSchedule: 'Vollständiger Spielplan →',
    essentialTools: 'Wichtige Werkzeuge',
    groupStandings: 'Gruppenergebnisse',
    viewAllStandings: 'Alle Tabellen →',
    latestNews: 'Neueste Nachrichten',
    viewAllArticles: 'Alle Artikel →',
    freeDownloads: 'Kostenlose Downloads',
    browseDownloads: 'Downloads →',

    // Schedule
    matchSchedule: 'Spielplan WM 2026',
    filterByGroup: 'Nach Gruppe filtern',
    filterByStage: 'Nach Phase filtern',
    timezone: 'Zeitzone',
    allGroups: 'Alle Gruppen',
    allStages: 'Alle Phasen',
    groupStage: 'Gruppenphase',
    roundOf16: 'Achtelfinale',
    quarterfinals: 'Viertelfinale',
    semifinals: 'Halbfinale',
    final: 'Finale',
    resetFilters: 'Zurücksetzen',
    totalMatchesLabel: 'Spiele Gesamt',
    knockout: 'K.O.',
    venue: 'Stadion',
    noMatchesFound: 'Keine Spiele gefunden.',

    // Gallery
    photoGallery: 'WM 2026 Fotogalerie',
    matchHighlights: 'Spielhöhepunkte',
    teamsLabel: 'Mannschaften',
    venuesLabel: 'Stadien',
    fansLabel: 'Fans',
    topMoments: 'Top Momente',
    allPhotos: 'Alle Fotos',
    searchPhotos: 'Fotos suchen...',
    totalPhotos: 'Fotos Gesamt',
    showing: 'Angezeigt',
    categories: 'Kategorien',
    highQuality: 'Hohe Qualität',
    hdImages: 'HD Bilder',
    noPhotosFound: 'Keine Fotos gefunden',
    addPhotosGuide: 'Fotos hinzufügen ↓',
    howToAddPhotos: 'Fotos Hinzufügen',
    findFreeImages: 'Kostenlose Bilder Finden',
    step1: 'Schritt 1: Finden',
    step2: 'Schritt 2: Zum Code hinzufügen',

    // Standings
    groupStandingsTitle: 'WM 2026 Gruppentabelle',
    liveTracking: 'Live-Ergebnisse aller Gruppenspiele. Nach jedem Spiel aktualisiert.',
    played: 'S',
    won: 'S',
    drawn: 'U',
    lost: 'N',
    goalDifference: 'TD',
    points: 'Pkt',
    advance: 'Aufsteiger (Top 2)',
    bestThirdPlace: 'Bester Dritter',
    understandingFormat: 'Das WM 2026 Format',
    groupStageStructure: 'Gruppenphase',
    tiebreakerRules: 'Tiebreaker-Regeln',
    knockoutStage: 'K.O.-Runde',
    keyChanges: 'Änderungen zu 2022',
    qualificationScenarios: 'Qualifikationsszenarien',

    // Tools
    timezoneConverterTitle: 'WM 2026 Zeitzonen-Rechner',
    convertMatchTimes: 'Spielzeiten umrechnen',
    selectTimezone: 'Zeitzone wählen',
    matchTimes: 'Spielzeiten',
    bracketMakerTitle: 'WM 2026 Turnierbaum',
    predictResults: 'Ergebnisse vorhersagen',
    makeYourPredictions: 'Ihre Tipps',
    clearAll: 'Alle löschen',
    savePredictions: 'Speichern',
    sharePredictions: 'Teilen',
    teamsTitle: 'WM 2026 Mannschaften',
    teamSquads: 'Alle 48 Mannschaften',

    // Footer
    information: 'Information',
    about: 'Über uns',
    contact: 'Kontakt',
    privacyPolicy: 'Datenschutz',
    terms: 'AGB',
    disclaimer: 'Haftungsausschluss',
    disclaimerText: 'Diese Seite bietet nur Werkzeuge. Wir übertragen keine Spiele. Alle Daten nur informativ.',
    notAffiliated: 'Nicht von FIFA unterstützt. Marken gehören den Eigentümern.',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    buyUsCoffee: '☕ Kaufen Sie uns einen Kaffee',
  },

  ja: {
    // Header
    home: 'ホーム',
    schedule: 'スケジュール',
    gallery: 'ギャラリー',
    toolsLabel: 'ツール',
    timezoneConverter: 'タイムゾーン',
    bracketMaker: 'ブラケット',
    standings: '順位',
    teams: 'チーム',
    news: 'ニュース',
    faq: 'よくある質問',

    // Home
    worldCup2026: 'FIFA ワールドカップ 2026',
    yourUltimateCompanion: '48チームでる祭の完璧なコンパニオン',
    tournamentInProgress: '🏆 大会開催中',
    dayOfWorldCup: 'ワールドカップ第{n}日',
    daysUntilFinal: '決勝まであと{n}日',
    finalToday: '🏆 決勝本日!',
    matchesToday: '本日{n}試合',
    status: '状態',
    totalMatches: '総試合数',
    daysToFinal: '決勝まで',
    teamsCount: 'チーム数',
    todaysMatches: '本日の試合',
    upcomingMatches: '今後の試合',
    viewFullSchedule: '完全なスケジュールを見る →',
    essentialTools: '必須ツール',
    groupStandings: 'グループ順位',
    viewAllStandings: 'すべての順位を見る →',
    latestNews: '最新ニュース与分析',
    viewAllArticles: 'すべての記事を見る →',
    freeDownloads: '無料ダウンロード',
    browseDownloads: 'ダウンロードを見る →',

    // Schedule
    matchSchedule: 'ワールドカップ2026試合スケジュール',
    filterByGroup: 'グループで絞り込み',
    filterByStage: 'ステージで絞り込み',
    timezone: 'タイムゾーン',
    allGroups: 'すべてのグループ',
    allStages: 'すべてのステージ',
    groupStage: 'グループステージ',
    roundOf16: 'ラウンド16',
    quarterfinals: '準決勝',
    semifinals: '準決勝',
    final: '決勝',
    resetFilters: 'リセット',
    totalMatchesLabel: '総試合数',
    knockout: 'ノックアウト',
    venue: '会場',
    noMatchesFound: '条件に 맞는試合が見つかりません。',

    // Gallery
    photoGallery: 'ワールドカップ2026 フォトギャラリー',
    matchHighlights: '|match highlights',
    teamsLabel: 'チーム',
    venuesLabel: '会場',
    fansLabel: 'ファン',
    topMoments: 'の名場面',
    allPhotos: 'すべての写真',
    searchPhotos: '写真を検索...',
    totalPhotos: '写真数',
    showing: '表示中',
    categories: 'カテゴリー',
    highQuality: '高品質',
    hdImages: 'HD画像',
    noPhotosFound: '写真が見つかりません',
    addPhotosGuide: '写真追加ガイド ↓',
    howToAddPhotos: '写真の追加方法',
    findFreeImages: '無料画像を探す',
    step1: 'ステップ1：無料画像を探す',
    step2: 'ステップ2：コードに追加する',

    // Standings
    groupStandingsTitle: 'ワールドカップ2026 グループ順位',
    liveTracking: 'すべてのグループステージ結果をリアルタイム追跡。每試合後更新。',
    played: 'P',
    won: 'W',
    drawn: 'D',
    lost: 'L',
    goalDifference: 'GD',
    points: 'Pts',
    advance: '進出 (上位2チーム)',
    bestThirdPlace: '最佳3位',
    understandingFormat: '2026形式を理解する',
    groupStageStructure: 'グループステージ構造',
    tiebreakerRules: '|tiebreaker rules',
    knockoutStage: 'ノックアウトステージ',
    keyChanges: '2022年からの主な変更点',
    qualificationScenarios: ' qualification scenarios',

    // Tools
    timezoneConverterTitle: 'ワールドカップ2026 タイムゾーン変換器',
    convertMatchTimes: '試合時間をタイムゾーンに変換',
    selectTimezone: 'タイムゾーンを選択',
    matchTimes: '試合時間',
    bracketMakerTitle: 'ワールドカップ2026 ブラケットメーカー',
    predictResults: '結果を予測',
    makeYourPredictions: 'あなたの予測',
    clearAll: 'すべてクリア',
    savePredictions: '保存',
    sharePredictions: '共有',
    teamsTitle: 'ワールドカップ2026 チーム阵容',
    teamSquads: '48チーム完全ガイド',

    // Footer
    information: '情報',
    about: '私たちについて',
    contact: 'お問い合わせ',
    privacyPolicy: 'プライバシーポリシー',
    terms: '利用規約',
    disclaimer: '免責事項',
    disclaimerText: 'このサイトはツールと情報を提供します。試合の配信は行いません。すべてのデータは参考用です。',
    notAffiliated: 'FIFAとは関係ありません。所有するトレードマークは各所有者に帰属します。',
    allRightsReserved: '無断複写・転載を禁じます。',
    buyUsCoffee: '☕ コーヒーを買う',
  },

  pt: {
    // Header
    home: 'Início',
    schedule: 'Calendário',
    gallery: 'Galeria',
    toolsLabel: 'Ferramentas',
    timezoneConverter: 'Fuso Horário',
    bracketMaker: 'Pareo',
    standings: 'Classificação',
    teams: 'Equipes',
    news: 'Notícias',
    faq: 'FAQ',

    // Home
    worldCup2026: 'Copa do Mundo da FIFA 2026',
    yourUltimateCompanion: 'Seu Companheiro Definitivo para o Torneio de 48 Equipes',
    tournamentInProgress: '🏆 Torneio em Andamento',
    dayOfWorldCup: 'Dia {n} da Copa do Mundo',
    daysUntilFinal: '{n} dias para a Final',
    finalToday: '🏆 Final Hoje!',
    matchesToday: '{n} jogo(s) hoje',
    status: 'Status',
    totalMatches: 'Total Jogos',
    daysToFinal: 'Dias para Final',
    teamsCount: 'Equipes',
    todaysMatches: 'Jogos de Hoje',
    upcomingMatches: 'Próximos Jogos',
    viewFullSchedule: 'Calendário Completo →',
    essentialTools: 'Ferramentas Essenciais',
    groupStandings: 'Classificação dos Grupos',
    viewAllStandings: 'Ver Classificação →',
    latestNews: 'Últimas Notícias',
    viewAllArticles: 'Ver Artigos →',
    freeDownloads: 'Downloads Gratuitos',
    browseDownloads: 'Explorar →',

    // Schedule
    matchSchedule: 'Calendário Copa do Mundo 2026',
    filterByGroup: 'Filtrar por Grupo',
    filterByStage: 'Filtrar por Fase',
    timezone: 'Fuso Horário',
    allGroups: 'Todos os Grupos',
    allStages: 'Todas as Fases',
    groupStage: 'Fase de Grupos',
    roundOf16: 'Oitavas de Final',
    quarterfinals: 'Quartas de Final',
    semifinals: 'Semifinais',
    final: 'Final',
    resetFilters: 'Limpar Filtros',
    totalMatchesLabel: 'Total Jogos',
    knockout: 'Eliminatórias',
    venue: 'Local',
    noMatchesFound: 'Nenhum jogo encontrado.',

    // Gallery
    photoGallery: 'Galeria de Fotos Copa 2026',
    matchHighlights: 'Melhores Momentos',
    teamsLabel: 'Equipes',
    venuesLabel: 'Estádios',
    fansLabel: 'Torcedores',
    topMoments: 'Momentos TOP',
    allPhotos: 'Todas as Fotos',
    searchPhotos: 'Buscar fotos...',
    totalPhotos: 'Total Fotos',
    showing: 'Mostrando',
    categories: 'Categorias',
    highQuality: 'Alta Qualidade',
    hdImages: 'Imagens HD',
    noPhotosFound: 'Nenhuma foto encontrada',
    addPhotosGuide: 'Guia para Adicionar ↓',
    howToAddPhotos: 'Como Adicionar Fotos',
    findFreeImages: 'Encontrar Imagens Gratuitas',
    step1: 'Passo 1: Encontrar',
    step2: 'Passo 2: Adicionar ao Código',

    // Standings
    groupStandingsTitle: 'Classificação Grupos Copa 2026',
    liveTracking: 'Acompanhamento ao vivo de todos os resultados. Atualizado após cada jogo.',
    played: 'J',
    won: 'V',
    drawn: 'E',
    lost: 'D',
    goalDifference: 'SG',
    points: 'Pts',
    advance: 'Classificam (Top 2)',
    bestThirdPlace: 'Melhor 3º',
    understandingFormat: 'Entender o Formato 2026',
    groupStageStructure: 'Estrutura Fase de Grupos',
    tiebreakerRules: 'Regras de Desempate',
    knockoutStage: 'Fase Final',
    keyChanges: 'Mudanças vs 2022',
    qualificationScenarios: 'Cenários de Classificação',

    // Tools
    timezoneConverterTitle: 'Conversor Fuso Horário CM 2026',
    convertMatchTimes: 'Converta horários',
    selectTimezone: 'Selecionar fuso',
    matchTimes: 'Horários',
    bracketMakerTitle: 'Montador de Pareo CM 2026',
    predictResults: 'Preveja resultados',
    makeYourPredictions: 'Suas Previsões',
    clearAll: 'Limpar Tudo',
    savePredictions: 'Salvar',
    sharePredictions: 'Compartilhar',
    teamsTitle: 'Elencos Copa 2026',
    teamSquads: 'Todas as 48 equipes',

    // Footer
    information: 'Informações',
    about: 'Sobre',
    contact: 'Contato',
    privacyPolicy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    disclaimer: 'Aviso Legal',
    disclaimerText: 'Este site fornece apenas ferramentas. Não transmitimos jogos. Dados apenas informativos.',
    notAffiliated: 'Não afiliado à FIFA. Marcas pertencem aos seus proprietários.',
    allRightsReserved: 'Todos os direitos reservados.',
    buyUsCoffee: '☕ Compre-nos um café',
  }
}

export function getTranslations(lang: Language): TranslationStrings {
  return translations[lang] || translations.en
}

export function formatString(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`))
}
