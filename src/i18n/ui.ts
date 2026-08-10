import type { LangCode } from './config';

type Strings = {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  nav: {
    plan: string;
    gettingThere: string;
    nearby: string;
    tripList: string;
    faq: string;
    openMap: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    sub: string;
    ctaPlan: string;
    ctaReef: string;
  };
  quickFacts: {
    rating: string;
    hours: string;
    season: string;
    baseline: string;
  };
  theBreak: {
    eyebrow: string;
    title: string;
    desc: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    caption: string;
  };
  visit: {
    eyebrow: string;
    title: string;
    sub: string;
    feeTitle: string;
    feeHeader: string;
    feeDesc: string;
    feeNote: string;
    parkingHeader: string;
    parkingDesc: string;
    timeHeader: string;
    timeDesc: string;
    bringHeader: string;
    bringTags: string[];
  };
  gettingThere: {
    eyebrow: string;
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    mapTitle: string;
  };
  nearby: {
    eyebrow: string;
    title: string;
    sub: string;
    foodLoka: string;
    foodLokaDesc: string;
    foodHawker: string;
    foodHawkerDesc: string;
    foodMasala: string;
    foodMasalaDesc: string;
    foodLabel: string;
    attJacking: string;
    attJackingDesc: string;
    attJackingLabel: string;
    attGuyam: string;
    attGuyamDesc: string;
    attGuyamLabel: string;
    attMagpupungko: string;
    attMagpupungkoDesc: string;
    attMagpupungkoLabel: string;
  };
  tripList: {
    eyebrow: string;
    title: string;
    sub: string;
    savedHeader: string;
    savedTitle: string;
    savedLabel: string;
    clear: string;
    remove: string;
    empty: string;
    added: (name: string) => string;
    removed: (name: string) => string;
    cleared: string;
    items: { name: string; meta: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    sub: string;
    items: { q: string; a: string }[];
  };
  reefRule: {
    eyebrow: string;
    body: string;
    toTop: string;
  };
  footer: {
    disclaimer: string;
    sourcesLabel: string;
    sourcesBody: string;
    creditsLabel: string;
    creditsBody: string;
  };
  schema: {
    attractionName: string;
    attractionDesc: string;
  };
};

export const strings: Record<LangCode, Strings> = {
  en: {
    meta: {
      title: 'Cloud 9 Siargao — Surf, Boardwalk & Visitor Guide',
      description:
        'A practical one-page guide to Cloud 9 Surfing Area in General Luna, Siargao — surf safety, fees, parking, transport, nearby food, attractions and a private on-device trip list.',
      ogDescription: 'Plan a Cloud 9 visit around the reef, the boardwalk and the rhythm of Siargao.',
    },
    nav: {
      plan: 'Plan',
      gettingThere: 'Getting there',
      nearby: 'Nearby',
      tripList: 'Trip list',
      faq: 'FAQ',
      openMap: 'OPEN MAP ↗',
    },
    hero: {
      eyebrow: 'General Luna · Siargao Island',
      titleLine1: 'MEET',
      titleLine2: 'CLOUD 9',
      sub: 'A wooden boardwalk, a shallow reef and one of the Pacific’s most recognisable right-hand waves — this is Siargao at full volume.',
      ctaPlan: 'PLAN YOUR STOP',
      ctaReef: 'KNOW THE REEF',
    },
    quickFacts: {
      rating: 'Google Maps rating',
      hours: 'Map listing · facilities may vary',
      season: 'Peak surf season',
      baseline: 'Easy sightseeing baseline',
    },
    theBreak: {
      eyebrow: 'The break',
      title: 'Beautiful from shore.\nSerious in the water.',
      desc: 'Cloud 9 is a powerful, hollow right-hander breaking over sharp reef. On solid swell it belongs to advanced surfers. If you are learning, resist the temptation to paddle straight into the famous peak — nearby Jacking Horse is the friendlier place to start with a local instructor.',
      card1Title: 'Mid–high tide',
      card1Desc: 'Generally the more appropriate window for the main reef break.',
      card2Title: 'Sharp reef',
      card2Desc: 'Booties are useful. Low tide exposes shallower sections and adds risk.',
      card3Title: 'Respect the lineup',
      card3Desc: 'Wait your turn, surf within your ability and follow local guidance.',
      caption: 'The boardwalk is as much a sunrise lookout as it is a gateway to the surf.',
    },
    visit: {
      eyebrow: 'Visit notes',
      title: 'Plan around the tide, not a timetable.',
      sub: 'The surf area itself is listed as open around the clock, but staffed facilities, event access and managed-entry arrangements can follow local operating conditions.',
      feeTitle: 'Ticket / fees',
      feeHeader: 'Bring small cash.',
      feeDesc: 'A small entrance or boardwalk fee can apply. Recent visitor guides commonly report about ₱100 per person. Treat that as a planning figure, not a guaranteed tariff, and confirm at the gate.',
      feeNote: 'Board rental and surf-lesson prices vary by shop and instructor.',
      parkingHeader: 'Arrive early when it matters.',
      parkingDesc: 'Parking is available around the managed entrance / Cloud 9 Drive area. Capacity can get tight for sunrise, sunset and major surf days.',
      timeHeader: 'Sunrise + about two hours.',
      timeDesc: 'For atmosphere and photography, sunrise is hard to beat. For surf, read the swell and tide first. Two hours covers an unhurried boardwalk stop; surfers should allow much longer.',
      bringHeader: 'Bring',
      bringTags: ['Reef-safe sunscreen', 'Water', 'Small cash', 'Rashguard', 'Reef booties for surfers', 'Dry bag', 'Helmet if riding'],
    },
    gettingThere: {
      eyebrow: 'Detailed transport',
      title: 'Follow the east coast to the wave.',
      step1Title: 'From Sayak Airport (IAO)',
      step1Desc: 'Take an airport van, arranged transfer or private vehicle toward General Luna / Cloud 9. Official tourism guidance puts the transfer at roughly 30–45 minutes.',
      step2Title: 'From central General Luna',
      step2Desc: 'Follow Tourism Road / the coastal route toward Catangnan and Cloud 9. E-trikes and tricycles are easy for point-to-point travel; scooters give more flexibility if you are confident riding.',
      step3Title: 'From Dapa Port',
      step3Desc: 'Use a tricycle, van or arranged transfer toward General Luna, then continue to Cloud 9. Agree on the fare before departure if it is not clearly posted.',
      step4Title: 'If you rent a scooter',
      step4Desc: 'Wear a helmet, keep left, slow down through villages and be cautious after rain. Avoid riding if you are not comfortable on unfamiliar island roads.',
      mapTitle: 'Google Map showing Cloud 9 Surfing Area, General Luna, Siargao',
    },
    nearby: {
      eyebrow: 'Around Cloud 9',
      title: 'Eat close.\nExplore wider.',
      sub: 'General Luna makes it easy to turn a surf-watching stop into a full day: casual food near the break, a learner-friendly reef nearby, and island or rock-pool trips when you have more time.',
      foodLabel: 'Nearby food',
      foodLoka: 'Loka Siargao',
      foodLokaDesc: 'A relaxed beachfront stop on Cloud 9 Drive for breakfast plates, smoothies, pizza and an easy post-surf reset.',
      foodHawker: 'Siargao Hawker',
      foodHawkerDesc: 'Singaporean and Malay comfort-food flavours near the Jacking Horse / Cloud 9 stretch — a practical casual meal before or after the boardwalk.',
      foodMasala: 'Masala Siargao',
      foodMasalaDesc: 'Modern Indian food in the Cloud 9 area, including plant-based and gluten-conscious choices in a calmer garden setting.',
      attJackingLabel: 'Nearby attraction',
      attJacking: 'Jacking Horse',
      attJackingDesc: 'A nearby, more approachable reef break. For a first surf session, pair it with a local instructor rather than starting at the Cloud 9 main peak.',
      attGuyamLabel: 'Island-hopping',
      attGuyam: 'Guyam Island',
      attGuyamDesc: 'A compact palm-ringed island often combined with the classic island-hopping circuit from General Luna.',
      attMagpupungkoLabel: 'Day-trip extension',
      attMagpupungko: 'Magpupungko',
      attMagpupungkoDesc: 'A northbound Siargao detour known for rock formations and tidal pools. Check local tide and access conditions before making the trip.',
    },
    tripList: {
      eyebrow: 'Your Siargao list',
      title: 'Build a small day around Cloud 9.',
      sub: 'Tap anything you want to remember. Your list is stored only in this browser on this device using localStorage. Nothing is uploaded or sent to a server.',
      savedHeader: 'On this device',
      savedTitle: 'Saved itinerary',
      savedLabel: 'Saved itinerary',
      clear: 'Clear',
      remove: 'Remove',
      empty: 'Nothing saved yet. Add a stop from the list.',
      added: (name) => `${name} added.`,
      removed: (name) => `${name} removed.`,
      cleared: 'Itinerary cleared.',
      items: [
        { name: 'Sunrise at the Cloud 9 boardwalk', meta: 'Cloud 9 • early morning' },
        { name: 'Watch the main reef break', meta: 'Cloud 9 • mid-to-high tide' },
        { name: 'Beginner session at Jacking Horse', meta: 'Nearby • book a local instructor' },
        { name: 'Eat along Cloud 9 Drive', meta: 'Nearby food • casual stop' },
        { name: 'Add Guyam Island', meta: 'Island-hopping extension' },
        { name: 'Add Magpupungko', meta: 'Northbound day-trip extension' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Before you go.',
      sub: 'Conditions, access and local fees can change. When surf safety or entry arrangements matter, confirm them locally on the day.',
      items: [
        {
          q: 'Is there an entrance fee at Cloud 9?',
          a: 'Plan for a small managed-area or boardwalk fee. Recent visitor guides commonly report around ₱100 per person, but access rules and fees can change, so confirm at the entrance before you go.',
        },
        {
          q: 'Can beginners surf the main Cloud 9 break?',
          a: 'The main Cloud 9 peak breaks over a sharp, shallow reef and is best left to experienced surfers when it is solid. Beginners are better served by a local instructor and a friendlier nearby break such as Jacking Horse.',
        },
        {
          q: 'What is the best time to visit?',
          a: 'For the classic surf atmosphere, September to November is the peak swell period. For sightseeing, sunrise is especially atmospheric, while mid-to-high tide is generally a better window for watching or surfing the main reef break.',
        },
        {
          q: 'Is parking available?',
          a: 'Parking is available around the managed Cloud 9 entrance and along the access area off Cloud 9 Drive. Space can tighten around sunrise, sunset, weekends, and surf events, so arriving early is the easiest option.',
        },
        {
          q: 'How long should I stay?',
          a: 'About two hours is a useful baseline for the boardwalk, wave watching, photos, and a nearby snack. Allow longer if you are surfing, booking a lesson nearby, or pairing Cloud 9 with Jacking Horse and the Catangnan coast.',
        },
        {
          q: 'Should I bring cash?',
          a: 'Yes. Small cash is useful for local fees, transport, snacks, board rentals, and smaller businesses even though digital payments are increasingly common on Siargao.',
        },
      ],
    },
    reefRule: {
      eyebrow: 'One last reef rule',
      body: 'Leave the coast better than you found it.',
      toTop: 'BACK TO TOP ↑',
    },
    footer: {
      disclaimer:
        'Independent visitor guide for trip planning. This website is not an official website of Cloud 9 Surfing Area, the Municipality of General Luna, or any tourism authority.',
      sourcesLabel: 'Information sources',
      sourcesBody:
        'Visitor guidance is based on the Cloud 9 listing and Philippine tourism guidance. Always re-check tide, surf, fee and access conditions locally.',
      creditsLabel: 'Photo credits',
      creditsBody:
        'Cloud 9: Spraken eboy2887 · Boardwalk: JupitReyes · Guyam: Michael Angelo Luna · Magpupungko: Wolfgang Hägele. All CC BY-SA 4.0 via Wikimedia Commons. Local copies are unmodified; display crops are applied with CSS.',
    },
    schema: {
      attractionName: 'Cloud 9 Surfing Area',
      attractionDesc:
        'Visitor guide to Cloud 9 Surfing Area in General Luna, Siargao: an iconic Pacific reef break and boardwalk known for world-class surfing, sunrise views and surf culture.',
    },
  },
  fil: {
    meta: {
      title: 'Cloud 9 Siargao — Gabay sa Surf, Boardwalk at Pagbisita',
      description:
        'Isang praktikal na gabay sa Cloud 9 Surfing Area sa General Luna, Siargao — kaligtasan sa pag-surf, bayarin, paradahan, transportasyon, pagkain sa malapit, mga atraksyon at pribadong listahan ng biyahe sa iyong device.',
      ogDescription: 'Maghanda para sa pagbisita sa Cloud 9 kasabay ng bahura, boardwalk at tibok ng Siargao.',
    },
    nav: {
      plan: 'Plano',
      gettingThere: 'Pagpunta roon',
      nearby: 'Malapit sa paligid',
      tripList: 'Listahan ng biyahe',
      faq: 'FAQ',
      openMap: 'BUKAS NA MAPA ↗',
    },
    hero: {
      eyebrow: 'General Luna · Isla ng Siargao',
      titleLine1: 'KILALANIN',
      titleLine2: 'ANG CLOUD 9',
      sub: 'Isang kahoy na boardwalk, mababaw na bahura, at isa sa pinakakilalang right-hand wave ng Pasipiko — ganito ang Siargao sa pinakamasigla nitong anyo.',
      ctaPlan: 'IHANDA ANG IYONG PAGBISITA',
      ctaReef: 'ALAMIN ANG BAHURA',
    },
    quickFacts: {
      rating: 'Rating ng Google Maps',
      hours: 'Nakatalang oras sa mapa · maaaring magbago ang mga pasilidad',
      season: 'Rurok ng panahon ng surf',
      baseline: 'Batayang oras para sa simpleng paglilibot',
    },
    theBreak: {
      eyebrow: 'Ang alon',
      title: 'Maganda mula sa pampang.\nSeryoso sa tubig.',
      desc: 'Ang Cloud 9 ay isang malakas at mabulaklak na right-hander na humahampas sa matutulis na bahura. Kapag malakas ang alon, ito ay para sa mga bihasang surfer lamang. Kung nagsisimula ka pa lamang, huwag pilitin ang tanyag na peak; ang kalapit na Jacking Horse ang mas angkop na simulan kasama ang isang lokal na tagapagturo.',
      card1Title: 'Katamtaman–mataas na tubig',
      card1Desc: 'Karaniwang mas angkop na oras para sa pangunahing bahura.',
      card2Title: 'Matutulis na bahura',
      card2Desc: 'Nakatutulong ang booties. Ang mababaw na tubig ay naglalantad ng mababaw na bahagi at nagdaragdag ng panganib.',
      card3Title: 'Igalang ang pila sa lineup',
      card3Desc: 'Maghintay ng pagkakataon, lumangoy ayon sa iyong kakayahan at sumunod sa lokal na gabay.',
      caption: 'Ang boardwalk ay pasilidad din para sa pagsilip sa pagsikat ng araw gaya ng pagpasok sa surf.',
    },
    visit: {
      eyebrow: 'Tala sa pagbisita',
      title: 'Maghanda ayon sa tides, hindi sa oras.',
      sub: 'Ang surf area ay nakatalagang bukas buong araw, ngunit ang mga pasilidad na may tauhan, pagpasok sa mga kaganapan at mga regulasyon ay maaaring sumunod sa lokal na takbo ng operasyon.',
      feeTitle: 'Tiket / bayarin',
      feeHeader: 'Magdala ng maliit na halaga.',
      feeDesc: 'Maaaring may maliit na bayad sa pagpasok o paggamit ng boardwalk. Ayon sa mga kamakailang gabay ng bisita, karaniwan ay mga ₱100 bawat tao. Ituring itong batayan lamang at kumpirmahin sa tarangkahan.',
      feeNote: 'Ang presyo ng board rental at aralin sa surf ay nag-iiba ayon sa tindahan at tagapagturo.',
      parkingHeader: 'Pumunta nang maaga kung mahalaga.',
      parkingDesc: 'Mayroong paradahan sa paligid ng pinamamahalaang pasukan / Cloud 9 Drive area. Maaaring maging siksik ang espasyo tuwing pagsikat at paglubog ng araw, pati na rin sa malalaking araw ng surf.',
      timeHeader: 'Pagsikat ng araw + mga dalawang oras.',
      timeDesc: 'Para sa kapaligiran at pagkuha ng larawan, mahirap talunan ang pagsikat ng araw. Para sa surf, suriin muna ang alon at tides. Dalawang oras ang sapat para sa hindi nagmamadaling pagdaan sa boardwalk; ang mga surfer ay dapat maglaan ng mas mahabang oras.',
      bringHeader: 'Dalhin',
      bringTags: ['Reef-safe sunscreen', 'Tubig', 'Maliit na halaga', 'Rashguard', 'Reef booties para sa mga surfer', 'Dry bag', 'Helmet kung magmamaneho'],
    },
    gettingThere: {
      eyebrow: 'Detalyadong transportasyon',
      title: 'Sundin ang silangang baybayin patungo sa alon.',
      step1Title: 'Mula sa Sayak Airport (IAO)',
      step1Desc: 'Sumakay ng airport van, inayos na transfer o sariling sasakyan patungong General Luna / Cloud 9. Ayon sa opisyal na gabay ng turismo, ang paglalakbay ay tumatagal ng mga 30–45 minuto.',
      step2Title: 'Mula sa sentro ng General Luna',
      step2Desc: 'Sundin ang Tourism Road / ang rutang baybayin patungong Catangnan at Cloud 9. Ang mga e-trike at tricycle ay madaling gamitin para sa point-to-point na paglalakbay; ang mga scooter ay mas may kakayahang umangkop kung bihasa ka sa pagmamaneho.',
      step3Title: 'Mula sa Dapa Port',
      step3Desc: 'Gumamit ng tricycle, van o inayos na transfer patungong General Luna, pagkatapos ay magpatuloy patungong Cloud 9. Magkasundo muna sa pamasahe bago umalis kung hindi ito malinaw na nakapaskil.',
      step4Title: 'Kung kukuha ka ng scooter',
      step4Desc: 'Magsuot ng helmet, manatili sa kaliwa, magbagal sa mga baryo at mag-ingat pagkatapos ng ulan. Huwag magmaneho kung hindi ka komportable sa hindi pamilyar na kalsada ng isla.',
      mapTitle: 'Google Map na nagpapakita ng Cloud 9 Surfing Area, General Luna, Siargao',
    },
    nearby: {
      eyebrow: 'Sa paligid ng Cloud 9',
      title: 'Kumain nang malapit.\nMaglibot nang malayo.',
      sub: 'Ginagawang madali ng General Luna ang gawing buong araw ang pagmamasid sa surf: kaswal na pagkain malapit sa break, bahurang angkop para sa mga nagsisimula, at mga biyahe sa isla o rock-pool kung may mas mahabang oras.',
      foodLabel: 'Pagkain sa malapit',
      foodLoka: 'Loka Siargao',
      foodLokaDesc: 'Isang nakaka-relax na beachfront na kainan sa Cloud 9 Drive para sa almusal, smoothies, pizza at simpleng pahinga pagkatapos ng surf.',
      foodHawker: 'Siargao Hawker',
      foodHawkerDesc: 'Mga pagkaing pang-Singaporean at Malay na comfort food malapit sa Jacking Horse / Cloud 9 na bahagi — praktikal na pagkain bago o pagkatapos ng boardwalk.',
      foodMasala: 'Masala Siargao',
      foodMasalaDesc: 'Modernong pagkaing Indian sa Cloud 9 area, kabilang ang mga pagkaing plant-based at gluten-conscious sa mas kalmadong hardin na tagpuan.',
      attJackingLabel: 'Atraksyon sa malapit',
      attJacking: 'Jacking Horse',
      attJackingDesc: 'Isang mas malapit at mas madaling harapin na bahura. Para sa unang beses na pag-surf, samahan ito ng lokal na tagapagturo sa halip na magsimula sa pangunahing peak ng Cloud 9.',
      attGuyamLabel: 'Paglilibot sa mga isla',
      attGuyam: 'Isla ng Guyam',
      attGuyamDesc: 'Isang maliit na islang napapalibutan ng mga niyog na madalas isama sa klasikong circuit ng paglilibot sa mga isla mula sa General Luna.',
      attMagpupungkoLabel: 'Karagdagan sa araw-araw na biyahe',
      attMagpupungko: 'Magpupungko',
      attMagpupungkoDesc: 'Isang biyahe pahilaga ng Siargao na kilala sa mga rock formation at tidal pool. Suriin muna ang lokal na tides at mga kondisyon ng pagpasok bago pumunta.',
    },
    tripList: {
      eyebrow: 'Iyong listahan ng Siargao',
      title: 'Bumuo ng maikling araw sa paligid ng Cloud 9.',
      sub: 'Pindutin ang anumang nais mong tandaan. Ang iyong listahan ay nakaimbak lamang sa browser na ito sa device na ito gamit ang localStorage. Walang anumang ina-upload o ipinapadala sa server.',
      savedHeader: 'Sa device na ito',
      savedTitle: 'Nakalagak na itineraryo',
      savedLabel: 'Nakalagak na itineraryo',
      clear: 'Linisin',
      remove: 'Alisin',
      empty: 'Wala pang nakalagak. Magdagdag ng hinto mula sa listahan.',
      added: (name) => `${name} ay naidagdag na.`,
      removed: (name) => `${name} ay inalis na.`,
      cleared: 'Ang itineraryo ay nilinis na.',
      items: [
        { name: 'Pagsikat ng araw sa Cloud 9 boardwalk', meta: 'Cloud 9 • madaling araw' },
        { name: 'Pagmasdan ang pangunahing bahura', meta: 'Cloud 9 • katamtaman–mataas na tubig' },
        { name: 'Sesyon para sa mga nagsisimula sa Jacking Horse', meta: 'Malapit na lugar • kumuha ng lokal na tagapagturo' },
        { name: 'Kumain sa kahabaan ng Cloud 9 Drive', meta: 'Pagkain sa malapit • kaswal na hinto' },
        { name: 'Isama ang Isla ng Guyam', meta: 'Karagdagan sa paglilibot sa mga isla' },
        { name: 'Isama ang Magpupungko', meta: 'Karagdagan sa biyaheng pahilaga' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Bago ka umalis.',
      sub: 'Ang mga kondisyon, pagpasok at lokal na bayarin ay maaaring magbago. Kapag mahalaga ang kaligtasan sa pag-surf o mga pagsasaayos ng pagpasok, kumpirmahin ang mga ito sa lokal na lugar sa mismong araw.',
      items: [
        {
          q: 'Mayroon bang bayad sa pagpasok sa Cloud 9?',
          a: 'Maghanda para sa maliit na bayad sa pinamamahalaang lugar o boardwalk. Ayon sa mga kamakailang gabay ng bisita, karaniwan ay mga ₱100 bawat tao, ngunit ang mga tuntunin at bayarin ay maaaring magbago, kaya kumpirmahin sa tarangkahan bago ka pumasok.',
        },
        {
          q: 'Maaari bang mag-surf ang mga nagsisimula sa pangunahing break ng Cloud 9?',
          a: 'Ang pangunahing peak ng Cloud 9 ay humahampas sa matutulis at mababaw na bahura, at pinakamabuti itong iwanan sa mga bihasang surfer kapag malakas ang alon. Ang mga nagsisimula ay mas mainam na kumuha ng lokal na tagapagturo at pumunta sa mas angkop na kalapit na break gaya ng Jacking Horse.',
        },
        {
          q: 'Ano ang pinakamagandang oras para bumisita?',
          a: 'Para sa klasikong kapaligiran ng surf, ang Setyembre hanggang Nobyembre ang rurok ng panahon ng alon. Para sa paglilibot, lalong makulay ang pagsikat ng araw, habang ang katamtaman–mataas na tubig ang karaniwang mas angkop na oras para manood o mag-surf sa pangunahing bahura.',
        },
        {
          q: 'Mayroon bang paradahan?',
          a: 'Mayroong paradahan sa paligid ng pinamamahalaang pasukan ng Cloud 9 at sa kahabaan ng access area mula sa Cloud 9 Drive. Maaaring maging siksik ang espasyo tuwing pagsikat at paglubog ng araw, katapusan ng linggo, at mga kaganapan sa surf, kaya ang pagdating nang maaga ang pinakamadaling paraan.',
        },
        {
          q: 'Gaano katagal dapat manatili?',
          a: 'Ang mga dalawang oras ay kapaki-pakinabang na batayan para sa boardwalk, pagmamasid sa alon, pagkuha ng larawan, at pagkain sa malapit. Maglaan ng mas mahabang oras kung ikaw ay magsu-surf, kukuha ng aralin sa malapit, o pagsasamahin ang Cloud 9, Jacking Horse at baybayin ng Catangnan.',
        },
        {
          q: 'Dapat ba akong magdala ng cash?',
          a: 'Oo. Ang maliit na halaga ay kapaki-pakinabang para sa mga lokal na bayarin, transportasyon, meryenda, board rental, at maliliit na negosyo kahit na lalong karaniwan ang digital na pagbabayad sa Siargao.',
        },
      ],
    },
    reefRule: {
      eyebrow: 'Isang huling tuntunin sa bahura',
      body: 'Iwanan ang baybayin na mas mabuti kaysa noong dumating ka.',
      toTop: 'BALIK SA TAAS ↑',
    },
    footer: {
      disclaimer:
        'Independiyenteng gabay sa pagbisita para sa pagpaplano ng biyahe. Ang website na ito ay hindi opisyal na website ng Cloud 9 Surfing Area, ng Munisipalidad ng General Luna, o ng anumang awtoridad sa turismo.',
      sourcesLabel: 'Pinagmumulan ng impormasyon',
      sourcesBody:
        'Ang gabay sa pagbisita ay batay sa tala ng Cloud 9 at sa gabay ng turismo ng Pilipinas. Laging muling suriin ang tides, surf, bayarin at mga kondisyon ng pagpasok sa lokal na lugar.',
      creditsLabel: 'Pagkilala sa larawan',
      creditsBody:
        'Cloud 9: Spraken eboy2887 · Boardwalk: JupitReyes · Guyam: Michael Angelo Luna · Magpupungko: Wolfgang Hägele. Lahat ay CC BY-SA 4.0 sa pamamagitan ng Wikimedia Commons. Ang mga lokal na kopya ay hindi binago; ang mga crop ng display ay ginagawa sa pamamagitan ng CSS.',
    },
    schema: {
      attractionName: 'Cloud 9 Surfing Area',
      attractionDesc:
        'Gabay sa pagbisita sa Cloud 9 Surfing Area sa General Luna, Siargao: isang tanyag na bahura sa Pasipiko at boardwalk na kilala sa world-class na pag-surf, tanawin ng pagsikat ng araw at kultura ng surf.',
    },
  },
};
