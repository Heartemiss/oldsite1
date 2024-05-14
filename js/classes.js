class Boon {
    constructor(name, icon, val, effect1, effect2, desc, id) {
        this.name = name;
        this.icon = icon;
        this.val = val;
        this.effect = effect1 + val + effect2;
        this.desc = desc;
        this.id = id;
    }
}

var benefactors = {
    1: {
        name: "Ctoga",
        icon: "css/img/icons/Ctoga.png",
        effect1: "Prayer is ",
        effect2: " times as effective.",
        desc: "The blessing of Ctoga drives you into a feverish prayer.",
    },
    2: {
        name: "Grizug",
        icon: "css/img/icons/Grizug.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Grizug demands more blood."
    },
    3: {
        name: "Acxubraxz",
        icon: "css/img/icons/Acxubraxz.png",
        effect1: "Newly created Boons are ",
        effect2: " times as effective.",
        desc: "Acxubraxz speaks and your mind is instantly expanded."
    },
    4: {
        name: "Grubbkitl",
        icon: "css/img/icons/Grubbkitl.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Grubbkitl demands more blood."
    },
    5: {
        name: "Iactoggdoxr",
        icon: "css/img/icons/Iactoggdoxr.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Iactoggdoxr demands more blood."
    },
    6: {
        name: "Iazhidra",
        icon: "css/img/icons/Iazhidra.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Iazhidra demands more blood."
    },
    7: {
        name: "Velpun",
        icon: "css/img/icons/Velpun.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Velpun demands more blood."
    },
    8: {
        name: "Vugrax",
        icon: "css/img/icons/Vugrax.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Vugrax demands more blood."
    },
    9: {
        name: "Yighendoxr",
        icon: "css/img/icons/Yighendoxr.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Yighendoxr demands more blood."
    },
    10: {
        name: "Yingilkreth",
        icon: "css/img/icons/Yingilkreth.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Yingilkreth demands more blood."
    },
    11: {
        name: "Yokiolthirc",
        icon: "css/img/icons/Yokiolthirc.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Yokiolthirc demands more blood."
    },
    12: {
        name: "Zitluxz",
        icon: "css/img/icons/Zitluxz.png",
        effect1: "Sacrifices are ",
        effect2: " times as effective.",
        desc: "Zitluxz demands more blood."
    }
}

var boons = [];
var boonsId = 0;

function createBoon() {
    if (boons.length < 5) {
        //increase boonsId to give new boon a unique ID number
        boonsId ++;
        //get random benefactor from benefactor lsit
        let rand = Math.floor(Math.random() * Object.keys(benefactors).length) + 1;
        //get a random integer from 1-10. This number will probably be determined in game data as the Boon power limit, which can be raised through upgrades
        let boonValue = Math.floor(Math.random() * 11) + 1;

        //create the boon from the randomly selected benefactor with the random boon value, then push the new boon into an array
        let myBoon = new Boon(benefactors[rand].name, benefactors[rand].icon, boonValue, benefactors[rand].effect1, benefactors[rand].effect2, benefactors[rand].desc, boonsId);
        boons.push(myBoon);
        
        //clone the Boon Template
        let boonList = document.querySelector("#boonList");
        let boonTemp = document.querySelector("#boonTemp");
        clone = boonTemp.content.cloneNode(true);

        //Assigns the new content to the generated boons content
        newImage = clone.querySelector(".boonImage").style.backgroundImage = "url(" + myBoon.icon + ")";
        newName = clone.querySelector("#boonName").innerHTML = myBoon.name;
        newEffect = clone.querySelector("#boonEffect").innerHTML = myBoon.effect;
        newDesc = clone.querySelector("#boonDesc").innerHTML = myBoon.desc;
        newId = clone.querySelector("#boonID").innerHTML = myBoon.id;

        //append the new clone to the div with id BoonList
        boonList.appendChild(clone);

        let boonEvent = document.querySelectorAll(".boon");
        for (var i = 0; i < boonEvent.length; i++) {
            boonEvent[i].addEventListener('mouseenter', mouseEnter);
            boonEvent[i].addEventListener('mouseleave', mouseLeave);
            boonEvent[i].addEventListener('click', onClick);
        }
    }
}

function clearBoons() {
    boons = [];
    document.getElementById("boonList").innerHTML = "";
}

function mouseEnter() {
    thisID = this.querySelector("#boonID").innerHTML;
    let selectID;
    for (var i = 0; i < boons.length; i++) {
        if (boons[i].id == thisID)
        selectID = i;
    }
    document.getElementById("popName").innerHTML = boons[selectID].name;
    document.getElementById("popEffect").innerHTML = boons[selectID].effect;
    document.getElementById("popDesc").innerHTML = boons[selectID].desc;
};

function mouseLeave() {
    document.getElementById("popName").innerHTML = "";
    document.getElementById("popEffect").innerHTML = "";
    document.getElementById("popDesc").innerHTML = "";
};

function onClick() {
    this.classList.toggle("active");
}