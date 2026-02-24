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
          "Než začnete vybírat formáty a kanály, potřebujete jasno v tom podstatném.",
        solution: "Nevíte, co říct",
        outputs: [
          "název, claim a tón komunikace",
          "hlavní myšlenka kampaně",
          "jasné vymezení značky",
        ],
      },
      {
        problem:
          "Web ani sociální sítě nejsou samospásné. Bez myšlenky jen zesilují chaos.",
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
    headline: "Jak přemýšlím nad marketingem",
    intro:
      "Nečekám na brief. Přicházím s myšlenkou, vím, kde začít, a navrhuju konkrétní kroky.",
    points: [
      {
        title: "Nápad je základ",
        text: "Každý projekt stojí na jedné klíčové myšlence. Forma ji má zesílit, ne nahradit.",
      },
      {
        title: "Opírám se o data",
        text: "Rozhoduju se podle dat, ne podle pocitu. Kreativitu testuju v realitě, ne v prezentaci.",
      },
      {
        title: "AI powered kreativec",
        text: "AI používám pro rychlost a testování. Myšlení, úsudek a odpovědnost za výsledek beru na sebe.",
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
