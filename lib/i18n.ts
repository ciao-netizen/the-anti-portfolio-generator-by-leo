export type Locale = "en" | "it"

export const translations = {
  en: {
    landing: {
      tagline: "For humans who refuse to be flattened",
      title1: "Your CV is",
      title2: "dead.",
      subtitle:
        "AI flattens everyone into the same template. Show what makes you irreplaceable: how you think, the trade-offs you choose, the scars that prove you've done the work.",
      cta: "Build Your Anti-Portfolio",
      seeExamples: "Framework",
      nav: {
        examples: "Examples",
        start: "Start",
      },
      difference: {
        title: "The difference",
        whatMakesItDifferent: "What an Anti-Portfolio reveals that a CV never can",
        cards: {
          identity: {
            number: "01",
            title: "Identity before role",
            description:
              "You're defined by what you do and how you think—not 'Senior Whatever @ BigCo'. No job titles as primary identity.",
          },
          asymmetricAdvantage: {
            number: "02",
            title: "Asymmetric advantage",
            description:
              "One distinctive strength you do better than almost anyone. Not a skills list—your signature superpower.",
          },
          frictionAndFailure: {
            number: "03",
            title: "Friction & failure",
            description:
              "The scars that prove you've done the work. Real mistakes, real lessons—not humble brags in disguise.",
          },
          processOverPolish: {
            number: "04",
            title: "Process over polish",
            description:
              "How you think matters more than what you shipped. Decisions, trade-offs, constraints, turning points.",
          },
        },
      },
      quote: {
        quote1: "AI is not writing your story.",
        quote2: "It's a mirror",
        quote3: "revealing patterns you couldn't see yourself.",
        description: "Your raw input becomes a coherent narrative. The AI amplifies, it doesn't fabricate.",
      },
      ctaSection: {
        title: "Ready to be unforgettable?",
        description: "5 minutes of honest input. One portfolio that actually represents you.",
        cta: "Start Now",
      },
    },
    footer: {
      title: "Anti-Portfolio Generator",
      links: {
        examples: "Examples",
        create: "Create",
      },
    },
    wizard: {
      step1: {
        number: "Step 01",
        title: "Who You Are",
        subtitle: "Beyond titles and roles",
        name: "Name",
        namePlaceholder: "How you want to be called",
        location: "Location",
        locationPlaceholder: "Where you're based",
        currentRole: "Current role",
        currentRolePlaceholder: "What you do for work right now",
        currentRoleHint:
          "This won't appear in your output, but helps us understand your context better. Used only to calibrate the output, never shown publicly.",
        obsession: "What's something you can't stop thinking about, even when you should?",
        obsessionPlaceholder: "An idea, a problem, a pattern you're always noticing...",
        obsessionHint: "This reveals what truly drives you",
        unpopularOpinion: "What's an unpopular opinion you hold strongly?",
        unpopularOpinionPlaceholder: "Something most people disagree with you on",
        unpopularOpinionHint: "Controversial views reveal character",
        childhood: "What did you want to be as a child, and why?",
        childhoodPlaceholder: "The dream job and what attracted you to it",
        childhoodHint: "Early dreams reveal core motivations",
        linkedinUrl: "LinkedIn Profile (optional)",
        linkedinPlaceholder: "https://linkedin.com/in/yourprofile",
        linkedinHint: "We'll extract relevant info to enrich your profile",
        portfolioUrl: "Portfolio / Website (optional)",
        portfolioUrlPlaceholder: "https://yourwebsite.com",
        portfolioUrlHint: "Any public link that shows your work",
        profileImage: "Profile Image (optional)",
        profileImageHint: "Your photo will appear at the top of your portfolio",
        uploadPhoto: "Upload a photo",
        tooltip: "These questions reveal your personality, not your resume.",
      },
      step2: {
        number: "Step 02",
        title: "Your Superpower",
        subtitle: "The thing you do differently",
        problemSolved: "Tell us about a time you solved a problem no one else could see",
        problemSolvedPlaceholder: "The situation, what you noticed, what you did...",
        problemSolvedHint: "Be specific - the details reveal your unique lens",
        disproportionateValue: "In which situations do you feel disproportionately more useful than others?",
        disproportionateValuePlaceholder: "Describe specific contexts where you naturally excel...",
        highStakesMoment: "Tell us about a time they sought you out when stakes were high. Why you?",
        highStakesMomentPlaceholder: "The situation, why they needed you specifically, what happened...",
        energizes: "What type of challenge makes you feel most alive?",
        energizesPlaceholder: "The kind of work that doesn't feel like work",
        drains: "What do people ask you to do that secretly drains you?",
        drainsPlaceholder: "Even if you're good at it, it exhausts you",
        ratingRisk: "Risk tolerance",
        ratingRiskLow: "Play it safe",
        ratingRiskHigh: "Embrace chaos",
        ratingSpeed: "Decision speed",
        ratingSpeedLow: "Careful analysis",
        ratingSpeedHigh: "Fast intuition",
        ratingPeople: "Energy source",
        ratingPeopleLow: "Solo deep work",
        ratingPeopleHigh: "Team collaboration",
        tooltip: "We're looking for patterns in how you naturally operate",
      },
      step3: {
        number: "Step 03",
        title: "A Story That Defines You",
        subtitle: "One moment that reveals everything",
        pivotMoment: "Describe a moment that changed how you see the world",
        pivotMomentPlaceholder: "A turning point, an insight, a before-and-after moment...",
        pivotMomentHint: "This can be personal or professional",
        whatChanged: "What shifted in you after that moment?",
        whatChangedPlaceholder: "How you think, act, or decide differently now",
        toughDecision:
          "Tell us about a difficult decision you made. What options did you have, and what criteria triggered your choice?",
        toughDecisionPlaceholder: "The situation, your options, what made you choose...",
        uncertaintyDefault: "When you don't have enough information, what do you do by default?",
        uncertaintyDefaultPlaceholder: "Your automatic response to uncertainty...",
        portfolioNote: "Portfolio link (optional)",
        portfolioNoteHint: "We'll try to extract patterns from your public work",
        tooltip: "One good story reveals more than ten bullet points",
      },
      step4: {
        number: "Step 04",
        title: "Your Scars",
        subtitle: "Failures that shaped you",
        microcopy: "If this feels uncomfortable, you're being honest enough.",
        biggestMistake: "What's the biggest mistake you've made?",
        biggestMistakePlaceholder: "Not a humble brag. A real mistake that cost you something.",
        letDown: "Who did you let down, and what did it teach you?",
        letDownPlaceholder: "A person or group you disappointed",
        wouldntDoAgain: "Tell us about a decision you wouldn't make again today. What did it really cost you?",
        wouldntDoAgainPlaceholder: "The decision, the real cost, what you learned...",
        automaticChange: "After that mistake, what do you now do differently automatically?",
        automaticChangePlaceholder: "Behaviors that changed without you thinking about it...",
        tooltip: "Vulnerability is credibility. This is what makes you human.",
      },
      step5: {
        number: "Step 05",
        title: "Your Manual",
        subtitle: "How to work with you",
        weirdHabit: "What's the strangest thing you do when you work?",
        weirdHabitPlaceholder: "A quirk, ritual, or unusual habit",
        dealbreaker: "What's a dealbreaker in how you work with others?",
        dealbreakerPlaceholder: "Something that makes you walk away",
        perfectDay: "Describe your perfect work day",
        perfectDayPlaceholder: "From morning to evening - what does it look like?",
        misunderstood: "What do people often get wrong about you at first?",
        misunderstoodPlaceholder: "A common first impression that's incorrect",
        ratingStructure: "Structure preference",
        ratingStructureLow: "Total freedom",
        ratingStructureHigh: "Clear systems",
        ratingFeedback: "Feedback style",
        ratingFeedbackLow: "Gentle hints",
        ratingFeedbackHigh: "Direct truth",
        tooltip: "This helps people know what to expect before they meet you",
      },
      summary: {
        title: "Review & Generate",
        subtitle: "Check your answers and create your anti-portfolio",
        variant: "Choose output style",
        variants: {
          balanced: "Balanced",
          direct: "More Direct",
          analytical: "More Analytical",
          poetic: "More Poetic",
        },
        generate: "Generate Anti-Portfolio",
        generating: "Creating your story...",
        sections: {
          identity: "Who You Are",
          strength: "Your Superpower",
          proof: "Your Story",
          friction: "Your Scars",
          workStyle: "Your Manual",
        },
        incomplete: "Please complete all required fields",
        edit: "Edit",
      },
      navigation: {
        back: "Back",
        next: "Next",
      },
    },
    framework: {
      badge: "Framework document",
      title: "The philosophy behind",
      titleAccent: "anti-portfolio",
      subtitle: "A new paradigm for self-presentation in a world where AI has made traditional portfolios obsolete.",
      assumptions: {
        title: "Base assumptions",
        intro:
          'What makes a portfolio "anti-traditional"? It starts with rejecting the fundamental lies of conventional self-presentation.',
        traditional: "Traditional portfolio says",
        traditionalList: [
          "You are your job title",
          "List every skill you have",
          "Show only successes",
          "Polish everything perfectly",
          "Fit the template",
        ],
        antiPortfolio: "Anti-portfolio believes",
        antiPortfolioList: [
          "You are how you think",
          "Reveal your one superpower",
          "Failures prove you've done the work",
          "Process matters more than output",
          "Break the mold, show the human",
        ],
      },
      patterns: {
        title: "Patterns and questions",
        intro: "We collect specific information through carefully designed questions. Here's why each matters:",
        items: [
          {
            title: "Identity questions",
            description:
              '"What can\'t you stop thinking about?" reveals obsessions that define you better than any bio.',
          },
          {
            title: "Superpower questions",
            description: '"When do people seek you out?" uncovers asymmetric advantages you might not even recognize.',
          },
          {
            title: "Story questions",
            description:
              '"Describe a moment that changed everything" extracts pivotal experiences that shaped your worldview.',
          },
          {
            title: "Scar questions",
            description:
              '"What\'s your biggest mistake?" builds credibility through vulnerability that polished CVs never achieve.',
          },
          {
            title: "Working style questions",
            description:
              "\"What's your dealbreaker?\" creates a user manual that helps others know if there's a real fit.",
          },
        ],
      },
      design: {
        title: "Design principles",
        intro: "How we balance uniqueness vs. standardization in every design decision:",
        principles: [
          {
            title: "Structured chaos",
            description: "Consistent sections enable comparison; personal content enables differentiation.",
          },
          {
            title: "Personality map over skill matrix",
            description: "Behavioral spectrums reveal fit better than any competency list.",
          },
          {
            title: "Quotes as anchors",
            description: "One signature quote captures your essence. Memorable, shareable, uniquely you.",
          },
          {
            title: "Visual restraint",
            description: "Clean typography, generous whitespace. The design recedes so your personality shines.",
          },
        ],
      },
      elements: {
        title: "Elementi distintivi",
        intro: "What makes anti-portfolio fundamentally different:",
        items: [
          {
            title: "Zero job title as identity",
            description:
              "Your role calibrates context but never appears in the output. You're defined by how you think.",
          },
          {
            title: "Dedicated failures section",
            description:
              '"Your scars" is a first-class citizen. Real mistakes build more trust than any success story.',
          },
          {
            title: "Proprietary methodology",
            description:
              "5-step wizard: Identity → Superpower → Story → Scars → Manual. Each step builds on the previous.",
          },
          {
            title: "Behavioral metrics over skills",
            description: "Personality map uses real behavioral spectrums instead of meaningless skill ratings.",
          },
          {
            title: "Process over results",
            description: "Questions focus on how you made decisions, not what you shipped.",
          },
        ],
      },
      aiVision: {
        title: "AI-native vision",
        intro: "How we rethink portfolios for a world where AI has always existed:",
        insight:
          "When AI can generate any portfolio in seconds, the only defensible asset is authenticity that can't be faked. Failures, quirks, specific stories, behavioral patterns—these are impossible to fabricate convincingly.",
        quote:
          "In an AI-saturated world, the most valuable signal is the one that's hardest to fake: your specific failures, your weird obsessions, your honest contradictions.",
      },
      cta: {
        text: "Ready to build yours?",
        button: "Create your anti-portfolio",
      },
    },
  },
  it: {
    landing: {
      tagline: "Per chi rifiuta di essere appiattito",
      title1: "Il tuo CV è",
      title2: "morto.",
      subtitle:
        "L'AI appiattisce tutti nello stesso template. Mostra cosa ti rende insostituibile: come pensi, i compromessi che scegli, le cicatrici che provano che hai fatto il lavoro.",
      cta: "Crea il Tuo Anti-Portfolio",
      seeExamples: "Framework",
      nav: {
        examples: "Esempi",
        start: "Inizia",
      },
      difference: {
        title: "La differenza",
        whatMakesItDifferent: "Cosa rivela un Anti-Portfolio che un CV non può mai mostrare",
        cards: {
          identity: {
            number: "01",
            title: "Identità prima del ruolo",
            description:
              "Sei definito da cosa fai e come pensi—non 'Senior Qualcosa @ GrandeCo'. Nessun titolo di lavoro come identità primaria.",
          },
          asymmetricAdvantage: {
            number: "02",
            title: "Vantaggio asimmetrico",
            description:
              "Una forza distintiva che fai meglio di chiunque altro. Non una lista di competenze—il tuo superpotere distintivo.",
          },
          frictionAndFailure: {
            number: "03",
            title: "Attrito e fallimento",
            description:
              "Le cicatrici che provano che hai fatto il lavoro. Errori reali, lezioni vere—non umili vanti mascherati.",
          },
          processOverPolish: {
            number: "04",
            title: "Processo sopra perfezione",
            description:
              "Come pensi conta più di cosa hai consegnato. Decisioni, compromessi, vincoli, punti di svolta.",
          },
        },
      },
      quote: {
        quote1: "L'AI non sta scrivendo la tua storia.",
        quote2: "È uno specchio",
        quote3: "che rivela pattern che non potevi vedere da solo.",
        description: "Il tuo input grezzo diventa una narrativa coerente. L'AI amplifica, non fabbrica.",
      },
      ctaSection: {
        title: "Pronto a essere indimenticabile?",
        description: "5 minuti di input onesto. Un portfolio che ti rappresenta davvero.",
        cta: "Inizia Ora",
      },
    },
    footer: {
      title: "Anti-Portfolio Generator",
      links: {
        examples: "Esempi",
        create: "Crea",
      },
    },
    wizard: {
      step1: {
        number: "Passo 01",
        title: "Chi Sei",
        subtitle: "Oltre titoli e ruoli",
        name: "Nome",
        namePlaceholder: "Come vuoi essere chiamato",
        location: "Città",
        locationPlaceholder: "Dove sei basato",
        currentRole: "Occupazione attuale",
        currentRolePlaceholder: "Cosa fai per lavoro adesso",
        currentRoleHint:
          "Questo non apparirà nel tuo output, ma ci aiuta a capire meglio il tuo contesto. Usato solo per calibrare l'output, mai mostrato pubblicamente.",
        obsession: "Qual è qualcosa a cui non riesci a smettere di pensare, anche quando dovresti?",
        obsessionPlaceholder: "Un'idea, un problema, un pattern che noti sempre...",
        obsessionHint: "Questo rivela cosa ti guida davvero",
        unpopularOpinion: "Qual è un'opinione impopolare che sostieni con forza?",
        unpopularOpinionPlaceholder: "Penso che l'ananas stia bene sulla pizza...",
        unpopularOpinionHint: "Le opinioni controverse rivelano il carattere",
        childhood: "Cosa volevi fare da bambino, e perché?",
        childhoodPlaceholder: "Il lavoro dei sogni e cosa ti attirava",
        childhoodHint: "I sogni d'infanzia rivelano motivazioni profonde",
        linkedinUrl: "Profilo LinkedIn (opzionale)",
        linkedinPlaceholder: "https://linkedin.com/in/tuoprofilo",
        linkedinHint: "Estrarremo info rilevanti per arricchire il tuo profilo",
        portfolioUrl: "Portfolio / Sito web (opzionale)",
        portfolioUrlPlaceholder: "https://tuosito.com",
        portfolioUrlHint: "Qualsiasi link pubblico che mostri il tuo lavoro",
        profileImage: "Immagine Profilo (opzionale)",
        profileImageHint: "La tua foto apparirà in cima al portfolio",
        uploadPhoto: "Carica una foto",
        tooltip: "Qui cerchiamo chi sei davvero, non quello che sai fare.",
      },
      step2: {
        number: "Passo 02",
        title: "Il Tuo Superpotere",
        subtitle: "La cosa che fai diversamente",
        problemSolved: "Raccontaci di una volta in cui hai risolto un problema che nessun altro vedeva",
        problemSolvedPlaceholder: "La situazione, cosa hai notato, cosa hai fatto...",
        problemSolvedHint: "Sii specifico - i dettagli rivelano la tua lente unica",
        disproportionateValue: "In quali situazioni senti di essere sproporzionatamente più utile degli altri?",
        disproportionateValuePlaceholder: "Descrivi contesti specifici dove eccelli naturalmente...",
        highStakesMoment:
          "Racconta una situazione in cui ti hanno cercato quando la posta in gioco era alta. Perché proprio tu?",
        highStakesMomentPlaceholder: "La situazione, perché avevano bisogno proprio di te, cosa è successo...",
        energizes: "Che tipo di sfida ti fa sentire più vivo?",
        energizesPlaceholder: "Il tipo di lavoro che non sembra lavoro",
        drains: "Cosa ti chiedono di fare che ti prosciuga segretamente?",
        drainsPlaceholder: "Anche se sei bravo, ti esaurisce",
        ratingRisk: "Tolleranza al rischio",
        ratingRiskLow: "Gioco sicuro",
        ratingRiskHigh: "Abbraccio il caos",
        ratingSpeed: "Velocità decisionale",
        ratingSpeedLow: "Analisi attenta",
        ratingSpeedHigh: "Intuizione veloce",
        ratingPeople: "Fonte di energia",
        ratingPeopleLow: "Lavoro solitario",
        ratingPeopleHigh: "Collaborazione",
        tooltip: "Cerchiamo il pattern di come pensi e agisci naturalmente",
      },
      step3: {
        number: "Passo 03",
        title: "Una Storia Che Ti Definisce",
        subtitle: "Un momento che rivela tutto",
        pivotMoment: "Descrivi un momento che ha cambiato come vedi il mondo",
        pivotMomentPlaceholder: "Un punto di svolta, un insight, un momento prima-e-dopo...",
        pivotMomentHint: "Può essere personale o professionale",
        whatChanged: "Cosa è cambiato in te dopo quel momento?",
        whatChangedPlaceholder: "Come pensi, agisci o decidi diversamente ora",
        toughDecision:
          "Racconta una decisione difficile che hai preso. Quali opzioni avevi e quale criterio ha fatto scattare la scelta?",
        toughDecisionPlaceholder: "La situazione, le tue opzioni, cosa ti ha fatto scegliere...",
        uncertaintyDefault: "Quando non hai abbastanza informazioni, cosa fai di default?",
        uncertaintyDefaultPlaceholder: "La tua risposta automatica all'incertezza...",
        portfolioNote: "Link portfolio (opzionale)",
        portfolioNoteHint: "Proveremo a estrarre pattern dal tuo lavoro pubblico",
        tooltip: "Una storia autentica dice più di una lista di successi",
      },
      step4: {
        number: "Passo 04",
        title: "Le Tue Cicatrici",
        subtitle: "Fallimenti che ti hanno formato",
        microcopy: "Se sembra scomodo, significa che stai essendo sincero.",
        biggestMistake: "Qual è il più grande errore che hai fatto?",
        biggestMistakePlaceholder: "Non un humble brag. Un vero errore che ti è costato qualcosa.",
        letDown: "Chi hai deluso, e cosa ti ha insegnato?",
        letDownPlaceholder: "Una persona o un gruppo che hai deluso",
        wouldntDoAgain: "Racconta una decisione che oggi non rifaresti. Cosa ti è costata davvero?",
        wouldntDoAgainPlaceholder: "La decisione, il costo reale, cosa hai imparato...",
        automaticChange: "Dopo quell'errore, cosa fai oggi in modo diverso automaticamente?",
        automaticChangePlaceholder: "Comportamenti che sono cambiati senza che tu ci pensassi...",
        tooltip: "La vulnerabilità costruisce credibilità. E credibilità è tutto.",
      },
      step5: {
        number: "Passo 05",
        title: "Il Tuo Manuale",
        subtitle: "Come lavorare con te",
        weirdHabit: "Qual è la cosa più strana che fai quando lavori?",
        weirdHabitPlaceholder: "Una stranezza, un rituale, un'abitudine insolita",
        dealbreaker: "Qual è un dealbreaker nel lavorare con altri?",
        dealbreakerPlaceholder: "Qualcosa che ti fa andare via",
        perfectDay: "Descrivi la tua giornata lavorativa perfetta",
        perfectDayPlaceholder: "Dalla mattina alla sera - come appare?",
        misunderstood: "Cosa sbagliano spesso le persone su di te all'inizio?",
        misunderstoodPlaceholder: "Una prima impressione comune che è sbagliata",
        ratingStructure: "Preferenza struttura",
        ratingStructureLow: "Libertà totale",
        ratingStructureHigh: "Sistemi chiari",
        ratingFeedback: "Stile feedback",
        ratingFeedbackLow: "Suggerimenti gentili",
        ratingFeedbackHigh: "Verità diretta",
        tooltip: "Chi sei quando non c'è nessuno a guardare",
      },
      summary: {
        title: "Rivedi & Genera",
        subtitle: "Controlla le tue risposte e crea il tuo anti-portfolio",
        variant: "Scegli stile output",
        variants: {
          balanced: "Equilibrato",
          direct: "Più Diretto",
          analytical: "Più Analitico",
          poetic: "Più Poetico",
        },
        generate: "Genera Anti-Portfolio",
        generating: "Creo la tua storia...",
        sections: {
          identity: "Chi Sei",
          strength: "Il Tuo Superpotere",
          proof: "La Tua Storia",
          friction: "Le Tue Cicatrici",
          workStyle: "Il Tuo Manuale",
        },
        incomplete: "Completa tutti i campi obbligatori",
        edit: "Modifica",
      },
      navigation: {
        back: "Indietro",
        next: "Avanti",
      },
    },
    framework: {
      badge: "Framework document",
      title: "La filosofia dietro",
      titleAccent: "l'anti-portfolio",
      subtitle:
        "Un nuovo paradigma di auto-presentazione in un mondo dove l'AI ha reso obsoleti i portfolio tradizionali.",
      assumptions: {
        title: "Assunti base",
        intro:
          'Cosa rende un portfolio "anti-tradizionale"? Inizia col rifiutare le bugie fondamentali dell\'auto-presentazione convenzionale.',
        traditional: "Il portfolio tradizionale dice",
        traditionalList: [
          "Sei il tuo job title",
          "Elenca ogni competenza che hai",
          "Mostra solo i successi",
          "Lucida tutto alla perfezione",
          "Adattati al template",
        ],
        antiPortfolio: "L'anti-portfolio crede",
        antiPortfolioList: [
          "Sei come pensi",
          "Rivela il tuo unico superpotere",
          "I fallimenti dimostrano che hai fatto il lavoro",
          "Il processo conta più del risultato",
          "Rompi lo schema, mostra l'umano",
        ],
      },
      patterns: {
        title: "Pattern e domande",
        intro:
          "Raccogliamo informazioni specifiche attraverso domande attentamente progettate. Ecco perché ognuna conta:",
        items: [
          {
            title: "Domande sull'identità",
            description:
              '"A cosa non riesci a smettere di pensare?" rivela ossessioni che ti definiscono meglio di qualsiasi bio.',
          },
          {
            title: "Domande sul superpotere",
            description: '"Quando le persone ti cercano?" scopre vantaggi asimmetrici che potresti non riconoscere.',
          },
          {
            title: "Domande sulla storia",
            description:
              '"Descrivi un momento che ha cambiato tutto" estrae esperienze cruciali che hanno plasmato la tua visione.',
          },
          {
            title: "Domande sulle cicatrici",
            description:
              '"Qual è il tuo più grande errore?" costruisce credibilità attraverso la vulnerabilità che i CV lucidati non raggiungono mai.',
          },
          {
            title: "Domande sullo stile di lavoro",
            description:
              '"Qual è il tuo dealbreaker?" crea un manuale utente che aiuta gli altri a capire se c\'è un vero fit.',
          },
        ],
      },
      design: {
        title: "Principi di design",
        intro: "Come bilanciamo unicità vs. standardizzazione in ogni decisione di design:",
        principles: [
          {
            title: "Caos strutturato",
            description:
              "Sezioni coerenti permettono il confronto; contenuti personali permettono la differenziazione.",
          },
          {
            title: "Mappa della personalità invece di matrice di skill",
            description: "Gli spettri comportamentali rivelano il fit meglio di qualsiasi lista di competenze.",
          },
          {
            title: "Citazioni come ancore",
            description: "Una citazione firma cattura la tua essenza. Memorabile, condivisibile, unicamente tua.",
          },
          {
            title: "Restraint visivo",
            description:
              "Tipografia pulita, spazio bianco generoso. Il design si ritira così la tua personalità brilla.",
          },
        ],
      },
      elements: {
        title: "Elementi distintivi",
        intro: "Cosa rende l'anti-portfolio fondamentalmente diverso:",
        items: [
          {
            title: "Zero job title come identità",
            description: "Il tuo ruolo calibra il contesto ma non appare mai nell'output. Sei definito da come pensi.",
          },
          {
            title: "Sezione fallimenti dedicata",
            description:
              '"Le tue cicatrici" è un cittadino di prima classe. Gli errori reali costruiscono più fiducia di qualsiasi storia di successo.',
          },
          {
            title: "Metodologia proprietaria",
            description:
              "Wizard a 5 step: Identità → Superpotere → Storia → Cicatrici → Manuale. Ogni step costruisce sul precedente.",
          },
          {
            title: "Metriche comportamentali invece di skill",
            description:
              "La mappa della personalità usa spettri comportamentali reali invece di valutazioni di skill senza senso.",
          },
          {
            title: "Processo sopra i risultati",
            description: "Le domande si concentrano su come hai preso le decisioni, non su cosa hai prodotto.",
          },
        ],
      },
      aiVision: {
        title: "Visione AI-native",
        intro: "Come ripensiamo i portfolio per un mondo dove l'AI è sempre esistita:",
        insight:
          "Quando l'AI può generare qualsiasi portfolio in secondi, l'unico asset difendibile è l'autenticità che non può essere falsificata. Fallimenti, stranezze, storie specifiche, pattern comportamentali—questi sono impossibili da fabbricare in modo convincente.",
        quote:
          "In un mondo saturo di AI, il segnale più prezioso è quello più difficile da falsificare: i tuoi fallimenti specifici, le tue strane ossessioni, le tue oneste contraddizioni.",
      },
      cta: {
        text: "Pronto a creare il tuo?",
        button: "Crea il tuo anti-portfolio",
      },
    },
  },
} as const

export function useTranslation(locale: Locale) {
  return translations[locale]
}
