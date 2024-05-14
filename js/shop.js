var lootItems = ["sword", "armor", "pants", "gold"];
var bagItems = [];

function transfer(item) {
    let pos = lootItems.indexOf(item);
    console.log(pos);
    lootItems.splice(pos, 1);
    document.getElementById(item).remove();

    //place new item in bag
    bagItems.push(item);
    newElement = document.createElement("div");
    document.getElementById("bag").appendChild(newElement);
    newElement.className = "item";
    newElement.id = item;
    newElement.innerHTML = bagItems[bagItems.indexOf(item)];
}

function takeAll() {
    //querySelectorAll and getElementsByClassName create an array of results. 
    //Functions cannot be called on them without looping through the array like so.
    var matches = document.querySelectorAll('div.item');
    for (var i = 0; i < matches.length; i++) {
        transfer(matches[i].id);
        
    }
}

function restock() {
    if (lootItems.length == 0){
        for (var i = 0; i < 10; i++) {
            var newItem = "item" + lootItems.length;
            lootItems.push(newItem);
            newElement = document.createElement("div");
            document.getElementById("loot").appendChild(newElement);
            newElement.className = "item";
            newElement.id = lootItems[i];
            newElement.setAttribute("onclick", "transfer('" + newElement.id + "')");
            newElement.innerHTML = lootItems[i];
        }
    }
}

function pageLoad() {
    for (i = 0; i < lootItems.length; i++) {
        newElement = document.createElement("div");
        document.getElementById("loot").appendChild(newElement);
        newElement.className = "item";
        newElement.id = lootItems[i];
        newElement.setAttribute("onclick", "transfer('" + newElement.id + "')");
        newElement.innerHTML = lootItems[i];
 };
}