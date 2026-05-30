// ═══════════════════════════════════════════════
// GameLex i18n — 11 Languages Translation System
// ═══════════════════════════════════════════════

const GL_LANGS = {
  ar: { name: 'العربية',    flag: '🇸🇦', dir: 'rtl', font: 'Tajawal' },
  en: { name: 'English',    flag: '🇺🇸', dir: 'ltr', font: 'Syne' },
  es: { name: 'Español',    flag: '🇪🇸', dir: 'ltr', font: 'Syne' },
  pt: { name: 'Português',  flag: '🇧🇷', dir: 'ltr', font: 'Syne' },
  fr: { name: 'Français',   flag: '🇫🇷', dir: 'ltr', font: 'Syne' },
  it: { name: 'Italiano',   flag: '🇮🇹', dir: 'ltr', font: 'Syne' },
  de: { name: 'Deutsch',    flag: '🇩🇪', dir: 'ltr', font: 'Syne' },
  ru: { name: 'Русский',    flag: '🇷🇺', dir: 'ltr', font: 'Syne' },
  ko: { name: '한국어',      flag: '🇰🇷', dir: 'ltr', font: 'Noto Sans KR' },
  zh: { name: '中文',        flag: '🇨🇳', dir: 'ltr', font: 'Noto Sans SC' },
  ja: { name: '日本語',      flag: '🇯🇵', dir: 'ltr', font: 'Noto Sans JP' },
};

const GL_T = {
  // ── NAV ──
  nav_platform:   { ar:'المنصة',       en:'Platform',    es:'Plataforma',  pt:'Plataforma',  fr:'Plateforme',  it:'Piattaforma', de:'Plattform',   ru:'Платформа',   ko:'플랫폼',      zh:'平台',    ja:'プラットフォーム' },
  nav_dashboard:  { ar:'لوحة التحكم', en:'Dashboard',   es:'Panel',       pt:'Painel',      fr:'Tableau',     it:'Pannello',    de:'Dashboard',   ru:'Панель',      ko:'대시보드',    zh:'控制台',  ja:'ダッシュボード' },
  nav_pricing:    { ar:'الأسعار',      en:'Pricing',     es:'Precios',     pt:'Preços',      fr:'Tarifs',      it:'Prezzi',      de:'Preise',      ru:'Цены',        ko:'요금제',      zh:'定价',    ja:'料金' },
  nav_start:      { ar:'ابدأ الآن',    en:'Get Started', es:'Comenzar',    pt:'Começar',     fr:'Commencer',   it:'Inizia',      de:'Loslegen',    ru:'Начать',      ko:'시작하기',    zh:'开始',    ja:'始める' },
  nav_login:      { ar:'🔐 دخول',      en:'🔐 Login',    es:'🔐 Entrar',   pt:'🔐 Entrar',   fr:'🔐 Connexion',it:'🔐 Accedi',   de:'🔐 Anmelden', ru:'🔐 Войти',    ko:'🔐 로그인',  zh:'🔐 登录', ja:'🔐 ログイン' },

  // ── HERO ──
  hero_badge:     { ar:'مدعوم بالذكاء الاصطناعي', en:'AI-Powered Localization', es:'Localización con IA', pt:'Localização com IA', fr:'Localisation par IA', it:'Localizzazione AI', de:'KI-Lokalisierung', ru:'ИИ-локализация', ko:'AI 현지화', zh:'AI驱动本地化', ja:'AI駆動のローカライズ' },
  hero_h1_1:      { ar:'نُعيد صياغة',  en:'Redefining',   es:'Redefiniendo',  pt:'Redefinindo',   fr:'Redéfinir',    it:'Ridefinire',    de:'Neu definieren', ru:'Переосмысляем', ko:'새로운 정의', zh:'重新定义', ja:'再定義する' },
  hero_h1_2:      { ar:'تجربة اللعب',  en:'Gaming',        es:'el Gaming',     pt:'o Gaming',      fr:'le Gaming',    it:'il Gaming',     de:'Gaming',         ru:'Игры',          ko:'게이밍',     zh:'游戏体验', ja:'ゲーミング' },
  hero_h1_3:      { ar:'بروح',          en:'with',          es:'con alma',      pt:'com alma',      fr:'avec l\'âme',  it:'con anima',     de:'mit',            ru:'с духом',       ko:'로',         zh:'以',       ja:'で' },
  hero_h1_4:      { ar:'سعودية',        en:'Saudi Soul',    es:'Saudí',         pt:'Saudita',       fr:'Saoudienne',   it:'Saudita',       de:'Saudi Seele',    ru:'Саудовской',    ko:'사우디 정신', zh:'沙特灵魂', ja:'サウジの魂' },
  hero_desc:      { ar:'منصة توطين ذكية تجمع قوة الذكاء الاصطناعي مع الدقة الثقافية السعودية — لتحويل أي لعبة إلى تجربة عربية أصيلة.', en:'An intelligent localization platform combining AI power with Saudi cultural precision — transforming any game into an authentic Arabic experience.', es:'Una plataforma inteligente que combina IA con precisión cultural saudí — transformando cualquier juego en una experiencia árabe auténtica.', pt:'Uma plataforma inteligente que combina IA com precisão cultural saudita — transformando qualquer jogo numa experiência árabe autêntica.', fr:'Une plateforme intelligente combinant l\'IA avec la précision culturelle saoudienne — transformant tout jeu en expérience arabe authentique.', it:'Una piattaforma intelligente che combina l\'IA con la precisione culturale saudita — trasformando ogni gioco in un\'esperienza araba autentica.', de:'Eine intelligente Lokalisierungsplattform, die KI-Stärke mit saudischer kultureller Präzision verbindet — jedes Spiel wird zu einem authentischen arabischen Erlebnis.', ru:'Интеллектуальная платформа локализации, сочетающая ИИ с культурной точностью — превращающая любую игру в аутентичный арабский опыт.', ko:'AI 기술과 사우디 문화적 정밀도를 결합한 스마트 현지화 플랫폼 — 모든 게임을 진정한 아랍어 경험으로 변환합니다.', zh:'结合AI能力与沙特文化精准度的智能本地化平台 — 将任何游戏转化为真实的阿拉伯语体验。', ja:'AIの力とサウジアラビアの文化的精度を組み合わせたインテリジェントなローカライズプラットフォーム。' },
  hero_cta1:      { ar:'🚀 ابدأ التوطين', en:'🚀 Start Localization', es:'🚀 Iniciar', pt:'🚀 Iniciar', fr:'🚀 Commencer', it:'🚀 Inizia', de:'🚀 Starten', ru:'🚀 Начать', ko:'🚀 시작', zh:'🚀 开始', ja:'🚀 開始' },
  hero_cta2:      { ar:'عرض المنصة',     en:'View Platform',         es:'Ver Plataforma', pt:'Ver Plataforma', fr:'Voir la plateforme', it:'Vedi Piattaforma', de:'Plattform ansehen', ru:'Смотреть', ko:'플랫폼 보기', zh:'查看平台', ja:'プラットフォームを見る' },

  // ── STATS ──
  stat_gamers:    { ar:'لاعب في السعودية', en:'Saudi Gamers',   es:'Jugadores Saudíes', pt:'Jogadores Sauditas', fr:'Joueurs Saoudiens', it:'Giocatori Sauditi', de:'Saudi-Spieler', ru:'Игроков', ko:'사우디 게이머', zh:'沙特玩家', ja:'サウジゲーマー' },
  stat_market:    { ar:'دولار حجم السوق', en:'Market Size $',   es:'Tamaño del mercado', pt:'Tamanho do mercado', fr:'Taille du marché', it:'Dimensione mercato', de:'Marktgröße', ru:'Размер рынка', ko:'시장 규모', zh:'市场规模', ja:'市場規模' },
  stat_growth:    { ar:'نمو سنوي',         en:'Annual Growth',  es:'Crecimiento anual', pt:'Crescimento anual', fr:'Croissance annuelle', it:'Crescita annuale', de:'Jährliches Wachstum', ru:'Годовой рост', ko:'연간 성장', zh:'年增长', ja:'年間成長' },
  faster:         { ar:'أسرع من الترجمة التقليدية', en:'Faster than traditional', es:'Más rápido que tradicional', pt:'Mais rápido que o tradicional', fr:'Plus rapide que traditionnel', it:'Più veloce del tradizionale', de:'Schneller als traditionell', ru:'Быстрее традиционного', ko:'전통 방식보다 빠름', zh:'比传统更快', ja:'従来より速い' },
  accuracy:       { ar:'دقة ثقافية مضمونة', en:'Cultural accuracy', es:'Precisión cultural', pt:'Precisão cultural', fr:'Précision culturelle', it:'Precisione culturale', de:'Kulturelle Genauigkeit', ru:'Культурная точность', ko:'문화적 정확도', zh:'文化准确度', ja:'文化的精度' },
  games_local:    { ar:'لعبة موطّنة',       en:'Games localized',   es:'Juegos localizados', pt:'Jogos localizados', fr:'Jeux localisés', it:'Giochi localizzati', de:'Spiele lokalisiert', ru:'Игр локализовано', ko:'현지화된 게임', zh:'已本地化游戏', ja:'ローカライズ済みゲーム' },
  cost_red:       { ar:'تخفيض في التكلفة', en:'Cost reduction',     es:'Reducción de costos', pt:'Redução de custos', fr:'Réduction des coûts', it:'Riduzione dei costi', de:'Kostensenkung', ru:'Снижение затрат', ko:'비용 절감', zh:'成本降低', ja:'コスト削減' },

  // ── UPLOAD ──
  upload_tag:     { ar:'// ابدأ مشروعك',  en:'// START YOUR PROJECT', es:'// INICIA TU PROYECTO', pt:'// INICIE SEU PROJETO', fr:'// DÉMARREZ VOTRE PROJET', it:'// INIZIA IL TUO PROGETTO', de:'// STARTE DEIN PROJEKT', ru:'// НАЧНИТЕ ПРОЕКТ', ko:'// 프로젝트 시작', zh:'// 开始项目', ja:'// プロジェクト開始' },
  upload_title:   { ar:'ارفع حزمة التوطين', en:'Upload Localization Package', es:'Subir paquete de localización', pt:'Carregar pacote de localização', fr:'Télécharger le package', it:'Carica il pacchetto', de:'Lokalisierungspaket hochladen', ru:'Загрузить пакет локализации', ko:'로컬라이제이션 패키지 업로드', zh:'上传本地化包', ja:'ローカライズパッケージをアップロード' },
  upload_desc:    { ar:'ارفع ملفاتك وسيتولى GameLex-AI المعالجة الذكية مع مراجعة بشرية احترافية.', en:'Upload your files and let GameLex-AI handle intelligent processing with professional human review.', es:'Sube tus archivos y deja que GameLex-AI maneje el procesamiento inteligente.', pt:'Carregue seus arquivos e deixe o GameLex-AI lidar com o processamento inteligente.', fr:'Téléchargez vos fichiers et laissez GameLex-AI gérer le traitement intelligent.', it:'Carica i tuoi file e lascia che GameLex-AI gestisca l\'elaborazione intelligente.', de:'Laden Sie Ihre Dateien hoch und lassen Sie GameLex-AI die intelligente Verarbeitung übernehmen.', ru:'Загрузите файлы и позвольте GameLex-AI выполнить интеллектуальную обработку.', ko:'파일을 업로드하고 GameLex-AI가 지능적 처리를 담당하게 하세요.', zh:'上传文件，让GameLex-AI进行智能处理并配以专业的人工审核。', ja:'ファイルをアップロードして、GameLex-AIがインテリジェントな処理を行います。' },
  drop_files:     { ar:'اسحب الملفات هنا', en:'Drop files here', es:'Arrastra archivos aquí', pt:'Arraste arquivos aqui', fr:'Déposez les fichiers ici', it:'Trascina i file qui', de:'Dateien hierher ziehen', ru:'Перетащите файлы сюда', ko:'파일을 여기에 드래그', zh:'拖放文件到此处', ja:'ファイルをここにドロップ' },
  or_click:       { ar:'أو اضغط للاختيار', en:'or click to browse', es:'o haz clic para seleccionar', pt:'ou clique para selecionar', fr:'ou cliquez pour parcourir', it:'o clicca per sfogliare', de:'oder klicken zum Auswählen', ru:'или нажмите для выбора', ko:'또는 클릭하여 탐색', zh:'或点击浏览', ja:'またはクリックして選択' },
  launch_pkg:     { ar:'🚀 إطلاق الحزمة', en:'🚀 Launch Package', es:'🚀 Lanzar paquete', pt:'🚀 Lançar pacote', fr:'🚀 Lancer le package', it:'🚀 Lancia il pacchetto', de:'🚀 Paket starten', ru:'🚀 Запустить пакет', ko:'🚀 패키지 실행', zh:'🚀 启动包', ja:'🚀 パッケージを起動' },

  // ── FEATURES ──
  feat_tag:       { ar:'// الركائز التقنية', en:'// TECH PILLARS', es:'// PILARES TEC.', pt:'// PILARES TEC.', fr:'// PILIERS TECH', it:'// PILASTRI TECH', de:'// TECH SÄULEN', ru:'// ТЕХ. СТОЛПЫ', ko:'// 기술 기반', zh:'// 技术支柱', ja:'// 技術の柱' },
  feat_title:     { ar:'ثلاثة محاور، قوة واحدة', en:'Three Pillars, One Power', es:'Tres pilares, un poder', pt:'Três pilares, um poder', fr:'Trois piliers, une puissance', it:'Tre pilastri, un potere', de:'Drei Säulen, eine Kraft', ru:'Три столпа, одна сила', ko:'세 기둥, 하나의 힘', zh:'三大支柱，一股力量', ja:'三つの柱、一つの力' },
  feat1_title:    { ar:'GameLex-AI', en:'GameLex-AI', es:'GameLex-AI', pt:'GameLex-AI', fr:'GameLex-AI', it:'GameLex-AI', de:'GameLex-AI', ru:'GameLex-AI', ko:'GameLex-AI', zh:'GameLex-AI', ja:'GameLex-AI' },
  feat1_desc:     { ar:'نموذج مخصص لعالم الألعاب يتعلم من كل مشروع ويحسّن دقته أسبوعياً.', en:'A model custom-built for gaming, learning from every project and improving weekly.', es:'Un modelo creado para videojuegos, aprendiendo de cada proyecto y mejorando semanalmente.', pt:'Um modelo criado para jogos, aprendendo com cada projeto e melhorando semanalmente.', fr:'Un modèle dédié aux jeux vidéo, apprenant de chaque projet et s\'améliorant chaque semaine.', it:'Un modello creato appositamente per i videogiochi, che impara da ogni progetto.', de:'Ein eigens für Gaming entwickeltes Modell, das von jedem Projekt lernt.', ru:'Модель, специально созданная для игр, обучающаяся на каждом проекте.', ko:'게임을 위해 특별히 제작된 모델로, 매 프로젝트에서 학습하고 매주 개선됩니다.', zh:'专为游戏构建的模型，从每个项目中学习并每周改进。', ja:'ゲーム専用に構築されたモデルで、毎週改善されます。' },
  feat2_title:    { ar:'Multimodal AI', en:'Multimodal AI', es:'IA Multimodal', pt:'IA Multimodal', fr:'IA Multimodale', it:'IA Multimodale', de:'Multimodales KI', ru:'Мультимодальный ИИ', ko:'멀티모달 AI', zh:'多模态AI', ja:'マルチモーダルAI' },
  feat2_desc:     { ar:'معالجة متكاملة للنصوص والصوت والصور مع الحفاظ على التصميم الأصلي.', en:'Integrated processing of text, audio, and images while preserving the original design.', es:'Procesamiento integrado de texto, audio e imágenes preservando el diseño original.', pt:'Processamento integrado de texto, áudio e imagens preservando o design original.', fr:'Traitement intégré du texte, de l\'audio et des images en préservant la conception originale.', it:'Elaborazione integrata di testo, audio e immagini preservando il design originale.', de:'Integrierte Verarbeitung von Text, Audio und Bildern unter Beibehaltung des Originaldesigns.', ru:'Интегрированная обработка текста, аудио и изображений с сохранением оригинального дизайна.', ko:'원본 디자인을 유지하면서 텍스트, 오디오, 이미지를 통합 처리합니다.', zh:'对文本、音频和图像进行集成处理，同时保留原始设计。', ja:'テキスト、オーディオ、画像の統合処理でオリジナルデザインを保持。' },
  feat3_title:    { ar:'Human-in-the-Loop', en:'Human-in-the-Loop', es:'Humano en el bucle', pt:'Humano no ciclo', fr:'Humain dans la boucle', it:'Umano nel loop', de:'Mensch im Loop', ru:'Человек в цикле', ko:'휴먼 인더 루프', zh:'人在回路', ja:'ヒューマン・イン・ザ・ループ' },
  feat3_desc:     { ar:'بيئة عمل موحدة تُمكّن المترجم من المراجعة والتعديل وإعادة التسليم.', en:'Unified workspace enabling translators to review, edit, and redeliver in original formats.', es:'Espacio de trabajo unificado que permite a los traductores revisar y editar.', pt:'Espaço de trabalho unificado que permite aos tradutores revisar e editar.', fr:'Espace de travail unifié permettant aux traducteurs de réviser et modifier.', it:'Spazio di lavoro unificato che consente ai traduttori di rivedere e modificare.', de:'Einheitlicher Arbeitsbereich für Übersetzer zum Überprüfen und Bearbeiten.', ru:'Единое рабочее пространство для переводчиков для проверки и редактирования.', ko:'번역가가 검토, 편집 및 재납품할 수 있는 통합 작업공간.', zh:'统一工作区，使翻译人员能够审查、编辑并以原始格式重新交付。', ja:'翻訳者がレビュー、編集、再納品できる統合ワークスペース。' },

  // ── PRICING ──
  price_tag:      { ar:'// الأسعار', en:'// PRICING', es:'// PRECIOS', pt:'// PREÇOS', fr:'// TARIFS', it:'// PREZZI', de:'// PREISE', ru:'// ЦЕНЫ', ko:'// 요금', zh:'// 定价', ja:'// 料金' },
  price_title:    { ar:'خطة لكل حجم مشروع', en:'A plan for every project size', es:'Un plan para cada tamaño de proyecto', pt:'Um plano para cada tamanho de projeto', fr:'Un plan pour chaque taille de projet', it:'Un piano per ogni dimensione di progetto', de:'Ein Plan für jede Projektgröße', ru:'План для каждого размера проекта', ko:'모든 프로젝트 규모를 위한 플랜', zh:'适合每种项目规模的方案', ja:'あらゆるプロジェクト規模に対応するプラン' },
  popular:        { ar:'الأكثر طلباً', en:'Most Popular', es:'Más Popular', pt:'Mais Popular', fr:'Plus Populaire', it:'Più Popolare', de:'Am Beliebtesten', ru:'Самый популярный', ko:'가장 인기있는', zh:'最受欢迎', ja:'最も人気' },
  per_assets:     { ar:'لكل 1,000 أصل', en:'per 1,000 assets', es:'por 1,000 activos', pt:'por 1.000 ativos', fr:'pour 1 000 actifs', it:'per 1.000 asset', de:'pro 1.000 Assets', ru:'за 1 000 файлов', ko:'1,000 에셋 당', zh:'每1,000个资产', ja:'1,000アセットあたり' },
  book_now:       { ar:'احجز الآن', en:'Book Now', es:'Reservar', pt:'Reservar', fr:'Réserver', it:'Prenota', de:'Jetzt buchen', ru:'Забронировать', ko:'지금 예약', zh:'立即预订', ja:'今すぐ予約' },
  start_free:     { ar:'ابدأ مجاناً', en:'Start Free', es:'Empezar gratis', pt:'Começar grátis', fr:'Commencer gratuitement', it:'Inizia gratis', de:'Kostenlos starten', ru:'Начать бесплатно', ko:'무료로 시작', zh:'免费开始', ja:'無料で始める' },
  contact_us:     { ar:'تواصل معنا', en:'Contact Us', es:'Contactar', pt:'Contatar', fr:'Nous contacter', it:'Contattaci', de:'Kontakt', ru:'Связаться', ko:'문의하기', zh:'联系我们', ja:'お問い合わせ' },

  // ── CTA ──
  cta_title1:     { ar:'جاهز تطلق لعبتك', en:'Ready to launch your game', es:'¿Listo para lanzar tu juego', pt:'Pronto para lançar seu jogo', fr:'Prêt à lancer votre jeu', it:'Pronto a lanciare il tuo gioco', de:'Bereit, dein Spiel zu launchen', ru:'Готовы запустить игру', ko:'게임을 출시할 준비가 되셨나요', zh:'准备好将游戏推向', ja:'ゲームをローンチする準備ができましたか' },
  cta_title2:     { ar:'للعالم العربي؟', en:'to the Arab world?', es:'al mundo árabe?', pt:'para o mundo árabe?', fr:'dans le monde arabe?', it:'nel mondo arabo?', de:'in die arabische Welt?', ru:'в арабский мир?', ko:'아랍 세계로?', zh:'阿拉伯世界？', ja:'アラブ世界へ？' },
  cta_sub:        { ar:'انضم للاستوديوهات التي تثق بـ GameLex لتوطين ألعابها.', en:'Join the studios that trust GameLex for game localization.', es:'Únete a los estudios que confían en GameLex para la localización.', pt:'Junte-se aos estúdios que confiam no GameLex para localização.', fr:'Rejoignez les studios qui font confiance à GameLex pour la localisation.', it:'Unisciti agli studi che si fidano di GameLex per la localizzazione.', de:'Schließen Sie sich den Studios an, die GameLex für die Lokalisierung vertrauen.', ru:'Присоединяйтесь к студиям, доверяющим GameLex для локализации.', ko:'현지화를 위해 GameLex를 신뢰하는 스튜디오에 합류하세요.', zh:'加入信任GameLex进行游戏本地化的工作室。', ja:'GameLexを信頼するスタジオに参加してください。' },
  talk_team:      { ar:'📞 تحدث مع الفريق', en:'📞 Talk to the Team', es:'📞 Hablar con el equipo', pt:'📞 Falar com a equipe', fr:'📞 Parler à l\'équipe', it:'📞 Parla con il team', de:'📞 Mit dem Team sprechen', ru:'📞 Поговорить с командой', ko:'📞 팀과 대화', zh:'📞 与团队交谈', ja:'📞 チームに話す' },

  // ── ADMIN ──
  admin_title:    { ar:'لوحة الإدارة', en:'Admin Dashboard', es:'Panel de administración', pt:'Painel administrativo', fr:'Tableau de bord admin', it:'Pannello admin', de:'Admin-Dashboard', ru:'Панель администратора', ko:'관리자 대시보드', zh:'管理仪表板', ja:'管理ダッシュボード' },
  admin_login:    { ar:'🔐 دخول المشرف', en:'🔐 Admin Login', es:'🔐 Acceso Admin', pt:'🔐 Acesso Admin', fr:'🔐 Connexion Admin', it:'🔐 Accesso Admin', de:'🔐 Admin-Anmeldung', ru:'🔐 Вход администратора', ko:'🔐 관리자 로그인', zh:'🔐 管理员登录', ja:'🔐 管理者ログイン' },
  admin_only:     { ar:'هذه اللوحة مخصصة لفريق GameLex فقط', en:'This panel is for the GameLex team only', es:'Este panel es solo para el equipo de GameLex', pt:'Este painel é apenas para a equipe GameLex', fr:'Ce panneau est réservé à l\'équipe GameLex', it:'Questo pannello è solo per il team GameLex', de:'Dieses Panel ist nur für das GameLex-Team', ru:'Эта панель только для команды GameLex', ko:'이 패널은 GameLex 팀 전용입니다', zh:'此面板仅供GameLex团队使用', ja:'このパネルはGameLexチーム専用です' },
  ov_users:       { ar:'نظرة عامة', en:'Overview', es:'Resumen', pt:'Visão geral', fr:'Vue d\'ensemble', it:'Panoramica', de:'Übersicht', ru:'Обзор', ko:'개요', zh:'概览', ja:'概要' },
  ov_packages:    { ar:'الحزم', en:'Packages', es:'Paquetes', pt:'Pacotes', fr:'Packages', it:'Pacchetti', de:'Pakete', ru:'Пакеты', ko:'패키지', zh:'包', ja:'パッケージ' },
  ov_users_nav:   { ar:'المستخدمون', en:'Users', es:'Usuarios', pt:'Usuários', fr:'Utilisateurs', it:'Utenti', de:'Benutzer', ru:'Пользователи', ko:'사용자', zh:'用户', ja:'ユーザー' },
  ov_activity:    { ar:'النشاط', en:'Activity', es:'Actividad', pt:'Atividade', fr:'Activité', it:'Attività', de:'Aktivität', ru:'Активность', ko:'활동', zh:'活动', ja:'アクティビティ' },
  ov_stats:       { ar:'الإحصائيات', en:'Statistics', es:'Estadísticas', pt:'Estatísticas', fr:'Statistiques', it:'Statistiche', de:'Statistiken', ru:'Статистика', ko:'통계', zh:'统计', ja:'統計' },
  ov_settings:    { ar:'الإعدادات', en:'Settings', es:'Configuración', pt:'Configurações', fr:'Paramètres', it:'Impostazioni', de:'Einstellungen', ru:'Настройки', ko:'설정', zh:'设置', ja:'設定' },
  refresh:        { ar:'↻ تحديث', en:'↻ Refresh', es:'↻ Actualizar', pt:'↻ Atualizar', fr:'↻ Actualiser', it:'↻ Aggiorna', de:'↻ Aktualisieren', ru:'↻ Обновить', ko:'↻ 새로고침', zh:'↻ 刷新', ja:'↻ 更新' },
};

// ═══ CORE ENGINE ═══
class GameLexI18n {
  constructor() {
    this.current = this._detect();
    this._loadFont(this.current);
  }

  _detect() {
    const stored = localStorage.getItem('gl_lang');
    if (stored && GL_LANGS[stored]) return stored;
    const browser = navigator.language?.slice(0,2);
    const map = { ar:'ar', en:'en', es:'es', pt:'pt', fr:'fr', it:'it', de:'de', ru:'ru', ko:'ko', zh:'zh', ja:'ja' };
    return map[browser] || 'ar';
  }

  _loadFont(lang) {
    const cfg = GL_LANGS[lang];
    if (!cfg) return;
    if (cfg.font === 'Tajawal') return; // already loaded
    const id = 'gl-font-' + lang;
    if (document.getElementById(id)) return;
    const fontMap = {
      'Noto Sans KR': 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap',
      'Noto Sans SC': 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;700&display=swap',
      'Noto Sans JP': 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap',
    };
    const url = fontMap[cfg.font];
    if (url) {
      const link = document.createElement('link');
      link.id = id; link.rel = 'stylesheet'; link.href = url;
      document.head.appendChild(link);
    }
  }

  t(key) {
    const entry = GL_T[key];
    if (!entry) return key;
    return entry[this.current] || entry['en'] || key;
  }

  setLang(lang) {
    if (!GL_LANGS[lang]) return;
    this.current = lang;
    localStorage.setItem('gl_lang', lang);
    this._loadFont(lang);
    this._apply();
  }

  _apply() {
    const cfg = GL_LANGS[this.current];
    document.documentElement.lang = this.current;
    document.documentElement.dir = cfg.dir;
    document.body.style.fontFamily = `'${cfg.font}', 'Tajawal', sans-serif`;

    // Apply all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.innerHTML = val;
    });

    // Update lang picker UI
    document.querySelectorAll('.gl-lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });

    // Dispatch event for custom handling
    window.dispatchEvent(new CustomEvent('gl:langchange', { detail: { lang: this.current, cfg } }));
  }

  renderPicker(containerId, style = 'dropdown') {
    const el = document.getElementById(containerId);
    if (!el) return;

    if (style === 'dropdown') {
      el.innerHTML = `
        <div class="gl-picker-wrap" style="position:relative;">
          <button class="gl-picker-btn" onclick="this.parentElement.querySelector('.gl-dropdown').classList.toggle('open')" style="
            display:flex;align-items:center;gap:6px;
            background:rgba(0,230,118,0.08);border:1px solid rgba(0,230,118,0.2);
            color:#e0eef8;padding:6px 12px;border-radius:8px;
            font-size:0.82rem;cursor:pointer;font-family:inherit;
            transition:all 0.2s;white-space:nowrap;
          ">
            <span>${GL_LANGS[this.current].flag}</span>
            <span class="gl-current-name">${GL_LANGS[this.current].name}</span>
            <span style="color:rgba(0,230,118,0.6);font-size:0.7rem;">▾</span>
          </button>
          <div class="gl-dropdown" style="
            position:absolute;top:calc(100% + 6px);
            ${document.documentElement.dir==='rtl' ? 'right:0;' : 'left:0;'}
            background:#0a1726;border:1px solid rgba(0,230,118,0.15);
            border-radius:10px;padding:6px;min-width:160px;
            box-shadow:0 20px 40px rgba(0,0,0,0.4);
            display:none;z-index:999;
          ">
            ${Object.entries(GL_LANGS).map(([code,cfg]) => `
              <button class="gl-lang-btn${code===this.current?' active':''}" data-lang="${code}"
                onclick="i18n.setLang('${code}');this.closest('.gl-dropdown').classList.remove('open')"
                style="display:flex;align-items:center;gap:8px;width:100%;
                  padding:8px 10px;border-radius:6px;border:none;
                  background:${code===this.current?'rgba(0,230,118,0.1)':'transparent'};
                  color:${code===this.current?'#00e676':'#7b9aaa'};
                  font-size:0.82rem;cursor:pointer;font-family:inherit;
                  transition:all 0.15s;text-align:right;
                "
                onmouseover="this.style.background='rgba(0,230,118,0.06)';this.style.color='#e0eef8'"
                onmouseout="this.style.background='${code===this.current?'rgba(0,230,118,0.1)':'transparent'}';this.style.color='${code===this.current?'#00e676':'#7b9aaa'}'"
              >
                <span>${cfg.flag}</span> ${cfg.name}
              </button>`).join('')}
          </div>
        </div>`;

      // Close on outside click
      document.addEventListener('click', e => {
        if (!e.target.closest('.gl-picker-wrap')) {
          document.querySelectorAll('.gl-dropdown').forEach(d => d.classList.remove('open'));
        }
      });

      // Toggle display style
      el.querySelector('.gl-dropdown').style.display = 'block';
      el.querySelector('.gl-dropdown').style.display = 'none';
      const dd = el.querySelector('.gl-dropdown');
      el.querySelector('.gl-picker-btn').addEventListener('click', () => {
        dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
      });
    }

    // Update current name on lang change
    window.addEventListener('gl:langchange', ({ detail }) => {
      const nameEl = el.querySelector('.gl-current-name');
      if (nameEl) nameEl.textContent = GL_LANGS[detail.lang]?.name || '';
    });
  }

  init(pickerId) {
    this.renderPicker(pickerId || 'gl-lang-picker');
    this._apply();
  }
}

// Global instance
const i18n = new GameLexI18n();
