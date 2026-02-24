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
        text: "S AI jsem rychlý, všestranný a efektivní. Ideu a odpovědnost za výsledek beru na sebe.",
      },
    ],
  },

  about: {
    headline: "Daniel Klečka",
    text: "Začínal jsem jako copywriter. Dnes řeším klíčové myšlenky, které určují směr marketingu a rozhodují o výsledku. Pomáhám firmám a zakladatelům projektů najít nápad, na kterém můžou stavět.",
    note: "Pracuju se značkami, ambiciózními projekty a lidmi, kteří očekávají jasná rozhodnutí a měřitelný dopad.",
  },

  references: {
    headline: "Důvěřují mi",
    clients: [
      { name: "Švihej", placeholder: false, logo: "/loga web/1.png", url: "https://www.svihej.cz/" },
      { name: "MeetDeal", placeholder: false, logo: "/loga web/2.png", url: "https://www.meetdeal.cz/" },
      { name: "ProIdea Digital", placeholder: false, logo: "/loga web/3.png", url: "https://proidea.digital/" },
      { name: "TSR", placeholder: false, logo: "/loga web/4.png", url: "https://www.tsr.cz/" },
      { name: "Vanila", placeholder: false, logo: "/loga web/5.png", url: "https://vanila.cz/" },
      { name: "Všeruby", placeholder: false, logo: "/loga web/6.png", url: "https://www.vseruby-mesto.cz/" },
      { name: "Softlabs", placeholder: false, logo: "/loga web/7.png", url: "https://softlabs.cz/" },
      { name: "Realitní dvojka", placeholder: false, logo: "/loga web/8.png", url: "https://www.instagram.com/realitnidvojka/" },
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
      "Od skvělého nápadu vás dělí jen jedna zpráva.",
    email: "jsem@danielklecka.cz",
    cta: "Odeslat zprávu",
  },
};

export default content;
