export const state = {
  lang: (() => {
    const saved = localStorage.getItem('portfolio-language');
    return saved === 'de' || saved === 'en' ? saved : 'en';
  })(),
  projectIndex: 0,
  quoteIndex: 0
};

export const i18n = {
  en: {
    nav: ['About me', 'Skills', 'Projects'],
    role: 'Frontend Developer',
    work: 'Check my work',
    contact: 'Contact me',
    marquee: [
      'Available for remote work',
      'Frontend Developer',
      'Based in Magdeburg',
      'Open to work'
    ],
    aboutEyebrow: 'Who I Am',
    aboutTitle: 'About Me',
    aboutIntro: 'Hey there, I\'m Lukas! Since my childhood, I have been fascinated by computers and video games. Today, I bring applications and solutions to life through code.',
    location: 'Currently living in Magdeburg, Germany. I am open to work remotely and at the company office.',
    mind: 'I am eager to kick off my career as a Fullstack Web Developer.',
    quality: 'As a creative and analytical team player, I like complex problems because they help me learn and expand my expertise.',
    technologies: 'Technologies',
    skillSet: 'Skill Set',
    skillsText: 'I create modern, user-friendly web apps with HTML, CSS and JavaScript, strengthened by TypeScript and Angular experience. For this version, everything is rebuilt in plain HTML, CSS and JS.',
    skillQuestion: 'You need another skill?',
    skillQuestionAccent: 'another skill?',
    skillContact: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
    letsTalk: 'Let\'s Talk',
    portfolio: 'Portfolio',
    featuredProjects: 'Featured Projects',
    projectsCopy: 'Explore a selection of my work here - interact with projects to see my skills in action.',
    quoteTitle: 'What my colleagues say about me',
    contactHead: 'Let\'s work together',
    contactTitle: 'Contact me',
    contactSub: 'Got a problem to solve?',
    contactText: 'Contact me through this form. I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
    needDev: 'Need a Frontend developer?',
    talk: 'Let\'s talk!',
    name: 'What\'s your name?',
    namePh: 'Your name goes here',
    email: 'What\'s your email?',
    emailPh: 'youremail@email.com',
    msg: 'How can I help you?',
    msgPh: 'Hello Lukas, I am interested in...',
    privacy: 'I have read the privacy policy and agree to the processing of my data as outlined.',
    send: 'Say Hello ;)',
    footerRole: 'Web Developer',
    footerLocation: 'Magdeburg Germany',
    github: 'Github',
    linkedIn: 'LinkedIn',
    emailLink: 'Email',
    legal: 'Legal Notice',
    privacyTitle: 'Privacy Policy',
    dialogGithub: 'GitHub',
    dialogLive: 'Live Test',
    nextProject: 'Next project →',
    closeDialog: 'Close dialog',
    requiredError: 'Please fill out this field.',
    nameRequired: 'Your name is required',
    messageRequired: 'Your message is required',
    emailRequired: 'Your email is required',
    emailMissingAt: 'Your email needs an @ sign',
    emailMissingLocal: 'Your email needs something before the @ sign',
    emailMissingDot: 'Your email needs a domain ending like .de or .com',
    emailMissingEnding: 'Your email ending needs at least two letters, like .de or .com',
    emailInvalid: 'Please enter a valid email address',
    emailError: 'Please enter a valid email.',
    privacyError: 'Please accept the privacy policy.',
    successMessage: 'Thanks! Your message is ready to be sent.',
    
legalText: `
  <h2>Imprint</h2>

  <h3>Acceptance of terms</h3>
  <p>
    By accessing and using Portfolio (Product), you acknowledge
    and agree to the following terms and conditions, and any
    policies, guidelines, or amendments thereto that may be
    presented to you from time to time. We, the listed students,
    may update or change the terms and conditions from time to
    time without notice.
  </p>

  <h3>Scope and ownership of the product</h3>
  <p>
    Portfolio has been developed as part of a student group
    project in a web development bootcamp at the Developer
    Akademie GmbH. It has an educational purpose and is not
    intended for extensive personal &amp; business usage.
    As such, we cannot guarantee consistent availability,
    reliability, accuracy, or any other aspect of quality
    regarding this Product.
  </p>

  <p>
    The design of Portfolio is owned by the Developer Akademie
    GmbH. Unauthorized use, reproduction, modification,
    distribution, or replication of the design is strictly
    prohibited.
  </p>

  <h3>Proprietary rights</h3>
  <p>
    Aside from the design owned by Developer Akademie GmbH,
    we, the listed students, retain all proprietary rights
    in Portfolio, including any associated copyrighted
    material, trademarks, and other proprietary information.
  </p>

  <h3>Use of the product</h3>
  <p>
    Portfolio is intended to be used for lawful purposes only,
    in accordance with all applicable laws and regulations.
    Any use of Portfolio for illegal activities, or to harass,
    harm, threaten, or intimidate another person, is strictly
    prohibited. You are solely responsible for your interactions
    with other users of Portfolio.
  </p>

  <h3>Disclaimer of warranties and limitation of liability</h3>
  <p>
    Portfolio is provided "as is" without warranty of any kind,
    whether express or implied, including but not limited to the
    implied warranties of merchantability, fitness for a particular
    purpose, and non-infringement. In no event will we, the listed
    students, or the Developer Akademie, be liable for any direct,
    indirect, incidental, special, consequential or exemplary
    damages, including but not limited to, damages for loss of
    profits, goodwill, use, data, or other intangible losses,
    even if we have been advised of the possibility of such
    damages, arising out of or in connection with the use or
    performance of Portfolio.
  </p>

  <h3>Indemnity</h3>
  <p>
    You agree to indemnify, defend and hold harmless us, the
    listed students, the Developer Akademie, and our affiliates,
    partners, officers, directors, agents, and employees, from
    and against any claim, demand, loss, damage, cost, or liability
    (including reasonable legal fees) arising out of or relating
    to your use of Portfolio and/or your breach of this Legal Notice.
  </p>

  <p>
    For any questions or notices, please contact me at
    <a href="mailto:luke.heller@dreadnoughtus.de">
      luke.heller@dreadnoughtus.de
    </a>
  </p>
`,



privacyText: `
  <h2>Responsible entity</h2>

  <h3>General information</h3>
  <p>
    Protecting your personal data is very important to me.
    I treat your personal data confidentially and in accordance
    with the statutory data protection regulations and this
    privacy policy. This privacy policy informs you about
    what data I collect, how I use it, and what rights you
    have regarding your data.
  </p>

  <h3>Hosting</h3>
  <p>
    This website is hosted via Firebase Hosting. The hosting
    provider automatically processes your IP address and other
    technical data when you access the site to ensure its
    operation. This information is stored in so-called server
    log files and includes:
  </p>

  <ul>
    <li>IP address of the requesting device</li>
    <li>Date and time of access</li>
    <li>Browser type and version</li>
    <li>Operating system used</li>
    <li>Referrer URL</li>
  </ul>

  <p>
    This data is used solely for technical administration
    and is not merged with other data sources.
  </p>

  <h3>Collection and processing of personal data</h3>
  <p>
    My website includes a contact form. I collect the following
    personal data through this form:
  </p>

  <ul>
    <li>First and last name</li>
    <li>Email address</li>
  </ul>

  <p>
    This data is used solely to contact you or to provide
    the website’s features.
  </p>

  <h3>Storage and Security:</h3>
  <p>
    Data transmission is encrypted (e.g., via HTTPS, if enabled).
  </p>

  <h3>Data Disclosure</h3>
  <p>
    Your personal data is not shared with third parties.
    No data is transferred outside the European Union.
  </p>

  <p>
    This website does not use cookies.
  </p>

  <h3>Analytics and Tracking Tools</h3>
  <p>
    No tracking or analytics tools (e.g., Google Analytics,
    Matomo) are used on this website.
  </p>

  <h3>Your Rights</h3>
  <p>You have the right to:</p>

  <ul>
    <li>Access the personal data we store (Art. 15 GDPR)</li>
    <li>Rectify inaccurate data (Art. 16 GDPR)</li>
    <li>Request deletion of your data (Art. 17 GDPR)</li>
    <li>Restrict processing of your data (Art. 18 GDPR)</li>
    <li>Object to the processing of your data (Art. 21 GDPR)</li>
    <li>Data portability (Art. 20 GDPR)</li>
  </ul>

  <p>
    To exercise these rights, you can contact me via email:
    <a href="mailto:luke.heller@dreadnoughtus.de">
      luke.heller@dreadnoughtus.de
    </a>
  </p>

  <h3>Data Retention</h3>
  <p>
    I store your personal data only as long as necessary
    for the intended purpose or as required by law.
  </p>

  <h3>Data Security</h3>
  <p>
    I implement technical and organizational security measures
    to protect your data against manipulation, loss, destruction,
    or unauthorized access.
  </p>

  <h3>Changes to This Privacy Policy</h3>
  <p>
    I reserve the right to amend this privacy policy at any
    time to comply with current legal requirements. The latest
    version is available on my website under the specified
    contact address.
  </p>
`,

    back: 'Back'
  },
  de: {
    nav: ['Über mich', 'Skills', 'Projekte'],
    role: 'Frontend Entwickler',
    work: 'Meine Arbeit ansehen',
    contact: 'Kontakt aufnehmen',
    marquee: [
      'Verfügbar für Remote-Arbeit',
      'Frontend Entwickler',
      'Aus Magdeburg',
      'Offen für neue Projekte'
    ],
    aboutEyebrow: 'Wer ich bin',
    aboutTitle: 'Über mich',
    aboutIntro: 'Hey, ich bin Lukas! Seit meiner Kindheit faszinieren mich Computer und Videospiele. Heute bringe ich eigene Anwendungen und Lösungen durch Code zum Leben.',
    location: 'Aktuell lebe ich in Magdeburg. Ich bin offen für Remote-Arbeit und Arbeit im Büro.',
    mind: 'Ich möchte meine Karriere als Fullstack-Webentwickler starten.',
    quality: 'Als kreativer und analytischer Teamplayer stelle ich mich gern komplexen Problemen, um daran zu wachsen.',
    technologies: 'Technologien',
    skillSet: 'Skill Set',
    skillsText: 'Ich erstelle moderne, nutzerfreundliche Web-Apps mit HTML, CSS und JavaScript, ergänzt durch Erfahrung mit TypeScript und Angular. Diese Version ist komplett in reinem HTML, CSS und JS umgesetzt.',
    skillQuestion: 'Du brauchst einen weiteren Skill?',
    skillQuestionAccent: 'einen weiteren Skill?',
    skillContact: 'Melde dich gern bei mir. Ich freue mich darauf, mein Wissen zu erweitern.',
    letsTalk: 'Lass uns sprechen',
    portfolio: 'Portfolio',
    featuredProjects: 'Ausgewählte Projekte',
    projectsCopy: 'Entdecke hier eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Skills in Aktion zu sehen.',
    quoteTitle: 'Was meine Kollegen über mich sagen',
    contactHead: 'Lass uns zusammenarbeiten',
    contactTitle: 'Kontakt',
    contactSub: 'Hast du ein Problem zu lösen?',
    contactText: 'Kontaktiere mich über dieses Formular. Ich freue mich darauf, von dir, deinen Ideen und möglichen Projekten zu hören.',
    needDev: 'Du brauchst einen Frontend Entwickler?',
    talk: 'Lass uns sprechen!',
    name: 'Wie heißt du?',
    namePh: 'Dein Name',
    email: 'Wie lautet deine E-Mail?',
    emailPh: 'deinemail@email.com',
    msg: 'Wie kann ich helfen?',
    msgPh: 'Hallo Lukas, ich interessiere mich für...',
    privacy: 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.',
    send: 'Sag Hallo ;)',
    footerRole: 'Web Entwickler',
    footerLocation: 'Magdeburg Deutschland',
    github: 'Github',
    linkedIn: 'LinkedIn',
    emailLink: 'E-Mail',
    legal: 'Impressum',
    privacyTitle: 'Datenschutz',
    dialogGithub: 'GitHub',
    dialogLive: 'Live-Test',
    nextProject: 'Nächstes Projekt →',
    closeDialog: 'Dialog schließen',
    requiredError: 'Bitte fülle dieses Feld aus.',
    nameRequired: 'Dein Name ist erforderlich',
    messageRequired: 'Deine Nachricht ist erforderlich',
    emailRequired: 'Deine E-Mail ist erforderlich',
    emailMissingAt: 'Deine E-Mail braucht ein @-Zeichen',
    emailMissingLocal: 'Vor dem @-Zeichen muss etwas stehen',
    emailMissingDot: 'Deine E-Mail braucht eine Domain wie .de oder .com',
    emailMissingEnding: 'Die Domainendung braucht mindestens zwei Buchstaben',
    emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein',
    emailError: 'Bitte gib eine gültige E-Mail ein.',
    privacyError: 'Bitte akzeptiere die Datenschutzerklärung.',
    successMessage: 'Danke! Deine Nachricht ist bereit zum Senden.',
    

legalText: `
  <h2>Annahme der Bedingungen</h2>
  <p>
    Durch den Zugriff auf und die Nutzung von Portfolio
    erkennen Sie die folgenden Geschäftsbedingungen
    sowie alle Richtlinien, Leitlinien oder Änderungen
    an, die Ihnen von Zeit zu Zeit präsentiert werden
    können, und stimmen ihnen zu.
  </p>

  <h2>Umfang und Eigentum des Produkts</h2>
  <p>
    Portfolio wurde im Rahmen eines Gruppenprojekts
    in einem Web-Development-Bootcamp bei der
    Developer Akademie GmbH entwickelt.
    Es dient ausschließlich zu Ausbildungszwecken
    und ist nicht für eine umfassende private oder
    geschäftliche Nutzung vorgesehen.
  </p>
  <p>
    Das Design von Portfolio ist Eigentum der
    Developer Akademie GmbH. Eine unautorisierte
    Nutzung, Vervielfältigung, Veränderung,
    Verbreitung oder Nachbildung des Designs
    ist untersagt.
  </p>

  <h2>Eigentumsrechte</h2>
  <p>
    Abgesehen von dem Design, das Eigentum der
    Developer Akademie GmbH ist, behalten die
    aufgeführten Studierenden alle Eigentumsrechte
    an Portfolio, einschließlich aller damit
    verbundenen urheberrechtlich geschützten
    Materialien und sonstigen Eigentumsinformationen.
  </p>

  <h2>Nutzung des Produkts</h2>
  <p>
    Portfolio darf ausschließlich für rechtmäßige
    Zwecke und in Übereinstimmung mit allen
    geltenden Gesetzen und Vorschriften verwendet
    werden.
  </p>

  <h2>Haftungsausschluss</h2>
  <p>
    Portfolio wird ohne Gewährleistung bereitgestellt.
    Die Einzelheiten der Haftungsregelungen aus der
    Vorlage müssen vor einer Veröffentlichung
    rechtlich geprüft werden.
  </p>

  <h2>Kontakt</h2>
  <p>
    Für Fragen oder Mitteilungen kontaktieren
    Sie mich bitte unter
    <a href="mailto:luke.heller@dreadnoughtus.de">
      luke.heller@dreadnoughtus.de
    </a>.
  </p>
`,



privacyText: `
  <h2>Verantwortliche Stelle</h2>

  <h3>Allgemeine Informationen</h3>
  <p>
    Der Schutz Ihrer persönlichen Daten ist mir sehr wichtig.
    Ich behandle Ihre personenbezogenen Daten vertraulich und
    entsprechend den gesetzlichen Datenschutzvorschriften sowie
    dieser Datenschutzerklärung. Diese Datenschutzerklärung
    informiert Sie darüber, welche Daten ich erhebe, wie ich sie
    verwende und welche Rechte Sie in Bezug auf Ihre Daten haben.
  </p>

  <h3>Hosting</h3>
  <p>
    Diese Website wird über Firebase Hosting betrieben.
    Der Hosting-Anbieter verarbeitet automatisch Ihre IP-Adresse
    und weitere technische Daten, wenn Sie die Seite aufrufen,
    um deren Betrieb sicherzustellen. Diese Informationen werden
    in sogenannten Server-Logfiles gespeichert und umfassen:
  </p>
  <ul>
    <li>IP-Adresse des anfragenden Geräts</li>
    <li>Datum und Uhrzeit des Zugriffs</li>
    <li>Browsertyp und -version</li>
    <li>Verwendetes Betriebssystem</li>
    <li>Referrer-URL</li>
  </ul>
  <p>
    Diese Daten werden ausschließlich für die technische
    Administration verwendet und nicht mit anderen Datenquellen
    zusammengeführt.
  </p>

  <h3>Erhebung und Verarbeitung personenbezogener Daten</h3>
  <p>
    Meine Website enthält ein Kontaktformular.
    Über dieses Formular erhebe ich folgende personenbezogene Daten:
  </p>
  <ul>
    <li>Vor- und Nachname</li>
    <li>E-Mail-Adresse</li>
  </ul>
  <p>
    Diese Daten werden ausschließlich verwendet, um Sie zu
    kontaktieren oder die Funktionen der Website bereitzustellen.
  </p>

  <h3>Speicherung und Sicherheit:</h3>
  <p>
    Die Datenübertragung ist verschlüsselt (z. B. über HTTPS,
    sofern aktiviert).
  </p>

  <h3>Datenweitergabe</h3>
  <p>
    Ihre personenbezogenen Daten werden nicht an Dritte
    weitergegeben. Es werden keine Daten außerhalb der
    Europäischen Union übermittelt.
  </p>

  <p>Diese Website verwendet keine Cookies.</p>

  <h3>Analyse- und Tracking-Tools</h3>
  <p>
    Auf dieser Website werden keine Tracking- oder Analysetools
    (z. B. Google Analytics, Matomo) verwendet.
  </p>

  <h3>Ihre Rechte</h3>
  <p>Sie haben das Recht auf:</p>
  <ul>
    <li>
      Einsicht in die von uns gespeicherten personenbezogenen Daten
      (Art. 15 DSGVO)
    </li>
    <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
    <li>Löschung Ihrer Daten beantragen (Art. 17 DSGVO)</li>
    <li>
      Einschränkung der Verarbeitung Ihrer Daten verlangen
      (Art. 18 DSGVO)
    </li>
    <li>
      Widerspruch gegen die Verarbeitung Ihrer Daten einlegen
      (Art. 21 DSGVO)
    </li>
    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
  </ul>
  <p>
    Um diese Rechte auszuüben, können Sie mich per E-Mail
    kontaktieren:
    <a href="mailto:luke.heller@dreadnoughtus.de">
      luke.heller@dreadnoughtus.de
    </a>
  </p>

  <h3>Datenspeicherung</h3>
  <p>
    Ich speichere Ihre personenbezogenen Daten nur so lange,
    wie es für den vorgesehenen Zweck erforderlich ist oder
    gesetzlich vorgeschrieben wird.
  </p>

  <h3>Datensicherheit</h3>
  <p>
    Ich setze technische und organisatorische Sicherheitsmaßnahmen
    ein, um Ihre Daten vor Manipulation, Verlust, Zerstörung
    oder unbefugtem Zugriff zu schützen.
  </p>

  <h3>Änderungen dieser Datenschutzerklärung</h3>
  <p>
    Ich behalte mir das Recht vor, diese Datenschutzerklärung
    jederzeit zu ändern, um den aktuellen gesetzlichen
    Anforderungen zu entsprechen. Die jeweils gültige Version
    ist auf meiner Website unter der angegebenen Kontaktadresse
    abrufbar.
  </p>
`,

    back: 'Zurück'
  }
};

export const skills = [
  ['html', 'HTML'],
  ['css', 'CSS'],
  ['javascript', 'JavaScript'],
  ['typescript', 'TypeScript'],
  ['angular', 'Angular'],
  ['firebase', 'Firebase'],
  ['database-02-svgrepo-com', 'MS SQL Server'],
  ['git', 'Git'],
  ['api', 'REST-API'],
  ['growth-mindset', 'Growth Mindset']
];

export const projects = [
  {
    title: 'Join',
    image: 'join.png',
    preview: 'join.png',
    subtitle: {
      en: 'Task manager inspired by the Kanban System',
      de: 'Task-Manager inspiriert vom Kanban-System'
    },
    desc: {
      en: 'Task manager with drag and drop logic, contacts and structured workflow views.',
      de: 'Task-Manager mit Drag-and-drop-Logik, Kontakten und strukturierten Workflow-Ansichten.'
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: '#',
    live: 'http://join.dreadnoughtus.de/'
  },
  {
    title: 'Sharki',
    image: 'sharki.png',
    preview: 'sharki.png',
    subtitle: {
      en: 'A simple object-oriented browser game',
      de: 'Ein einfaches objektorientiertes Browser-Spiel'
    },
    desc: {
      en: 'A small browser game with keyboard controls, animations and collision logic.',
      de: 'Ein kleines Browser-Spiel mit Tastatursteuerung, Animationen und Kollisionslogik.'
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: 'http://sharki.dreadnoughtus.de/'
  },
  {
    title: 'Pokedex',
    image: 'pokedex.png',
    preview: 'Pokedex.png',
    subtitle: {
      en: 'API based Pokémon library',
      de: 'API-basierte Pokémon-Bibliothek'
    },
    desc: {
      en: 'A Pokédex using API data, cards, detail views and responsive interaction.',
      de: 'Ein Pokédex mit API-Daten, Karten, Detailansichten und responsiver Interaktion.'
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: 'http://pokedex.dreadnoughtus.de/'
  }
];

export const quotes = [
  {
    text: {
      en: 'After unexpectedly losing my developer, I faced a critical challenge. When asked if he felt up to it, Luke simply said, “Let’s try.” After just three months of onboarding, he independently managed clients with over 1,800 employees—impressively confident and professional.',
      de: 'Nachdem mein Entwickler unerwartet ausfiel, stand ich vor einer kritischen Herausforderung. Auf die Frage, ob er sich das zutraue, sagte Luke nur: „Lass es uns versuchen.“ Nach nur drei Monaten Einarbeitung betreute er eigenständig Kunden mit über 1.800 Mitarbeitenden – beeindruckend sicher und professionell.'
    },
    name: 'J. Klingenschmidt - Former CEO of KWS'
  },
  {
    text: {
      en: 'I met Luke at his previous company and was so impressed by his work that I actively sought to bring him into our organization.',
      de: 'Ich habe Luke in seinem vorherigen Unternehmen kennengelernt und war von seiner Arbeit so beeindruckt, dass ich ihn aktiv in unsere Organisation holen wollte.'
    },
    name: 'S. Schneider – Commissioning for digitalization'
  },
  {
    text: {
      en: 'Mr. Heller has recently joined our company and is already impressing with strong commitment and innovative solutions. His ability to bring in fresh perspectives and tackle challenges effectively is particularly noteworthy. For further suggestions and technical inquiries, I recommend contacting him directly.',
      de: 'Herr Heller ist erst seit Kurzem in unserem Unternehmen und überzeugt bereits durch großes Engagement und innovative Lösungen. Besonders hervorzuheben ist seine Fähigkeit, frische Perspektiven einzubringen und Herausforderungen effektiv anzugehen. Für weitere Vorschläge und technische Fragen empfehle ich, ihn direkt zu kontaktieren.'
    },
    name: 'H. Hahndorf – Chief Executive Officer'
  },
  {
    text: {
      en: 'Finally, a true IT professional—even if he’s the only one who occasionally looks the part.',
      de: 'Endlich ein echter IT-Profi – auch wenn er der Einzige ist, der manchmal auch so aussieht.'
    },
    name: 'U. Leuckert – IT Department Head'
  },
  {
    text: {
      en: 'How do you manage to start even Mondays with so much energy',
      de: 'Wie schaffst du es, sogar montags mit so viel Energie zu starten?'
    },
    name: 'I. Wonofsky – Team Member'
  }
];
