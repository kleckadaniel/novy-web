import type { ContentData } from "@/lib/types";

const content: ContentData = {
  hero: {
    tagline: "Daniel Klečka — Idea Maker",
    headline: "Vše začíná\nsprávným nápadem.",
    subtext:
      "Pomáhám firmám a zakladatelům projektů komunikovat tak, aby to zaujalo a zafungovalo. Od strategie po konkrétní výstupy — vše začíná u jedné silné myšlenky.",
    cta: "Pojďme spolupracovat",
  },

  services: {
    headline: "Co pro vás vyřeším",
    intro:
      "Každý projekt je jiný. Nenabízím šablony — hledám řešení, která sedí přímo vám.",
    items: [
      {
        problem:
          "Nevíte, jak pojmenovat značku nebo produkt, aby to zaujalo a bylo zapamatovatelné.",
        solution: "Naming & brand identity",
        outputs: [
          "Název značky nebo produktu",
          "Tagline a komunikační linie",
          "Příběh značky",
        ],
      },
      {
        problem:
          "Máte obsah, ale chybí vám červená nit — strategie, co říkat a jak.",
        solution: "Obsahová strategie",
        outputs: [
          "Obsahový plán a editorial",
          "Komunikační manuál",
          "Koncepty pro kampaně",
        ],
      },
      {
        problem: "Sociální sítě nestíháte nebo nevíte, co na ně psát.",
        solution: "Social media koncepty",
        outputs: [
          "Sady Reels a obsahové koncepty",
          "Copywriting pro příspěvky",
          "Scénáře videí",
        ],
      },
      {
        problem:
          "Web nebo landing page neprodává — texty jsou mdlé nebo nesrozumitelné.",
        solution: "Webové texty & landing pages",
        outputs: [
          "Copywriting pro web",
          "Textace landing pages",
          "Struktury a architektura obsahu",
        ],
      },
    ],
  },

  whyMe: {
    headline: "Proč se mnou",
    intro:
      "Nejsem copywriter, který čeká na brief. Přicházím s nápady a strategií.",
    points: [
      {
        title: "Nápad jako základ",
        text: "Každý projekt začíná u klíčové myšlenky. Forma přijde pak — ať je to video, slogan nebo celá kampaň.",
      },
      {
        title: "Strategie a kreativa v jednom",
        text: "Nevymýšlím věci, které vypadají dobře jen v prezentaci. Hledám to, co funguje v realitě a přináší výsledky.",
      },
      {
        title: "AI jako spolupracovník",
        text: "Umělou inteligenci používám jako nástroj, který zrychluje práci. Nápad, úsudek a odpovědnost za výsledek zůstávají na mně.",
      },
    ],
  },

  about: {
    headline: "Daniel Klečka",
    text: "Začínal jsem jako copywriter. Postupně jsem zjistil, že mě nejvíc baví část, která předchází psaní — přemýšlet, co říct a proč. Dnes pomáhám firmám a zakladatelům projektů najít ten jeden správný nápad, který pak otevírá všechno ostatní.",
    note: "Pracuji s menšími značkami, ambiciózními projekty a lidmi, kteří chtějí komunikovat jinak než jejich konkurence.",
  },

  references: {
    headline: "Důvěřují mi",
    clients: [
      { name: "Klient 1", placeholder: true },
      { name: "Klient 2", placeholder: true },
      { name: "Klient 3", placeholder: true },
      { name: "Klient 4", placeholder: true },
      { name: "Klient 5", placeholder: true },
      { name: "Klient 6", placeholder: true },
      { name: "Klient 7", placeholder: true },
      { name: "Klient 8", placeholder: true },
    ],
    testimonials: [
      {
        text: "Sem přijde citát od klienta, který vystihne spolupráci a výsledky, které jsme společně dosáhli. Konkrétní, autentický a stručný.",
        author: "Jméno Příjmení",
        company: "Název firmy",
      },
      {
        text: "Druhý citát od dalšího spokojeného klienta. Sem patří reálný příběh spolupráce a konkrétní přínos pro byznys.",
        author: "Jméno Příjmení",
        company: "Název projektu",
      },
    ],
  },

  contact: {
    headline: "Začněme spolupracovat",
    subtext:
      "Máte projekt, nebo jen myšlenku? Napište mi — rád si promluvíme o tom, jak vám mohu pomoci.",
    email: "kleckadaniel@gmail.com",
    cta: "Odeslat zprávu",
  },
};

export default content;
