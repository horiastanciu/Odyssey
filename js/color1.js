var c = [
    /*red*/ 0, 
    /*orange*/ 31,
    /*yellow*/ 57, 
    /*green*/ 106, 
    /*bleo*/ 170, 
    /*blue*/ 250, 
    /*indigo*/ 285, 
    /*violet*/ 310];

var cn = [
    "Red", 
    "Orange", 
    "Yellow", 
    "Green",
    "Bleo",
    "Blue", 
    "Indigo", 
    "Violet"];

var emotions = [
    "Anger",
    "Anticipation",
    "Acceptance" ,
    "Surprise",
    "Joy",
    "Calm",
    "Wisdom",
    "Intuition"];

var spotify = "https://embed.spotify.com/?uri=";

var spot = [
"spotify:user:spotify:playlist:3InXOgDxJPeA05l6rQyDoe",
"spotify:user:spotify_uk_:playlist:1uR5XIi29PylxTvHs3cVPP",
"spotify:album:17O1CApsERLnvq52PbZZXE",
"spotify:album:4dp33vx7vWx93lxuxjNTz2",
"spotify:user:damitdavid:playlist:13ExJNKJY83GXFzT5mtCuq",
"spotify:user:desertrosedispensary:playlist:79lO1KljVi4CUxSSwQYtqL",
"spotify:user:lxurv:playlist:3MWVcmsyeBRVcNAHfgK4XH",
"spotify:user:spotify_uk_:playlist:6JC48D3eRvkUHACDtyu0Gs"
];

var titles = [
"Antelope Canyon",
"Adam's Peak",
"Gobi Desert",
"Costa Rica",
"Caribbean Islands",
"Cocos Island",
"Northern Norway",
"Kuala Lampur"];

var mapPics = [
"canyon",
"adam",
"gobi",
"costa",
"carribean",
"cocos",
"aurora",
"kuala"];

var skyPics = [
"redsky",
"orangesky",
"yellowsky",
"greensky",
"bleosky",
"bluesky",
"indigosky",
"violetsky"];




var ytStartTime =[
    50,
    30];

var nearestAirport = [
    ""
];

var descriptions = [
    /*red*/ `Antelope Canyon is a slot canyon in the American Southwest. It is located on Navajo land east of Page, Arizona. Antelope Canyon includes two separate, scenic slot canyon sections, referred to individually as "Upper Antelope Canyon" or "The Crack"; and "Antelope Canyon" or "The Corkscrew".
    Antelope Canyon was formed by erosion of Navajo Sandstone,[2] primarily due to flash flooding and secondarily due to other sub-aerial processes.`,
    /*orange*/ `Sri Lanka\'s Adam\'s Peak is tall conical mountain located in central Sri Lanka. It is well known for the Sri Pada, i.e., \"sacred footprint\", a 1.8 m (5 ft 11 in) rock formation near the summit, which in Buddhist tradition is held to be the footprint of the Buddha, in Hindu tradition that of Shiva and in Islamic and Christian tradition that of Adam, or that of St. Thomas.`,
    /*yellow*/ `The Gobi Desert is a large desert region in Asia. It covers parts of northern and northwestern China, and of southern Mongolia. The desert basins of the Gobi are bounded by the Altai Mountains and the grasslands and steppes of Mongolia on the north, by the Taklamakan Desert to the west, by the Hexi Corridor and Tibetan Plateau to the southwest, and by the North China Plain to the southeast. The Gobi is most notable in history as part of the great Mongol Empire, and as the location of several important cities along the Silk Road.`,
    /*green*/ `Costa Rica is home to a rich variety of plants and animals. While the country has only about 0.1% of the world\'s landmass, it contains 5% of the world\'s biodiversity.
    Around 25% of the country\'s land area is in protected national parks and protected areas, the largest percentage of protected areas in the world (developing world average 13%, developed world average 8%).`,
    /*bleo*/ `Situated largely on the Caribbean Plate, the region comprises more than 700 islands, islets, reefs and cays.
    These islands generally form island arcs that delineate the eastern and northern edges of the Caribbean Sea. The Caribbean islands, consisting of the Greater Antilles on the north and the Lesser Antilles on the south and east (including the Leeward Antilles), are part of the somewhat larger West Indies grouping, which also includes the Lucayan Archipelago (comprising the Bahamas and Turks and Caicos Islands) north of the Greater Antilles and Caribbean Sea. In a wider sense, the mainland countries of Belize, Guyana, Suriname and French Guiana are often included due to their political and cultural ties with the region.`,
    /*blue*/ `Island National Park was designated a World Heritage Site by UNESCO in 1997.
    Thanks to the breathtaking marine life in its waters (see Fauna section below), Cocos Island was named one of the best 10 scuba diving spots in the world by PADI (Professional Association of Diving Instructors) and a \"must do\" according to diving experts.`,
    /*indigo*/ `The Aurora is an incredible light show caused by collisions between electrically charged particles released from the sun that enter the earth\'s atmosphere and collide with gases such as oxygen and nitrogen. The lights are seen around the magnetic poles of the northern and southern hemispheres.
    Historically, the chances of seeing the northern lights are best viewed in Northern Norway between October and March, because the polar night makes them easier to see. The northern lights are visible in a belt around the magnetic North Pole.`,
    /*violet*/ `Early Kuala Lumpur was a small town that suffered from many social and political problems – the buildings were made of wood and atap (palm frond thatching) that were prone to fire, lack of proper sanitation plagued the town with diseases, and it suffered from a constant threat of flooding.
    Nowadays, the city truly is a metropolis with a big central business district with many tall skyscrapers, many international renowned hotels and numerous luxurious shopping malls.`
];

var textColor = [
"#FFFFFF",
"#000000",
"#000000",
"#000000",
"#000000",
"#FFFFFF",
"#FFFFFF",
"#FFFFFF"];

var lastFocused = "d0";
var lastHovered = "d0";

var currentId = -1;
var hoverId = -1;

$(document).ready(function() {
    for (var i=0; i<360; i++) {
        var color = document.createElement("span")
        color.setAttribute("id", "d" + i)
        color.style.backgroundColor = "hsl(" + i + ", 100%, 50%)"
        color.style.msTransform = "rotate(" + i + "deg)"
        color.style.webkitTransform = "rotate(" + i + "deg)"
        color.style.MozTransform = "rotate(" + i + "deg)"
        color.style.OTransform = "rotate(" + i + "deg)"
        color.style.transform = "rotate(" + i + "deg)"
        color.onclick = function(e){
            var clickedId = e.target.id;
            var clickedColor = getClosestColorSetIndex(clickedId.substring(1, clickedId.length));
            focus(clickedId, clickedColor);
        };  

        color.onmouseover = function(e){
            var clickedId = e.target.id;
            var clickedColor = getClosestColor(clickedId.substring(1, clickedId.length));
            hoverText(clickedId, clickedColor);
        }

        color.onmouseout = function(e){
            deHover();
        }
        document.getElementById('colorwheel').appendChild(color);
    }
    document.getElementById("intro").addEventListener('loadedmetadata', function() {
        this.currentTime = 50;
    }, false);

    generateInfo();
});

function getClosestColorSetIndex(a, b){
    var d = [];
    for(i=0;i<c.length;i++){
        d.push(Math.abs(c[i] - a));
    }
    d[0] = Math.abs(360-d[0]);
    var minValue = d[0];
    var minIndex = 0;
    for(i=0;i<d.length;i++){
        if(d[i] < minValue){
            minValue = d[i];
            minIndex = i;
        }
    }
    currentId = minIndex;
    return cn[minIndex];
}

function getClosestColor(a, b){
    var d = [];
    for(i=0;i<c.length;i++){
        d.push(Math.abs(c[i] - a));
    }
    d[0] = Math.abs(360-d[0]);
    var minValue = d[0];
    var minIndex = 0;
    for(i=0;i<d.length;i++){
        if(d[i] < minValue){
            minValue = d[i];
            minIndex = i;
        }
    }
    hoverId = minIndex;
    return cn[minIndex];
}

function focus(a, clickedColor){
    document.getElementById("lightBulb").style.display = "";
    console.log("CE PULA MEA");
    var a0 = document.getElementById(lastFocused);
    var a1 = document.getElementById(a);

    a0.className = "";
    a0.innerHTML = "";
    a0.style.opacity = 0.1;
    lastFocused = a;

    a1.className = "spanActive";
    a1.innerHTML = emotions[currentId];
    a1.style.opacity = 5;
    a1.style.textAlign = "center";
    a1.style.zIndex = "9999";
    addVideo(clickedColor);
    setMusic();

    if(a.substring(1, a.length) > 180){
        a1.className += " upsideDownText";
    }
}

function hoverText(a, clickedColor){
    var a0 = document.getElementById(lastHovered);
    var a1 = document.getElementById(a);

    if(!a0.className.includes("spanActive")){
        a0.style.opacity = 0.1;
        a0.innerHTML = "";
    }
    lastHovered = a;

    //console.log(hoverId);
    a1.style.opacity = 4;
    a1.innerHTML = emotions[hoverId];
    a1.style.textAlign = "center";
    a1.style.color = textColor[hoverId];
    a1.style.zIndex = "9999";
}

function deHover(){
    var spans = document.getElementsByTagName("span");
    for(i=0;i<spans.length;i++){
        if(spans[i].style.opacity == 4 && !spans[i].className.includes("spanActive")){
            spans[i].style.opacity = 0.1;
            spans[i].innerHTML = "";
            break;
        }
    }
}
var k = 0;
function addVideo(a){

    // get id of yt video
    var ytId = cn.indexOf(a);

    // delete current 
    var toDelete = document.getElementsByClassName("video-background")[0];
    toDelete.parentElement.removeChild(toDelete);

    // create new element
    var videoBackground = document.createElement("div");
    videoBackground.className = "video-background";

    var video = document.createElement("video");
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.id = "intro";
    video.className = "fullscreen-bg__video";
    video.frameBorder = "0";
    video.allowfullscreen = true;

    var source = document.createElement("source");
    source.src = "videos/" + cn[ytId] + ".mp4";

    video.appendChild(source);
    videoBackground.appendChild(video);

    //todo append as first child to body
    var body = document.getElementsByTagName("body")[0];
    body.insertBefore(videoBackground, body.firstChild);
}

function setMusic(){
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.src = spotify + spot[currentId];
}

function generateInfo(){
    var bulb = document.getElementById("learn");
    console.log("aa");
    //var popup = document.getElementById("popu lu horia");

    bulb.onclick = function(){
        // show popup
        var pTitle = document.getElementById("titlepop");
        var pText = document.getElementsByClassName("content")[0];
        var gMaps = document.getElementById("popupMap");
        var skyscanner = document.getElementById("popupMap2");

        pTitle.innerHTML = titles[currentId];
        pText.innerHTML = descriptions[currentId];
        gMaps.src = "images/" + mapPics[currentId] + ".png";
        skyscanner.src = "images/" + skyPics[currentId] + ".png";
    }
}


