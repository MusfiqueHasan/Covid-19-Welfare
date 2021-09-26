const data = [
    {
        id: 1,
        name: "Jeff Bezos",
        companies: "Amazon (including Twitch, Ring, Audible, Zappos, & Whole Foods), AWS Elemental, Souq.com, Blue Origin, ​The Washington Post, IMDb, ​Kiva Systems, Alexa, ​DPReview, ​Fabric.com, ​Woot.com, ​Goodreads, Bezos Expeditions, and Bezos Day One Fund",
        born: "12 January 1964, Albuquerque, New Mexico, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Jeff-Bezos.jpg",
        networth: "$177 billion",
        donate: "$950000"

    },
    {
        id: 2,
        name: "Elon Musk",
        companies: "Tesla, SpaceX, The Boring Company, Neuralink, SolarCity, OpenAI (he also founded Zip2 and X.com, which became PayPal)",
        born: "28 June 1971, Pretoria, South Africa",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Elon-Musk.jpg",
        networth: "$151 Billion",
        donate: "$870000"
        
    },
    {
        id: 3,
        name: "Bernard Arnault",
        companies: "LVMH, Christian Dior SE",
        born: "5 March 1949, Roubaix, France",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Bernard-Arnault.jpg",
        networth: "$150 Billion",
        donate: "$810000"

    },
    {
        id: 4,
        name: "Bill Gates",
        companies: "Microsoft, Bill & Melinda Gates Foundation, Branded Entertainment Network, TerraPower, Cascade Investment, L.L.C.",
        born: "28 October 1955, Seattle, Washington, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Bill-Gates.jpg",
        networth: "$124 Billion",
        donate: "$770000"

    },
    {
        id: 5,
        name: "Mark Zuckerburg",
        companies: "Facebook & the Chan Zuckerberg Initiative",
        born: "14 May 1984, White Plains, New York, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Mark-Zuckerburg.jpg",
        networth: "$97 Billion",
        donate: "$750000"

    },
    {
        id: 6,
        name: "Warren Buffet",
        companies: "Berkshire Hathaway",
        born: "30 August 1930, Omaha, Nebraska, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Warren-Buffet.jpg",
        networth: "$96 Billion",
        donate: "$790000"

    },
    {
        id: 7,
        name: "Larry Ellison",
        companies: " Oracle Corporation",
        born: "17 August 1944, New York City, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Larry-Ellison.jpg",
        networth: "$93 Billion",
        donate: "$760000"

    },
    {
        id: 8,
        name: "Larry Page",
        companies: "Google, Alphabet Inc, & PageRank",
        born: "26 March 1973, Lansing, Michigan, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Larry-Page.jpeg",
        networth: "$91.5 Billion",
        donate: "$680000"

    },
    {
        id: 9,
        name: "Sergey Brin",
        companies: "Google, X, Alphabet Inc, & PageRank",
        born: "21 August 1973, Moscow, Russia",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Sergey-Brin.jpg",
        networth: "$89 Billion",
        donate: "$620000"

    },
    {
        id: 10,
        name: "Mukesh Ambani",
        companies: "Reliance Industries",
        born: "19 April 1957, Aden, Yemen",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Mukesh-Ambani.jpg",
        networth: "$84.5 Billion",
        donate: "$699000"

    },
    {
        id: 11,
        name: "Amancio Ortega",
        companies: "Inditex Group, Zara, Pull & Bear, Massimo Dutti, Bershak, Stradivarius, Oysho, & Uterque",
        born: "28 March 1936, Busdongo de Arbas, Spain",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Amancio-Ortega.jpg",
        networth: "$77 Billion",
        donate: "$746800"

    },
    {
        id: 12,
        name: "Zhong Shanshan",
        companies: "Nongfu Spring & Beijing Wantai Biological Pharmacy",
        born: "1 December 1954, Hangzhou, China",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Zhong-Shanshan.jpg",
        networth: "$68.9 Billion",
        donate: "$588700"

    },  
    {
        id: 13,
        name: "Steve Ballmer",
        companies: "Microsoft",
        born: "24 March 1956, Detroit, Michigan, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Steve-Ballmer.jpg",
        networth: "$68.7 Billion",
        donate: "$552300"

    },
    {
        id: 14,
        name: "Ma Huateng",
        companies: "Tencent",
        born: "29 October 1971, Chaoyang, Shantou, Guangdong, China",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Ma-Huateng.jpg",
        networth: "$65.8 Billion",
        donate: "$523470"

    },
    {
        id: 15,
        name: "Carlos Slim Helu & Family",
        companies: "Telmex, América Móvil, & Grupo Carso",
        born: "28 January 1940, Mexico City, Mexico",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Carlos-Slim-Helu.jpg",
        networth: "$62.8 Billion",
        donate: "$569920"

    },
    {
        id: 16,
        name: "Alice Walton",
        companies: "Walmart, Llama Company, Crystal Bridges Museum of American Art",
        born: "7 October 1949, Newport, Arkansas, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Alice-Walton.jpg",
        networth: "$61.8 Billion",
        donate: "$734780"

    },
    {
        id: 17,
        name: "Jim Walton",
        companies: "Walmart, Arvest Bank, & Community Publishers",
        born: "7 June 1948, Newport, Arkansas, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Jim-Walton.jpg",
        networth: "$60.2 Billion",
        donate: "$447600"

    },
    {
        id: 18,
        name: "Rob Walton",
        companies: "Walmart",
        born: "28 October 1944, Tulsa, Oklahoma, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Rob-Walton.jpg",
        networth: "$59.5 Billion",
        donate: "$479865"

    },
    {
        id: 19,
        name: "Michael Bloomberg",
        companies: "Salomon Brothers & Bloomberg L.P",
        born: "14 February 1942, Boston, Massachusetts, United States",
        img:"https://www.thetrendspotter.net/wp-content/uploads/2021/04/Michael-Bloomberg.jpg",
        networth: "$59 Billion",
        donate: "$426910"

    },
   
]