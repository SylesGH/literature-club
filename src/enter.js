fetch("./settings.json")
    .then((e) => e.json())
    .then((data) => {
        document.title = data.title;
    }).catch((e) => console.log(e));

const wordLibrary = [
    "rules",
    "sunshine",
    "bird",
    "marble",
    "dismissal",
    "sour",
    "cathedral",
    "price",
    "benefit",
    "navy",
    "perception",
    "noble",
    "factory",
    "error",
    "cupboard",
    "privilege",
    "pluck",
    "insurance",
    "confession",
    "distribute",
    "limited",
    "speech",
    "labour",
    "demonstration",
    "wound",
    "firefighter",
    "substitute",
    "application",
    "cart",
    "presentation",
    "pony",
    "back",
    "bubble",
    "certain",
    "tolerant",
    "designer",
    "breed",
    "pumpkin",
    "catalogue",
    "tear",
    "wording",
    "payment",
    "sculpture",
    "scratch",
    "index",
    "relief",
    "clothes",
    "prize",
    "eject",
    "pavement",
    "raid",
    "judicial",
    "exit",
    "invisible",
    "check",
    "nest",
    "sausage",
    "rock",
    "epicalyx",
    "countryside",
    "deficiency",
    "pudding",
    "funeral",
    "spokesperson",
    "lump",
    "council",
    "deer",
    "transparent",
    "loop",
    "prospect",
    "negative",
    "support",
    "reproduce",
    "cruel",
    "pin",
    "fine",
    "coma",
    "opponent",
    "neighbour",
    "priority",
    "able",
    "honest",
    "inject",
    "economics",
    "small",
    "criticism",
    "feeling",
    "equip",
    "engagement",
    "era",
    "pepper",
    "garage",
    "discuss",
    "dialect",
    "censorship",
    "degree",
    "heat",
    "occupation",
    "kidnap",
    "divorce",
    "green",
    "riot",
    "craftsman",
    "stream",
    "band",
    "seize",
    "raw",
    "bother",
    "shot",
    "pay",
    "bang",
    "kidney",
    "continuous",
    "prediction",
    "correspond",
    "approach",
    "give",
    "reform",
    "splurge",
    "vertical",
    "critical",
    "chorus",
    "trade",
    "wriggle",
    "formal",
    "correspondence",
    "motivation",
    "try",
    "separate",
    "transfer",
    "teach",
    "quality",
    "wander",
    "length",
    "vegetable",
    "assignment",
    "half",
    "construct",
    "treatment",
    "shaft",
    "reckless",
    "mosquito",
    "animal",
    "pressure",
    "evaluate",
    "list",
    "stomach",
    "manner",
    "counter",
    "neighborhood",
    "collect",
    "program",
    "health",
    "shed",
    "computer",
    "reactor",
    "kettle",
    "refrigerator",
    "incredible",
    "camera",
    "supplementary",
    "wonder",
    "real",
    "proper",
    "differ",
    "dirty",
    "cane",
    "adoption",
    "dare",
    "smash",
    "undermine",
    "accent",
    "conspiracy",
    "preach",
    "position",
    "monk",
    "partner",
    "dimension",
    "banquet",
    "umbrella",
    "edge",
    "refer",
    "manufacture",
    "citizen",
    "immune",
    "impress",
    "strategic",
    "major",
    "abundant",
    "laboratory",
    "mars",
    "dead",
    "quarter",
    "exotic",
    "spine",
];

var div = document.querySelectorAll("div");

div.forEach((e) => {

    var words = [];

    for (let n = 0; n < 20; n++) {

        var random = Math.floor(Math.random() * wordLibrary.length);

        "rules" == wordLibrary[random] ? words.push(`<a class="word" id="rules">${wordLibrary[random]}</a>`) : words.push(`<p class="word">${wordLibrary[random]} </p>`);

    }

    var span = e.querySelectorAll("span"),

        animDuration = Math.floor(41 * Math.random()) + 60 + "s";

    0 === Math.floor(2 * Math.random()) && e.classList.toggle("reverse"),

        span.forEach((spans) => {

            (spans.style.animationDuration = animDuration), (spans.innerHTML = words), (spans.innerHTML = words.toString().replace(/,/g, " "));

        });
});

const rulesPage = document.querySelectorAll("a#rules"),

    enterButton =
        (rulesPage.forEach((rule) => {
            rule.addEventListener("click", () => {

                window.location = "/rules";

            });

        }),
        document.getElementById("enter"));

    enterButton.addEventListener("click", (e) => {

        e.preventDefault(),

        document.querySelector("filter").classList.toggle("darken"),
        setTimeout(() => {

            window.location = "/";

        }, 1500);
});

function highlightRules() {
    rulesPage.forEach(rule => {
        
        rule.style.color = "blueviolet"
        rule.style.filter = "blur(0)",

        rule.addEventListener("mouseenter", () => {

            rule.style.textShadow = "0 0 10px #8d2ce8, 0 0 15px #8d2ce8, 0 0 20px #8d2ce8"

        })

        rule.addEventListener("mouseleave", () => {

            rule.style.textShadow = ""

        })
    })
}

/* var keyCombination = "minecraft"
var writtenKeys = []
var splicedKeys = []

for (let i = 0; i < keyCombination.length; i++) {
    splicedKeys.push(keyCombination.toLowerCase().charAt(i))
}

const words = document.querySelectorAll(".word")

document.addEventListener("keydown", (e) => {
    var key = String.fromCharCode(e.keyCode)
    
    writtenKeys.push(key.toLowerCase())

    for (let i = 0; i < writtenKeys.length; i++) {
        if (writtenKeys[i] !== splicedKeys[i]) {
            writtenKeys = []
        }
    }

    if (splicedKeys.toString() === writtenKeys.toString()) {

        words.forEach(word => {
            word.style.fontFamily = "Minecraft Enchantment Table"
        })

    }
}) */