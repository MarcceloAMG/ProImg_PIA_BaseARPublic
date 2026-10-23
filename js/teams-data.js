// js/teams-data.js

const TEAMS_DATA = {
    yankees: {
        id: "yankees",
        name: "New York Yankees",
        city: "El Bronx, New York",
        logo: "⚾",
        history: {
            bannerTitle: "New York Yankees",
            bannerSub: "Fundado en 1903 • 27 Series Mundiales",
            sections: [
                { title: "🏛️ Los inicios", text: "El equipo fue fundado en 1903 como los New York Highlanders, y no fue hasta 1913 que adoptaron el nombre de Yankees. Son una de las franquicias más exitosas y valiosas del deporte profesional." },
                { title: "🏆 Época dorada", text: "Con 41 banderines de la Liga Americana y 27 campeonatos de la Serie Mundial, los Yankees tienen más títulos que cualquier otra franquicia en las Grandes Ligas. Leyendas como Babe Ruth, Lou Gehrig, Joe DiMaggio y Mickey Mantle vistieron esta camiseta." },
                { title: "🌟 Era moderna", text: "La franquicia continúa siendo un contendiente constante. En la temporada 2024, registraron un récord de 94-68 y llegaron a la Serie Mundial, consolidando su tradición ganadora." }
            ],
            achievements: [
                { number: "27", label: "Series Mundiales" },
                { number: "41", label: "Títulos de Liga" },
                { number: "52", label: "Salón de la Fama" }
            ]
        },
        stats: {
            summary: { wins: 94, losses: 68, pct: ".580" },
            players: [
                { name: "Aaron Judge", pos: "OF", stat1: ".322", stat1_lbl: "AVG", stat2: "58", stat2_lbl: "HR", stat3: "144", stat3_lbl: "RBI" },
                { name: "Gerrit Cole", pos: "P", stat1: "3.41", stat1_lbl: "ERA", stat2: "8", stat2_lbl: "W", stat3: "99", stat3_lbl: "K" },
                { name: "Juan Soto", pos: "OF", stat1: ".288", stat1_lbl: "AVG", stat2: "41", stat2_lbl: "HR", stat3: "109", stat3_lbl: "RBI" }
            ],
            chart: [45, 55, 60, 65, 75, 85]
        },
        trivia: [
            { question: "¿Cuántos campeonatos de la Serie Mundial han ganado los Yankees?", options: ["20", "25", "27", "30"], correct: 2, feedback: "✅ ¡Correcto! 27 es el récord de las Grandes Ligas." },
            { question: "¿En qué año se fundó la franquicia?", options: ["1901", "1903", "1913", "1920"], correct: 1, feedback: "✅ ¡Correcto! Se fundaron en 1903 como los Highlanders." },
            { question: "¿Qué jugador rompió el récord de jonrones en una temporada con 62?", options: ["Babe Ruth", "Mickey Mantle", "Aaron Judge", "Alex Rodriguez"], correct: 2, feedback: "✅ ¡Correcto! Aaron Judge lo logró en 2022." },
            { question: "¿Quién es conocido como 'The Captain' y jugó toda su carrera con los Yankees?", options: ["Derek Jeter", "Mariano Rivera", "Jorge Posada", "Andy Pettitte"], correct: 0, feedback: "✅ ¡Correcto! Derek Jeter fue el capitán del equipo." },
            { question: "¿Cómo se llamaba el equipo antes de ser los Yankees?", options: ["Americans", "Highlanders", "Gothams", "Robins"], correct: 1, feedback: "✅ ¡Correcto! Eran los New York Highlanders." }
        ]
    },
    guardians: {
        id: "guardians",
        name: "Cleveland Guardians",
        city: "Cleveland, Ohio",
        logo: "⚾",
        history: {
            bannerTitle: "Cleveland Guardians",
            bannerSub: "Fundado en 1901 • 2 Series Mundiales",
            sections: [
                { title: "🏛️ Los inicios", text: "Los Guardians son una de las franquicias originales de la Liga Americana, fundada en 1901 como los Cleveland Blues. A lo largo de su historia, han tenido varios nombres, incluyendo los Cleveland Naps y los Cleveland Indians." },
                { title: "🏆 Época dorada", text: "El equipo ha ganado dos Series Mundiales en su historia, en 1920 y 1948. También ha conquistado seis banderines de la Liga Americana." },
                { title: "🌟 Era moderna", text: "En la temporada 2024, los Guardians ganaron la División Central de la Liga Americana con un récord de 92-69, pero cayeron ante los Yankees en la Serie de Campeonato." }
            ],
            achievements: [
                { number: "2", label: "Series Mundiales" },
                { number: "6", label: "Títulos de Liga" },
                { number: "13", label: "Títulos de División" }
            ]
        },
        stats: {
            summary: { wins: 92, losses: 69, pct: ".571" },
            players: [
                { name: "José Ramírez", pos: "3B", stat1: ".279", stat1_lbl: "AVG", stat2: "39", stat2_lbl: "HR", stat3: "118", stat3_lbl: "RBI" },
                { name: "Steven Kwan", pos: "OF", stat1: ".292", stat1_lbl: "AVG", stat2: "14", stat2_lbl: "HR", stat3: "44", stat3_lbl: "RBI" },
                { name: "Emmanuel Clase", pos: "P", stat1: "0.61", stat1_lbl: "ERA", stat2: "47", stat2_lbl: "SV", stat3: "66", stat3_lbl: "K" }
            ],
            chart: [50, 55, 60, 65, 70, 75]
        },
        trivia: [
            { question: "¿En qué años ganaron los Guardians sus Series Mundiales?", options: ["1920 y 1948", "1948 y 1954", "1995 y 1997", "2016 y 2024"], correct: 0, feedback: "✅ ¡Correcto! Sus títulos fueron en 1920 y 1948." },
            { question: "¿Cómo se llamaban antes de cambiar a Guardians?", options: ["Indians", "Browns", "Blues", "Naps"], correct: 0, feedback: "✅ ¡Correcto! Fueron los Cleveland Indians hasta 2021." },
            { question: "¿Quién es el tercera base estrella actual del equipo?", options: ["Francisco Lindor", "José Ramírez", "Carlos Santana", "Shane Bieber"], correct: 1, feedback: "✅ ¡Correcto! José Ramírez es el líder ofensivo." },
            { question: "¿En qué año se fundó la franquicia?", options: ["1899", "1901", "1910", "1920"], correct: 1, feedback: "✅ ¡Correcto! En 1901 como los Cleveland Blues." },
            { question: "¿Qué pitcher ganó el Cy Young en 2020?", options: ["Corey Kluber", "Shane Bieber", "Emmanuel Clase", "Triston McKenzie"], correct: 1, feedback: "✅ ¡Correcto! Shane Bieber dominó la liga ese año." }
        ]
    },
    royals: {
        id: "royals",
        name: "Kansas City Royals",
        city: "Kansas City, Missouri",
        logo: "👑",
        history: {
            bannerTitle: "Kansas City Royals",
            bannerSub: "Fundado en 1969 • 2 Series Mundiales",
            sections: [
                { title: "🏛️ Los inicios", text: "Los Royals se unieron a la MLB como una franquicia de expansión en 1969. El nombre 'Royals' rinde homenaje a la American Royal, una famosa feria de ganado de la ciudad." },
                { title: "🏆 Época dorada", text: "El equipo vivió su primera época dorada en los años 80, ganando su primera Serie Mundial en 1985. Volvieron a la cima en 2015, ganando su segundo campeonato." },
                { title: "🌟 Era moderna", text: "Tras varios años de reconstrucción, los Royals sorprendieron en 2024 al mejorar en 30 juegos respecto al año anterior, terminando con un récord de 86-76 y llegando a la postemporada." }
            ],
            achievements: [
                { number: "2", label: "Series Mundiales" },
                { number: "4", label: "Títulos de Liga" },
                { number: "1", label: "Comodín (2024)" }
            ]
        },
        stats: {
            summary: { wins: 86, losses: 76, pct: ".531" },
            players: [
                { name: "Bobby Witt Jr.", pos: "SS", stat1: ".332", stat1_lbl: "AVG", stat2: "32", stat2_lbl: "HR", stat3: "109", stat3_lbl: "RBI" },
                { name: "Salvador Pérez", pos: "C", stat1: ".271", stat1_lbl: "AVG", stat2: "27", stat2_lbl: "HR", stat3: "104", stat3_lbl: "RBI" },
                { name: "Cole Ragans", pos: "P", stat1: "3.14", stat1_lbl: "ERA", stat2: "11", stat2_lbl: "W", stat3: "223", stat3_lbl: "K" }
            ],
            chart: [40, 50, 55, 60, 70, 80]
        },
        trivia: [
            { question: "¿En qué año ganaron los Royals su primera Serie Mundial?", options: ["1969", "1980", "1985", "2015"], correct: 2, feedback: "✅ ¡Correcto! Ganaron su primer título en 1985." },
            { question: "¿Cuántos títulos de Serie Mundial tienen los Royals?", options: ["1", "2", "3", "4"], correct: 1, feedback: "✅ ¡Correcto! Ganaron en 1985 y 2015." },
            { question: "¿Qué receptor fue el MVP de la Serie Mundial 2015?", options: ["Salvador Pérez", "Bobby Witt Jr.", "Eric Hosmer", "Mike Moustakas"], correct: 0, feedback: "✅ ¡Correcto! Salvador Pérez es el líder del equipo." },
            { question: "¿Contra qué equipo ganaron la Serie Mundial de 2015?", options: ["San Francisco Giants", "New York Mets", "St. Louis Cardinals", "Chicago Cubs"], correct: 1, feedback: "✅ ¡Correcto! Vencieron a los Mets en 5 juegos." },
            { question: "¿En qué año se fundó la franquicia?", options: ["1955", "1961", "1969", "1977"], correct: 2, feedback: "✅ ¡Correcto! Son una expansión de 1969." }
        ]
    },
    orioles: { 
        id: "orioles", name: "Baltimore Orioles", city: "Baltimore, Maryland", logo: "⚾", 
        history: { sections: [{title: "🏛️ Fundación", text: "Fundado en 1901 como los Milwaukee Brewers, el equipo se mudó a San Luis en 1902 y finalmente a Baltimore en 1954."}, {title: "🏆 Títulos", text: "Los Orioles han ganado 3 Series Mundiales (1966, 1970, 1983)."}] }, 
        stats: { summary: {wins:91,losses:71,pct:".562"}, players: [], chart: [50,60,55,70,75,65] }, 
        trivia: [
            { question: "¿En qué año se mudaron a Baltimore?", options: ["1901", "1954", "1966", "1970"], correct: 1, feedback: "✅ ¡Correcto! Llegaron a Baltimore en 1954." },
            { question: "¿Cuántas Series Mundiales han ganado?", options: ["1", "2", "3", "4"], correct: 2, feedback: "✅ ¡Correcto! Tienen 3 títulos." },
            { question: "¿Quién es el legendario shortstop conocido como 'The Iron Man'?", options: ["Brooks Robinson", "Cal Ripken Jr.", "Eddie Murray", "Frank Robinson"], correct: 1, feedback: "✅ ¡Correcto! Cal Ripken Jr. jugó 2,632 partidos consecutivos." },
            { question: "¿En qué año ganaron su última Serie Mundial?", options: ["1966", "1970", "1983", "1997"], correct: 2, feedback: "✅ ¡Correcto! Ganaron en 1983." },
            { question: "¿Cómo se llama su estadio?", options: ["Fenway Park", "Yankee Stadium", "Camden Yards", "Tropicana Field"], correct: 2, feedback: "✅ ¡Correcto! Juegan en Oriole Park at Camden Yards." }
        ]
    },
    redsox: { 
        id: "redsox", name: "Boston Red Sox", city: "Boston, Massachusetts", logo: "⚾", 
        history: { sections: [{title: "🏛️ Fundación", text: "Fundado en 1901 como los Boston Americans, son uno de los equipos originales de la Liga Americana."}, {title: "🏆 Títulos", text: "Han ganado 9 Series Mundiales, la más reciente en 2018."}] }, 
        stats: { summary: {wins:81,losses:81,pct:".500"}, players: [], chart: [45,55,50,60,65,70] }, 
        trivia: [
            { question: "¿Cómo se llamaban en 1901?", options: ["Pilgrims", "Americans", "Braves", "Highlanders"], correct: 1, feedback: "✅ ¡Correcto! Eran los Boston Americans." },
            { question: "¿Cuántas Series Mundiales han ganado en el siglo XXI?", options: ["1", "2", "3", "4"], correct: 3, feedback: "✅ ¡Correcto! Ganaron en 2004, 2007, 2013 y 2018." },
            { question: "¿En qué año rompieron la 'Maldición del Bambino'?", options: ["1918", "1986", "2004", "2013"], correct: 2, feedback: "✅ ¡Correcto! Ganaron la Serie Mundial en 2004." },
            { question: "¿Qué legendario bateador fue vendido a los Yankees en 1920?", options: ["Ted Williams", "Babe Ruth", "Carl Yastrzemski", "David Ortiz"], correct: 1, feedback: "✅ ¡Correcto! Babe Ruth fue vendido a los Yankees." },
            { question: "¿Cómo se llama su famoso estadio?", options: ["Fenway Park", "Wrigley Field", "Fenway Stadium", "Boston Park"], correct: 0, feedback: "✅ ¡Correcto! Es el estadio más antiguo de la MLB." }
        ]
    },
    rays: { 
        id: "rays", name: "Tampa Bay Rays", city: "St. Petersburg, Florida", logo: "⚾", 
        history: { sections: [{title: "🏛️ Fundación", text: "Se unieron a la MLB en 1998 como los Tampa Bay Devil Rays."}, {title: "🏆 Títulos", text: "Aún no han ganado una Serie Mundial, pero han sido campeones de la Liga Americana en 2 ocasiones (2008, 2020)."}] }, 
        stats: { summary: {wins:80,losses:82,pct:".494"}, players: [], chart: [50,55,60,55,65,60] }, 
        trivia: [
            { question: "¿En qué año se unieron a la MLB?", options: ["1993", "1998", "2001", "2005"], correct: 1, feedback: "✅ ¡Correcto! Se unieron en 1998." },
            { question: "¿Cuál era su nombre original?", options: ["Rays", "Devil Rays", "Stingrays", "Marlins"], correct: 1, feedback: "✅ ¡Correcto! Eran los Tampa Bay Devil Rays." },
            { question: "¿Cuántas veces han ganado el banderín de la Liga Americana?", options: ["0", "1", "2", "3"], correct: 2, feedback: "✅ ¡Correcto! En 2008 y 2020." },
            { question: "¿Dónde juegan sus partidos como local?", options: ["Tropicana Field", "Sun Life Stadium", "Amalie Arena", "Raymond James Stadium"], correct: 0, feedback: "✅ ¡Correcto! En el Tropicana Field." },
            { question: "¿Qué manager los llevó a la Serie Mundial en 2008?", options: ["Kevin Cash", "Joe Maddon", "Terry Francona", "Dave Roberts"], correct: 1, feedback: "✅ ¡Correcto! Joe Maddon era el manager." }
        ]
    },
    bluejays: { 
        id: "bluejays", name: "Toronto Blue Jays", city: "Toronto, Canadá", logo: "🐦", 
        history: { sections: [{title: "🏛️ Fundación", text: "Se unieron a la MLB en 1977 como equipo de expansión."}, {title: "🏆 Títulos", text: "Han ganado 2 Series Mundiales consecutivas (1992, 1993)."}] }, 
        stats: { summary: {wins:74,losses:88,pct:".457"}, players: [], chart: [40,45,55,50,60,55] }, 
        trivia: [
            { question: "¿En qué año se fundó la franquicia?", options: ["1969", "1977", "1982", "1993"], correct: 1, feedback: "✅ ¡Correcto! Se fundaron en 1977." },
            { question: "¿Cuántas Series Mundiales consecutivas ganaron?", options: ["1", "2", "3", "0"], correct: 1, feedback: "✅ ¡Correcto! Ganaron 2 seguidas." },
            { question: "¿En qué años fueron esos títulos?", options: ["1989 y 1990", "1992 y 1993", "1996 y 1997", "2000 y 2001"], correct: 1, feedback: "✅ ¡Correcto! En 1992 y 1993." },
            { question: "¿Qué jugador conectó el jonrón ganador de la Serie Mundial de 1993?", options: ["Roberto Alomar", "Joe Carter", "Carlos Delgado", "Jose Bautista"], correct: 1, feedback: "✅ ¡Correcto! Joe Carter con un walk-off." },
            { question: "¿En qué ciudad juegan?", options: ["Vancouver", "Montreal", "Toronto", "Ottawa"], correct: 2, feedback: "✅ ¡Correcto! Juegan en Toronto, Canadá." }
        ]
    },
    whitesox: { 
        id: "whitesox", name: "Chicago White Sox", city: "Chicago, Illinois", logo: "⚾", 
        history: { sections: [{title: "🏛️ Fundación", text: "Uno de los equipos fundadores de la Liga Americana en 1901."}, {title: "🏆 Títulos", text: "Han ganado 3 Series Mundiales (1906, 1917, 2005)."}] }, 
        stats: { summary: {wins:41,losses:121,pct:".253"}, players: [], chart: [20,30,25,35,30,40] }, 
        trivia: [
            { question: "¿En qué año ganaron su Serie Mundial más reciente?", options: ["1917", "1959", "2005", "2010"], correct: 2, feedback: "✅ ¡Correcto! En 2005." },
            { question: "¿Cuántas Series Mundiales tienen?", options: ["1", "2", "3", "4"], correct: 2, feedback: "✅ ¡Correcto! Tienen 3 títulos." },
            { question: "¿Cómo se llama su estadio actual?", options: ["Wrigley Field", "Guaranteed Rate Field", "Comiskey Park II", "Soldier Field"], correct: 1, feedback: "✅ ¡Correcto! Juegan en el Guaranteed Rate Field." },
            { question: "¿En qué año se fundó el equipo?", options: ["1899", "1901", "1910", "1920"], correct: 1, feedback: "✅ ¡Correcto! En 1901." },
            { question: "¿Cómo se llamaban en 1901?", options: ["White Sox", "White Stockings", "Blues", "Brewers"], correct: 1, feedback: "✅ ¡Correcto! Eran los White Stockings." }
        ]
    },
    tigers: { 
        id: "tigers", name: "Detroit Tigers", city: "Detroit, Michigan", logo: "🐅", 
        history: { sections: [{title: "🏛️ Fundación", text: "Fundado en 1901, es uno de los equipos originales de la Liga Americana."}, {title: "🏆 Títulos", text: "Han ganado 4 Series Mundiales (1935, 1945, 1968, 1984)."}] }, 
        stats: { summary: {wins:86,losses:76,pct:".531"}, players: [], chart: [50,55,60,65,70,75] }, 
        trivia: [
            { question: "¿Cuántas Series Mundiales han ganado?", options: ["2", "3", "4", "5"], correct: 2, feedback: "✅ ¡Correcto! Tienen 4 títulos." },
            { question: "¿En qué año fue su última Serie Mundial?", options: ["1968", "1984", "1990", "2006"], correct: 1, feedback: "✅ ¡Correcto! En 1984." },
            { question: "¿Qué legendario bateador jugó para ellos de 2004 a 2013?", options: ["Miguel Cabrera", "Albert Pujols", "Prince Fielder", "Justin Verlander"], correct: 0, feedback: "✅ ¡Correcto! Miguel Cabrera." },
            { question: "¿En qué año se fundó el equipo?", options: ["1899", "1901", "1910", "1920"], correct: 1, feedback: "✅ ¡Correcto! En 1901." },
            { question: "¿Cómo se llama su estadio?", options: ["Comerica Park", "Tiger Stadium", "Ford Field", "Little Caesars Arena"], correct: 0, feedback: "✅ ¡Correcto! Juegan en el Comerica Park." }
        ]
    },
    twins: { 
        id: "twins", name: "Minnesota Twins", city: "Minneapolis, Minnesota", logo: "⚾", 
        history: { sections: [{title: "🏛️ Fundación", text: "Fundado en 1901 como los Washington Senators, se mudaron a Minnesota en 1961."}, {title: "🏆 Títulos", text: "Han ganado 3 Series Mundiales (1924, 1987, 1991)."}] }, 
        stats: { summary: {wins:82,losses:80,pct:".506"}, players: [], chart: [55,60,50,65,70,60] }, 
        trivia: [
            { question: "¿Cómo se llamaban antes de mudarse a Minnesota?", options: ["Washington Senators", "Washington Nationals", "Montreal Expos", "Kansas City Athletics"], correct: 0, feedback: "✅ ¡Correcto! Eran los Senators." },
            { question: "¿En qué año se mudaron a Minnesota?", options: ["1955", "1961", "1969", "1977"], correct: 1, feedback: "✅ ¡Correcto! En 1961." },
            { question: "¿Cuántas Series Mundiales tienen?", options: ["1", "2", "3", "4"], correct: 2, feedback: "✅ ¡Correcto! Tienen 3 títulos." },
            { question: "¿Qué jugador es conocido como 'The Hammer' y jugó para los Twins?", options: ["Kirby Puckett", "Harmon Killebrew", "Rod Carew", "Joe Mauer"], correct: 1, feedback: "✅ ¡Correcto! Harmon Killebrew." },
            { question: "¿En qué año ganaron su última Serie Mundial?", options: ["1987", "1991", "2001", "2010"], correct: 1, feedback: "✅ ¡Correcto! En 1991." }
        ]
    },
    astros: { 
        id: "astros", name: "Houston Astros", city: "Houston, Texas", logo: "🚀", 
        history: { sections: [{title: "🏛️ Fundación", text: "Fundado en 1962 como los Houston Colt .45s, se unieron a la Liga Americana en 2013."}, {title: "🏆 Títulos", text: "Han ganado 2 Series Mundiales (2017, 2022)."}] }, 
        stats: { summary: {wins:88,losses:74,pct:".543"}, players: [], chart: [60,65,70,75,80,85] }, 
        trivia: [
            { question: "¿Cómo se llamaban cuando se fundaron en 1962?", options: ["Astros", "Colt .45s", "Oilers", "Texans"], correct: 1, feedback: "✅ ¡Correcto! Eran los Colt .45s." },
            { question: "¿En qué año ganaron su primera Serie Mundial?", options: ["2005", "2017", "2019", "2022"], correct: 1, feedback: "✅ ¡Correcto! En 2017." },
            { question: "¿En qué liga jugaban antes de mudarse a la Liga Americana en 2013?", options: ["Liga Americana", "Liga Nacional", "Liga del Pacífico", "Liga de la Costa"], correct: 1, feedback: "✅ ¡Correcto! Jugaban en la Liga Nacional." },
            { question: "¿Cuántas Series Mundiales tienen?", options: ["1", "2", "3", "0"], correct: 1, feedback: "✅ ¡Correcto! Tienen 2 títulos." },
            { question: "¿En qué año ganaron su segunda Serie Mundial?", options: ["2019", "2020", "2021", "2022"], correct: 3, feedback: "✅ ¡Correcto! En 2022." }
        ]
    },
    angels: { 
        id: "angels", name: "Los Angeles Angels", city: "Anaheim, California", logo: "😇", 
        history: { sections: [{title: "🏛️ Fundación", text: "Fundado en 1961 como los Los Angeles Angels, han jugado en Anaheim desde 1966."}, {title: "🏆 Títulos", text: "Han ganado 1 Serie Mundial (2002)."}] }, 
        stats: { summary: {wins:63,losses:99,pct:".389"}, players: [], chart: [35,40,30,45,40,50] }, 
        trivia: [
            { question: "¿En qué año ganaron su única Serie Mundial?", options: ["1995", "2002", "2005", "2009"], correct: 1, feedback: "✅ ¡Correcto! En 2002." },
            { question: "¿Cuál era su nombre original cuando se fundaron en 1961?", options: ["California Angels", "Anaheim Angels", "Los Angeles Angels", "Los Angeles Angels of Anaheim"], correct: 2, feedback: "✅ ¡Correcto! Eran los Los Angeles Angels." },
            { question: "¿Qué jugador ganó múltiples MVP con los Angels?", options: ["Shohei Ohtani", "Mike Trout", "Albert Pujols", "Vladimir Guerrero"], correct: 1, feedback: "✅ ¡Correcto! Mike Trout." },
            { question: "¿En qué ciudad juegan actualmente?", options: ["Los Angeles", "Anaheim", "Long Beach", "Pasadena"], correct: 1, feedback: "✅ ¡Correcto! Juegan en Anaheim." },
            { question: "¿Contra qué equipo ganaron la Serie Mundial de 2002?", options: ["Los Angeles Dodgers", "San Francisco Giants", "New York Yankees", "Chicago Cubs"], correct: 1, feedback: "✅ ¡Correcto! Vencieron a los Giants." }
        ]
    },
    athletics: { 
        id: "athletics", name: "Oakland Athletics", city: "Oakland, California", logo: "⚾", 
        history: { sections: [{title: "🏛️ Fundación", text: "Fundado en 1901 en Filadelfia, se mudó a Kansas City en 1955 y a Oakland en 1968."}, {title: "🏆 Títulos", text: "Han ganado 9 Series Mundiales, la última en 1989."}] }, 
        stats: { summary: {wins:69,losses:93,pct:".426"}, players: [], chart: [40,45,50,55,45,60] }, 
        trivia: [
            { question: "¿Cuántas Series Mundiales han ganado?", options: ["5", "7", "9", "11"], correct: 2, feedback: "✅ ¡Correcto! Tienen 9 títulos." },
            { question: "¿En qué año ganaron su última Serie Mundial?", options: ["1974", "1989", "1990", "2002"], correct: 1, feedback: "✅ ¡Correcto! En 1989." },
            { question: "¿En qué ciudad jugaron antes de Oakland?", options: ["Kansas City", "San Francisco", "Seattle", "Los Angeles"], correct: 0, feedback: "✅ ¡Correcto! Jugaron en Kansas City." },
            { question: "¿Qué película famosa de 2011 trata sobre su gerente general?", options: ["Moneyball", "The Natural", "Field of Dreams", "42"], correct: 0, feedback: "✅ ¡Correcto! Moneyball." },
            { question: "¿En qué año se mudaron a Oakland?", options: ["1955", "1960", "1968", "1975"], correct: 2, feedback: "✅ ¡Correcto! Llegaron en 1968." }
        ]
    },
    mariners: { 
        id: "mariners", name: "Seattle Mariners", city: "Seattle, Washington", logo: "⚓", 
        history: { sections: [{title: "🏛️ Fundación", text: "Se unieron a la MLB en 1977 como equipo de expansión."}, {title: "🏆 Títulos", text: "Aún no han ganado una Serie Mundial ni un banderín de la Liga Americana."}] }, 
        stats: { summary: {wins:85,losses:77,pct:".525"}, players: [], chart: [55,60,65,70,75,80] }, 
        trivia: [
            { question: "¿En qué año se unieron a la MLB?", options: ["1969", "1977", "1982", "1993"], correct: 1, feedback: "✅ ¡Correcto! En 1977." },
            { question: "¿Cuántas Series Mundiales tienen?", options: ["0", "1", "2", "3"], correct: 0, feedback: "✅ ¡Correcto! Aún no han ganado ninguna." },
            { question: "¿Qué jugador rompió el récord de hits en una temporada en 2004?", options: ["Ken Griffey Jr.", "Ichiro Suzuki", "Alex Rodriguez", "Edgar Martinez"], correct: 1, feedback: "✅ ¡Correcto! Ichiro Suzuki." },
            { question: "¿Qué jugador es famoso por su 'slam' en la postemporada de 1995?", options: ["Ken Griffey Jr.", "Edgar Martinez", "Jay Buhner", "Randy Johnson"], correct: 1, feedback: "✅ ¡Correcto! Edgar Martinez." },
            { question: "¿Cómo se llama su estadio actual?", options: ["Safeco Field", "T-Mobile Park", "CenturyLink Field", "Lumen Field"], correct: 1, feedback: "✅ ¡Correcto! Ahora es el T-Mobile Park." }
        ]
    },
    rangers: { 
        id: "rangers", name: "Texas Rangers", city: "Arlington, Texas", logo: "🤠", 
        history: { sections: [{title: "🏛️ Fundación", text: "Fundado en 1961 como los Washington Senators, se mudaron a Texas en 1972."}, {title: "🏆 Títulos", text: "Ganaron su primera Serie Mundial en 2023, venciendo a los Diamondbacks."}] }, 
        stats: { summary: {wins:78,losses:84,pct:".481"}, players: [], chart: [50,55,60,65,70,75] }, 
        trivia: [
            { question: "¿En qué año ganaron su primera Serie Mundial?", options: ["2010", "2011", "2023", "2024"], correct: 2, feedback: "✅ ¡Correcto! En 2023." },
            { question: "¿Cómo se llamaban antes de mudarse a Texas?", options: ["Washington Senators", "Washington Nationals", "Kansas City Royals", "Seattle Pilots"], correct: 0, feedback: "✅ ¡Correcto! Eran los Senators." },
            { question: "¿Contra qué equipo ganaron la Serie Mundial de 2023?", options: ["Houston Astros", "Arizona Diamondbacks", "Philadelphia Phillies", "Atlanta Braves"], correct: 1, feedback: "✅ ¡Correcto! Vencieron a los Diamondbacks." },
            { question: "¿En qué año se mudaron a Texas?", options: ["1961", "1972", "1980", "1990"], correct: 1, feedback: "✅ ¡Correcto! En 1972." },
            { question: "¿Cómo se llama su estadio?", options: ["Globe Life Park", "Globe Life Field", "AT&T Stadium", "Rangers Ballpark"], correct: 1, feedback: "✅ ¡Correcto! Juegan en el Globe Life Field." }
        ]
    }
};