/* 
TODO
-Get tabs working
-Add shop upgrades
-Work out game flow
*/
var gameData = {
    amounts: {
        worship: 0,
        blood: 0,
        power: 0,
        followers: 0,
        sacrifices: 0,
    },
    max: {
        blood: 100,
        power: 10,
    },
    upgrades: {
        temple: {
            name: "Temple",
            type: "building",
            amount: -1,
        }
    },
    generators: {
        worship: {
            perClick: 1,
        },
        followers: {
            amount: 0,
            max: function() {
                var temples = gameData.upgrades.temple.amount;
                return temples * 10 + 10;
            },
        }
    },
    limits: {
    },
    knowledge: {
        powerWords: ['fhalma', 'phlegeth', 'chtenff', 'gnaiih', 'naflnglui', 'kadishtu', 'ebunma', 'tharanak', 'vulgtm', 'shtunggli', 'nglui', 'throd', 'naflep', 'tharanakagl', 'shtunggli', 'sgnwahlor', 'phebunma', 'Naflhastur', 'chaugnar', 'tsathoggua', ],
        knownWords: [],
        wordChance: 2,
    },
    boons: {
        boonList: [],
        boonsId: 0,
    }
}

var shop = {
    temple: {
        cost: {
            worship: 10,
            blood: 10,
        }
    }
}

var pondering = false;
var paused = false;

function buy(item) {
    var toBuy = shop[item];
    var buyCost = toBuy.cost;
    console.log(buyCost)
    var numThings = gameData.upgrades[item].amount;
    
    if (numThings < 0) numThings = 0;
    
    var toAdd = {};
    for (var k in buyCost) {
        var have = gameData.amounts[k];
        console.log(buyCost[k])
        console.log(have)
        if (have < buyCost[k]) {
            console.log("You don't have enough to buy")
            return false;
        } else {
            toAdd[k] = have - buyCost[k];
        }
    }
    console.log(toAdd)
    Object.assign(gameData.amounts, toAdd);
    console.log(gameData.amounts)
    numThings ++;;
    console.log(numThings)
}

function pause() {
    paused = !paused;
    document.getElementById("book").classList.toggle("hide");
}

function ponder() {
    if (!pondering) {
        pondering = !pondering;
        setTimeout(function() {
            pondering = !pondering;
        }, 2000)
    }
}

//Tabs
function openTab(tabName, pageName) {
    let tabcontent = document.querySelectorAll('.tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.querySelectorAll('.tablinks');
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(pageName).style.display = "flex";
    document.getElementById(tabName).classList.add("active");
}

//Actions
function addBlood() {
    if (gameData.amounts.blood < gameData.max.blood) {
        gameData.amounts.blood += 10;
        document.getElementById("bloodAmount").innerHTML = "Blood: " + gameData.amounts.blood + "/" + gameData.max.blood;
    }
}
function addWorship() {
        gameData.amounts.worship += 10;
        document.getElementById("worshipAmount").innerHTML = "Worship: " + gameData.amounts.worship;
}
function resetBlood() {
    blood = 0;
    document.getElementById("bloodAmount").innerHTML = "Blood: " + blood + "/" + bloodMax;
}
function givePower(elmt) {
    if (gameData.amounts.power < gameData.max.power) {
        gameData.amounts.power ++;
        document.getElementById("powerAmount").innerHTML = "Power: " + gameData.amounts.power + "/" + gameData.max.power;
        elmt.remove();
    }
}

//Random Text
function randomText(length) {
    var text = document.getElementById("book");
    var possibleWords = ['owtutetr', 'onwditsihe', 'tedolosquino', 'sim', 'tow', 'esotihedena', 'nyaktewdr', 'hosnisa', 'del', 'dwkwlosf', 'imohig', 'hebowsyscoys', 'pwhese', 'ogori', 'nafwwdadpede', 'metmutmore', 'sheshe', 'dla', 'pong', 'atedetade', 'e', 'xehodin', 'osennefhudina', 'tis', 'tedanse', 'ktogeressar', 'nnasrevedif', 'duhlidemro', 'walinofna', 'roteheseti', 'ytosah', 'egderne', 'i', 'etohmoy', 'a', 'thehena', 'cutityxi', 'npidunoms', 'mutewtsolith', 'ngwhdadevatru', 'negaden', 'ditlednolg', 'hudtekweg', 'egabihered', 'shwphotos', 'nloningecob', 'eta', 'be', 'latishora', 'irytu', 'doretyihkatyt', 'vmahas', 'trede', 'lindas', 'i', 'bengeryud', 'fbrama', 'nwmoputke', 'scavgw', 'aplaf', 'edorejo', 'ntohnog', 'ete', 'nater', 'telet', 'lehetoh', 'edethycyy', 'rone', 'cirsovala', 'risrogpavo', 'neknsesir', 'dmintagre', 'wxychenko', 'usotac', 'fditerhusedc', 'tulegwk', 'yngasipa', 'oserso', 'te', 'latakaduhn', 'sva', 'niywranytahwgo', 'ces', 'tewetotorseli', 'tihbu', 'ehlug', 'oghwsohtupil', 'storothosco', 'luneber', 'gedoreg', 'galfewre', 'etelyttish', 'ebreshenep', 'twtedwgo', 'ugusritoneay', 'bu', 'hsecufoc', 'ehedenfatei', 'lhinesten', 'eroya', 'sndeewo', 'bhwlo', 'le', 'ccen', 'nbiovs', 'dreletiguhde', 'tefehalode', 'itayselar', 'hahite', 'yitdonep', 'ilesrudwler', 'taparednwdo', 'relitei', 'relogmatw', 'eheredplah', 'ghaco', 'rondoteton', 'pagho', 'preretatanu', 'kedyoyn', 'tele', 'etcuh', 'isaww', 'etro', 'sethygehefod', 'su', 'fwhgipet', 'ossahs', 'ostitwh', 'rwhnehgo', 'lekw', 'wsinenatesae', 'ett', 'asene', 'tatedudeninim', 'pewbowc', 'dlohuysaac', 'pehan', 'toprihne', 'eheelni', 'nihsere', 'ennedabyloyi', 'ndef', 'de', 'rca', 'tebsehised', 'mannioquo', 'fseag', 'aresehd', 'aseyhowwramote', 'detecy', 'tesasenkonewri', 'inelwingew', 'mesale', 'owheles', 'ett', 'ninnuty', 'rtyllajko', 'cos', 'xotohkedry', 'orirudupko', 'hhirin', 'birrat', 'angaam', 'yusebote', 'enwde', 'orhamahta', 'erufdudoget', 'ertenolyd', 'adap', 'or', 'ceynadoden', 'anfets', 'inonesyontefu', 'hijyno', 'ottirersoti', 'dofibikc', 'yelesa', 'ebafrohmoone', 'to', 'odernone', 'rgawphippe', 'eshitti', 'edondadsid', 'tahynn', 'asifevakwletih', 'bmossesomuhey', 'fronyletonn', 'nofmy', 'twhili', 'gatinu', 'rhne', 'dronnrahal', 'urasisvi', 'whedrwhagetl', 'mocwhen', 'hatis', 'ysat', 'soswcifr', 'todu', 'ntegimat', 'bahalineihe', 'twoy', 'aesuttek', 'digtedeh', 'botsehodet', 'itaftweda', 'otidwse', 'haninihi', 'ihsab', 'emawhmo', 'nopyhuc', 'tribesusw', 'resasemesyfliv', 'edkatena', 'ednonnilisew', 'tepwtatrewt', 'ldwngehw', 'pnan', 'netini', 'omatewt', 'ongesset', 'ngigh', 'ehod', 'itotipedo', 'tmosapot', 'edripoymass', 'elirin', 'gunatw', 'ada', 'nnirurhedo', 'chintar', 'aleh', 'nkosseh', 'eykinillyvu', 'huylluned', 'un', 'ngirradyt', 'masiroscehhoy', 'esolonagov', 'ogaalalhe', 'htyvlahare', 'thasosso', 'ipiyvi', 'dedods', 'esh', 'teseeno', 'ngahyne', 'etihtotat', 'cabero']
    var randText = [];

    for (var i = 0; i < length; i++) {
        var randNumber = Math.floor(Math.random() * 101);  
        var randWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        if (randNumber <= gameData.knowledge.wordChance) {
            var a = gameData.knowledge.powerWords[Math.floor(Math.random() * gameData.knowledge.powerWords.length)];
            var span = "<span class='powerWord' onclick='givePower(this)'>" + a + "</span>";
            randText.push(span);
        } else {
            randText.push(randWord);}
        
    }
    text.innerHTML = randText.join(' ');
}

//On Page Load
function initPage() {
    document.getElementById("starTab").click();
}

window.setInterval(function() {
    if (!pondering && !paused) {
        randomText(100);
    }
}, 100)

//Main Game Loop
window.setInterval(function() {
    if (!paused) {
    document.getElementById("worshipAmount").innerHTML = "Worship: " + gameData.amounts.worship;
    document.getElementById("bloodAmount").innerHTML = "Blood: " + gameData.amounts.blood + "/" + gameData.max.blood;
    document.getElementById("powerAmount").innerHTML = "Power: " + gameData.amounts.power + "/" + gameData.max.power;
    document.getElementById("star").style.background = "linear-gradient(0deg, rgba(83,0,25,1) 0%, rgba(212,0,40,1) " + ((gameData.amounts.blood/gameData.max.blood)*100) + "%, rgba(0,0,0,0) " + ((gameData.amounts.blood/gameData.max.blood)*100+1) + "%)";
    }
}, 100)