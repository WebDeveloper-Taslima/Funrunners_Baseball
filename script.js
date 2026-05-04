/* ============== Funrunners Baseball - Main Script ============== */
(function () {
  'use strict';

  // ---------- Year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Header scroll state ----------
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Smooth scroll with header offset ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- Reveal on scroll ----------
  document.body.classList.add('js-anim');
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });
    revealEls.forEach((el) => io.observe(el));
    setTimeout(() => revealEls.forEach((el) => el.classList.add('is-visible')), 3000);
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Translations dictionary ----------
  const I18N = {
    en: {
      "meta.title":"Funrunners Baseball — The Future of Global Baseball Auctions",
      "meta.description":"A next-generation platform connecting international baseball teams, players, and auctions in one dynamic ecosystem.",
      "nav.about":"About","nav.how":"How It Works","nav.teams":"Teams","nav.auction":"Auction","nav.why":"Why Us","nav.cta":"Enter Platform",
      "marquee":"Global Baseball Auction System — Live Now",
      "hero.badge":"Coming Soon · Live Auctions",
      "hero.title1":"The Future of","hero.title2":"Global Baseball","hero.title3":"Auctions",
      "hero.sub":"A next-generation platform connecting international baseball teams, players, and auctions in one dynamic ecosystem. Discover live team auctions, competitive bidding, and global franchises — all in one place.",
      "hero.cta1":"Explore Auctions","hero.cta2":"Go to Shipping Baseball",
      "hero.stat1":"Countries","hero.statv2":"Live","hero.stat2":"Bidding","hero.stat3":"Global Platform",
      "about.eyebrow":"About","about.h1":"About",
      "about.lead":"Funrunners Baseball is a global platform designed to bring innovation to baseball franchise auctions and international team development. We connect teams, investors, and fans through a structured and transparent auction system that brings the sport to a global stage.",
      "about.k1":"Transparent","about.v1":"Auction process","about.k2":"Global","about.v2":"Talent pools","about.k3":"Real-time","about.v3":"Bidding system","about.k4":"Premium","about.v4":"Franchise access",
      "how.eyebrow":"Process","how.h1":"How It","how.h2":"Works",
      "how.t1":"Discover Teams","how.p1":"Browse available international baseball franchises with full stats and regional context.",
      "how.t2":"Participate in Auction","how.p2":"Join live bidding for teams and ownership opportunities in a transparent marketplace.",
      "how.t3":"Build & Compete","how.p3":"Manage your roster, develop talent, and compete on the global baseball stage.",
      "teams.eyebrow":"Roster","teams.h1":"Featured","teams.h2":"International Teams","teams.sub":"Meet the franchises shaping the next era of global baseball.","teams.view":"View Details",
      "teams.tag1":"Power Hitters","teams.n1":"Nicaragua Stallions","teams.d1":"Power, speed, and rising talent from Central America.",
      "teams.tag2":"Defensive Wall","teams.n2":"Bogota Bulls","teams.d2":"Aggressive gameplay with strong defensive strategy.",
      "teams.tag3":"Elite Pitching","teams.n3":"Argentina Angels","teams.d3":"Precision-focused team with elite pitching lineup.",
      "teams.tag4":"Speed Squad","teams.n4":"Caribbean Cyclones","teams.d4":"Fast-paced, high-energy competitive squad.",
      "auc.eyebrow":"Live Auction","auc.h1":"Live Auction","auc.h2":"Preview",
      "auc.lead":"Get ready for competitive bidding on exclusive baseball franchises. Each team comes with unique stats, region-based talent pools, and ownership opportunities.",
      "auc.p1":"Real-time bidding system","auc.p2":"Global team ownership","auc.p3":"Transparent auction process","auc.p4":"Limited franchise availability",
      "auc.cta":"Go to Full Auction Platform","auc.live":"Live Now","auc.lot":"Lot #042","auc.curbid":"Current Bid","auc.bidders":"Bidders","auc.timeleft":"Time Left","auc.inc":"Increment","auc.place":"Place Bid",
      "why.eyebrow":"Advantage","why.h1":"Why","why.h2":"Baseball?",
      "why.t1":"Global Ecosystem","why.p1":"Connecting teams across continents.",
      "why.t2":"Fast & Transparent","why.p2":"Real-time, fair auction system.",
      "why.t3":"Smart Management","why.p3":"Structured team operations toolkit.",
      "why.t4":"Investment-Driven","why.p4":"A modern sports investment model.",
      "rd.eyebrow":"Main Platform","rd.h1":"Explore the","rd.h2":"Full Experience",
      "rd.lead":"This landing page is your starting point. To access full auctions, live bidding, and complete team management tools, visit our main platform.",
      "rd.cta":"Enter Shipping Baseball Platform",
      "ft.about":"The future of global baseball auctions — connecting international teams, players, and investors in one dynamic ecosystem.",
      "ft.platform":"Platform","ft.auctions":"Auctions","ft.contact":"Contact","ft.privacy":"Privacy Policy","ft.terms":"Terms",
      "ft.rights":"Funrunners Baseball || Developed By WebDevTaslima || All rights reserved.","ft.tag":"Crafted for the global game."
    },
    es: {
      "meta.title":"Funrunners Baseball — El Futuro de las Subastas Globales de Béisbol",
      "meta.description":"Una plataforma de nueva generación que conecta equipos, jugadores y subastas internacionales de béisbol en un ecosistema dinámico.",
      "nav.about":"Acerca","nav.how":"Cómo Funciona","nav.teams":"Equipos","nav.auction":"Subasta","nav.why":"Por Qué","nav.cta":"Entrar a la Plataforma",
      "marquee":"Sistema Global de Subastas de Béisbol — En Vivo",
      "hero.badge":"Próximamente · Subastas en Vivo",
      "hero.title1":"El Futuro del","hero.title2":"Béisbol Global","hero.title3":"Subastas",
      "hero.sub":"Una plataforma de nueva generación que conecta equipos, jugadores y subastas internacionales de béisbol en un ecosistema dinámico. Descubre subastas en vivo, pujas competitivas y franquicias globales — todo en un solo lugar.",
      "hero.cta1":"Explorar Subastas","hero.cta2":"Ir a Shipping Baseball",
      "hero.stat1":"Países","hero.statv2":"En Vivo","hero.stat2":"Pujas","hero.stat3":"Plataforma Global",
      "about.eyebrow":"Acerca","about.h1":"Acerca de",
      "about.lead":"Funrunners Baseball es una plataforma global diseñada para innovar en las subastas de franquicias de béisbol y el desarrollo de equipos internacionales. Conectamos equipos, inversores y fans mediante un sistema de subastas estructurado y transparente.",
      "about.k1":"Transparente","about.v1":"Proceso de subasta","about.k2":"Global","about.v2":"Reservas de talento","about.k3":"Tiempo real","about.v3":"Sistema de pujas","about.k4":"Premium","about.v4":"Acceso a franquicias",
      "how.eyebrow":"Proceso","how.h1":"Cómo","how.h2":"Funciona",
      "how.t1":"Descubre Equipos","how.p1":"Explora franquicias internacionales de béisbol con estadísticas completas y contexto regional.",
      "how.t2":"Participa en la Subasta","how.p2":"Únete a las pujas en vivo por equipos y oportunidades de propiedad en un mercado transparente.",
      "how.t3":"Construye y Compite","how.p3":"Administra tu plantilla, desarrolla talento y compite en el escenario global del béisbol.",
      "teams.eyebrow":"Plantilla","teams.h1":"Equipos","teams.h2":"Internacionales Destacados","teams.sub":"Conoce las franquicias que dan forma a la próxima era del béisbol global.","teams.view":"Ver Detalles",
      "teams.tag1":"Bateadores de Poder","teams.n1":"Nicaragua Stallions","teams.d1":"Poder, velocidad y talento emergente de Centroamérica.",
      "teams.tag2":"Muro Defensivo","teams.n2":"Bogotá Bulls","teams.d2":"Juego agresivo con sólida estrategia defensiva.",
      "teams.tag3":"Pitcheo Élite","teams.n3":"Argentina Angels","teams.d3":"Equipo enfocado en precisión con un cuerpo de pitcheo de élite.",
      "teams.tag4":"Escuadrón Veloz","teams.n4":"Caribbean Cyclones","teams.d4":"Equipo competitivo de ritmo rápido y alta energía.",
      "auc.eyebrow":"Subasta en Vivo","auc.h1":"Subasta en Vivo","auc.h2":"Vista Previa",
      "auc.lead":"Prepárate para pujas competitivas por franquicias exclusivas de béisbol. Cada equipo viene con estadísticas únicas, reservas de talento regional y oportunidades de propiedad.",
      "auc.p1":"Sistema de pujas en tiempo real","auc.p2":"Propiedad global de equipos","auc.p3":"Proceso de subasta transparente","auc.p4":"Disponibilidad limitada de franquicias",
      "auc.cta":"Ir a la Plataforma Completa","auc.live":"En Vivo","auc.lot":"Lote #042","auc.curbid":"Puja Actual","auc.bidders":"Postores","auc.timeleft":"Tiempo Restante","auc.inc":"Incremento","auc.place":"Pujar",
      "why.eyebrow":"Ventaja","why.h1":"Por Qué","why.h2":"Baseball?",
      "why.t1":"Ecosistema Global","why.p1":"Conectando equipos en todos los continentes.",
      "why.t2":"Rápido y Transparente","why.p2":"Sistema de subastas justo y en tiempo real.",
      "why.t3":"Gestión Inteligente","why.p3":"Kit estructurado de operaciones de equipo.",
      "why.t4":"Orientado a Inversiones","why.p4":"Un modelo moderno de inversión deportiva.",
      "rd.eyebrow":"Plataforma Principal","rd.h1":"Explora la","rd.h2":"Experiencia Completa",
      "rd.lead":"Esta página es tu punto de partida. Para acceder a subastas completas, pujas en vivo y herramientas completas de gestión de equipos, visita nuestra plataforma principal.",
      "rd.cta":"Entrar a Shipping Baseball",
      "ft.about":"El futuro de las subastas globales de béisbol — conectando equipos internacionales, jugadores e inversores en un ecosistema dinámico.",
      "ft.platform":"Plataforma","ft.auctions":"Subastas","ft.contact":"Contacto","ft.privacy":"Política de Privacidad","ft.terms":"Términos",
      "ft.rights":"Funrunners Baseball || Desarrollado por WebDevTaslima || Todos los derechos reservados.","ft.tag":"Hecho para el juego global."
    },
    bn: {
      "meta.title":"Funrunners Baseball — গ্লোবাল বেসবল নিলামের ভবিষ্যৎ",
      "meta.description":"আন্তর্জাতিক বেসবল দল, খেলোয়াড় এবং নিলামকে একটি গতিশীল ইকোসিস্টেমে সংযুক্ত করার পরবর্তী প্রজন্মের প্ল্যাটফর্ম।",
      "nav.about":"আমাদের সম্পর্কে","nav.how":"কিভাবে কাজ করে","nav.teams":"দলসমূহ","nav.auction":"নিলাম","nav.why":"কেন আমরা","nav.cta":"প্ল্যাটফর্মে প্রবেশ",
      "marquee":"গ্লোবাল বেসবল নিলাম সিস্টেম — এখন লাইভ",
      "hero.badge":"শীঘ্রই আসছে · লাইভ নিলাম",
      "hero.title1":"ভবিষ্যৎ","hero.title2":"গ্লোবাল বেসবল","hero.title3":"নিলামের",
      "hero.sub":"একটি পরবর্তী প্রজন্মের প্ল্যাটফর্ম যা আন্তর্জাতিক বেসবল দল, খেলোয়াড় এবং নিলামকে একটি গতিশীল ইকোসিস্টেমে সংযুক্ত করে। লাইভ দল নিলাম, প্রতিযোগিতামূলক বিডিং এবং বৈশ্বিক ফ্র্যাঞ্চাইজি আবিষ্কার করুন — সব এক জায়গায়।",
      "hero.cta1":"নিলাম দেখুন","hero.cta2":"Shipping Baseball এ যান",
      "hero.stat1":"দেশ","hero.statv2":"লাইভ","hero.stat2":"বিডিং","hero.stat3":"গ্লোবাল প্ল্যাটফর্ম",
      "about.eyebrow":"সম্পর্কে","about.h1":"সম্পর্কে",
      "about.lead":"Funrunners Baseball হল একটি বৈশ্বিক প্ল্যাটফর্ম যা বেসবল ফ্র্যাঞ্চাইজি নিলাম এবং আন্তর্জাতিক দল উন্নয়নে উদ্ভাবন আনার জন্য ডিজাইন করা হয়েছে। আমরা একটি কাঠামোবদ্ধ ও স্বচ্ছ নিলাম ব্যবস্থার মাধ্যমে দল, বিনিয়োগকারী এবং ভক্তদের সংযুক্ত করি।",
      "about.k1":"স্বচ্ছ","about.v1":"নিলাম প্রক্রিয়া","about.k2":"বৈশ্বিক","about.v2":"প্রতিভা পুল","about.k3":"রিয়েল-টাইম","about.v3":"বিডিং সিস্টেম","about.k4":"প্রিমিয়াম","about.v4":"ফ্র্যাঞ্চাইজি অ্যাক্সেস",
      "how.eyebrow":"প্রক্রিয়া","how.h1":"কিভাবে","how.h2":"কাজ করে",
      "how.t1":"দল আবিষ্কার করুন","how.p1":"সম্পূর্ণ পরিসংখ্যান এবং আঞ্চলিক প্রসঙ্গ সহ আন্তর্জাতিক বেসবল ফ্র্যাঞ্চাইজি ব্রাউজ করুন।",
      "how.t2":"নিলামে অংশগ্রহণ করুন","how.p2":"একটি স্বচ্ছ মার্কেটপ্লেসে দল ও মালিকানার সুযোগের জন্য লাইভ বিডিংয়ে যোগ দিন।",
      "how.t3":"গড়ুন ও প্রতিযোগিতা করুন","how.p3":"আপনার রোস্টার পরিচালনা করুন, প্রতিভা বিকাশ করুন এবং বৈশ্বিক বেসবল মঞ্চে প্রতিদ্বন্দ্বিতা করুন।",
      "teams.eyebrow":"রোস্টার","teams.h1":"বিশেষ","teams.h2":"আন্তর্জাতিক দল","teams.sub":"বৈশ্বিক বেসবলের পরবর্তী যুগ গঠনকারী ফ্র্যাঞ্চাইজির সাথে পরিচিত হন।","teams.view":"বিস্তারিত দেখুন",
      "teams.tag1":"পাওয়ার হিটার","teams.n1":"নিকারাগুয়া স্ট্যালিয়নস","teams.d1":"মধ্য আমেরিকা থেকে শক্তি, গতি এবং উদীয়মান প্রতিভা।",
      "teams.tag2":"ডিফেন্সিভ ওয়াল","teams.n2":"বোগোটা বুলস","teams.d2":"শক্তিশালী ডিফেন্সিভ কৌশল সহ আক্রমণাত্মক গেমপ্লে।",
      "teams.tag3":"এলিট পিচিং","teams.n3":"আর্জেন্টিনা অ্যাঞ্জেলস","teams.d3":"এলিট পিচিং লাইনআপ সহ নিখুঁততা-কেন্দ্রিক দল।",
      "teams.tag4":"স্পিড স্কোয়াড","teams.n4":"ক্যারিবিয়ান সাইক্লোনস","teams.d4":"দ্রুতগতির, উচ্চ-শক্তির প্রতিযোগিতামূলক স্কোয়াড।",
      "auc.eyebrow":"লাইভ নিলাম","auc.h1":"লাইভ নিলাম","auc.h2":"প্রিভিউ",
      "auc.lead":"একচেটিয়া বেসবল ফ্র্যাঞ্চাইজির জন্য প্রতিযোগিতামূলক বিডিংয়ের জন্য প্রস্তুত হন। প্রতিটি দলে অনন্য পরিসংখ্যান, অঞ্চল-ভিত্তিক প্রতিভা পুল এবং মালিকানার সুযোগ রয়েছে।",
      "auc.p1":"রিয়েল-টাইম বিডিং সিস্টেম","auc.p2":"বৈশ্বিক দল মালিকানা","auc.p3":"স্বচ্ছ নিলাম প্রক্রিয়া","auc.p4":"সীমিত ফ্র্যাঞ্চাইজি প্রাপ্যতা",
      "auc.cta":"সম্পূর্ণ নিলাম প্ল্যাটফর্মে যান","auc.live":"এখন লাইভ","auc.lot":"লট #০৪২","auc.curbid":"বর্তমান বিড","auc.bidders":"বিডার","auc.timeleft":"সময় বাকি","auc.inc":"বৃদ্ধি","auc.place":"বিড করুন",
      "why.eyebrow":"সুবিধা","why.h1":"কেন","why.h2":"বেসবল?",
      "why.t1":"গ্লোবাল ইকোসিস্টেম","why.p1":"মহাদেশজুড়ে দলগুলিকে সংযুক্ত করা।",
      "why.t2":"দ্রুত ও স্বচ্ছ","why.p2":"রিয়েল-টাইম, ন্যায্য নিলাম সিস্টেম।",
      "why.t3":"স্মার্ট ম্যানেজমেন্ট","why.p3":"কাঠামোবদ্ধ দল পরিচালনা টুলকিট।",
      "why.t4":"বিনিয়োগ-চালিত","why.p4":"একটি আধুনিক ক্রীড়া বিনিয়োগ মডেল।",
      "rd.eyebrow":"প্রধান প্ল্যাটফর্ম","rd.h1":"অন্বেষণ করুন","rd.h2":"সম্পূর্ণ অভিজ্ঞতা",
      "rd.lead":"এই ল্যান্ডিং পেজটি আপনার সূচনা পয়েন্ট। সম্পূর্ণ নিলাম, লাইভ বিডিং এবং সম্পূর্ণ দল পরিচালনা টুল অ্যাক্সেস করতে, আমাদের প্রধান প্ল্যাটফর্মে যান।",
      "rd.cta":"Shipping Baseball প্ল্যাটফর্মে প্রবেশ",
      "ft.about":"গ্লোবাল বেসবল নিলামের ভবিষ্যৎ — আন্তর্জাতিক দল, খেলোয়াড় এবং বিনিয়োগকারীদের একটি গতিশীল ইকোসিস্টেমে সংযুক্ত করা।",
      "ft.platform":"প্ল্যাটফর্ম","ft.auctions":"নিলাম","ft.contact":"যোগাযোগ","ft.privacy":"গোপনীয়তা নীতি","ft.terms":"শর্তাবলী",
      "ft.rights":"Funrunners Baseball || Developed By WebDevTaslima || সর্বস্বত্ব সংরক্ষিত।","ft.tag":"বৈশ্বিক খেলার জন্য তৈরি।"
    },
    hi: {
      "meta.title":"Funrunners Baseball — वैश्विक बेसबॉल नीलामी का भविष्य",
      "meta.description":"अंतर्राष्ट्रीय बेसबॉल टीमों, खिलाड़ियों और नीलामियों को एक गतिशील पारिस्थितिकी तंत्र में जोड़ने वाला अगली पीढ़ी का प्लेटफ़ॉर्म।",
      "nav.about":"परिचय","nav.how":"यह कैसे काम करता है","nav.teams":"टीमें","nav.auction":"नीलामी","nav.why":"क्यों हम","nav.cta":"प्लेटफ़ॉर्म पर जाएं",
      "marquee":"वैश्विक बेसबॉल नीलामी प्रणाली — अभी लाइव",
      "hero.badge":"जल्द आ रहा है · लाइव नीलामी","hero.title1":"भविष्य","hero.title2":"वैश्विक बेसबॉल","hero.title3":"नीलामी का",
      "hero.sub":"अंतर्राष्ट्रीय बेसबॉल टीमों, खिलाड़ियों और नीलामियों को एक गतिशील पारिस्थितिकी तंत्र में जोड़ने वाला अगली पीढ़ी का प्लेटफ़ॉर्म। लाइव टीम नीलामियां, प्रतिस्पर्धी बोली और वैश्विक फ्रैंचाइज़ी की खोज करें — सभी एक ही स्थान पर।",
      "hero.cta1":"नीलामी देखें","hero.cta2":"Shipping Baseball पर जाएं",
      "hero.stat1":"देश","hero.statv2":"लाइव","hero.stat2":"बोली","hero.stat3":"वैश्विक प्लेटफ़ॉर्म",
      "about.eyebrow":"परिचय","about.h1":"परिचय",
      "about.lead":"Funrunners Baseball एक वैश्विक प्लेटफ़ॉर्म है जो बेसबॉल फ्रैंचाइज़ी नीलामी और अंतर्राष्ट्रीय टीम विकास में नवाचार लाने के लिए डिज़ाइन किया गया है।",
      "about.k1":"पारदर्शी","about.v1":"नीलामी प्रक्रिया","about.k2":"वैश्विक","about.v2":"प्रतिभा पूल","about.k3":"रीयल-टाइम","about.v3":"बोली प्रणाली","about.k4":"प्रीमियम","about.v4":"फ्रैंचाइज़ी पहुंच",
      "how.eyebrow":"प्रक्रिया","how.h1":"यह कैसे","how.h2":"काम करता है",
      "how.t1":"टीमें खोजें","how.p1":"पूर्ण आँकड़ों और क्षेत्रीय संदर्भ के साथ उपलब्ध अंतर्राष्ट्रीय बेसबॉल फ्रैंचाइज़ी ब्राउज़ करें।",
      "how.t2":"नीलामी में भाग लें","how.p2":"पारदर्शी मार्केटप्लेस में टीमों और स्वामित्व के अवसरों के लिए लाइव बोली में शामिल हों।",
      "how.t3":"बनाएं और प्रतिस्पर्धा करें","how.p3":"अपनी रोस्टर का प्रबंधन करें, प्रतिभा विकसित करें और वैश्विक मंच पर प्रतिस्पर्धा करें।",
      "teams.eyebrow":"रोस्टर","teams.h1":"विशेष","teams.h2":"अंतर्राष्ट्रीय टीमें","teams.sub":"वैश्विक बेसबॉल के अगले युग को आकार देने वाली फ्रैंचाइज़ियों से मिलें।","teams.view":"विवरण देखें",
      "teams.tag1":"पावर हिटर्स","teams.n1":"निकारागुआ स्टैलियन्स","teams.d1":"मध्य अमेरिका से शक्ति, गति और उभरती प्रतिभा।",
      "teams.tag2":"रक्षात्मक दीवार","teams.n2":"बोगोटा बुल्स","teams.d2":"मजबूत रक्षात्मक रणनीति के साथ आक्रामक गेमप्ले।",
      "teams.tag3":"एलीट पिचिंग","teams.n3":"अर्जेंटीना एंजेल्स","teams.d3":"एलीट पिचिंग लाइनअप के साथ सटीकता-केंद्रित टीम।",
      "teams.tag4":"स्पीड स्क्वाड","teams.n4":"कैरेबियन साइक्लोन्स","teams.d4":"तेज़ गति वाली, उच्च-ऊर्जा प्रतिस्पर्धी टीम।",
      "auc.eyebrow":"लाइव नीलामी","auc.h1":"लाइव नीलामी","auc.h2":"पूर्वावलोकन",
      "auc.lead":"विशिष्ट बेसबॉल फ्रैंचाइज़ी पर प्रतिस्पर्धी बोली के लिए तैयार हो जाइए।",
      "auc.p1":"रीयल-टाइम बोली प्रणाली","auc.p2":"वैश्विक टीम स्वामित्व","auc.p3":"पारदर्शी नीलामी प्रक्रिया","auc.p4":"सीमित फ्रैंचाइज़ी उपलब्धता",
      "auc.cta":"पूर्ण नीलामी प्लेटफ़ॉर्म पर जाएं","auc.live":"अभी लाइव","auc.lot":"लॉट #042","auc.curbid":"वर्तमान बोली","auc.bidders":"बोलीदाता","auc.timeleft":"शेष समय","auc.inc":"वृद्धि","auc.place":"बोली लगाएं",
      "why.eyebrow":"लाभ","why.h1":"क्यों","why.h2":"बेसबॉल?",
      "why.t1":"वैश्विक पारिस्थितिकी","why.p1":"महाद्वीपों में टीमों को जोड़ना।",
      "why.t2":"तेज़ और पारदर्शी","why.p2":"रीयल-टाइम, निष्पक्ष नीलामी प्रणाली।",
      "why.t3":"स्मार्ट प्रबंधन","why.p3":"संरचित टीम संचालन टूलकिट।",
      "why.t4":"निवेश-संचालित","why.p4":"एक आधुनिक खेल निवेश मॉडल।",
      "rd.eyebrow":"मुख्य प्लेटफ़ॉर्म","rd.h1":"अन्वेषण करें","rd.h2":"पूर्ण अनुभव",
      "rd.lead":"यह लैंडिंग पेज आपका शुरुआती बिंदु है। पूर्ण नीलामी और प्रबंधन उपकरणों तक पहुंचने के लिए, हमारे मुख्य प्लेटफ़ॉर्म पर जाएं।",
      "rd.cta":"Shipping Baseball प्लेटफ़ॉर्म पर जाएं",
      "ft.about":"वैश्विक बेसबॉल नीलामी का भविष्य — अंतर्राष्ट्रीय टीमों, खिलाड़ियों और निवेशकों को एक गतिशील पारिस्थितिकी तंत्र में जोड़ना।",
      "ft.platform":"प्लेटफ़ॉर्म","ft.auctions":"नीलामी","ft.contact":"संपर्क","ft.privacy":"गोपनीयता नीति","ft.terms":"शर्तें",
      "ft.rights":"Funrunners Baseball || WebDevTaslima द्वारा विकसित || सर्वाधिकार सुरक्षित।","ft.tag":"वैश्विक खेल के लिए तैयार।"
    },
    ja: {
      "meta.title":"Funrunners Baseball — グローバル野球オークションの未来",
      "meta.description":"国際的な野球チーム、選手、オークションを一つのダイナミックなエコシステムに繋ぐ次世代プラットフォーム。",
      "nav.about":"概要","nav.how":"仕組み","nav.teams":"チーム","nav.auction":"オークション","nav.why":"選ばれる理由","nav.cta":"プラットフォームへ",
      "marquee":"グローバル野球オークションシステム — ライブ配信中",
      "hero.badge":"近日公開 · ライブオークション","hero.title1":"未来の","hero.title2":"グローバル野球","hero.title3":"オークション",
      "hero.sub":"国際的な野球チーム、選手、オークションを一つのダイナミックなエコシステムに繋ぐ次世代プラットフォーム。ライブチームオークション、競争入札、グローバルフランチャイズをすべて一か所で発見できます。",
      "hero.cta1":"オークションを見る","hero.cta2":"Shipping Baseballへ",
      "hero.stat1":"国","hero.statv2":"ライブ","hero.stat2":"入札","hero.stat3":"グローバルプラットフォーム",
      "about.eyebrow":"概要","about.h1":"私たちについて",
      "about.lead":"Funrunners Baseballは、野球フランチャイズオークションと国際チーム開発に革新をもたらすために設計されたグローバルプラットフォームです。",
      "about.k1":"透明性","about.v1":"オークションプロセス","about.k2":"グローバル","about.v2":"才能プール","about.k3":"リアルタイム","about.v3":"入札システム","about.k4":"プレミアム","about.v4":"フランチャイズアクセス",
      "how.eyebrow":"プロセス","how.h1":"仕組み","how.h2":"の説明",
      "how.t1":"チームを発見","how.p1":"完全な統計と地域情報を備えた利用可能な国際野球フランチャイズを閲覧。",
      "how.t2":"オークションに参加","how.p2":"透明なマーケットプレイスでチームと所有権の機会のためのライブ入札に参加。",
      "how.t3":"構築と競争","how.p3":"ロスターを管理し、才能を育成し、グローバルな野球の舞台で競う。",
      "teams.eyebrow":"ロスター","teams.h1":"注目の","teams.h2":"国際チーム","teams.sub":"グローバル野球の次の時代を形作るフランチャイズに会いましょう。","teams.view":"詳細を見る",
      "teams.tag1":"パワーヒッター","teams.n1":"ニカラグア・スタリオンズ","teams.d1":"中央アメリカからの力、スピード、新興の才能。",
      "teams.tag2":"防御の壁","teams.n2":"ボゴタ・ブルズ","teams.d2":"強力な防御戦略を備えた攻撃的なゲームプレイ。",
      "teams.tag3":"エリートピッチング","teams.n3":"アルゼンチン・エンジェルス","teams.d3":"エリートピッチングを備えた精度重視のチーム。",
      "teams.tag4":"スピードスクワッド","teams.n4":"カリビアン・サイクロンズ","teams.d4":"高速で高エネルギーの競争力のあるチーム。",
      "auc.eyebrow":"ライブオークション","auc.h1":"ライブオークション","auc.h2":"プレビュー",
      "auc.lead":"独占的な野球フランチャイズの競争入札に備えてください。",
      "auc.p1":"リアルタイム入札システム","auc.p2":"グローバルチーム所有権","auc.p3":"透明なオークションプロセス","auc.p4":"限定フランチャイズ可用性",
      "auc.cta":"フルオークションプラットフォームへ","auc.live":"ライブ中","auc.lot":"ロット #042","auc.curbid":"現在の入札","auc.bidders":"入札者","auc.timeleft":"残り時間","auc.inc":"増加額","auc.place":"入札する",
      "why.eyebrow":"優位性","why.h1":"なぜ","why.h2":"野球?",
      "why.t1":"グローバルエコシステム","why.p1":"大陸をまたいでチームを繋ぐ。",
      "why.t2":"高速で透明","why.p2":"リアルタイム、公正なオークションシステム。",
      "why.t3":"スマート管理","why.p3":"構造化されたチーム運営ツールキット。",
      "why.t4":"投資主導","why.p4":"現代的なスポーツ投資モデル。",
      "rd.eyebrow":"メインプラットフォーム","rd.h1":"探索する","rd.h2":"フル体験",
      "rd.lead":"このランディングページは出発点です。完全なオークション、ライブ入札、完全なチーム管理ツールにアクセスするには、メインプラットフォームをご覧ください。",
      "rd.cta":"Shipping Baseballへ進む",
      "ft.about":"グローバル野球オークションの未来 — 国際チーム、選手、投資家をダイナミックなエコシステムで繋ぐ。",
      "ft.platform":"プラットフォーム","ft.auctions":"オークション","ft.contact":"お問い合わせ","ft.privacy":"プライバシーポリシー","ft.terms":"利用規約",
      "ft.rights":"Funrunners Baseball || Developed By WebDevTaslima || 全著作権所有。","ft.tag":"グローバルゲームのために。"
    },
    ko: {
      "meta.title":"Funrunners Baseball — 글로벌 야구 경매의 미래",
      "meta.description":"국제 야구 팀, 선수, 경매를 하나의 역동적인 생태계로 연결하는 차세대 플랫폼.",
      "nav.about":"소개","nav.how":"작동 방식","nav.teams":"팀","nav.auction":"경매","nav.why":"선택 이유","nav.cta":"플랫폼 입장",
      "marquee":"글로벌 야구 경매 시스템 — 지금 라이브",
      "hero.badge":"곧 공개 · 라이브 경매","hero.title1":"미래의","hero.title2":"글로벌 야구","hero.title3":"경매",
      "hero.sub":"국제 야구 팀, 선수, 경매를 하나의 역동적인 생태계로 연결하는 차세대 플랫폼.",
      "hero.cta1":"경매 살펴보기","hero.cta2":"Shipping Baseball로 이동",
      "hero.stat1":"국가","hero.statv2":"라이브","hero.stat2":"입찰","hero.stat3":"글로벌 플랫폼",
      "about.eyebrow":"소개","about.h1":"소개",
      "about.lead":"Funrunners Baseball은 야구 프랜차이즈 경매와 국제 팀 개발에 혁신을 가져오기 위해 설계된 글로벌 플랫폼입니다.",
      "about.k1":"투명한","about.v1":"경매 프로세스","about.k2":"글로벌","about.v2":"인재 풀","about.k3":"실시간","about.v3":"입찰 시스템","about.k4":"프리미엄","about.v4":"프랜차이즈 접근",
      "how.eyebrow":"프로세스","how.h1":"작동","how.h2":"방식",
      "how.t1":"팀 발견","how.p1":"전체 통계와 지역 컨텍스트가 포함된 국제 야구 프랜차이즈를 탐색하세요.",
      "how.t2":"경매 참여","how.p2":"투명한 마켓플레이스에서 팀 및 소유권 기회를 위한 라이브 입찰에 참여하세요.",
      "how.t3":"구축과 경쟁","how.p3":"로스터를 관리하고, 인재를 개발하며, 글로벌 야구 무대에서 경쟁하세요.",
      "teams.eyebrow":"로스터","teams.h1":"주요","teams.h2":"국제 팀","teams.sub":"글로벌 야구의 다음 시대를 만드는 프랜차이즈를 만나보세요.","teams.view":"자세히 보기",
      "teams.tag1":"파워 히터","teams.n1":"니카라과 스탈리온스","teams.d1":"중앙 아메리카의 힘, 속도, 떠오르는 인재.",
      "teams.tag2":"수비의 벽","teams.n2":"보고타 불스","teams.d2":"강력한 수비 전략의 공격적인 게임플레이.",
      "teams.tag3":"엘리트 피칭","teams.n3":"아르헨티나 엔젤스","teams.d3":"엘리트 피칭 라인업이 있는 정확성 중심 팀.",
      "teams.tag4":"스피드 스쿼드","teams.n4":"카리브 사이클론스","teams.d4":"빠른 속도, 고에너지의 경쟁력 있는 스쿼드.",
      "auc.eyebrow":"라이브 경매","auc.h1":"라이브 경매","auc.h2":"미리보기",
      "auc.lead":"독점 야구 프랜차이즈에 대한 경쟁 입찰을 준비하세요.",
      "auc.p1":"실시간 입찰 시스템","auc.p2":"글로벌 팀 소유권","auc.p3":"투명한 경매 프로세스","auc.p4":"제한된 프랜차이즈 가용성",
      "auc.cta":"전체 경매 플랫폼으로 이동","auc.live":"지금 라이브","auc.lot":"로트 #042","auc.curbid":"현재 입찰","auc.bidders":"입찰자","auc.timeleft":"남은 시간","auc.inc":"증가","auc.place":"입찰하기",
      "why.eyebrow":"장점","why.h1":"왜","why.h2":"베이스볼?",
      "why.t1":"글로벌 생태계","why.p1":"대륙 간 팀 연결.",
      "why.t2":"빠르고 투명","why.p2":"실시간, 공정한 경매 시스템.",
      "why.t3":"스마트 관리","why.p3":"구조화된 팀 운영 툴킷.",
      "why.t4":"투자 주도","why.p4":"현대적인 스포츠 투자 모델.",
      "rd.eyebrow":"메인 플랫폼","rd.h1":"탐험하세요","rd.h2":"전체 경험",
      "rd.lead":"이 랜딩 페이지는 시작점입니다. 전체 경매와 라이브 입찰을 이용하려면 메인 플랫폼을 방문하세요.",
      "rd.cta":"Shipping Baseball 플랫폼 입장",
      "ft.about":"글로벌 야구 경매의 미래 — 국제 팀, 선수, 투자자를 하나의 역동적인 생태계로 연결.",
      "ft.platform":"플랫폼","ft.auctions":"경매","ft.contact":"연락처","ft.privacy":"개인정보 보호정책","ft.terms":"이용약관",
      "ft.rights":"Funrunners Baseball || WebDevTaslima 개발 || 모든 권리 보유.","ft.tag":"글로벌 게임을 위해 제작."
    },
    pt: {
      "meta.title":"Funrunners Baseball — O Futuro dos Leilões Globais de Beisebol",
      "meta.description":"Uma plataforma de nova geração que conecta equipes, jogadores e leilões internacionais de beisebol em um ecossistema dinâmico.",
      "nav.about":"Sobre","nav.how":"Como Funciona","nav.teams":"Equipes","nav.auction":"Leilão","nav.why":"Por Quê","nav.cta":"Entrar na Plataforma",
      "marquee":"Sistema Global de Leilão de Beisebol — Ao Vivo Agora",
      "hero.badge":"Em Breve · Leilões Ao Vivo","hero.title1":"O Futuro dos","hero.title2":"Beisebol Global","hero.title3":"Leilões",
      "hero.sub":"Uma plataforma de nova geração conectando equipes, jogadores e leilões internacionais em um ecossistema dinâmico.",
      "hero.cta1":"Explorar Leilões","hero.cta2":"Ir para Shipping Baseball",
      "hero.stat1":"Países","hero.statv2":"Ao Vivo","hero.stat2":"Lances","hero.stat3":"Plataforma Global",
      "about.eyebrow":"Sobre","about.h1":"Sobre",
      "about.lead":"Funrunners Baseball é uma plataforma global projetada para trazer inovação aos leilões de franquias de beisebol e desenvolvimento de equipes internacionais.",
      "about.k1":"Transparente","about.v1":"Processo de leilão","about.k2":"Global","about.v2":"Pools de talento","about.k3":"Tempo real","about.v3":"Sistema de lances","about.k4":"Premium","about.v4":"Acesso a franquias",
      "how.eyebrow":"Processo","how.h1":"Como","how.h2":"Funciona",
      "how.t1":"Descubra Equipes","how.p1":"Navegue por franquias internacionais com estatísticas completas e contexto regional.",
      "how.t2":"Participe do Leilão","how.p2":"Junte-se a lances ao vivo em um mercado transparente.",
      "how.t3":"Construa e Compita","how.p3":"Gerencie seu elenco, desenvolva talentos e compita no palco global do beisebol.",
      "teams.eyebrow":"Elenco","teams.h1":"Destaque","teams.h2":"Equipes Internacionais","teams.sub":"Conheça as franquias que moldam a próxima era do beisebol global.","teams.view":"Ver Detalhes",
      "teams.tag1":"Rebatedores de Força","teams.n1":"Nicaragua Stallions","teams.d1":"Força, velocidade e talento emergente da América Central.",
      "teams.tag2":"Muro Defensivo","teams.n2":"Bogotá Bulls","teams.d2":"Jogo agressivo com forte estratégia defensiva.",
      "teams.tag3":"Pitching de Elite","teams.n3":"Argentina Angels","teams.d3":"Equipe focada em precisão com lineup de pitching de elite.",
      "teams.tag4":"Esquadrão Veloz","teams.n4":"Caribbean Cyclones","teams.d4":"Esquadrão competitivo de ritmo rápido e alta energia.",
      "auc.eyebrow":"Leilão Ao Vivo","auc.h1":"Leilão Ao Vivo","auc.h2":"Prévia",
      "auc.lead":"Prepare-se para lances competitivos em franquias exclusivas de beisebol.",
      "auc.p1":"Sistema de lances em tempo real","auc.p2":"Propriedade global de equipes","auc.p3":"Processo de leilão transparente","auc.p4":"Disponibilidade limitada de franquias",
      "auc.cta":"Ir para a Plataforma Completa","auc.live":"Ao Vivo","auc.lot":"Lote #042","auc.curbid":"Lance Atual","auc.bidders":"Licitantes","auc.timeleft":"Tempo Restante","auc.inc":"Incremento","auc.place":"Dar Lance",
      "why.eyebrow":"Vantagem","why.h1":"Por Que","why.h2":"Baseball?",
      "why.t1":"Ecossistema Global","why.p1":"Conectando equipes em todos os continentes.",
      "why.t2":"Rápido e Transparente","why.p2":"Sistema de leilão justo em tempo real.",
      "why.t3":"Gestão Inteligente","why.p3":"Kit estruturado de operações de equipe.",
      "why.t4":"Orientado para Investimento","why.p4":"Um modelo moderno de investimento esportivo.",
      "rd.eyebrow":"Plataforma Principal","rd.h1":"Explore a","rd.h2":"Experiência Completa",
      "rd.lead":"Esta página é seu ponto de partida. Para acessar leilões completos, visite nossa plataforma principal.",
      "rd.cta":"Entrar na Plataforma Shipping Baseball",
      "ft.about":"O futuro dos leilões globais de beisebol — conectando equipes internacionais, jogadores e investidores em um ecossistema dinâmico.",
      "ft.platform":"Plataforma","ft.auctions":"Leilões","ft.contact":"Contato","ft.privacy":"Política de Privacidade","ft.terms":"Termos",
      "ft.rights":"Funrunners Baseball || Desenvolvido por WebDevTaslima || Todos os direitos reservados.","ft.tag":"Feito para o jogo global."
    },
    fr: {
      "meta.title":"Funrunners Baseball — L'Avenir des Enchères Mondiales de Baseball",
      "meta.description":"Une plateforme de nouvelle génération connectant équipes, joueurs et enchères de baseball internationales dans un écosystème dynamique.",
      "nav.about":"À Propos","nav.how":"Comment Ça Marche","nav.teams":"Équipes","nav.auction":"Enchère","nav.why":"Pourquoi Nous","nav.cta":"Entrer dans la Plateforme",
      "marquee":"Système Mondial d'Enchères de Baseball — En Direct",
      "hero.badge":"Bientôt · Enchères en Direct","hero.title1":"L'Avenir du","hero.title2":"Baseball Mondial","hero.title3":"Enchères",
      "hero.sub":"Une plateforme de nouvelle génération connectant équipes, joueurs et enchères de baseball internationales dans un écosystème dynamique.",
      "hero.cta1":"Explorer les Enchères","hero.cta2":"Aller à Shipping Baseball",
      "hero.stat1":"Pays","hero.statv2":"En Direct","hero.stat2":"Enchères","hero.stat3":"Plateforme Mondiale",
      "about.eyebrow":"À Propos","about.h1":"À propos de",
      "about.lead":"Funrunners Baseball est une plateforme mondiale conçue pour apporter l'innovation aux enchères de franchises de baseball et au développement d'équipes internationales.",
      "about.k1":"Transparent","about.v1":"Processus d'enchère","about.k2":"Mondial","about.v2":"Réservoirs de talent","about.k3":"Temps réel","about.v3":"Système d'enchères","about.k4":"Premium","about.v4":"Accès franchise",
      "how.eyebrow":"Processus","how.h1":"Comment","how.h2":"Ça Marche",
      "how.t1":"Découvrir les Équipes","how.p1":"Parcourez les franchises internationales de baseball avec statistiques complètes et contexte régional.",
      "how.t2":"Participer à l'Enchère","how.p2":"Rejoignez les enchères en direct dans un marché transparent.",
      "how.t3":"Construire et Concourir","how.p3":"Gérez votre roster, développez le talent et concourez sur la scène mondiale.",
      "teams.eyebrow":"Roster","teams.h1":"Équipes","teams.h2":"Internationales en Vedette","teams.sub":"Rencontrez les franchises façonnant la prochaine ère du baseball mondial.","teams.view":"Voir les Détails",
      "teams.tag1":"Frappeurs de Puissance","teams.n1":"Nicaragua Stallions","teams.d1":"Puissance, vitesse et talent émergent d'Amérique centrale.",
      "teams.tag2":"Mur Défensif","teams.n2":"Bogota Bulls","teams.d2":"Jeu agressif avec une forte stratégie défensive.",
      "teams.tag3":"Lanceurs d'Élite","teams.n3":"Argentina Angels","teams.d3":"Équipe axée sur la précision avec un lineup de lanceurs d'élite.",
      "teams.tag4":"Escouade Vitesse","teams.n4":"Caribbean Cyclones","teams.d4":"Escouade compétitive rapide et énergique.",
      "auc.eyebrow":"Enchère en Direct","auc.h1":"Enchère en Direct","auc.h2":"Aperçu",
      "auc.lead":"Préparez-vous pour des enchères compétitives sur des franchises exclusives.",
      "auc.p1":"Système d'enchères en temps réel","auc.p2":"Propriété mondiale d'équipes","auc.p3":"Processus d'enchère transparent","auc.p4":"Disponibilité limitée des franchises",
      "auc.cta":"Aller à la Plateforme Complète","auc.live":"En Direct","auc.lot":"Lot #042","auc.curbid":"Enchère Actuelle","auc.bidders":"Enchérisseurs","auc.timeleft":"Temps Restant","auc.inc":"Incrément","auc.place":"Enchérir",
      "why.eyebrow":"Avantage","why.h1":"Pourquoi","why.h2":"Baseball?",
      "why.t1":"Écosystème Mondial","why.p1":"Connecter les équipes à travers les continents.",
      "why.t2":"Rapide et Transparent","why.p2":"Système d'enchères équitable en temps réel.",
      "why.t3":"Gestion Intelligente","why.p3":"Boîte à outils structurée pour les opérations d'équipe.",
      "why.t4":"Axé sur l'Investissement","why.p4":"Un modèle moderne d'investissement sportif.",
      "rd.eyebrow":"Plateforme Principale","rd.h1":"Explorez","rd.h2":"l'Expérience Complète",
      "rd.lead":"Cette page d'accueil est votre point de départ. Pour accéder aux enchères complètes, visitez notre plateforme principale.",
      "rd.cta":"Entrer dans la Plateforme Shipping Baseball",
      "ft.about":"L'avenir des enchères mondiales de baseball — connectant équipes internationales, joueurs et investisseurs.",
      "ft.platform":"Plateforme","ft.auctions":"Enchères","ft.contact":"Contact","ft.privacy":"Politique de Confidentialité","ft.terms":"Conditions",
      "ft.rights":"Funrunners Baseball || Développé par WebDevTaslima || Tous droits réservés.","ft.tag":"Conçu pour le jeu mondial."
    },
    de: {
      "meta.title":"Funrunners Baseball — Die Zukunft globaler Baseball-Auktionen",
      "meta.description":"Eine Plattform der nächsten Generation, die internationale Baseball-Teams, Spieler und Auktionen in einem dynamischen Ökosystem verbindet.",
      "nav.about":"Über Uns","nav.how":"So Funktioniert's","nav.teams":"Teams","nav.auction":"Auktion","nav.why":"Warum Wir","nav.cta":"Plattform Betreten",
      "marquee":"Globales Baseball-Auktionssystem — Jetzt Live",
      "hero.badge":"Bald Verfügbar · Live-Auktionen","hero.title1":"Die Zukunft des","hero.title2":"Globalen Baseball","hero.title3":"Auktionen",
      "hero.sub":"Eine Plattform der nächsten Generation, die internationale Baseball-Teams, Spieler und Auktionen verbindet.",
      "hero.cta1":"Auktionen Erkunden","hero.cta2":"Zu Shipping Baseball",
      "hero.stat1":"Länder","hero.statv2":"Live","hero.stat2":"Bieten","hero.stat3":"Globale Plattform",
      "about.eyebrow":"Über Uns","about.h1":"Über",
      "about.lead":"Funrunners Baseball ist eine globale Plattform, die Innovationen in Baseball-Franchise-Auktionen bringt.",
      "about.k1":"Transparent","about.v1":"Auktionsprozess","about.k2":"Global","about.v2":"Talent-Pools","about.k3":"Echtzeit","about.v3":"Bietsystem","about.k4":"Premium","about.v4":"Franchise-Zugang",
      "how.eyebrow":"Prozess","how.h1":"So","how.h2":"Funktioniert's",
      "how.t1":"Teams Entdecken","how.p1":"Durchsuchen Sie internationale Baseball-Franchises mit vollständigen Statistiken.",
      "how.t2":"An Auktion Teilnehmen","how.p2":"Nehmen Sie an Live-Geboten in einem transparenten Marktplatz teil.",
      "how.t3":"Aufbauen und Wettbewerben","how.p3":"Verwalten Sie Ihren Kader und konkurrieren Sie auf der globalen Bühne.",
      "teams.eyebrow":"Kader","teams.h1":"Vorgestellt","teams.h2":"Internationale Teams","teams.sub":"Lernen Sie die Franchises kennen, die das nächste Zeitalter des globalen Baseballs prägen.","teams.view":"Details Ansehen",
      "teams.tag1":"Power-Schläger","teams.n1":"Nicaragua Stallions","teams.d1":"Kraft, Geschwindigkeit und aufstrebendes Talent aus Mittelamerika.",
      "teams.tag2":"Defensive Wand","teams.n2":"Bogotá Bulls","teams.d2":"Aggressives Gameplay mit starker defensiver Strategie.",
      "teams.tag3":"Elite-Pitching","teams.n3":"Argentina Angels","teams.d3":"Präzisionsorientiertes Team mit Elite-Pitching-Lineup.",
      "teams.tag4":"Speed-Trupp","teams.n4":"Caribbean Cyclones","teams.d4":"Schnelles, energiegeladenes Wettbewerbsteam.",
      "auc.eyebrow":"Live-Auktion","auc.h1":"Live-Auktion","auc.h2":"Vorschau",
      "auc.lead":"Bereiten Sie sich auf wettbewerbsfähige Gebote für exklusive Baseball-Franchises vor.",
      "auc.p1":"Echtzeit-Bietsystem","auc.p2":"Globaler Team-Besitz","auc.p3":"Transparenter Auktionsprozess","auc.p4":"Begrenzte Franchise-Verfügbarkeit",
      "auc.cta":"Zur Vollständigen Plattform","auc.live":"Live","auc.lot":"Los #042","auc.curbid":"Aktuelles Gebot","auc.bidders":"Bieter","auc.timeleft":"Verbleibende Zeit","auc.inc":"Erhöhung","auc.place":"Gebot Abgeben",
      "why.eyebrow":"Vorteil","why.h1":"Warum","why.h2":"Baseball?",
      "why.t1":"Globales Ökosystem","why.p1":"Teams über Kontinente hinweg verbinden.",
      "why.t2":"Schnell und Transparent","why.p2":"Echtzeit, faires Auktionssystem.",
      "why.t3":"Intelligentes Management","why.p3":"Strukturiertes Toolkit für Teamoperationen.",
      "why.t4":"Investitionsgetrieben","why.p4":"Ein modernes Sportinvestitionsmodell.",
      "rd.eyebrow":"Hauptplattform","rd.h1":"Erkunden Sie","rd.h2":"Das Volle Erlebnis",
      "rd.lead":"Diese Landing-Page ist Ihr Ausgangspunkt. Um auf vollständige Auktionen zuzugreifen, besuchen Sie unsere Hauptplattform.",
      "rd.cta":"Shipping Baseball Plattform Betreten",
      "ft.about":"Die Zukunft globaler Baseball-Auktionen — Verbindung internationaler Teams, Spieler und Investoren.",
      "ft.platform":"Plattform","ft.auctions":"Auktionen","ft.contact":"Kontakt","ft.privacy":"Datenschutz","ft.terms":"Bedingungen",
      "ft.rights":"Funrunners Baseball || Entwickelt von WebDevTaslima || Alle Rechte vorbehalten.","ft.tag":"Für das globale Spiel gemacht."
    },
    it: {
      "meta.title":"Funrunners Baseball — Il Futuro delle Aste Globali di Baseball",
      "meta.description":"Una piattaforma di nuova generazione che collega squadre, giocatori e aste internazionali di baseball.",
      "nav.about":"Chi Siamo","nav.how":"Come Funziona","nav.teams":"Squadre","nav.auction":"Asta","nav.why":"Perché Noi","nav.cta":"Entra nella Piattaforma",
      "marquee":"Sistema Globale di Aste Baseball — In Diretta",
      "hero.badge":"Prossimamente · Aste Live","hero.title1":"Il Futuro del","hero.title2":"Baseball Globale","hero.title3":"Aste",
      "hero.sub":"Una piattaforma di nuova generazione che collega squadre, giocatori e aste internazionali di baseball in un ecosistema dinamico.",
      "hero.cta1":"Esplora le Aste","hero.cta2":"Vai a Shipping Baseball",
      "hero.stat1":"Paesi","hero.statv2":"Live","hero.stat2":"Offerte","hero.stat3":"Piattaforma Globale",
      "about.eyebrow":"Chi Siamo","about.h1":"Riguardo a",
      "about.lead":"Funrunners Baseball è una piattaforma globale progettata per portare innovazione alle aste di franchising di baseball.",
      "about.k1":"Trasparente","about.v1":"Processo d'asta","about.k2":"Globale","about.v2":"Pool di talenti","about.k3":"Tempo reale","about.v3":"Sistema d'offerta","about.k4":"Premium","about.v4":"Accesso franchigia",
      "how.eyebrow":"Processo","how.h1":"Come","how.h2":"Funziona",
      "how.t1":"Scopri le Squadre","how.p1":"Esplora le franchigie internazionali con statistiche complete.",
      "how.t2":"Partecipa all'Asta","how.p2":"Unisciti alle offerte live in un mercato trasparente.",
      "how.t3":"Costruisci e Compete","how.p3":"Gestisci la tua rosa e competi sul palcoscenico globale.",
      "teams.eyebrow":"Rosa","teams.h1":"In Evidenza","teams.h2":"Squadre Internazionali","teams.sub":"Incontra le franchigie che plasmano l'era del baseball globale.","teams.view":"Vedi Dettagli",
      "teams.tag1":"Battitori di Potenza","teams.n1":"Nicaragua Stallions","teams.d1":"Forza, velocità e talento emergente dall'America Centrale.",
      "teams.tag2":"Muro Difensivo","teams.n2":"Bogotá Bulls","teams.d2":"Gioco aggressivo con forte strategia difensiva.",
      "teams.tag3":"Lanci d'Élite","teams.n3":"Argentina Angels","teams.d3":"Squadra focalizzata sulla precisione con un lineup di lancio d'élite.",
      "teams.tag4":"Squadra Veloce","teams.n4":"Caribbean Cyclones","teams.d4":"Squadra competitiva veloce ed energica.",
      "auc.eyebrow":"Asta Live","auc.h1":"Asta Live","auc.h2":"Anteprima",
      "auc.lead":"Preparati per offerte competitive su franchising esclusive di baseball.",
      "auc.p1":"Sistema d'offerta in tempo reale","auc.p2":"Proprietà globale delle squadre","auc.p3":"Processo d'asta trasparente","auc.p4":"Disponibilità limitata di franchising",
      "auc.cta":"Vai alla Piattaforma Completa","auc.live":"In Diretta","auc.lot":"Lotto #042","auc.curbid":"Offerta Attuale","auc.bidders":"Offerenti","auc.timeleft":"Tempo Rimanente","auc.inc":"Incremento","auc.place":"Fai Offerta",
      "why.eyebrow":"Vantaggio","why.h1":"Perché","why.h2":"Baseball?",
      "why.t1":"Ecosistema Globale","why.p1":"Collegare squadre attraverso i continenti.",
      "why.t2":"Veloce e Trasparente","why.p2":"Sistema d'asta equo in tempo reale.",
      "why.t3":"Gestione Intelligente","why.p3":"Toolkit strutturato per operazioni di squadra.",
      "why.t4":"Orientato all'Investimento","why.p4":"Un moderno modello di investimento sportivo.",
      "rd.eyebrow":"Piattaforma Principale","rd.h1":"Esplora","rd.h2":"L'Esperienza Completa",
      "rd.lead":"Questa landing page è il tuo punto di partenza. Per accedere alle aste complete, visita la nostra piattaforma principale.",
      "rd.cta":"Entra nella Piattaforma Shipping Baseball",
      "ft.about":"Il futuro delle aste globali di baseball — collegando squadre internazionali, giocatori e investitori.",
      "ft.platform":"Piattaforma","ft.auctions":"Aste","ft.contact":"Contatto","ft.privacy":"Informativa sulla Privacy","ft.terms":"Termini",
      "ft.rights":"Funrunners Baseball || Sviluppato da WebDevTaslima || Tutti i diritti riservati.","ft.tag":"Creato per il gioco globale."
    },
    zh: {
      "meta.title":"Funrunners Baseball — 全球棒球拍卖的未来",
      "meta.description":"将国际棒球队、球员和拍卖连接到一个动态生态系统中的下一代平台。",
      "nav.about":"关于","nav.how":"运作方式","nav.teams":"球队","nav.auction":"拍卖","nav.why":"选择我们","nav.cta":"进入平台",
      "marquee":"全球棒球拍卖系统 — 现在直播",
      "hero.badge":"即将推出 · 实时拍卖","hero.title1":"未来","hero.title2":"全球棒球","hero.title3":"拍卖",
      "hero.sub":"将国际棒球队、球员和拍卖连接到一个动态生态系统中的下一代平台。",
      "hero.cta1":"探索拍卖","hero.cta2":"前往 Shipping Baseball",
      "hero.stat1":"国家","hero.statv2":"直播","hero.stat2":"竞价","hero.stat3":"全球平台",
      "about.eyebrow":"关于","about.h1":"关于",
      "about.lead":"Funrunners Baseball 是一个旨在为棒球特许经营拍卖和国际球队发展带来创新的全球平台。",
      "about.k1":"透明","about.v1":"拍卖流程","about.k2":"全球","about.v2":"人才库","about.k3":"实时","about.v3":"竞价系统","about.k4":"高级","about.v4":"特许经营访问",
      "how.eyebrow":"流程","how.h1":"运作","how.h2":"方式",
      "how.t1":"发现球队","how.p1":"浏览具有完整统计数据的国际棒球特许经营。",
      "how.t2":"参与拍卖","how.p2":"在透明的市场中加入实时竞价。",
      "how.t3":"建设与竞争","how.p3":"管理您的阵容,在全球棒球舞台上竞争。",
      "teams.eyebrow":"阵容","teams.h1":"特色","teams.h2":"国际球队","teams.sub":"认识塑造全球棒球下一个时代的特许经营。","teams.view":"查看详情",
      "teams.tag1":"强力击球手","teams.n1":"尼加拉瓜种马","teams.d1":"来自中美洲的力量、速度和新兴人才。",
      "teams.tag2":"防御之墙","teams.n2":"波哥大公牛","teams.d2":"具有强大防御策略的进攻性游戏玩法。",
      "teams.tag3":"精英投球","teams.n3":"阿根廷天使","teams.d3":"具有精英投球阵容的精准导向团队。",
      "teams.tag4":"速度小队","teams.n4":"加勒比飓风","teams.d4":"快节奏、高能量的竞争小队。",
      "auc.eyebrow":"实时拍卖","auc.h1":"实时拍卖","auc.h2":"预览",
      "auc.lead":"为独家棒球特许经营的竞争性投标做好准备。",
      "auc.p1":"实时竞价系统","auc.p2":"全球球队所有权","auc.p3":"透明拍卖流程","auc.p4":"有限的特许经营可用性",
      "auc.cta":"前往完整拍卖平台","auc.live":"直播中","auc.lot":"批次 #042","auc.curbid":"当前竞价","auc.bidders":"竞标者","auc.timeleft":"剩余时间","auc.inc":"增量","auc.place":"出价",
      "why.eyebrow":"优势","why.h1":"为什么选择","why.h2":"棒球?",
      "why.t1":"全球生态系统","why.p1":"连接各大洲的球队。",
      "why.t2":"快速透明","why.p2":"实时、公平的拍卖系统。",
      "why.t3":"智能管理","why.p3":"结构化的球队运营工具包。",
      "why.t4":"投资驱动","why.p4":"现代体育投资模型。",
      "rd.eyebrow":"主平台","rd.h1":"探索","rd.h2":"完整体验",
      "rd.lead":"此着陆页是您的起点。要访问完整的拍卖,请访问我们的主平台。",
      "rd.cta":"进入 Shipping Baseball 平台",
      "ft.about":"全球棒球拍卖的未来 — 在动态生态系统中连接国际球队、球员和投资者。",
      "ft.platform":"平台","ft.auctions":"拍卖","ft.contact":"联系","ft.privacy":"隐私政策","ft.terms":"条款",
      "ft.rights":"Funrunners Baseball || 由 WebDevTaslima 开发 || 版权所有。","ft.tag":"为全球比赛打造。"
    },
    ar: {
      "meta.title":"Funrunners Baseball — مستقبل مزادات البيسبول العالمية",
      "meta.description":"منصة من الجيل التالي تربط فرق ولاعبي ومزادات البيسبول الدولية في نظام بيئي ديناميكي.",
      "nav.about":"حول","nav.how":"كيف يعمل","nav.teams":"الفرق","nav.auction":"المزاد","nav.why":"لماذا نحن","nav.cta":"دخول المنصة",
      "marquee":"نظام مزاد البيسبول العالمي — مباشر الآن",
      "hero.badge":"قريباً · مزادات مباشرة","hero.title1":"مستقبل","hero.title2":"البيسبول العالمي","hero.title3":"المزادات",
      "hero.sub":"منصة من الجيل التالي تربط فرق ولاعبي ومزادات البيسبول الدولية في نظام بيئي ديناميكي.",
      "hero.cta1":"استكشف المزادات","hero.cta2":"اذهب إلى Shipping Baseball",
      "hero.stat1":"الدول","hero.statv2":"مباشر","hero.stat2":"مزايدة","hero.stat3":"منصة عالمية",
      "about.eyebrow":"حول","about.h1":"حول",
      "about.lead":"Funrunners Baseball هي منصة عالمية مصممة لجلب الابتكار إلى مزادات امتيازات البيسبول وتطوير الفرق الدولية.",
      "about.k1":"شفاف","about.v1":"عملية المزاد","about.k2":"عالمي","about.v2":"مجموعات المواهب","about.k3":"الوقت الفعلي","about.v3":"نظام المزايدة","about.k4":"بريميوم","about.v4":"الوصول إلى الامتياز",
      "how.eyebrow":"العملية","how.h1":"كيف","how.h2":"يعمل",
      "how.t1":"اكتشف الفرق","how.p1":"تصفح امتيازات البيسبول الدولية مع إحصائيات كاملة.",
      "how.t2":"شارك في المزاد","how.p2":"انضم إلى المزايدة المباشرة في سوق شفاف.",
      "how.t3":"ابنِ وتنافس","how.p3":"أدر تشكيلتك وتنافس على المسرح العالمي.",
      "teams.eyebrow":"التشكيلة","teams.h1":"المميزة","teams.h2":"الفرق الدولية","teams.sub":"تعرف على الامتيازات التي تشكل العصر القادم للبيسبول العالمي.","teams.view":"عرض التفاصيل",
      "teams.tag1":"الضاربون الأقوياء","teams.n1":"نيكاراغوا ستاليونز","teams.d1":"القوة والسرعة والموهبة الصاعدة من أمريكا الوسطى.",
      "teams.tag2":"الجدار الدفاعي","teams.n2":"بوغوتا بولز","teams.d2":"أسلوب لعب عدواني مع استراتيجية دفاعية قوية.",
      "teams.tag3":"رماة النخبة","teams.n3":"أرجنتينا أنجلز","teams.d3":"فريق يركز على الدقة مع تشكيلة رماية النخبة.",
      "teams.tag4":"فرقة السرعة","teams.n4":"كاريبيان سايكلونز","teams.d4":"فرقة تنافسية سريعة الإيقاع وعالية الطاقة.",
      "auc.eyebrow":"المزاد المباشر","auc.h1":"المزاد المباشر","auc.h2":"معاينة",
      "auc.lead":"استعد للمزايدة التنافسية على امتيازات البيسبول الحصرية.",
      "auc.p1":"نظام المزايدة في الوقت الفعلي","auc.p2":"ملكية الفريق العالمية","auc.p3":"عملية مزاد شفافة","auc.p4":"توفر امتياز محدود",
      "auc.cta":"اذهب إلى منصة المزاد الكاملة","auc.live":"مباشر الآن","auc.lot":"اللوت #042","auc.curbid":"العرض الحالي","auc.bidders":"المزايدون","auc.timeleft":"الوقت المتبقي","auc.inc":"الزيادة","auc.place":"قدم عرضاً",
      "why.eyebrow":"الميزة","why.h1":"لماذا","why.h2":"بيسبول؟",
      "why.t1":"النظام البيئي العالمي","why.p1":"ربط الفرق عبر القارات.",
      "why.t2":"سريع وشفاف","why.p2":"نظام مزاد عادل في الوقت الفعلي.",
      "why.t3":"إدارة ذكية","why.p3":"مجموعة أدوات منظمة لعمليات الفريق.",
      "why.t4":"مدفوع بالاستثمار","why.p4":"نموذج استثمار رياضي حديث.",
      "rd.eyebrow":"المنصة الرئيسية","rd.h1":"استكشف","rd.h2":"التجربة الكاملة",
      "rd.lead":"هذه الصفحة هي نقطة البداية. للوصول إلى المزادات الكاملة، قم بزيارة منصتنا الرئيسية.",
      "rd.cta":"دخول منصة Shipping Baseball",
      "ft.about":"مستقبل مزادات البيسبول العالمية — ربط الفرق الدولية واللاعبين والمستثمرين.",
      "ft.platform":"المنصة","ft.auctions":"المزادات","ft.contact":"اتصل","ft.privacy":"سياسة الخصوصية","ft.terms":"الشروط",
      "ft.rights":"Funrunners Baseball || طوّر بواسطة WebDevTaslima || جميع الحقوق محفوظة.","ft.tag":"صُنع للعبة العالمية."
    },
    ru: {
      "meta.title":"Funrunners Baseball — Будущее глобальных бейсбольных аукционов",
      "meta.description":"Платформа нового поколения, объединяющая международные бейсбольные команды, игроков и аукционы.",
      "nav.about":"О нас","nav.how":"Как это работает","nav.teams":"Команды","nav.auction":"Аукцион","nav.why":"Почему мы","nav.cta":"Войти в платформу",
      "marquee":"Глобальная система бейсбольных аукционов — В прямом эфире",
      "hero.badge":"Скоро · Живые аукционы","hero.title1":"Будущее","hero.title2":"Глобального бейсбола","hero.title3":"Аукционы",
      "hero.sub":"Платформа нового поколения, объединяющая международные бейсбольные команды, игроков и аукционы.",
      "hero.cta1":"Изучить аукционы","hero.cta2":"Перейти в Shipping Baseball",
      "hero.stat1":"Стран","hero.statv2":"Прямой эфир","hero.stat2":"Ставки","hero.stat3":"Глобальная платформа",
      "about.eyebrow":"О нас","about.h1":"О",
      "about.lead":"Funrunners Baseball — глобальная платформа, призванная привнести инновации в аукционы франшиз бейсбола.",
      "about.k1":"Прозрачный","about.v1":"Процесс аукциона","about.k2":"Глобальный","about.v2":"Пулы талантов","about.k3":"В реальном времени","about.v3":"Система ставок","about.k4":"Премиум","about.v4":"Доступ к франшизе",
      "how.eyebrow":"Процесс","how.h1":"Как это","how.h2":"работает",
      "how.t1":"Откройте команды","how.p1":"Просматривайте международные франшизы бейсбола с полной статистикой.",
      "how.t2":"Участвуйте в аукционе","how.p2":"Присоединяйтесь к живым ставкам на прозрачном рынке.",
      "how.t3":"Стройте и соревнуйтесь","how.p3":"Управляйте составом и соревнуйтесь на глобальной арене.",
      "teams.eyebrow":"Состав","teams.h1":"Избранные","teams.h2":"Международные команды","teams.sub":"Познакомьтесь с франшизами, формирующими новую эру глобального бейсбола.","teams.view":"Подробнее",
      "teams.tag1":"Силовые отбивающие","teams.n1":"Никарагуа Сталлионс","teams.d1":"Сила, скорость и восходящий талант из Центральной Америки.",
      "teams.tag2":"Защитная стена","teams.n2":"Богота Буллз","teams.d2":"Агрессивный геймплей с сильной защитной стратегией.",
      "teams.tag3":"Элитный питчинг","teams.n3":"Аргентина Энджелс","teams.d3":"Команда, ориентированная на точность с элитным питчингом.",
      "teams.tag4":"Скоростной отряд","teams.n4":"Карибиан Сайклонс","teams.d4":"Быстрый, энергичный конкурентный отряд.",
      "auc.eyebrow":"Живой аукцион","auc.h1":"Живой аукцион","auc.h2":"Превью",
      "auc.lead":"Подготовьтесь к конкурентным ставкам на эксклюзивные бейсбольные франшизы.",
      "auc.p1":"Система ставок в реальном времени","auc.p2":"Глобальное владение командой","auc.p3":"Прозрачный процесс аукциона","auc.p4":"Ограниченная доступность франшиз",
      "auc.cta":"Перейти на полную платформу","auc.live":"В эфире","auc.lot":"Лот #042","auc.curbid":"Текущая ставка","auc.bidders":"Участники","auc.timeleft":"Осталось времени","auc.inc":"Шаг","auc.place":"Сделать ставку",
      "why.eyebrow":"Преимущество","why.h1":"Почему","why.h2":"Baseball?",
      "why.t1":"Глобальная экосистема","why.p1":"Соединяя команды на разных континентах.",
      "why.t2":"Быстро и прозрачно","why.p2":"Справедливая система аукционов в реальном времени.",
      "why.t3":"Умное управление","why.p3":"Структурированный набор инструментов для операций команды.",
      "why.t4":"Ориентированный на инвестиции","why.p4":"Современная модель спортивных инвестиций.",
      "rd.eyebrow":"Основная платформа","rd.h1":"Исследуйте","rd.h2":"Полный опыт",
      "rd.lead":"Эта целевая страница — ваша отправная точка. Для доступа к полным аукционам посетите нашу основную платформу.",
      "rd.cta":"Войти на платформу Shipping Baseball",
      "ft.about":"Будущее глобальных бейсбольных аукционов — объединяя международные команды, игроков и инвесторов.",
      "ft.platform":"Платформа","ft.auctions":"Аукционы","ft.contact":"Контакт","ft.privacy":"Политика конфиденциальности","ft.terms":"Условия",
      "ft.rights":"Funrunners Baseball || Разработано WebDevTaslima || Все права защищены.","ft.tag":"Создано для глобальной игры."
    },
    tr: {
      "meta.title":"Funrunners Baseball — Küresel Beyzbol Müzayedelerinin Geleceği",
      "meta.description":"Uluslararası beyzbol takımlarını, oyuncularını ve müzayedelerini birleştiren yeni nesil platform.",
      "nav.about":"Hakkında","nav.how":"Nasıl Çalışır","nav.teams":"Takımlar","nav.auction":"Müzayede","nav.why":"Neden Biz","nav.cta":"Platforma Giriş",
      "marquee":"Küresel Beyzbol Müzayede Sistemi — Şimdi Canlı",
      "hero.badge":"Yakında · Canlı Müzayedeler","hero.title1":"Geleceği","hero.title2":"Küresel Beyzbol","hero.title3":"Müzayedeleri",
      "hero.sub":"Uluslararası beyzbol takımlarını, oyuncularını ve müzayedelerini birleştiren yeni nesil platform.",
      "hero.cta1":"Müzayedeleri Keşfet","hero.cta2":"Shipping Baseball'a Git",
      "hero.stat1":"Ülke","hero.statv2":"Canlı","hero.stat2":"Teklif","hero.stat3":"Küresel Platform",
      "about.eyebrow":"Hakkında","about.h1":"Hakkında",
      "about.lead":"Funrunners Baseball, beyzbol franchise müzayedelerine yenilik getirmek için tasarlanmış küresel bir platformdur.",
      "about.k1":"Şeffaf","about.v1":"Müzayede süreci","about.k2":"Küresel","about.v2":"Yetenek havuzları","about.k3":"Gerçek zamanlı","about.v3":"Teklif sistemi","about.k4":"Premium","about.v4":"Franchise erişimi",
      "how.eyebrow":"Süreç","how.h1":"Nasıl","how.h2":"Çalışır",
      "how.t1":"Takımları Keşfet","how.p1":"Uluslararası beyzbol franchise'larına tam istatistiklerle göz atın.",
      "how.t2":"Müzayedeye Katıl","how.p2":"Şeffaf bir pazarda canlı tekliflere katılın.",
      "how.t3":"Kur ve Yarış","how.p3":"Kadronuzu yönetin ve küresel beyzbol sahnesinde yarışın.",
      "teams.eyebrow":"Kadro","teams.h1":"Öne Çıkan","teams.h2":"Uluslararası Takımlar","teams.sub":"Küresel beyzbolun yeni çağını şekillendiren franchise'larla tanışın.","teams.view":"Detayları Gör",
      "teams.tag1":"Güç Vurucuları","teams.n1":"Nicaragua Stallions","teams.d1":"Orta Amerika'dan güç, hız ve yükselen yetenek.",
      "teams.tag2":"Savunma Duvarı","teams.n2":"Bogotá Bulls","teams.d2":"Güçlü savunma stratejisiyle agresif oyun tarzı.",
      "teams.tag3":"Elit Atış","teams.n3":"Argentina Angels","teams.d3":"Elit atış kadrosu olan hassasiyet odaklı takım.",
      "teams.tag4":"Hız Takımı","teams.n4":"Caribbean Cyclones","teams.d4":"Hızlı tempolu, yüksek enerjili rekabetçi takım.",
      "auc.eyebrow":"Canlı Müzayede","auc.h1":"Canlı Müzayede","auc.h2":"Önizleme",
      "auc.lead":"Özel beyzbol franchise'ları için rekabetçi tekliflere hazır olun.",
      "auc.p1":"Gerçek zamanlı teklif sistemi","auc.p2":"Küresel takım sahipliği","auc.p3":"Şeffaf müzayede süreci","auc.p4":"Sınırlı franchise mevcudiyeti",
      "auc.cta":"Tam Müzayede Platformuna Git","auc.live":"Canlı","auc.lot":"Lot #042","auc.curbid":"Mevcut Teklif","auc.bidders":"Teklif Verenler","auc.timeleft":"Kalan Süre","auc.inc":"Artış","auc.place":"Teklif Ver",
      "why.eyebrow":"Avantaj","why.h1":"Neden","why.h2":"Baseball?",
      "why.t1":"Küresel Ekosistem","why.p1":"Kıtalar arasında takımları birleştirme.",
      "why.t2":"Hızlı ve Şeffaf","why.p2":"Gerçek zamanlı, adil müzayede sistemi.",
      "why.t3":"Akıllı Yönetim","why.p3":"Yapılandırılmış takım operasyonları araç seti.",
      "why.t4":"Yatırım Odaklı","why.p4":"Modern bir spor yatırım modeli.",
      "rd.eyebrow":"Ana Platform","rd.h1":"Keşfedin","rd.h2":"Tam Deneyim",
      "rd.lead":"Bu açılış sayfası başlangıç noktanızdır. Tam müzayedelere erişmek için ana platformumuzu ziyaret edin.",
      "rd.cta":"Shipping Baseball Platformuna Giriş",
      "ft.about":"Küresel beyzbol müzayedelerinin geleceği — uluslararası takımları, oyuncuları ve yatırımcıları birleştirme.",
      "ft.platform":"Platform","ft.auctions":"Müzayedeler","ft.contact":"İletişim","ft.privacy":"Gizlilik Politikası","ft.terms":"Şartlar",
      "ft.rights":"Funrunners Baseball || WebDevTaslima Tarafından Geliştirildi || Tüm hakları saklıdır.","ft.tag":"Küresel oyun için yapıldı."
    },
    ur: {
      "meta.title":"Funrunners Baseball — عالمی بیس بال نیلامیوں کا مستقبل",
      "meta.description":"بین الاقوامی بیس بال ٹیموں، کھلاڑیوں اور نیلامیوں کو جوڑنے والا اگلی نسل کا پلیٹ فارم۔",
      "nav.about":"تعارف","nav.how":"یہ کیسے کام کرتا ہے","nav.teams":"ٹیمیں","nav.auction":"نیلامی","nav.why":"ہم کیوں","nav.cta":"پلیٹ فارم میں داخل ہوں",
      "marquee":"عالمی بیس بال نیلامی نظام — ابھی لائیو","hero.badge":"جلد آرہا ہے · لائیو نیلامیاں","hero.title1":"مستقبل","hero.title2":"عالمی بیس بال","hero.title3":"نیلامیاں",
      "hero.sub":"بین الاقوامی بیس بال ٹیموں، کھلاڑیوں اور نیلامیوں کو ایک متحرک ماحولیاتی نظام میں جوڑنے والا اگلی نسل کا پلیٹ فارم۔",
      "hero.cta1":"نیلامیاں دیکھیں","hero.cta2":"Shipping Baseball پر جائیں",
      "hero.stat1":"ممالک","hero.statv2":"لائیو","hero.stat2":"بولی","hero.stat3":"عالمی پلیٹ فارم",
      "about.eyebrow":"تعارف","about.h1":"کے بارے میں",
      "about.lead":"Funrunners Baseball ایک عالمی پلیٹ فارم ہے جو بیس بال فرنچائز نیلامیوں میں جدت لانے کے لیے ڈیزائن کیا گیا ہے۔",
      "about.k1":"شفاف","about.v1":"نیلامی کا عمل","about.k2":"عالمی","about.v2":"ٹیلنٹ پولز","about.k3":"حقیقی وقت","about.v3":"بولی کا نظام","about.k4":"پریمیم","about.v4":"فرنچائز رسائی",
      "how.eyebrow":"عمل","how.h1":"یہ کیسے","how.h2":"کام کرتا ہے",
      "how.t1":"ٹیمیں دریافت کریں","how.p1":"مکمل اعداد و شمار کے ساتھ بین الاقوامی بیس بال فرنچائزز براؤز کریں۔",
      "how.t2":"نیلامی میں شرکت کریں","how.p2":"شفاف مارکیٹ پلیس میں لائیو بولی میں شامل ہوں۔",
      "how.t3":"بنائیں اور مقابلہ کریں","how.p3":"اپنی روسٹر کا انتظام کریں اور عالمی سطح پر مقابلہ کریں۔",
      "teams.eyebrow":"روسٹر","teams.h1":"نمایاں","teams.h2":"بین الاقوامی ٹیمیں","teams.sub":"عالمی بیس بال کے اگلے دور کو تشکیل دینے والی فرنچائزز سے ملیں۔","teams.view":"تفصیلات دیکھیں",
      "teams.tag1":"پاور ہٹرز","teams.n1":"نکاراگوا اسٹالینز","teams.d1":"وسطی امریکہ سے طاقت، رفتار اور ابھرتی ہوئی صلاحیت۔",
      "teams.tag2":"دفاعی دیوار","teams.n2":"بوگوٹا بُلز","teams.d2":"مضبوط دفاعی حکمت عملی کے ساتھ جارحانہ گیم پلے۔",
      "teams.tag3":"اشرافیہ پچنگ","teams.n3":"ارجنٹینا اینجلز","teams.d3":"اشرافیہ پچنگ لائن اپ کے ساتھ درستگی پر مرکوز ٹیم۔",
      "teams.tag4":"اسپیڈ اسکواڈ","teams.n4":"کیریبین سائکلونز","teams.d4":"تیز رفتار، اعلی توانائی والی مسابقتی ٹیم۔",
      "auc.eyebrow":"لائیو نیلامی","auc.h1":"لائیو نیلامی","auc.h2":"پیش نظارہ",
      "auc.lead":"خصوصی بیس بال فرنچائزز پر مسابقتی بولی کے لیے تیار ہو جائیں۔",
      "auc.p1":"حقیقی وقت بولی نظام","auc.p2":"عالمی ٹیم ملکیت","auc.p3":"شفاف نیلامی عمل","auc.p4":"محدود فرنچائز دستیابی",
      "auc.cta":"مکمل نیلامی پلیٹ فارم پر جائیں","auc.live":"ابھی لائیو","auc.lot":"لاٹ #042","auc.curbid":"موجودہ بولی","auc.bidders":"بولی دہندگان","auc.timeleft":"باقی وقت","auc.inc":"اضافہ","auc.place":"بولی لگائیں",
      "why.eyebrow":"فائدہ","why.h1":"کیوں","why.h2":"بیس بال؟",
      "why.t1":"عالمی ماحولیاتی نظام","why.p1":"براعظموں میں ٹیموں کو جوڑنا۔",
      "why.t2":"تیز اور شفاف","why.p2":"حقیقی وقت، منصفانہ نیلامی نظام۔",
      "why.t3":"سمارٹ مینجمنٹ","why.p3":"منظم ٹیم آپریشنز ٹول کٹ۔",
      "why.t4":"سرمایہ کاری پر مبنی","why.p4":"ایک جدید کھیلوں کا سرمایہ کاری ماڈل۔",
      "rd.eyebrow":"مرکزی پلیٹ فارم","rd.h1":"دریافت کریں","rd.h2":"مکمل تجربہ",
      "rd.lead":"یہ لینڈنگ پیج آپ کا نقطہ آغاز ہے۔ مکمل نیلامیوں تک رسائی کے لیے، ہمارے مرکزی پلیٹ فارم پر جائیں۔",
      "rd.cta":"Shipping Baseball پلیٹ فارم میں داخل ہوں",
      "ft.about":"عالمی بیس بال نیلامیوں کا مستقبل — بین الاقوامی ٹیموں، کھلاڑیوں اور سرمایہ کاروں کو جوڑنا۔",
      "ft.platform":"پلیٹ فارم","ft.auctions":"نیلامیاں","ft.contact":"رابطہ","ft.privacy":"پرائیویسی پالیسی","ft.terms":"شرائط",
      "ft.rights":"Funrunners Baseball || WebDevTaslima کی طرف سے تیار کردہ || جملہ حقوق محفوظ ہیں۔","ft.tag":"عالمی کھیل کے لیے بنایا گیا۔"
    },
    id: {
      "meta.title":"Funrunners Baseball — Masa Depan Lelang Bisbol Global",
      "meta.description":"Platform generasi berikutnya yang menghubungkan tim, pemain, dan lelang bisbol internasional.",
      "nav.about":"Tentang","nav.how":"Cara Kerja","nav.teams":"Tim","nav.auction":"Lelang","nav.why":"Mengapa Kami","nav.cta":"Masuk Platform",
      "marquee":"Sistem Lelang Bisbol Global — Langsung Sekarang","hero.badge":"Segera Hadir · Lelang Langsung","hero.title1":"Masa Depan","hero.title2":"Bisbol Global","hero.title3":"Lelang",
      "hero.sub":"Platform generasi berikutnya yang menghubungkan tim, pemain, dan lelang bisbol internasional dalam ekosistem dinamis.",
      "hero.cta1":"Jelajahi Lelang","hero.cta2":"Ke Shipping Baseball",
      "hero.stat1":"Negara","hero.statv2":"Langsung","hero.stat2":"Penawaran","hero.stat3":"Platform Global",
      "about.eyebrow":"Tentang","about.h1":"Tentang",
      "about.lead":"Funrunners Baseball adalah platform global yang dirancang untuk membawa inovasi ke lelang waralaba bisbol.",
      "about.k1":"Transparan","about.v1":"Proses lelang","about.k2":"Global","about.v2":"Kumpulan bakat","about.k3":"Real-time","about.v3":"Sistem penawaran","about.k4":"Premium","about.v4":"Akses waralaba",
      "how.eyebrow":"Proses","how.h1":"Cara","how.h2":"Kerja",
      "how.t1":"Temukan Tim","how.p1":"Telusuri waralaba bisbol internasional dengan statistik lengkap.",
      "how.t2":"Berpartisipasi dalam Lelang","how.p2":"Bergabunglah dengan penawaran langsung di pasar transparan.",
      "how.t3":"Bangun & Bersaing","how.p3":"Kelola roster Anda dan bersaing di panggung global.",
      "teams.eyebrow":"Roster","teams.h1":"Unggulan","teams.h2":"Tim Internasional","teams.sub":"Temui waralaba yang membentuk era berikutnya bisbol global.","teams.view":"Lihat Detail",
      "teams.tag1":"Pemukul Kuat","teams.n1":"Nicaragua Stallions","teams.d1":"Kekuatan, kecepatan, dan bakat yang naik dari Amerika Tengah.",
      "teams.tag2":"Tembok Pertahanan","teams.n2":"Bogotá Bulls","teams.d2":"Gameplay agresif dengan strategi pertahanan yang kuat.",
      "teams.tag3":"Pelempar Elit","teams.n3":"Argentina Angels","teams.d3":"Tim fokus presisi dengan lineup pelempar elit.",
      "teams.tag4":"Skuad Cepat","teams.n4":"Caribbean Cyclones","teams.d4":"Skuad kompetitif berkecepatan tinggi dan berenergi tinggi.",
      "auc.eyebrow":"Lelang Langsung","auc.h1":"Lelang Langsung","auc.h2":"Pratinjau",
      "auc.lead":"Bersiaplah untuk penawaran kompetitif pada waralaba bisbol eksklusif.",
      "auc.p1":"Sistem penawaran real-time","auc.p2":"Kepemilikan tim global","auc.p3":"Proses lelang transparan","auc.p4":"Ketersediaan waralaba terbatas",
      "auc.cta":"Ke Platform Lelang Lengkap","auc.live":"Langsung","auc.lot":"Lot #042","auc.curbid":"Penawaran Saat Ini","auc.bidders":"Penawar","auc.timeleft":"Waktu Tersisa","auc.inc":"Kenaikan","auc.place":"Tawar",
      "why.eyebrow":"Keunggulan","why.h1":"Mengapa","why.h2":"Baseball?",
      "why.t1":"Ekosistem Global","why.p1":"Menghubungkan tim di seluruh benua.",
      "why.t2":"Cepat & Transparan","why.p2":"Sistem lelang yang adil dan real-time.",
      "why.t3":"Manajemen Cerdas","why.p3":"Toolkit operasi tim yang terstruktur.",
      "why.t4":"Berbasis Investasi","why.p4":"Model investasi olahraga modern.",
      "rd.eyebrow":"Platform Utama","rd.h1":"Jelajahi","rd.h2":"Pengalaman Penuh",
      "rd.lead":"Halaman ini adalah titik awal Anda. Untuk mengakses lelang lengkap, kunjungi platform utama kami.",
      "rd.cta":"Masuk Platform Shipping Baseball",
      "ft.about":"Masa depan lelang bisbol global — menghubungkan tim internasional, pemain, dan investor.",
      "ft.platform":"Platform","ft.auctions":"Lelang","ft.contact":"Kontak","ft.privacy":"Kebijakan Privasi","ft.terms":"Syarat",
      "ft.rights":"Funrunners Baseball || Dikembangkan oleh WebDevTaslima || Hak cipta dilindungi.","ft.tag":"Dibuat untuk permainan global."
    },
    vi: {
      "meta.title":"Funrunners Baseball — Tương Lai Của Đấu Giá Bóng Chày Toàn Cầu",
      "meta.description":"Nền tảng thế hệ tiếp theo kết nối các đội, cầu thủ và đấu giá bóng chày quốc tế.",
      "nav.about":"Giới Thiệu","nav.how":"Cách Hoạt Động","nav.teams":"Đội","nav.auction":"Đấu Giá","nav.why":"Tại Sao Chọn","nav.cta":"Vào Nền Tảng",
      "marquee":"Hệ Thống Đấu Giá Bóng Chày Toàn Cầu — Trực Tiếp","hero.badge":"Sắp Ra Mắt · Đấu Giá Trực Tiếp","hero.title1":"Tương Lai Của","hero.title2":"Bóng Chày Toàn Cầu","hero.title3":"Đấu Giá",
      "hero.sub":"Nền tảng thế hệ tiếp theo kết nối các đội, cầu thủ và đấu giá bóng chày quốc tế trong một hệ sinh thái năng động.",
      "hero.cta1":"Khám Phá Đấu Giá","hero.cta2":"Đến Shipping Baseball",
      "hero.stat1":"Quốc Gia","hero.statv2":"Trực Tiếp","hero.stat2":"Đặt Giá","hero.stat3":"Nền Tảng Toàn Cầu",
      "about.eyebrow":"Giới Thiệu","about.h1":"Về",
      "about.lead":"Funrunners Baseball là một nền tảng toàn cầu được thiết kế để mang lại sự đổi mới cho các cuộc đấu giá nhượng quyền bóng chày.",
      "about.k1":"Minh Bạch","about.v1":"Quy trình đấu giá","about.k2":"Toàn Cầu","about.v2":"Bể tài năng","about.k3":"Thời gian thực","about.v3":"Hệ thống đặt giá","about.k4":"Cao Cấp","about.v4":"Truy cập nhượng quyền",
      "how.eyebrow":"Quy Trình","how.h1":"Cách","how.h2":"Hoạt Động",
      "how.t1":"Khám Phá Đội","how.p1":"Duyệt các nhượng quyền bóng chày quốc tế với thống kê đầy đủ.",
      "how.t2":"Tham Gia Đấu Giá","how.p2":"Tham gia đặt giá trực tiếp trong thị trường minh bạch.",
      "how.t3":"Xây Dựng & Cạnh Tranh","how.p3":"Quản lý đội hình của bạn và cạnh tranh trên sân khấu toàn cầu.",
      "teams.eyebrow":"Đội Hình","teams.h1":"Nổi Bật","teams.h2":"Các Đội Quốc Tế","teams.sub":"Gặp gỡ các nhượng quyền định hình kỷ nguyên tiếp theo của bóng chày toàn cầu.","teams.view":"Xem Chi Tiết",
      "teams.tag1":"Người Đánh Mạnh","teams.n1":"Nicaragua Stallions","teams.d1":"Sức mạnh, tốc độ và tài năng đang lên từ Trung Mỹ.",
      "teams.tag2":"Tường Phòng Thủ","teams.n2":"Bogotá Bulls","teams.d2":"Lối chơi mạnh mẽ với chiến lược phòng thủ vững chắc.",
      "teams.tag3":"Ném Bóng Tinh Nhuệ","teams.n3":"Argentina Angels","teams.d3":"Đội tập trung vào độ chính xác với đội hình ném bóng tinh nhuệ.",
      "teams.tag4":"Đội Tốc Độ","teams.n4":"Caribbean Cyclones","teams.d4":"Đội cạnh tranh tốc độ cao, năng lượng cao.",
      "auc.eyebrow":"Đấu Giá Trực Tiếp","auc.h1":"Đấu Giá Trực Tiếp","auc.h2":"Xem Trước",
      "auc.lead":"Hãy sẵn sàng cho việc đặt giá cạnh tranh trên các nhượng quyền bóng chày độc quyền.",
      "auc.p1":"Hệ thống đặt giá thời gian thực","auc.p2":"Sở hữu đội toàn cầu","auc.p3":"Quy trình đấu giá minh bạch","auc.p4":"Khả năng nhượng quyền hạn chế",
      "auc.cta":"Đến Nền Tảng Đấu Giá Đầy Đủ","auc.live":"Trực Tiếp","auc.lot":"Lô #042","auc.curbid":"Giá Hiện Tại","auc.bidders":"Người Đặt Giá","auc.timeleft":"Thời Gian Còn Lại","auc.inc":"Mức Tăng","auc.place":"Đặt Giá",
      "why.eyebrow":"Lợi Thế","why.h1":"Tại Sao","why.h2":"Baseball?",
      "why.t1":"Hệ Sinh Thái Toàn Cầu","why.p1":"Kết nối các đội trên các châu lục.",
      "why.t2":"Nhanh & Minh Bạch","why.p2":"Hệ thống đấu giá công bằng theo thời gian thực.",
      "why.t3":"Quản Lý Thông Minh","why.p3":"Bộ công cụ vận hành đội có cấu trúc.",
      "why.t4":"Hướng Đầu Tư","why.p4":"Một mô hình đầu tư thể thao hiện đại.",
      "rd.eyebrow":"Nền Tảng Chính","rd.h1":"Khám Phá","rd.h2":"Trải Nghiệm Đầy Đủ",
      "rd.lead":"Trang đích này là điểm khởi đầu của bạn. Để truy cập đấu giá đầy đủ, hãy truy cập nền tảng chính của chúng tôi.",
      "rd.cta":"Vào Nền Tảng Shipping Baseball",
      "ft.about":"Tương lai của đấu giá bóng chày toàn cầu — kết nối các đội quốc tế, cầu thủ và nhà đầu tư.",
      "ft.platform":"Nền Tảng","ft.auctions":"Đấu Giá","ft.contact":"Liên Hệ","ft.privacy":"Chính Sách Bảo Mật","ft.terms":"Điều Khoản",
      "ft.rights":"Funrunners Baseball || Phát triển bởi WebDevTaslima || Mọi quyền được bảo lưu.","ft.tag":"Được tạo cho trò chơi toàn cầu."
    },
    th: {
      "meta.title":"Funrunners Baseball — อนาคตของการประมูลเบสบอลทั่วโลก",
      "meta.description":"แพลตฟอร์มยุคใหม่ที่เชื่อมต่อทีม ผู้เล่น และการประมูลเบสบอลระหว่างประเทศ",
      "nav.about":"เกี่ยวกับ","nav.how":"วิธีการทำงาน","nav.teams":"ทีม","nav.auction":"ประมูล","nav.why":"ทำไมต้องเรา","nav.cta":"เข้าสู่แพลตฟอร์ม",
      "marquee":"ระบบการประมูลเบสบอลทั่วโลก — ถ่ายทอดสด",
      "hero.badge":"เร็วๆ นี้ · การประมูลสด","hero.title1":"อนาคตของ","hero.title2":"เบสบอลทั่วโลก","hero.title3":"การประมูล",
      "hero.sub":"แพลตฟอร์มยุคใหม่ที่เชื่อมต่อทีม ผู้เล่น และการประมูลเบสบอลระหว่างประเทศในระบบนิเวศที่ไดนามิก",
      "hero.cta1":"สำรวจการประมูล","hero.cta2":"ไปที่ Shipping Baseball",
      "hero.stat1":"ประเทศ","hero.statv2":"สด","hero.stat2":"การประมูล","hero.stat3":"แพลตฟอร์มทั่วโลก",
      "about.eyebrow":"เกี่ยวกับ","about.h1":"เกี่ยวกับ",
      "about.lead":"Funrunners Baseball เป็นแพลตฟอร์มระดับโลกที่ออกแบบมาเพื่อนำนวัตกรรมมาสู่การประมูลแฟรนไชส์เบสบอล",
      "about.k1":"โปร่งใส","about.v1":"กระบวนการประมูล","about.k2":"ระดับโลก","about.v2":"แหล่งบุคลากร","about.k3":"เรียลไทม์","about.v3":"ระบบประมูล","about.k4":"พรีเมียม","about.v4":"การเข้าถึงแฟรนไชส์",
      "how.eyebrow":"กระบวนการ","how.h1":"วิธีการ","how.h2":"ทำงาน",
      "how.t1":"ค้นพบทีม","how.p1":"เรียกดูแฟรนไชส์เบสบอลระหว่างประเทศพร้อมสถิติทั้งหมด",
      "how.t2":"เข้าร่วมการประมูล","how.p2":"เข้าร่วมการประมูลสดในตลาดที่โปร่งใส",
      "how.t3":"สร้างและแข่งขัน","how.p3":"จัดการรายชื่อทีมของคุณและแข่งขันบนเวทีระดับโลก",
      "teams.eyebrow":"รายชื่อ","teams.h1":"แนะนำ","teams.h2":"ทีมระหว่างประเทศ","teams.sub":"พบกับแฟรนไชส์ที่กำหนดยุคต่อไปของเบสบอลระดับโลก","teams.view":"ดูรายละเอียด",
      "teams.tag1":"ผู้ตีพลัง","teams.n1":"นิการากัว สแตลเลียนส์","teams.d1":"พลัง ความเร็ว และความสามารถที่กำลังเติบโตจากอเมริกากลาง",
      "teams.tag2":"กำแพงป้องกัน","teams.n2":"โบโกตา บูลส์","teams.d2":"การเล่นเชิงรุกพร้อมกลยุทธ์การป้องกันที่แข็งแกร่ง",
      "teams.tag3":"การพิตช์ระดับเอลีท","teams.n3":"อาร์เจนตินา แอนเจลส์","teams.d3":"ทีมที่เน้นความแม่นยำพร้อมรายชื่อพิตเชอร์ระดับเอลีท",
      "teams.tag4":"ทีมความเร็ว","teams.n4":"แคริบเบียน ไซโคลนส์","teams.d4":"ทีมที่มีการแข่งขันที่รวดเร็วและพลังงานสูง",
      "auc.eyebrow":"การประมูลสด","auc.h1":"การประมูลสด","auc.h2":"พรีวิว",
      "auc.lead":"เตรียมพร้อมสำหรับการประมูลที่แข่งขันสำหรับแฟรนไชส์เบสบอลพิเศษ",
      "auc.p1":"ระบบประมูลเรียลไทม์","auc.p2":"การเป็นเจ้าของทีมทั่วโลก","auc.p3":"กระบวนการประมูลโปร่งใส","auc.p4":"จำนวนแฟรนไชส์จำกัด",
      "auc.cta":"ไปที่แพลตฟอร์มประมูลเต็มรูปแบบ","auc.live":"ถ่ายทอดสด","auc.lot":"ลอต #042","auc.curbid":"การประมูลปัจจุบัน","auc.bidders":"ผู้ประมูล","auc.timeleft":"เวลาที่เหลือ","auc.inc":"การเพิ่ม","auc.place":"ประมูล",
      "why.eyebrow":"ข้อได้เปรียบ","why.h1":"ทำไมต้อง","why.h2":"Baseball?",
      "why.t1":"ระบบนิเวศระดับโลก","why.p1":"เชื่อมต่อทีมทั่วทุกทวีป",
      "why.t2":"รวดเร็วและโปร่งใส","why.p2":"ระบบการประมูลที่ยุติธรรมแบบเรียลไทม์",
      "why.t3":"การจัดการอัจฉริยะ","why.p3":"ชุดเครื่องมือดำเนินการทีมที่มีโครงสร้าง",
      "why.t4":"ขับเคลื่อนการลงทุน","why.p4":"รูปแบบการลงทุนกีฬาที่ทันสมัย",
      "rd.eyebrow":"แพลตฟอร์มหลัก","rd.h1":"สำรวจ","rd.h2":"ประสบการณ์เต็มรูปแบบ",
      "rd.lead":"หน้านี้คือจุดเริ่มต้นของคุณ หากต้องการเข้าถึงการประมูลเต็มรูปแบบ โปรดเยี่ยมชมแพลตฟอร์มหลักของเรา",
      "rd.cta":"เข้าสู่แพลตฟอร์ม Shipping Baseball",
      "ft.about":"อนาคตของการประมูลเบสบอลระดับโลก — เชื่อมต่อทีมระหว่างประเทศ ผู้เล่น และนักลงทุน",
      "ft.platform":"แพลตฟอร์ม","ft.auctions":"การประมูล","ft.contact":"ติดต่อ","ft.privacy":"นโยบายความเป็นส่วนตัว","ft.terms":"เงื่อนไข",
      "ft.rights":"Funrunners Baseball || พัฒนาโดย WebDevTaslima || สงวนลิขสิทธิ์","ft.tag":"สร้างขึ้นสำหรับเกมระดับโลก"
    },
    nl: {
      "meta.title":"Funrunners Baseball — De Toekomst van Wereldwijde Honkbalveilingen",
      "meta.description":"Een platform van de volgende generatie dat internationale honkbalteams, spelers en veilingen verbindt.",
      "nav.about":"Over Ons","nav.how":"Hoe Het Werkt","nav.teams":"Teams","nav.auction":"Veiling","nav.why":"Waarom Wij","nav.cta":"Platform Betreden",
      "marquee":"Wereldwijd Honkbalveilingsysteem — Nu Live","hero.badge":"Binnenkort · Live Veilingen","hero.title1":"De Toekomst van","hero.title2":"Wereldwijd Honkbal","hero.title3":"Veilingen",
      "hero.sub":"Een platform van de volgende generatie dat internationale honkbalteams, spelers en veilingen verbindt in een dynamisch ecosysteem.",
      "hero.cta1":"Veilingen Verkennen","hero.cta2":"Naar Shipping Baseball",
      "hero.stat1":"Landen","hero.statv2":"Live","hero.stat2":"Bieden","hero.stat3":"Wereldwijd Platform",
      "about.eyebrow":"Over Ons","about.h1":"Over",
      "about.lead":"Funrunners Baseball is een wereldwijd platform dat is ontworpen om innovatie te brengen in honkbalfranchiseveilingen.",
      "about.k1":"Transparant","about.v1":"Veilingproces","about.k2":"Wereldwijd","about.v2":"Talentpools","about.k3":"Real-time","about.v3":"Biedsysteem","about.k4":"Premium","about.v4":"Franchise toegang",
      "how.eyebrow":"Proces","how.h1":"Hoe","how.h2":"Het Werkt",
      "how.t1":"Ontdek Teams","how.p1":"Blader door internationale honkbalfranchises met volledige statistieken.",
      "how.t2":"Doe Mee aan de Veiling","how.p2":"Doe mee aan live bieden in een transparante marktplaats.",
      "how.t3":"Bouw & Strijd","how.p3":"Beheer je roster en strijd op het wereldwijde podium.",
      "teams.eyebrow":"Roster","teams.h1":"Uitgelichte","teams.h2":"Internationale Teams","teams.sub":"Maak kennis met de franchises die het volgende tijdperk van wereldwijd honkbal vormgeven.","teams.view":"Bekijk Details",
      "teams.tag1":"Krachthitters","teams.n1":"Nicaragua Stallions","teams.d1":"Kracht, snelheid en opkomend talent uit Midden-Amerika.",
      "teams.tag2":"Verdedigingsmuur","teams.n2":"Bogotá Bulls","teams.d2":"Agressief spel met sterke verdedigingsstrategie.",
      "teams.tag3":"Elite Pitching","teams.n3":"Argentina Angels","teams.d3":"Op precisie gericht team met elite pitching lineup.",
      "teams.tag4":"Snelheid Squad","teams.n4":"Caribbean Cyclones","teams.d4":"Snel, energiek competitief team.",
      "auc.eyebrow":"Live Veiling","auc.h1":"Live Veiling","auc.h2":"Voorbeeld",
      "auc.lead":"Bereid je voor op competitief bieden op exclusieve honkbalfranchises.",
      "auc.p1":"Real-time biedsysteem","auc.p2":"Wereldwijd team eigenaarschap","auc.p3":"Transparant veilingproces","auc.p4":"Beperkte franchise beschikbaarheid",
      "auc.cta":"Naar Volledig Veilingplatform","auc.live":"Live","auc.lot":"Lot #042","auc.curbid":"Huidig Bod","auc.bidders":"Bieders","auc.timeleft":"Resterende Tijd","auc.inc":"Verhoging","auc.place":"Plaats Bod",
      "why.eyebrow":"Voordeel","why.h1":"Waarom","why.h2":"Baseball?",
      "why.t1":"Wereldwijd Ecosysteem","why.p1":"Teams over continenten verbinden.",
      "why.t2":"Snel & Transparant","why.p2":"Real-time, eerlijk veilingsysteem.",
      "why.t3":"Slim Beheer","why.p3":"Gestructureerde teamoperaties toolkit.",
      "why.t4":"Investeringsgedreven","why.p4":"Een modern sportinvesteringsmodel.",
      "rd.eyebrow":"Hoofdplatform","rd.h1":"Verken","rd.h2":"de Volledige Ervaring",
      "rd.lead":"Deze landingspagina is je startpunt. Voor toegang tot volledige veilingen, bezoek ons hoofdplatform.",
      "rd.cta":"Shipping Baseball Platform Betreden",
      "ft.about":"De toekomst van wereldwijde honkbalveilingen — internationale teams, spelers en investeerders verbinden.",
      "ft.platform":"Platform","ft.auctions":"Veilingen","ft.contact":"Contact","ft.privacy":"Privacybeleid","ft.terms":"Voorwaarden",
      "ft.rights":"Funrunners Baseball || Ontwikkeld door WebDevTaslima || Alle rechten voorbehouden.","ft.tag":"Gemaakt voor het wereldwijde spel."
    },
    pl: {
      "meta.title":"Funrunners Baseball — Przyszłość Globalnych Aukcji Baseballa",
      "meta.description":"Platforma nowej generacji łącząca międzynarodowe drużyny baseballowe, zawodników i aukcje.",
      "nav.about":"O Nas","nav.how":"Jak To Działa","nav.teams":"Drużyny","nav.auction":"Aukcja","nav.why":"Dlaczego My","nav.cta":"Wejdź na Platformę",
      "marquee":"Globalny System Aukcji Baseballa — Na Żywo","hero.badge":"Wkrótce · Aukcje na Żywo","hero.title1":"Przyszłość","hero.title2":"Globalnego Baseballa","hero.title3":"Aukcji",
      "hero.sub":"Platforma nowej generacji łącząca międzynarodowe drużyny baseballowe, zawodników i aukcje w dynamicznym ekosystemie.",
      "hero.cta1":"Eksploruj Aukcje","hero.cta2":"Przejdź do Shipping Baseball",
      "hero.stat1":"Krajów","hero.statv2":"Na Żywo","hero.stat2":"Licytacja","hero.stat3":"Globalna Platforma",
      "about.eyebrow":"O Nas","about.h1":"O",
      "about.lead":"Funrunners Baseball to globalna platforma zaprojektowana, aby wprowadzić innowacje w aukcjach franczyz baseballowych.",
      "about.k1":"Przejrzysty","about.v1":"Proces aukcji","about.k2":"Globalny","about.v2":"Pule talentów","about.k3":"Czas rzeczywisty","about.v3":"System licytacji","about.k4":"Premium","about.v4":"Dostęp do franczyzy",
      "how.eyebrow":"Proces","how.h1":"Jak","how.h2":"To Działa",
      "how.t1":"Odkryj Drużyny","how.p1":"Przeglądaj międzynarodowe franczyzy baseballowe z pełnymi statystykami.",
      "how.t2":"Weź Udział w Aukcji","how.p2":"Dołącz do licytacji na żywo na przejrzystym rynku.",
      "how.t3":"Buduj i Konkuruj","how.p3":"Zarządzaj swoim składem i konkuruj na globalnej scenie.",
      "teams.eyebrow":"Skład","teams.h1":"Wyróżnione","teams.h2":"Drużyny Międzynarodowe","teams.sub":"Poznaj franczyzy kształtujące następną erę globalnego baseballa.","teams.view":"Zobacz Szczegóły",
      "teams.tag1":"Pałkarze Mocy","teams.n1":"Nicaragua Stallions","teams.d1":"Siła, prędkość i wschodzący talent z Ameryki Środkowej.",
      "teams.tag2":"Mur Obronny","teams.n2":"Bogotá Bulls","teams.d2":"Agresywna gra z silną strategią obronną.",
      "teams.tag3":"Elitarny Pitching","teams.n3":"Argentina Angels","teams.d3":"Drużyna skupiona na precyzji z elitarnym składem pitcherów.",
      "teams.tag4":"Szybka Drużyna","teams.n4":"Caribbean Cyclones","teams.d4":"Szybka, energiczna konkurencyjna drużyna.",
      "auc.eyebrow":"Aukcja na Żywo","auc.h1":"Aukcja na Żywo","auc.h2":"Podgląd",
      "auc.lead":"Przygotuj się na konkurencyjne licytacje ekskluzywnych franczyz baseballowych.",
      "auc.p1":"System licytacji w czasie rzeczywistym","auc.p2":"Globalna własność drużyny","auc.p3":"Przejrzysty proces aukcji","auc.p4":"Ograniczona dostępność franczyz",
      "auc.cta":"Przejdź do Pełnej Platformy Aukcyjnej","auc.live":"Na Żywo","auc.lot":"Lot #042","auc.curbid":"Aktualna Oferta","auc.bidders":"Licytujący","auc.timeleft":"Pozostały Czas","auc.inc":"Zwiększenie","auc.place":"Złóż Ofertę",
      "why.eyebrow":"Zaleta","why.h1":"Dlaczego","why.h2":"Baseball?",
      "why.t1":"Globalny Ekosystem","why.p1":"Łączenie drużyn na różnych kontynentach.",
      "why.t2":"Szybko i Przejrzysto","why.p2":"Sprawiedliwy system aukcyjny w czasie rzeczywistym.",
      "why.t3":"Inteligentne Zarządzanie","why.p3":"Strukturalny zestaw narzędzi do operacji drużyny.",
      "why.t4":"Napędzane Inwestycjami","why.p4":"Nowoczesny model inwestycji sportowych.",
      "rd.eyebrow":"Główna Platforma","rd.h1":"Odkryj","rd.h2":"Pełne Doświadczenie",
      "rd.lead":"Ta strona docelowa jest twoim punktem startowym. Aby uzyskać dostęp do pełnych aukcji, odwiedź naszą główną platformę.",
      "rd.cta":"Wejdź na Platformę Shipping Baseball",
      "ft.about":"Przyszłość globalnych aukcji baseballa — łączenie międzynarodowych drużyn, zawodników i inwestorów.",
      "ft.platform":"Platforma","ft.auctions":"Aukcje","ft.contact":"Kontakt","ft.privacy":"Polityka Prywatności","ft.terms":"Warunki",
      "ft.rights":"Funrunners Baseball || Opracowane przez WebDevTaslima || Wszelkie prawa zastrzeżone.","ft.tag":"Stworzone dla globalnej gry."
    }
  };

  const RTL = ['ar','ur'];

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.includes(lang) ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      const txt = dict[key] || I18N.en[key];
      if (txt == null) return;
      if (attr) el.setAttribute(attr, txt);
      else el.textContent = txt;
    });
    try { localStorage.setItem('frb_lang', lang); } catch (e) {}
  }

  // ---------- Language switcher ----------
  const langSwitcher = document.getElementById('langSwitcher');
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  const langCurrent = langBtn ? langBtn.querySelector('.lang-current') : null;
  const chev = langBtn ? langBtn.querySelector('.icon-chevron-down') : null;

  function closeLang() {
    langMenu.hidden = true;
    langBtn.setAttribute('aria-expanded', 'false');
    if (chev) chev.style.transform = '';
  }
  function openLang() {
    langMenu.hidden = false;
    langBtn.setAttribute('aria-expanded', 'true');
    if (chev) chev.style.transform = 'rotate(180deg)';
  }
  function selectLang(code) {
    const btn = langMenu.querySelector('button[data-code="' + code + '"]');
    if (!btn) return;
    langMenu.querySelectorAll('button').forEach((x) => x.classList.remove('active'));
    btn.classList.add('active');
    if (langCurrent) langCurrent.innerHTML = '<span class="flag">' + btn.dataset.flag + '</span> ' + btn.dataset.label;
    applyTranslations(code);
  }

  if (langBtn && langMenu) {
    let saved = 'en';
    try { saved = localStorage.getItem('frb_lang') || 'en'; } catch (e) {}
    selectLang(saved);

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (langMenu.hidden) openLang(); else closeLang();
    });

    langMenu.querySelectorAll('button').forEach((b) => {
      b.addEventListener('click', () => {
        selectLang(b.dataset.code);
        closeLang();
      });
    });

    document.addEventListener('click', (e) => {
      if (!langSwitcher.contains(e.target)) closeLang();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLang(); });
  }

  // ---------- Live Auction: Countdown timer ----------
  const timeLeftEl = document.getElementById('timeLeft');
  let totalSec = 4 * 60 + 12;
  function fmt(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const r = (s % 60).toString().padStart(2, '0');
    return m + ':' + r;
  }
  if (timeLeftEl) {
    setInterval(() => {
      totalSec -= 1;
      if (totalSec < 0) totalSec = 9 * 60 + 59;
      timeLeftEl.textContent = fmt(totalSec);
    }, 1000);
  }

  // ---------- Live Auction: Place bid ----------
  const placeBidBtn = document.getElementById('placeBid');
  const bidAmountEl = document.getElementById('bidAmount');
  const biddersEl = document.getElementById('bidders');
  let currentBid = 2.45;
  let bidders = 27;
  if (placeBidBtn && bidAmountEl) {
    placeBidBtn.addEventListener('click', () => {
      currentBid = +(currentBid + 0.05).toFixed(2);
      bidders += 1;
      bidAmountEl.textContent = '$' + currentBid.toFixed(2) + 'M';
      if (biddersEl) biddersEl.textContent = bidders.toString();
      bidAmountEl.style.transition = 'transform .3s';
      bidAmountEl.style.transform = 'scale(1.12)';
      setTimeout(() => { bidAmountEl.style.transform = ''; }, 300);
    });
  }
})();
