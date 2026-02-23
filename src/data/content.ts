import type { ContentData } from "@/lib/types";

const content: ContentData = {
  hero: {
    tagline: "Daniel Klečka — Idea Maker",
    headlineStatic: "Skvělý nápad vás dělí od",
    rotatingWords: [
      "úspěšné kampaně",
      "virálního videa",
      "zapamatovatelného názvu",
      "obsahu, co funguje",
      "značky, která je vidět",
    ],
    subtext: "Špatné nápady jsou drahé. Ty dobré dokážou změnit hru.",
    cta: "Pojďme spolupracovat",
    secondaryCta: "Nápady v praxi",
  },

  services: {
    headline: "Bez nápadu vás stojí marketing víc, než by měl",
    intro:
      "<em>Nějak se to vymyslí</em> není strategie. Dobrý nápad šetří rozpočet a vytváří hodnotu.",
    items: [
      {
        problem:
          "Než začnete řešit formáty a kanály, potřebujete jasno v tom podstatném.",
        solution: "Nevíte, co říct",
        outputs: [
          "název, claim a tón komunikace",
          "hlavní myšlenka kampaně",
          "jasné vymezení značky",
        ],
      },
      {
        problem:
          "Web ani sociální sítě samy o sobě nic nevyřeší. Bez myšlenky jen zesilují chaos.",
        solution: "Řešíte kanály místo výsledku",
        outputs: [
          "weby a landing pages včetně struktury a UX",
          "texty, které fungují",
          "obsah, který drží pohromadě",
        ],
      },
      {
        problem:
          "I dobrá věc může zapadnout. Rozhoduje forma a způsob provedení.",
        solution: "Nejste vidět",
        outputs: [
          "video tvorba od scénáře po edit",
          "AI content pro sociální sítě",
          "vibe coding a prototyping",
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
