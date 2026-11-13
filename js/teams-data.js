// js/teams-data.js

const TEAMS_DATA = {
    yankees: {
        id: "yankees", name: "New York Yankees", city: "El Bronx, New York", logo: '<img src="img/yankees.png" alt="Yankees" class="team-logo-img">',
        stats: {
            summary: { wins: 94, losses: 68, pct: ".580" },
            players: [
                { name: "Aaron Judge", pos: "OF", stat1: ".322", stat1_lbl: "AVG", stat2: "58", stat2_lbl: "HR", stat3: "144", stat3_lbl: "RBI" },
                { name: "Gerrit Cole", pos: "P", stat1: "3.41", stat1_lbl: "ERA", stat2: "8", stat2_lbl: "W", stat3: "99", stat3_lbl: "K" },
                { name: "Juan Soto", pos: "OF", stat1: ".288", stat1_lbl: "AVG", stat2: "41", stat2_lbl: "HR", stat3: "109", stat3_lbl: "RBI" }
            ],
            chart: [45, 55, 60, 65, 75, 85]
        },
        history: { bannerTitle: "New York Yankees", bannerSub: "Fundado en 1903 • 27 Series Mundiales", sections: [{ title: "🏛️ Los inicios", text: "El equipo fue fundado en 1903 como los New York Highlanders." }, { title: "🏆 Época dorada", text: "Con 41 banderines y 27 campeonatos de la Serie Mundial." }], achievements: [{ number: "27", label: "Series Mundiales" }, { number: "41", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿Cuántos campeonatos de la Serie Mundial han ganado?", options: ["20", "25", "27", "30"], correct: 2, feedback: "✅ ¡Correcto! 27 es el récord." }, { question: "¿En qué año se fundó?", options: ["1901", "1903", "1913", "1920"], correct: 1, feedback: "✅ ¡Correcto! En 1903." }]
    },
    guardians: {
        id: "guardians", name: "Cleveland Guardians", city: "Cleveland, Ohio", logo: '<img src="img/guardians.png" alt="Guardians" class="team-logo-img">',
        stats: {
            summary: { wins: 92, losses: 69, pct: ".571" },
            players: [
                { name: "José Ramírez", pos: "3B", stat1: ".279", stat1_lbl: "AVG", stat2: "39", stat2_lbl: "HR", stat3: "118", stat3_lbl: "RBI" },
                { name: "Steven Kwan", pos: "OF", stat1: ".292", stat1_lbl: "AVG", stat2: "14", stat2_lbl: "HR", stat3: "44", stat3_lbl: "RBI" },
                { name: "Emmanuel Clase", pos: "P", stat1: "0.61", stat1_lbl: "ERA", stat2: "47", stat2_lbl: "SV", stat3: "66", stat3_lbl: "K" }
            ],
            chart: [50, 55, 60, 65, 70, 75]
        },
        history: { bannerTitle: "Cleveland Guardians", bannerSub: "Fundado en 1901 • 2 Series Mundiales", sections: [{ title: "🏛️ Los inicios", text: "Fundados en 1901 como los Cleveland Blues." }, { title: "🏆 Época dorada", text: "Ganaron sus Series Mundiales en 1920 y 1948." }], achievements: [{ number: "2", label: "Series Mundiales" }, { number: "6", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿En qué años ganaron sus Series Mundiales?", options: ["1920 y 1948", "1948 y 1954", "1995 y 1997", "2016 y 2024"], correct: 0, feedback: "✅ ¡Correcto! En 1920 y 1948." }, { question: "¿Cómo se llamaban antes?", options: ["Indians", "Browns", "Blues", "Naps"], correct: 0, feedback: "✅ ¡Correcto! Eran los Indians." }]
    },
    royals: {
        id: "royals", name: "Kansas City Royals", city: "Kansas City, Missouri", logo: '<img src="img/royals.png" alt="Royals" class="team-logo-img">',
        stats: {
            summary: { wins: 86, losses: 76, pct: ".531" },
            players: [
                { name: "Bobby Witt Jr.", pos: "SS", stat1: ".332", stat1_lbl: "AVG", stat2: "32", stat2_lbl: "HR", stat3: "109", stat3_lbl: "RBI" },
                { name: "Salvador Pérez", pos: "C", stat1: ".271", stat1_lbl: "AVG", stat2: "27", stat2_lbl: "HR", stat3: "104", stat3_lbl: "RBI" },
                { name: "Cole Ragans", pos: "P", stat1: "3.14", stat1_lbl: "ERA", stat2: "11", stat2_lbl: "W", stat3: "223", stat3_lbl: "K" }
            ],
            chart: [40, 50, 55, 60, 70, 80]
        },
        history: { bannerTitle: "Kansas City Royals", bannerSub: "Fundado en 1969 • 2 Series Mundiales", sections: [{ title: "🏛️ Los inicios", text: "Se unieron a la MLB en 1969." }, { title: "🏆 Época dorada", text: "Ganaron en 1985 y 2015." }], achievements: [{ number: "2", label: "Series Mundiales" }, { number: "4", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿En qué año ganaron su primera Serie Mundial?", options: ["1969", "1980", "1985", "2015"], correct: 2, feedback: "✅ ¡Correcto! En 1985." }, { question: "¿Cuántos títulos tienen?", options: ["1", "2", "3", "4"], correct: 1, feedback: "✅ ¡Correcto! Tienen 2." }]
    },
    orioles: {
        id: "orioles", name: "Baltimore Orioles", city: "Baltimore, Maryland", logo: '<img src="img/orioles.png" alt="Orioles" class="team-logo-img">',
        stats: {
            summary: { wins: 91, losses: 71, pct: ".562" },
            players: [
                { name: "Adley Rutschman", pos: "C", stat1: ".250", stat1_lbl: "AVG", stat2: "19", stat2_lbl: "HR", stat3: "79", stat3_lbl: "RBI" },
                { name: "Gunnar Henderson", pos: "SS", stat1: ".281", stat1_lbl: "AVG", stat2: "37", stat2_lbl: "HR", stat3: "92", stat3_lbl: "RBI" },
                { name: "Corbin Burnes", pos: "P", stat1: "2.92", stat1_lbl: "ERA", stat2: "15", stat2_lbl: "W", stat3: "181", stat3_lbl: "K" }
            ],
            chart: [50, 60, 55, 70, 75, 65]
        },
        history: { bannerTitle: "Baltimore Orioles", bannerSub: "Fundado en 1901 • 3 Series Mundiales", sections: [{ title: "🏛️ Fundación", text: "Se mudaron a Baltimore en 1954." }, { title: "🏆 Títulos", text: "Ganaron en 1966, 1970 y 1983." }], achievements: [{ number: "3", label: "Series Mundiales" }, { number: "7", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿En qué año se mudaron a Baltimore?", options: ["1901", "1954", "1966", "1970"], correct: 1, feedback: "✅ ¡Correcto! En 1954." }, { question: "¿Quién es 'The Iron Man'?", options: ["Brooks Robinson", "Cal Ripken Jr.", "Eddie Murray", "Frank Robinson"], correct: 1, feedback: "✅ ¡Correcto! Cal Ripken Jr." }]
    },
    redsox: {
        id: "redsox", name: "Boston Red Sox", city: "Boston, Massachusetts", logo: '<img src="img/redsox.png" alt="Red Sox" class="team-logo-img">',
        stats: {
            summary: { wins: 81, losses: 81, pct: ".500" },
            players: [
                { name: "Rafael Devers", pos: "3B", stat1: ".272", stat1_lbl: "AVG", stat2: "28", stat2_lbl: "HR", stat3: "83", stat3_lbl: "RBI" },
                { name: "Jarren Duran", pos: "OF", stat1: ".285", stat1_lbl: "AVG", stat2: "21", stat2_lbl: "HR", stat3: "75", stat3_lbl: "RBI" },
                { name: "Tanner Houck", pos: "P", stat1: "3.12", stat1_lbl: "ERA", stat2: "9", stat2_lbl: "W", stat3: "154", stat3_lbl: "K" }
            ],
            chart: [45, 55, 50, 60, 65, 70]
        },
        history: { bannerTitle: "Boston Red Sox", bannerSub: "Fundado en 1901 • 9 Series Mundiales", sections: [{ title: "🏛️ Fundación", text: "Uno de los equipos originales de la Liga Americana." }, { title: "🏆 Títulos", text: "Han ganado 9 Series Mundiales, la más reciente en 2018." }], achievements: [{ number: "9", label: "Series Mundiales" }, { number: "14", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿Cómo se llamaban en 1901?", options: ["Pilgrims", "Americans", "Braves", "Highlanders"], correct: 1, feedback: "✅ ¡Correcto! Eran los Americans." }, { question: "¿En qué año rompieron la 'Maldición'?", options: ["1918", "1986", "2004", "2013"], correct: 2, feedback: "✅ ¡Correcto! En 2004." }]
    },
    rays: {
        id: "rays", name: "Tampa Bay Rays", city: "St. Petersburg, Florida", logo: '<img src="img/rays.png" alt="Rays" class="team-logo-img">',
        stats: {
            summary: { wins: 80, losses: 82, pct: ".494" },
            players: [
                { name: "Yandy Díaz", pos: "1B", stat1: ".281", stat1_lbl: "AVG", stat2: "14", stat2_lbl: "HR", stat3: "65", stat3_lbl: "RBI" },
                { name: "Randy Arozarena", pos: "OF", stat1: ".219", stat1_lbl: "AVG", stat2: "20", stat2_lbl: "HR", stat3: "60", stat3_lbl: "RBI" },
                { name: "Zach Eflin", pos: "P", stat1: "4.09", stat1_lbl: "ERA", stat2: "10", stat2_lbl: "W", stat3: "134", stat3_lbl: "K" }
            ],
            chart: [50, 55, 60, 55, 65, 60]
        },
        history: { bannerTitle: "Tampa Bay Rays", bannerSub: "Fundado en 1998 • 2 Títulos de Liga", sections: [{ title: "🏛️ Fundación", text: "Se unieron a la MLB en 1998." }, { title: "🏆 Títulos", text: "Campeones de la Liga Americana en 2008 y 2020." }], achievements: [{ number: "0", label: "Series Mundiales" }, { number: "2", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿En qué año se unieron a la MLB?", options: ["1993", "1998", "2001", "2005"], correct: 1, feedback: "✅ ¡Correcto! En 1998." }, { question: "¿Cuál era su nombre original?", options: ["Rays", "Devil Rays", "Stingrays", "Marlins"], correct: 1, feedback: "✅ ¡Correcto! Eran los Devil Rays." }]
    },
    bluejays: {
        id: "bluejays", name: "Toronto Blue Jays", city: "Toronto, Canadá", logo: '<img src="img/bluejays.png" alt="Blue Jays" class="team-logo-img">',
        stats: {
            summary: { wins: 74, losses: 88, pct: ".457" },
            players: [
                { name: "Vladimir Guerrero Jr.", pos: "1B", stat1: ".323", stat1_lbl: "AVG", stat2: "30", stat2_lbl: "HR", stat3: "103", stat3_lbl: "RBI" },
                { name: "Bo Bichette", pos: "SS", stat1: ".225", stat1_lbl: "AVG", stat2: "4", stat2_lbl: "HR", stat3: "31", stat3_lbl: "RBI" },
                { name: "Kevin Gausman", pos: "P", stat1: "4.56", stat1_lbl: "ERA", stat2: "14", stat2_lbl: "W", stat3: "162", stat3_lbl: "K" }
            ],
            chart: [40, 45, 55, 50, 60, 55]
        },
        history: { bannerTitle: "Toronto Blue Jays", bannerSub: "Fundado en 1977 • 2 Series Mundiales", sections: [{ title: "🏛️ Fundación", text: "Se unieron como equipo de expansión en 1977." }, { title: "🏆 Títulos", text: "Ganaron en 1992 y 1993." }], achievements: [{ number: "2", label: "Series Mundiales" }, { number: "2", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿En qué año se fundó?", options: ["1969", "1977", "1982", "1993"], correct: 1, feedback: "✅ ¡Correcto! En 1977." }, { question: "¿Cuántas Series Mundiales ganaron?", options: ["1", "2", "3", "0"], correct: 1, feedback: "✅ ¡Correcto! 2 seguidas." }]
    },
    whitesox: {
        id: "whitesox", name: "Chicago White Sox", city: "Chicago, Illinois", logo: '<img src="img/whitesox.png" alt="White Sox" class="team-logo-img">',
        stats: {
            summary: { wins: 41, losses: 121, pct: ".253" },
            players: [
                { name: "Luis Robert Jr.", pos: "OF", stat1: ".224", stat1_lbl: "AVG", stat2: "14", stat2_lbl: "HR", stat3: "35", stat3_lbl: "RBI" },
                { name: "Andrew Benintendi", pos: "OF", stat1: ".229", stat1_lbl: "AVG", stat2: "20", stat2_lbl: "HR", stat3: "64", stat3_lbl: "RBI" },
                { name: "Garrett Crochet", pos: "P", stat1: "3.58", stat1_lbl: "ERA", stat2: "6", stat2_lbl: "W", stat3: "209", stat3_lbl: "K" }
            ],
            chart: [20, 30, 25, 35, 30, 40]
        },
        history: { bannerTitle: "Chicago White Sox", bannerSub: "Fundado en 1901 • 3 Series Mundiales", sections: [{ title: "🏛️ Fundación", text: "Fundadores de la Liga Americana." }, { title: "🏆 Títulos", text: "Ganaron en 1906, 1917 y 2005." }], achievements: [{ number: "3", label: "Series Mundiales" }, { number: "6", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿En qué año ganaron su última Serie Mundial?", options: ["1917", "1959", "2005", "2010"], correct: 2, feedback: "✅ ¡Correcto! En 2005." }, { question: "¿Cómo se llamaban en 1901?", options: ["White Sox", "White Stockings", "Blues", "Brewers"], correct: 1, feedback: "✅ ¡Correcto! White Stockings." }]
    },
    tigers: {
        id: "tigers", name: "Detroit Tigers", city: "Detroit, Michigan", logo: '<img src="img/tigers.png" alt="Tigers" class="team-logo-img">',
        stats: {
            summary: { wins: 86, losses: 76, pct: ".531" },
            players: [
                { name: "Riley Greene", pos: "OF", stat1: ".262", stat1_lbl: "AVG", stat2: "24", stat2_lbl: "HR", stat3: "74", stat3_lbl: "RBI" },
                { name: "Spencer Torkelson", pos: "1B", stat1: ".219", stat1_lbl: "AVG", stat2: "10", stat2_lbl: "HR", stat3: "37", stat3_lbl: "RBI" },
                { name: "Tarik Skubal", pos: "P", stat1: "2.39", stat1_lbl: "ERA", stat2: "18", stat2_lbl: "W", stat3: "228", stat3_lbl: "K" }
            ],
            chart: [50, 55, 60, 65, 70, 75]
        },
        history: { bannerTitle: "Detroit Tigers", bannerSub: "Fundado en 1901 • 4 Series Mundiales", sections: [{ title: "🏛️ Fundación", text: "Equipo original de la Liga Americana." }, { title: "🏆 Títulos", text: "Ganaron en 1935, 1945, 1968 y 1984." }], achievements: [{ number: "4", label: "Series Mundiales" }, { number: "11", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿Cuántas Series Mundiales tienen?", options: ["2", "3", "4", "5"], correct: 2, feedback: "✅ ¡Correcto! 4 títulos." }, { question: "¿Quién jugó ahí del 2004 al 2013?", options: ["Miguel Cabrera", "Albert Pujols", "Prince Fielder", "Justin Verlander"], correct: 0, feedback: "✅ ¡Correcto! Miguel Cabrera." }]
    },
    twins: {
        id: "twins", name: "Minnesota Twins", city: "Minneapolis, Minnesota", logo: '<img src="img/twins.png" alt="Twins" class="team-logo-img">',
        stats: {
            summary: { wins: 82, losses: 80, pct: ".506" },
            players: [
                { name: "Carlos Correa", pos: "SS", stat1: ".310", stat1_lbl: "AVG", stat2: "14", stat2_lbl: "HR", stat3: "54", stat3_lbl: "RBI" },
                { name: "Royce Lewis", pos: "3B", stat1: ".233", stat1_lbl: "AVG", stat2: "16", stat2_lbl: "HR", stat3: "47", stat3_lbl: "RBI" },
                { name: "Pablo López", pos: "P", stat1: "4.08", stat1_lbl: "ERA", stat2: "15", stat2_lbl: "W", stat3: "198", stat3_lbl: "K" }
            ],
            chart: [55, 60, 50, 65, 70, 60]
        },
        history: { bannerTitle: "Minnesota Twins", bannerSub: "Fundado en 1901 • 3 Series Mundiales", sections: [{ title: "🏛️ Fundación", text: "Se mudaron a Minnesota en 1961." }, { title: "🏆 Títulos", text: "Ganaron en 1924, 1987 y 1991." }], achievements: [{ number: "3", label: "Series Mundiales" }, { number: "6", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿Cómo se llamaban antes?", options: ["Washington Senators", "Washington Nationals", "Montreal Expos", "Kansas City Athletics"], correct: 0, feedback: "✅ ¡Correcto! Senators." }, { question: "¿En qué año se mudaron a Minnesota?", options: ["1955", "1961", "1969", "1977"], correct: 1, feedback: "✅ ¡Correcto! En 1961." }]
    },
    astros: {
        id: "astros", name: "Houston Astros", city: "Houston, Texas", logo: '<img src="img/astros.png" alt="Astros" class="team-logo-img">',
        stats: {
            summary: { wins: 88, losses: 74, pct: ".543" },
            players: [
                { name: "Jose Altuve", pos: "2B", stat1: ".295", stat1_lbl: "AVG", stat2: "20", stat2_lbl: "HR", stat3: "65", stat3_lbl: "RBI" },
                { name: "Yordan Alvarez", pos: "DH", stat1: ".308", stat1_lbl: "AVG", stat2: "35", stat2_lbl: "HR", stat3: "86", stat3_lbl: "RBI" },
                { name: "Framber Valdez", pos: "P", stat1: "2.91", stat1_lbl: "ERA", stat2: "15", stat2_lbl: "W", stat3: "169", stat3_lbl: "K" }
            ],
            chart: [60, 65, 70, 75, 80, 85]
        },
        history: { bannerTitle: "Houston Astros", bannerSub: "Fundado en 1962 • 2 Series Mundiales", sections: [{ title: "🏛️ Fundación", text: "Fundado en 1962 como los Colt .45s." }, { title: "🏆 Títulos", text: "Ganaron en 2017 y 2022." }], achievements: [{ number: "2", label: "Series Mundiales" }, { number: "5", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿Cómo se llamaban en 1962?", options: ["Astros", "Colt .45s", "Oilers", "Texans"], correct: 1, feedback: "✅ ¡Correcto! Colt .45s." }, { question: "¿En qué año ganaron su primera Serie Mundial?", options: ["2005", "2017", "2019", "2022"], correct: 1, feedback: "✅ ¡Correcto! En 2017." }]
    },
    angels: {
        id: "angels", name: "Los Angeles Angels", city: "Anaheim, California", logo: '<img src="img/angels.png" alt="Angels" class="team-logo-img">',
        stats: {
            summary: { wins: 63, losses: 99, pct: ".389" },
            players: [
                { name: "Mike Trout", pos: "OF", stat1: ".220", stat1_lbl: "AVG", stat2: "10", stat2_lbl: "HR", stat3: "14", stat3_lbl: "RBI" },
                { name: "Taylor Ward", pos: "OF", stat1: ".246", stat1_lbl: "AVG", stat2: "25", stat2_lbl: "HR", stat3: "75", stat3_lbl: "RBI" },
                { name: "Tyler Anderson", pos: "P", stat1: "3.81", stat1_lbl: "ERA", stat2: "10", stat2_lbl: "W", stat3: "142", stat3_lbl: "K" }
            ],
            chart: [35, 40, 30, 45, 40, 50]
        },
        history: { bannerTitle: "Los Angeles Angels", bannerSub: "Fundado en 1961 • 1 Serie Mundial", sections: [{ title: "🏛️ Fundación", text: "Fundado en 1961, juegan en Anaheim desde 1966." }, { title: "🏆 Títulos", text: "Ganaron su única Serie Mundial en 2002." }], achievements: [{ number: "1", label: "Series Mundiales" }, { number: "1", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿En qué año ganaron su única Serie Mundial?", options: ["1995", "2002", "2005", "2009"], correct: 1, feedback: "✅ ¡Correcto! En 2002." }, { question: "¿Qué jugador ganó múltiples MVP?", options: ["Shohei Ohtani", "Mike Trout", "Albert Pujols", "Vladimir Guerrero"], correct: 1, feedback: "✅ ¡Correcto! Mike Trout." }]
    },
    athletics: {
        id: "athletics", name: "Oakland Athletics", city: "Oakland, California", logo: '<img src="img/athletics.png" alt="Athletics" class="team-logo-img">',
        stats: {
            summary: { wins: 69, losses: 93, pct: ".426" },
            players: [
                { name: "Brent Rooker", pos: "OF", stat1: ".293", stat1_lbl: "AVG", stat2: "39", stat2_lbl: "HR", stat3: "112", stat3_lbl: "RBI" },
                { name: "Shea Langeliers", pos: "C", stat1: ".224", stat1_lbl: "AVG", stat2: "29", stat2_lbl: "HR", stat3: "80", stat3_lbl: "RBI" },
                { name: "JP Sears", pos: "P", stat1: "4.38", stat1_lbl: "ERA", stat2: "11", stat2_lbl: "W", stat3: "137", stat3_lbl: "K" }
            ],
            chart: [40, 45, 50, 55, 45, 60]
        },
        history: { bannerTitle: "Oakland Athletics", bannerSub: "Fundado en 1901 • 9 Series Mundiales", sections: [{ title: "🏛️ Fundación", text: "Fundado en Filadelfia, se mudó a Oakland en 1968." }, { title: "🏆 Títulos", text: "Han ganado 9 Series Mundiales, la última en 1989." }], achievements: [{ number: "9", label: "Series Mundiales" }, { number: "15", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿Cuántas Series Mundiales han ganado?", options: ["5", "7", "9", "11"], correct: 2, feedback: "✅ ¡Correcto! 9 títulos." }, { question: "¿En qué año ganaron su última Serie Mundial?", options: ["1974", "1989", "1990", "2002"], correct: 1, feedback: "✅ ¡Correcto! En 1989." }]
    },
    mariners: {
        id: "mariners", name: "Seattle Mariners", city: "Seattle, Washington", logo: '<img src="img/mariners.png" alt="Mariners" class="team-logo-img">',
        stats: {
            summary: { wins: 85, losses: 77, pct: ".525" },
            players: [
                { name: "Julio Rodríguez", pos: "OF", stat1: ".273", stat1_lbl: "AVG", stat2: "20", stat2_lbl: "HR", stat3: "68", stat3_lbl: "RBI" },
                { name: "Cal Raleigh", pos: "C", stat1: ".220", stat1_lbl: "AVG", stat2: "34", stat2_lbl: "HR", stat3: "100", stat3_lbl: "RBI" },
                { name: "Luis Castillo", pos: "P", stat1: "3.64", stat1_lbl: "ERA", stat2: "11", stat2_lbl: "W", stat3: "175", stat3_lbl: "K" }
            ],
            chart: [55, 60, 65, 70, 75, 80]
        },
        history: { bannerTitle: "Seattle Mariners", bannerSub: "Fundado en 1977", sections: [{ title: "🏛️ Fundación", text: "Se unieron en 1977." }, { title: "🏆 Títulos", text: "Aún no han ganado una Serie Mundial." }], achievements: [{ number: "0", label: "Series Mundiales" }, { number: "0", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿En qué año se unieron?", options: ["1969", "1977", "1982", "1993"], correct: 1, feedback: "✅ ¡Correcto! En 1977." }, { question: "¿Cuántas Series Mundiales tienen?", options: ["0", "1", "2", "3"], correct: 0, feedback: "✅ ¡Correcto! Ninguna." }]
    },
    rangers: {
        id: "rangers", name: "Texas Rangers", city: "Arlington, Texas", logo: '<img src="img/rangers.png" alt="Rangers" class="team-logo-img">',
        stats: {
            summary: { wins: 78, losses: 84, pct: ".481" },
            players: [
                { name: "Corey Seager", pos: "SS", stat1: ".278", stat1_lbl: "AVG", stat2: "30", stat2_lbl: "HR", stat3: "74", stat3_lbl: "RBI" },
                { name: "Marcus Semien", pos: "2B", stat1: ".237", stat1_lbl: "AVG", stat2: "23", stat2_lbl: "HR", stat3: "74", stat3_lbl: "RBI" },
                { name: "Nathan Eovaldi", pos: "P", stat1: "3.80", stat1_lbl: "ERA", stat2: "12", stat2_lbl: "W", stat3: "166", stat3_lbl: "K" }
            ],
            chart: [50, 55, 60, 65, 70, 75]
        },
        history: { bannerTitle: "Texas Rangers", bannerSub: "Fundado en 1961 • 1 Serie Mundial", sections: [{ title: "🏛️ Fundación", text: "Fundado en 1961 como Senators." }, { title: "🏆 Títulos", text: "Ganaron su primera Serie Mundial en 2023." }], achievements: [{ number: "1", label: "Series Mundiales" }, { number: "3", label: "Títulos de Liga" }] },
        trivia: [{ question: "¿En qué año ganaron su primera Serie Mundial?", options: ["2010", "2011", "2023", "2024"], correct: 2, feedback: "✅ ¡Correcto! En 2023." }, { question: "¿Cómo se llamaban antes?", options: ["Washington Senators", "Washington Nationals", "Kansas City Royals", "Seattle Pilots"], correct: 0, feedback: "✅ ¡Correcto! Senators." }]
    }
};