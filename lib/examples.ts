import type { StoredPortfolio } from "./schemas"

// Hardcoded example portfolios for /examples page - Updated for new wizard structure
export const examplePortfolios: StoredPortfolio[] = [
  {
    id: "luca-developer",
    input: {
      identity: {
        name: "Luca Bianchi",
        location: "Milano",
        goal: "job-hunting",
        currentRole: "Senior Frontend Developer",
        obsession: "Come rendere le interfacce così intuitive che nessuno deve mai chiedersi cosa fare",
        unpopularOpinion: "I framework JavaScript sono sopravvalutati. Vanilla JS ben scritto batte React mal scritto.",
        childhood: "Smontavo i giocattoli per capire come funzionavano, poi li rimontavo meglio",
        linkedinUrl: "https://linkedin.com/in/lucabianchi",
        portfolioUrl: "https://lucabianchi.dev",
      },
      strength: {
        problemSolved:
          "Ho ereditato un'app React con 3 secondi di loading. L'ho portata a 400ms riscrivendo il data fetching e lazy loading dei componenti.",
        disproportionateValue:
          "Quando c'è codice legacy che tutti temono. Riesco a vedere pattern nel caos e trovare il punto esatto dove intervenire.",
        highStakesMoment:
          "Black Friday, checkout in crash. Mi hanno chiamato alle 2 di notte. Ho trovato il memory leak in 40 minuti e abbiamo salvato 200k di vendite.",
        energizes: "Problemi di performance. Quando vedo un'app lenta, mi viene voglia di capire perché.",
        drains: "Riunioni senza agenda. Meeting che potevano essere email.",
        ratingRisk: 3,
        ratingSpeed: 4,
        ratingPeople: 3,
      },
      proof: {
        pivotMoment: "Ho lasciato un posto fisso in banca per una startup. Tutti pensavano fossi pazzo.",
        whatChanged:
          "Ho capito che preferisco fallire provando qualcosa di mio che avere successo facendo qualcosa che non mi appartiene.",
        toughDecision:
          "Rifiutare un aumento del 40% per restare in un progetto open source che amavo. Ho scelto il senso sopra i soldi.",
        uncertaintyDefault:
          "Prototipo veloce. Se non so quale strada prendere, costruisco la versione più semplice e lascio che mi insegni.",
        ratingAdaptability: 4,
        ratingLearning: 5,
      },
      friction: {
        biggestMistake:
          "Ho convinto il team a riscrivere tutto da zero. 6 mesi buttati. Il refactoring incrementale era la risposta giusta.",
        letDown:
          "Il mio co-founder. Gli avevo promesso che avrei gestito tutto il frontend, ma mi sono sovraccaricato e ho consegnato tardi.",
        wouldntDoAgain:
          "Mai più stimare sotto pressione. Ogni deadline che ho accettato 'per fare bella figura' mi è costata nottate e qualità.",
        automaticChange:
          "Ora aggiungo sempre il 30% di buffer alle stime. E dico 'fammi controllare' invece di rispondere subito.",
        ratingOwnership: 5,
        ratingRecovery: 4,
      },
      workStyle: {
        weirdHabit: "Parlo da solo mentre debuggo. Ad alta voce. I colleghi si sono abituati.",
        dealbreaker: "Micromanagement. Se devo chiedere permesso per ogni commit, non funziona.",
        perfectDay: "Mattina deep work, pomeriggio code review e pair programming, sera niente lavoro.",
        misunderstood:
          "Sembro freddo perché sono diretto. Ma è rispetto: preferisco dirti la verità che farti perdere tempo.",
        ratingStructure: 2,
        ratingFeedback: 4,
      },
    },
    output: {
      en: {
        headline: "I make slow apps fast and messy code readable",
        subtitle: "The developer who finds the leverage point everyone else walked past",
        sections: [
          {
            id: "what-drives-me",
            heading: "What Drives Me",
            blocks: [
              {
                type: "p",
                content:
                  "I'm obsessed with interfaces that feel invisible. When someone uses an app I built and never thinks about the interface, I've done my job. Every hesitation, every confused click is a failure I take personally.",
              },
              { type: "quote", content: "The best code is the code nobody notices. It just works." },
            ],
          },
          {
            id: "my-superpower",
            heading: "My Superpower",
            blocks: [
              {
                type: "p",
                content:
                  "Give me your app that everyone's afraid to touch. The one with 3-second load times and spaghetti code. I'll find the three changes that fix 80% of your problems.",
              },
              {
                type: "list",
                content: [
                  "Took a React app from 3s to 400ms load time",
                  "Found a Black Friday memory leak at 2am, saved €200k in sales",
                  "Turn legacy codebases into something teams actually want to work on",
                ],
              },
            ],
          },
          {
            id: "turning-point",
            heading: "The Turning Point",
            blocks: [
              {
                type: "p",
                content:
                  "I left a stable bank job for a startup. Everyone thought I was crazy. But I learned something that changed everything: I'd rather fail at something meaningful than succeed at something that doesn't matter to me.",
              },
              {
                type: "quote",
                content: "When I don't know which path to take, I build the simplest version and let it teach me.",
              },
            ],
          },
          {
            id: "where-i-failed",
            heading: "Where I Failed",
            blocks: [
              {
                type: "p",
                content:
                  "I once convinced my team to rewrite everything from scratch. Six months wasted. Incremental refactoring was the right answer all along.",
              },
              {
                type: "p",
                content:
                  "Now I add 30% buffer to every estimate. And I say 'let me check' instead of answering under pressure.",
              },
            ],
          },
          {
            id: "how-i-work",
            heading: "How I Work",
            blocks: [
              {
                type: "list",
                content: [
                  "I talk to myself while debugging. Loudly. Colleagues got used to it.",
                  "Micromanagement is a dealbreaker. If I need permission for every commit, it won't work.",
                  "Morning for deep work, afternoon for reviews and pairing, evening for life.",
                ],
              },
            ],
          },
        ],
        toneTags: ["performance-obsessed", "pragmatic", "direct", "systems-thinker"],
        callouts: [
          "3s → 400ms load time optimization",
          "€200k saved in one Black Friday night",
          "Legacy code translator",
        ],
        quickLinks: [
          { label: "LinkedIn", url: "https://linkedin.com/in/lucabianchi", icon: "linkedin" },
          { label: "Portfolio", url: "https://lucabianchi.dev", icon: "portfolio" },
        ],
        traits: [
          { name: "Risk tolerance", value: 3, lowLabel: "Cautious", highLabel: "Bold" },
          { name: "Work pace", value: 4, lowLabel: "Methodical", highLabel: "Fast" },
          { name: "Structure need", value: 2, lowLabel: "Flexible", highLabel: "Structured" },
        ],
        faqs: [
          {
            question: "Why should we hire you over someone with more experience?",
            answer:
              "Because I don't just write code, I solve problems. Experience means nothing if you're repeating the same year ten times. I've compressed learning by always working on things slightly beyond my comfort zone.",
          },
          {
            question: "How do you handle tight deadlines?",
            answer:
              "I negotiate scope, not quality. If the deadline is fixed, I'll tell you exactly what can and can't be done well. I've learned that 'yes to everything' is a path to burning out and shipping garbage.",
          },
          {
            question: "What if you disagree with technical decisions?",
            answer:
              "I voice my concerns clearly, once. If the team decides differently, I commit fully. I've been wrong enough times to know my opinion isn't always right.",
          },
          {
            question: "Why did you leave your last role?",
            answer:
              "I'd stopped learning. The work was comfortable but I was coasting. I need problems that make me feel slightly incompetent, that's where growth lives.",
          },
        ],
      },
      it: {
        headline: "Rendo veloci le app lente e leggibile il codice illeggibile",
        subtitle: "Lo sviluppatore che trova il punto di leva che tutti gli altri hanno ignorato",
        sections: [
          {
            id: "what-drives-me",
            heading: "Cosa mi muove",
            blocks: [
              {
                type: "p",
                content:
                  "Sono ossessionato dalle interfacce che sembrano invisibili. Quando qualcuno usa un'app che ho costruito e non pensa mai all'interfaccia, ho fatto il mio lavoro. Ogni esitazione, ogni click confuso è un fallimento che prendo sul personale.",
              },
              { type: "quote", content: "Il codice migliore è quello che nessuno nota. Funziona e basta." },
            ],
          },
          {
            id: "my-superpower",
            heading: "Il mio superpotere",
            blocks: [
              {
                type: "p",
                content:
                  "Dammi la tua app che tutti hanno paura di toccare. Quella con 3 secondi di caricamento e codice spaghetti. Troverò i tre cambiamenti che risolvono l'80% dei problemi.",
              },
              {
                type: "list",
                content: [
                  "Portato un'app React da 3s a 400ms di load time",
                  "Trovato un memory leak del Black Friday alle 2 di notte, salvati €200k di vendite",
                  "Trasformo codebase legacy in qualcosa su cui i team vogliono lavorare",
                ],
              },
            ],
          },
          {
            id: "turning-point",
            heading: "Il punto di svolta",
            blocks: [
              {
                type: "p",
                content:
                  "Ho lasciato un posto fisso in banca per una startup. Tutti pensavano fossi pazzo. Ma ho imparato qualcosa che ha cambiato tutto: preferisco fallire in qualcosa di significativo che avere successo in qualcosa che non mi appartiene.",
              },
              {
                type: "quote",
                content:
                  "Quando non so quale strada prendere, costruisco la versione più semplice e lascio che mi insegni.",
              },
            ],
          },
          {
            id: "where-i-failed",
            heading: "Dove ho fallito",
            blocks: [
              {
                type: "p",
                content:
                  "Una volta ho convinto il team a riscrivere tutto da zero. Sei mesi buttati. Il refactoring incrementale era la risposta giusta fin dall'inizio.",
              },
              {
                type: "p",
                content:
                  "Ora aggiungo sempre il 30% di buffer alle stime. E dico 'fammi controllare' invece di rispondere sotto pressione.",
              },
            ],
          },
          {
            id: "how-i-work",
            heading: "Come lavoro",
            blocks: [
              {
                type: "list",
                content: [
                  "Parlo da solo mentre debuggo. Ad alta voce. I colleghi si sono abituati.",
                  "Il micromanagement è un dealbreaker. Se devo chiedere permesso per ogni commit, non funziona.",
                  "Mattina per deep work, pomeriggio per review e pairing, sera per vivere.",
                ],
              },
            ],
          },
        ],
        toneTags: ["ossessionato-performance", "pragmatico", "diretto", "pensatore-sistemico"],
        callouts: [
          "Ottimizzazione 3s → 400ms",
          "€200k salvati in una notte di Black Friday",
          "Traduttore di codice legacy",
        ],
        quickLinks: [
          { label: "LinkedIn", url: "https://linkedin.com/in/lucabianchi", icon: "linkedin" },
          { label: "Portfolio", url: "https://lucabianchi.dev", icon: "portfolio" },
        ],
        traits: [
          { name: "Tolleranza al rischio", value: 3, lowLabel: "Cauto", highLabel: "Audace" },
          { name: "Ritmo di lavoro", value: 4, lowLabel: "Metodico", highLabel: "Veloce" },
          { name: "Bisogno di struttura", value: 2, lowLabel: "Flessibile", highLabel: "Strutturato" },
        ],
        faqs: [
          {
            question: "Perché dovremmo assumerti rispetto a qualcuno con più esperienza?",
            answer:
              "Perché non scrivo solo codice, risolvo problemi. L'esperienza non significa nulla se ripeti lo stesso anno dieci volte. Ho compresso l'apprendimento lavorando sempre su cose leggermente oltre la mia comfort zone.",
          },
          {
            question: "Come gestisci le deadline strette?",
            answer:
              "Negozio lo scope, non la qualità. Se la deadline è fissa, ti dico esattamente cosa si può e non si può fare bene. Ho imparato che dire 'sì a tutto' è la strada per il burnout e per consegnare spazzatura.",
          },
          {
            question: "E se non sei d'accordo con le decisioni tecniche?",
            answer:
              "Esprimo le mie preoccupazioni chiaramente, una volta. Se il team decide diversamente, mi impegno completamente. Ho sbagliato abbastanza volte da sapere che la mia opinione non è sempre giusta.",
          },
          {
            question: "Perché hai lasciato il tuo ultimo ruolo?",
            answer:
              "Avevo smesso di imparare. Il lavoro era comodo ma stavo andando per inerzia. Ho bisogno di problemi che mi facciano sentire leggermente incompetente, è lì che vive la crescita.",
          },
        ],
      },
    },
    variant: "direct",
    createdAt: "2024-12-01T10:00:00Z",
  },
  {
    id: "giulia-designer",
    input: {
      identity: {
        name: "Giulia Conti",
        location: "Roma",
        goal: "freelance",
        currentRole: "Product Designer",
        obsession: "Perché le persone dicono 'è bello' ma poi non lo usano? Il gap tra estetica e usabilità.",
        unpopularOpinion: "Il design system perfetto non esiste. Ogni regola che crei è un debito che dovrai pagare.",
        childhood: "Riorganizzavo la cameretta ogni settimana cercando la configurazione 'perfetta'",
        linkedinUrl: "https://linkedin.com/in/giuliaconti",
        portfolioUrl: "https://giuliaconti.design",
      },
      strength: {
        problemSolved:
          "Onboarding con 45% di abbandono. Ho ridisegnato il flusso basandomi su 30 sessioni di user testing. Abbandono sceso al 12%.",
        disproportionateValue:
          "Quando un team è bloccato tra due direzioni. Riesco a trovare la terza opzione che nessuno aveva visto.",
        highStakesMoment:
          "Pitch con investitori per un Series A. Il CEO mi ha chiesto di riprogettare le slide il giorno prima. Abbiamo chiuso il round.",
        energizes: "Osservare utenti reali usare qualcosa che ho progettato. Ogni esitazione mi insegna qualcosa.",
        drains: "Design by committee. Quando tutti hanno opinioni ma nessuno ha parlato con gli utenti.",
        ratingRisk: 4,
        ratingSpeed: 3,
        ratingPeople: 5,
      },
      proof: {
        pivotMoment:
          "Il mio primo prodotto 'perfetto' ha fallito completamente. Belle animazioni, micro-interazioni curate, nessuno lo capiva.",
        whatChanged:
          "Ho smesso di progettare per impressionare designer e ho iniziato a progettare per far funzionare le cose per le persone normali.",
        toughDecision:
          "Ho detto no a un cliente che pagava molto bene perché voleva che copiassi un competitor. Preferisco meno soldi e più integrità.",
        uncertaintyDefault:
          "Parlo con utenti. 5 conversazioni di 15 minuti mi danno più direzione di 5 giorni di brainstorming.",
        ratingAdaptability: 4,
        ratingLearning: 5,
      },
      friction: {
        biggestMistake:
          "Ho ignorato il feedback del team engineering per mesi. 'Non capiscono il design', pensavo. Il progetto è stato cancellato.",
        letDown:
          "Il mio team. Ero così concentrata sulla 'visione' che ho ignorato i segnali che stavano lottando con le specifiche.",
        wouldntDoAgain:
          "Mai più progettare in isolamento. Ogni decisione che prendo ora la condivido prima che diventi un mockup finale.",
        automaticChange:
          "Faccio check-in giornalieri con engineering durante sprint critici. 5 minuti che salvano settimane di rework.",
        ratingOwnership: 4,
        ratingRecovery: 5,
      },
      workStyle: {
        weirdHabit:
          "Progetto sempre su carta prima. Ho quaderni pieni di wireframe terribili che poi diventano prodotti.",
        dealbreaker:
          "Nessun accesso agli utenti. Se non posso parlare con chi userà il prodotto, non posso progettarlo.",
        perfectDay:
          "User research la mattina, design exploration nel pomeriggio, critica costruttiva con il team a fine giornata.",
        misunderstood:
          "Faccio molte domande e la gente pensa che non abbia idee. In realtà sto costruendo la mappa del problema.",
        ratingStructure: 3,
        ratingFeedback: 5,
      },
    },
    output: {
      en: {
        headline: "I design products people actually use, not just admire",
        subtitle: "The designer who closes the gap between beautiful and functional",
        sections: [
          {
            id: "what-drives-me",
            heading: "What Drives Me",
            blocks: [
              {
                type: "p",
                content:
                  "I'm obsessed with the gap between 'this looks great' and 'I actually use this daily.' Beautiful products that confuse people are failures dressed up nicely. I design for behavior, not applause.",
              },
              { type: "quote", content: "If users need a tutorial, the design has failed." },
            ],
          },
          {
            id: "my-superpower",
            heading: "My Superpower",
            blocks: [
              {
                type: "p",
                content:
                  "When teams are stuck between two options, I find the third one nobody saw. It's not about compromise, it's about reframing the problem until a better solution appears.",
              },
              {
                type: "list",
                content: [
                  "Onboarding redesign: 45% → 12% abandonment",
                  "Series A pitch deck overnight that closed the round",
                  "30+ user testing sessions per quarter minimum",
                ],
              },
            ],
          },
          {
            id: "turning-point",
            heading: "The Turning Point",
            blocks: [
              {
                type: "p",
                content:
                  "My first 'perfect' product failed completely. Beautiful animations, polished micro-interactions, and nobody understood how to use it. That failure taught me to design for real people, not for design awards.",
              },
              {
                type: "quote",
                content: "Five 15-minute user conversations give me more direction than five days of brainstorming.",
              },
            ],
          },
          {
            id: "where-i-failed",
            heading: "Where I Failed",
            blocks: [
              {
                type: "p",
                content:
                  "I ignored engineering feedback for months. 'They don't understand design,' I thought. The project was cancelled. I learned that collaboration isn't optional, it's the job.",
              },
              {
                type: "p",
                content:
                  "Now I do daily check-ins with engineering during critical sprints. Five minutes that save weeks of rework.",
              },
            ],
          },
          {
            id: "how-i-work",
            heading: "How I Work",
            blocks: [
              {
                type: "list",
                content: [
                  "Paper first, always. Terrible wireframes that become real products.",
                  "No user access = no project. Non-negotiable.",
                  "Morning research, afternoon design, evening critique with the team.",
                ],
              },
            ],
          },
        ],
        toneTags: ["user-obsessed", "pragmatic", "collaborative", "evidence-driven"],
        callouts: [
          "45% → 12% onboarding abandonment",
          "Series A pitch designed overnight",
          "30+ user sessions per quarter",
        ],
        quickLinks: [
          { label: "LinkedIn", url: "https://linkedin.com/in/giuliaconti", icon: "linkedin" },
          { label: "Portfolio", url: "https://giuliaconti.design", icon: "portfolio" },
        ],
        traits: [
          { name: "Risk tolerance", value: 4, lowLabel: "Cautious", highLabel: "Bold" },
          { name: "Collaboration", value: 5, lowLabel: "Independent", highLabel: "Team-first" },
          { name: "Feedback need", value: 5, lowLabel: "Self-directed", highLabel: "Feedback-driven" },
        ],
        faqs: [
          {
            question: "What's your design process?",
            answer:
              "Talk to users first, sketch on paper, test ugly prototypes fast, then polish only what works. I've learned that starting with high-fidelity mockups is the fastest way to fall in love with bad ideas.",
          },
          {
            question: "How do you handle stakeholder disagreements?",
            answer:
              "I bring user evidence. Opinions are infinite, but watching a real user struggle with something tends to end debates quickly. I record user sessions and share the painful moments.",
          },
          {
            question: "What if the timeline doesn't allow for research?",
            answer:
              "There's always time for five quick conversations. I've done guerrilla testing in coffee shops when formal research wasn't possible. No research is the one thing I won't compromise on.",
          },
          {
            question: "How do you work with developers?",
            answer:
              "Daily. I learned the hard way that designing in isolation creates beautiful unusable things. I involve engineering from day one and consider their constraints as design inputs, not obstacles.",
          },
        ],
      },
      it: {
        headline: "Progetto prodotti che le persone usano davvero, non solo ammirano",
        subtitle: "La designer che colma il divario tra bello e funzionale",
        sections: [
          {
            id: "what-drives-me",
            heading: "Cosa mi muove",
            blocks: [
              {
                type: "p",
                content:
                  "Sono ossessionata dal divario tra 'questo è bellissimo' e 'lo uso tutti i giorni'. I prodotti belli che confondono le persone sono fallimenti vestiti bene. Progetto per il comportamento, non per gli applausi.",
              },
              { type: "quote", content: "Se gli utenti hanno bisogno di un tutorial, il design ha fallito." },
            ],
          },
          {
            id: "my-superpower",
            heading: "Il mio superpotere",
            blocks: [
              {
                type: "p",
                content:
                  "Quando i team sono bloccati tra due opzioni, trovo la terza che nessuno aveva visto. Non si tratta di compromesso, ma di riformulare il problema finché non appare una soluzione migliore.",
              },
              {
                type: "list",
                content: [
                  "Redesign onboarding: abbandono da 45% a 12%",
                  "Pitch deck Series A in una notte che ha chiuso il round",
                  "30+ sessioni di user testing ogni trimestre come minimo",
                ],
              },
            ],
          },
          {
            id: "turning-point",
            heading: "Il punto di svolta",
            blocks: [
              {
                type: "p",
                content:
                  "Il mio primo prodotto 'perfetto' ha fallito completamente. Animazioni bellissime, micro-interazioni curate, e nessuno capiva come usarlo. Quel fallimento mi ha insegnato a progettare per le persone reali, non per i premi di design.",
              },
              {
                type: "quote",
                content:
                  "Cinque conversazioni di 15 minuti con utenti mi danno più direzione di cinque giorni di brainstorming.",
              },
            ],
          },
          {
            id: "where-i-failed",
            heading: "Dove ho fallito",
            blocks: [
              {
                type: "p",
                content:
                  "Ho ignorato il feedback dell'engineering per mesi. 'Non capiscono il design', pensavo. Il progetto è stato cancellato. Ho imparato che la collaborazione non è opzionale, è il lavoro.",
              },
              {
                type: "p",
                content:
                  "Ora faccio check-in giornalieri con l'engineering durante gli sprint critici. Cinque minuti che salvano settimane di rifacimenti.",
              },
            ],
          },
          {
            id: "how-i-work",
            heading: "Come lavoro",
            blocks: [
              {
                type: "list",
                content: [
                  "Prima su carta, sempre. Wireframe terribili che diventano prodotti veri.",
                  "Nessun accesso agli utenti = nessun progetto. Non negoziabile.",
                  "Mattina ricerca, pomeriggio design, sera critica con il team.",
                ],
              },
            ],
          },
        ],
        toneTags: ["ossessionata-utenti", "pragmatica", "collaborativa", "evidence-driven"],
        callouts: [
          "Abbandono onboarding da 45% a 12%",
          "Pitch Series A progettato in una notte",
          "30+ sessioni utenti a trimestre",
        ],
        quickLinks: [
          { label: "LinkedIn", url: "https://linkedin.com/in/giuliaconti", icon: "linkedin" },
          { label: "Portfolio", url: "https://giuliaconti.design", icon: "portfolio" },
        ],
        traits: [
          { name: "Tolleranza al rischio", value: 4, lowLabel: "Cauta", highLabel: "Audace" },
          { name: "Collaborazione", value: 5, lowLabel: "Indipendente", highLabel: "Team-first" },
          { name: "Bisogno di feedback", value: 5, lowLabel: "Autodiretta", highLabel: "Feedback-driven" },
        ],
        faqs: [
          {
            question: "Qual è il tuo processo di design?",
            answer:
              "Prima parlo con gli utenti, schizzo su carta, testo prototipi brutti velocemente, poi rifinisco solo quello che funziona. Ho imparato che partire con mockup ad alta fedeltà è il modo più veloce per innamorarsi di idee sbagliate.",
          },
          {
            question: "Come gestisci i disaccordi con gli stakeholder?",
            answer:
              "Porto evidenze dagli utenti. Le opinioni sono infinite, ma guardare un utente reale che lotta con qualcosa tende a chiudere i dibattiti velocemente. Registro le sessioni utente e condivido i momenti dolorosi.",
          },
          {
            question: "E se la timeline non permette ricerca?",
            answer:
              "C'è sempre tempo per cinque conversazioni veloci. Ho fatto guerrilla testing nei bar quando la ricerca formale non era possibile. Nessuna ricerca è l'unica cosa su cui non scendo a compromessi.",
          },
          {
            question: "Come lavori con gli sviluppatori?",
            answer:
              "Quotidianamente. Ho imparato a mie spese che progettare in isolamento crea cose belle ma inutilizzabili. Coinvolgo l'engineering dal primo giorno e considero i loro vincoli come input di design, non ostacoli.",
          },
        ],
      },
    },
    variant: "balanced",
    createdAt: "2024-12-01T10:00:00Z",
  },
  {
    id: "marco-marketer",
    input: {
      identity: {
        name: "Marco Ferrara",
        location: "Torino",
        goal: "personal-brand",
        currentRole: "Growth Marketing Lead",
        obsession:
          "Perché le campagne 'di successo' lasciano soldi sul tavolo? Trovare il 20% di budget che produce l'80% dei risultati.",
        unpopularOpinion: "Il brand awareness è dove vanno a morire i budget marketing senza accountability.",
        childhood: "Vendevo limonata ma passavo più tempo a ottimizzare il cartello che a fare la limonata",
        linkedinUrl: "https://linkedin.com/in/marcoferrara",
      },
      strength: {
        problemSolved:
          "CAC a 3x la media di settore. Ho ristretto il target del 60% e il CAC è sceso del 55% in 90 giorni.",
        disproportionateValue: "Quando le campagne 'funzionano' ma nessuno sa perché. Trovo la causa reale e la scalo.",
        highStakesMoment:
          "Budget tagliato del 50% da un giorno all'altro. Ho dovuto scegliere cosa tenere. Ho tenuto solo quello che potevo misurare. Revenue è salita.",
        energizes: "Dati che contraddicono le intuizioni. Quando i numeri dicono qualcosa di sorprendente.",
        drains: "Marketing basato su 'feeling' e 'ci piace così'. Opinioni senza dati.",
        ratingRisk: 4,
        ratingSpeed: 4,
        ratingPeople: 3,
      },
      proof: {
        pivotMoment:
          "Una campagna virale. Milioni di impression. Zero clienti. Ho capito che l'attenzione senza intent è vanità.",
        whatChanged:
          "Ho smesso di ottimizzare per metriche che mi facevano sembrare bravo e ho iniziato a ottimizzare per revenue.",
        toughDecision:
          "Ho consigliato di abbandonare il 40% del mercato indirizzabile. La leadership ha resistito. I numeri mi hanno dato ragione.",
        uncertaintyDefault: "Test A/B piccoli. Se non so cosa funziona, lo scopro con €500 prima di spenderne 50k.",
        ratingAdaptability: 4,
        ratingLearning: 4,
      },
      friction: {
        biggestMistake:
          "Ho bruciato €80k su una campagna perché mi fidavo del mio istinto invece che dei dati. L'istinto era sbagliato.",
        letDown:
          "Il CEO. Gli avevo promesso risultati basati su assunzioni non validate. Ho imparato a distinguere ipotesi da fatti.",
        wouldntDoAgain:
          "Mai più lanciare senza una chiara ipotesi di attribuzione. Se non posso misurarlo, non lo faccio.",
        automaticChange:
          "Ora definisco le metriche di successo PRIMA di lanciare, non quando devo giustificare i risultati.",
        ratingOwnership: 5,
        ratingRecovery: 4,
      },
      workStyle: {
        weirdHabit:
          "Ho un foglio Excel con ogni €1 speso in marketing nella mia carriera e il ritorno che ha generato.",
        dealbreaker: "Budget senza accountability. Se non posso tracciare il ROI, non lo spendo.",
        perfectDay: "Analisi dati la mattina, strategia il pomeriggio, esperimenti la sera.",
        misunderstood:
          "Sembro ossessionato dai numeri ma è perché voglio che il team possa prendere decisioni basate su fatti, non gerarchie.",
        ratingStructure: 4,
        ratingFeedback: 3,
      },
    },
    output: {
      en: {
        headline: "I find the money your 'successful' campaigns are leaving behind",
        subtitle: "The marketer who sees underperformance hiding inside success",
        sections: [
          {
            id: "what-drives-me",
            heading: "What Drives Me",
            blocks: [
              {
                type: "p",
                content:
                  "Everyone celebrates when campaigns hit their numbers. I'm the one asking why we set those numbers, what the ceiling actually was, and what we left on the table. A 'successful' campaign that could have been 3x better is a failure with good PR.",
              },
              { type: "quote", content: "Attention without intent is vanity. Revenue is truth." },
            ],
          },
          {
            id: "my-superpower",
            heading: "My Superpower",
            blocks: [
              {
                type: "p",
                content:
                  "I see the 60% of budget that's subsidizing the 40% that actually works. When 'working' campaigns hide underperformance, I find it and fix it.",
              },
              {
                type: "list",
                content: [
                  "CAC cut by 55% by narrowing target 60%",
                  "Budget cut 50%, revenue increased",
                  "Every euro tracked, every assumption tested",
                ],
              },
            ],
          },
          {
            id: "turning-point",
            heading: "The Turning Point",
            blocks: [
              {
                type: "p",
                content:
                  "A viral campaign. Millions of impressions. Zero customers. I learned that optimizing for metrics that make you look good and optimizing for revenue are often opposite goals.",
              },
              { type: "quote", content: "I test with €500 before spending €50k. Small experiments before big bets." },
            ],
          },
          {
            id: "where-i-failed",
            heading: "Where I Failed",
            blocks: [
              {
                type: "p",
                content:
                  "I burned €80k on a campaign because I trusted my gut over the data. My gut was wrong. That mistake taught me to separate hypotheses from facts.",
              },
              {
                type: "p",
                content: "Now I define success metrics BEFORE launching, not when I need to justify results.",
              },
            ],
          },
          {
            id: "how-i-work",
            heading: "How I Work",
            blocks: [
              {
                type: "list",
                content: [
                  "I have a spreadsheet tracking every €1 I've spent in my career and its return.",
                  "No budget without accountability. If I can't trace ROI, I don't spend it.",
                  "Analysis in the morning, strategy in the afternoon, experiments in the evening.",
                ],
              },
            ],
          },
        ],
        toneTags: ["data-obsessed", "revenue-focused", "contrarian", "accountable"],
        callouts: ["55% CAC reduction in 90 days", "Walked away from 40% of addressable market", "Every euro tracked"],
        quickLinks: [{ label: "LinkedIn", url: "https://linkedin.com/in/marcoferrara", icon: "linkedin" }],
        traits: [
          { name: "Risk tolerance", value: 4, lowLabel: "Cautious", highLabel: "Bold" },
          { name: "Work pace", value: 4, lowLabel: "Methodical", highLabel: "Fast" },
          { name: "Structure need", value: 4, lowLabel: "Flexible", highLabel: "Structured" },
        ],
        faqs: [
          {
            question: "How do you measure brand marketing?",
            answer:
              "If it can't connect to revenue within a reasonable attribution window, I'm skeptical. That said, I've found ways to measure things people claim are 'unmeasurable' — it just requires creativity and honesty about what you're actually tracking.",
          },
          {
            question: "What if leadership wants to do something without data?",
            answer:
              "I voice my concerns with numbers, once. Then I execute and measure. Sometimes I'm wrong, and I want the data to show that too. Being right isn't the goal, learning is.",
          },
          {
            question: "How do you handle budget cuts?",
            answer:
              "As an opportunity. Cuts force clarity. When I had 50% budget removed, I cut everything I couldn't measure directly. Revenue went up. Constraints can be gifts.",
          },
          {
            question: "What's your biggest marketing hot take?",
            answer:
              "Brand awareness campaigns are where accountability goes to die. Not because brand doesn't matter, but because 'brand' has become an excuse not to measure. Everything has signal, you just have to be honest about finding it.",
          },
        ],
      },
      it: {
        headline: "Trovo i soldi che le vostre campagne 'di successo' lasciano sul tavolo",
        subtitle: "Il marketer che vede la sotto-performance nascosta dentro il successo",
        sections: [
          {
            id: "what-drives-me",
            heading: "Cosa mi muove",
            blocks: [
              {
                type: "p",
                content:
                  "Tutti festeggiano quando le campagne raggiungono i loro obiettivi. Io sono quello che chiede perché abbiamo fissato quegli obiettivi, qual era il vero potenziale, e cosa abbiamo lasciato sul tavolo. Una campagna 'di successo' che poteva fare 3x è un fallimento con buone PR.",
              },
              { type: "quote", content: "L'attenzione senza intent è vanità. La revenue è verità." },
            ],
          },
          {
            id: "my-superpower",
            heading: "Il mio superpotere",
            blocks: [
              {
                type: "p",
                content:
                  "Vedo il 60% del budget che sta sussidiando il 40% che funziona davvero. Quando le campagne che 'funzionano' nascondono sotto-performance, la trovo e la risolvo.",
              },
              {
                type: "list",
                content: [
                  "CAC ridotto del 55% restringendo il target del 60%",
                  "Budget tagliato del 50%, revenue aumentata",
                  "Ogni euro tracciato, ogni assunzione testata",
                ],
              },
            ],
          },
          {
            id: "turning-point",
            heading: "Il punto di svolta",
            blocks: [
              {
                type: "p",
                content:
                  "Una campagna virale. Milioni di impression. Zero clienti. Ho imparato che ottimizzare per metriche che ti fanno sembrare bravo e ottimizzare per revenue sono spesso obiettivi opposti.",
              },
              {
                type: "quote",
                content: "Testo con €500 prima di spenderne €50k. Piccoli esperimenti prima di grandi scommesse.",
              },
            ],
          },
          {
            id: "where-i-failed",
            heading: "Dove ho fallito",
            blocks: [
              {
                type: "p",
                content:
                  "Ho bruciato €80k su una campagna perché mi fidavo del mio istinto invece che dei dati. Il mio istinto aveva torto. Quell'errore mi ha insegnato a separare ipotesi da fatti.",
              },
              {
                type: "p",
                content:
                  "Ora definisco le metriche di successo PRIMA di lanciare, non quando devo giustificare i risultati.",
              },
            ],
          },
          {
            id: "how-i-work",
            heading: "Come lavoro",
            blocks: [
              {
                type: "list",
                content: [
                  "Ho un foglio Excel con ogni €1 speso in marketing nella mia carriera e il suo ritorno.",
                  "Nessun budget senza accountability. Se non posso tracciare il ROI, non lo spendo.",
                  "Analisi la mattina, strategia il pomeriggio, esperimenti la sera.",
                ],
              },
            ],
          },
        ],
        toneTags: ["ossessionato-dati", "focus-revenue", "contrarian", "accountable"],
        callouts: [
          "Riduzione CAC del 55% in 90 giorni",
          "Abbandonato 40% del mercato indirizzabile",
          "Ogni euro tracciato",
        ],
        quickLinks: [{ label: "LinkedIn", url: "https://linkedin.com/in/marcoferrara", icon: "linkedin" }],
        traits: [
          { name: "Tolleranza al rischio", value: 4, lowLabel: "Cauto", highLabel: "Audace" },
          { name: "Ritmo di lavoro", value: 4, lowLabel: "Metodico", highLabel: "Veloce" },
          { name: "Bisogno di struttura", value: 4, lowLabel: "Flessibile", highLabel: "Strutturato" },
        ],
        faqs: [
          {
            question: "Come misuri il brand marketing?",
            answer:
              "Se non si può collegare alla revenue entro una finestra di attribuzione ragionevole, sono scettico. Detto questo, ho trovato modi per misurare cose che la gente sostiene siano 'non misurabili' — richiede solo creatività e onestà su cosa stai realmente tracciando.",
          },
          {
            question: "E se la leadership vuole fare qualcosa senza dati?",
            answer:
              "Esprimo le mie preoccupazioni con i numeri, una volta. Poi eseguo e misuro. A volte sbaglio, e voglio che i dati lo mostrino anche in quel caso. Avere ragione non è l'obiettivo, imparare sì.",
          },
          {
            question: "Come gestisci i tagli al budget?",
            answer:
              "Come un'opportunità. I tagli forzano chiarezza. Quando mi hanno tolto il 50% del budget, ho tagliato tutto ciò che non potevo misurare direttamente. La revenue è salita. I vincoli possono essere regali.",
          },
          {
            question: "Qual è la tua opinione più controversa sul marketing?",
            answer:
              "Le campagne di brand awareness sono dove l'accountability va a morire. Non perché il brand non conti, ma perché 'brand' è diventato una scusa per non misurare. Tutto ha un segnale, devi solo essere onesto nel cercarlo.",
          },
        ],
      },
    },
    variant: "analytical",
    createdAt: "2024-12-01T10:00:00Z",
  },
]

export function getExamplePortfolio(id: string): StoredPortfolio | null {
  return examplePortfolios.find((p) => p.id === id) || null
}

export function getAllExamples(): StoredPortfolio[] {
  return examplePortfolios
}
