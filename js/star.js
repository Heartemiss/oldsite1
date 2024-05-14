var bloodAmount = 0;
var bloodMax = 100;
var bloodPercent = 0;
var bloodMeter = document.getElementById("bloodAmount");

var power = 0;

var paused = false;
var maxText = 250;
var wordChance = 10;
var powerWords = ['fhalma', 'phlegeth', 'chtenff', 'gnaiih', 'naflnglui', 'kadishtu', 'ebunma', 'tharanak', 'vulgtm', 'shtunggli', 'nglui', 'throd', 'naflep', 'tharanakagl', 'shtunggli', 'sgnwahlor', 'phebunma', 'Naflhastur', 'chaugnar', 'tsathoggua', ]

function addBlood() {
    if (bloodAmount < bloodMax) {
        bloodAmount += 15;
        bloodPercent = Math.floor((bloodAmount/bloodMax)*100);
        bloodMeter.innerHTML = "Blood: " + bloodAmount + " (" + bloodPercent + "%)";
    }
}

function resetBlood() {
    bloodAmount = 0;
    bloodPercent = 0;
    bloodMeter.innerHTML = "Blood: " + bloodAmount + " (0%)";
}

function givePower(elmt) {
    power ++;
    document.getElementById("powerAmount").innerHTML = "Power: " + power;
    elmt.remove();
}

function randomText(length) {
    var text = document.getElementById("text");
    var possibleWords = ['owtutetr', 'onwditsihe', 'tedolosquino', 'sim', 'tow', 'esotihedena', 'nyaktewdr', 'hosnisa', 'del', 'dwkwlosf', 'imohig', 'hebowsyscoys', 'pwhese', 'ogori', 'nafwwdadpede', 'metmutmore', 'sheshe', 'dla', 'pong', 'atedetade', 'e', 'xehodin', 'osennefhudina', 'tis', 'tedanse', 'ktogeressar', 'nnasrevedif', 'duhlidemro', 'walinofna', 'roteheseti', 'ytosah', 'egderne', 'i', 'etohmoy', 'a', 'thehena', 'cutityxi', 'npidunoms', 'mutewtsolith', 'ngwhdadevatru', 'negaden', 'ditlednolg', 'hudtekweg', 'egabihered', 'shwphotos', 'nloningecob', 'eta', 'be', 'latishora', 'irytu', 'doretyihkatyt', 'vmahas', 'trede', 'lindas', 'i', 'bengeryud', 'fbrama', 'nwmoputke', 'scavgw', 'aplaf', 'edorejo', 'ntohnog', 'ete', 'nater', 'telet', 'lehetoh', 'edethycyy', 'rone', 'cirsovala', 'risrogpavo', 'neknsesir', 'dmintagre', 'wxychenko', 'usotac', 'fditerhusedc', 'tulegwk', 'yngasipa', 'oserso', 'te', 'latakaduhn', 'sva', 'niywranytahwgo', 'ces', 'tewetotorseli', 'tihbu', 'ehlug', 'oghwsohtupil', 'storothosco', 'luneber', 'gedoreg', 'galfewre', 'etelyttish', 'ebreshenep', 'twtedwgo', 'ugusritoneay', 'bu', 'hsecufoc', 'ehedenfatei', 'lhinesten', 'eroya', 'sndeewo', 'bhwlo', 'le', 'ccen', 'nbiovs', 'dreletiguhde', 'tefehalode', 'itayselar', 'hahite', 'yitdonep', 'ilesrudwler', 'taparednwdo', 'relitei', 'relogmatw', 'eheredplah', 'ghaco', 'rondoteton', 'pagho', 'preretatanu', 'kedyoyn', 'tele', 'etcuh', 'isaww', 'etro', 'sethygehefod', 'su', 'fwhgipet', 'ossahs', 'ostitwh', 'rwhnehgo', 'lekw', 'wsinenatesae', 'ett', 'asene', 'tatedudeninim', 'pewbowc', 'dlohuysaac', 'pehan', 'toprihne', 'eheelni', 'nihsere', 'ennedabyloyi', 'ndef', 'de', 'rca', 'tebsehised', 'mannioquo', 'fseag', 'aresehd', 'aseyhowwramote', 'detecy', 'tesasenkonewri', 'inelwingew', 'mesale', 'owheles', 'ett', 'ninnuty', 'rtyllajko', 'cos', 'xotohkedry', 'orirudupko', 'hhirin', 'birrat', 'angaam', 'yusebote', 'enwde', 'orhamahta', 'erufdudoget', 'ertenolyd', 'adap', 'or', 'ceynadoden', 'anfets', 'inonesyontefu', 'hijyno', 'ottirersoti', 'dofibikc', 'yelesa', 'ebafrohmoone', 'to', 'odernone', 'rgawphippe', 'eshitti', 'edondadsid', 'tahynn', 'asifevakwletih', 'bmossesomuhey', 'fronyletonn', 'nofmy', 'twhili', 'gatinu', 'rhne', 'dronnrahal', 'urasisvi', 'whedrwhagetl', 'mocwhen', 'hatis', 'ysat', 'soswcifr', 'todu', 'ntegimat', 'bahalineihe', 'twoy', 'aesuttek', 'digtedeh', 'botsehodet', 'itaftweda', 'otidwse', 'haninihi', 'ihsab', 'emawhmo', 'nopyhuc', 'tribesusw', 'resasemesyfliv', 'edkatena', 'ednonnilisew', 'tepwtatrewt', 'ldwngehw', 'pnan', 'netini', 'omatewt', 'ongesset', 'ngigh', 'ehod', 'itotipedo', 'tmosapot', 'edripoymass', 'elirin', 'gunatw', 'ada', 'nnirurhedo', 'chintar', 'aleh', 'nkosseh', 'eykinillyvu', 'huylluned', 'un', 'ngirradyt', 'masiroscehhoy', 'esolonagov', 'ogaalalhe', 'htyvlahare', 'thasosso', 'ipiyvi', 'dedods', 'esh', 'teseeno', 'ngahyne', 'etihtotat', 'cabero']
    var randText = [];

    for (var i = 0; i < length; i++) {
        var randNumber = Math.floor(Math.random() * 101);  
        var randWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        if (randNumber <= wordChance) {
            var a = powerWords[Math.floor(Math.random() * powerWords.length)];
            var span = "<span class='powerWord' onclick='givePower(this)'>" + a + "</span>";
            randText.push(span);
        } else {
            randText.push(randWord);}
        
    }
    text.innerHTML = randText.join(' ');
}

function pause() {
    paused = !paused;
}

window.setInterval(function() {
    if (!paused) {
        randomText(maxText);
    }
}, 100)

window.setInterval(function() {
    bloodPercent = Math.floor((bloodAmount/bloodMax)*100);
    bloodMeter.innerHTML = "Blood: " + bloodAmount + " (" + bloodPercent + "%)";
    document.getElementById("bar").style.background = "linear-gradient(0deg, rgba(83,0,25,1) 0%, rgba(212,0,40,1) " + bloodPercent + "%, rgba(0,0,0,0) " + (bloodPercent) + "%)";
}, 100)