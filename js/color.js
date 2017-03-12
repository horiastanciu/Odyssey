var c = [
    /*red*/ 0, 
    /*orange*/ 31,
    /*yellow*/ 57, 
    /*green*/ 106, 
    /*bleo*/ 170, 
    /*blue*/ 250, 
    /*indigo*/ 285, 
    /*violet*/ 310];

var cn = ["Red", "Orange", "Yellow", "Green","Bleo","Blue", "Indigo", "Violet"];
var cnc = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#4B0082", "#9400D3"];

var emotions = ["Anger","Anticipation","Acceptance" ,"Surprise","Joy","Calm","Wisdom","Intuition"];

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

var titles = [
"Antelope Canyon", "Adam's Peak", "Gobi Desert", "Costa Rica", "Caribbean Islands", "Cocos Island", "Northern Norway", "Kuala Lampur"];

var mapLinks = [
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d50509754.287347406!2d-92.25712528586133!3d39.40443020531485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x873411f49ba00e0b%3A0x98361608ad6aa79b!2sAntelope+Canyon%2C+Arizona+86040%2C+USA!3m2!1d36.8619103!2d-111.37433019999999!5e0!3m2!1sen!2suk!4v1489254817467",
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d59085089.65469032!2d1.9167977201028352!3d25.328797252825833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri+Lanka!3m2!1d7.873054!2d80.77179699999999!5e0!3m2!1sen!2suk!4v1489300757936",
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8856856.342244336!2d1.813213814035411!3d57.182895232435754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x468ed8ab24b56259%3A0x6f6c9c3b47548b67!2sBlues+Bar+Gobi+Desert+Canoe+Club%2C+Rautatienkatu+12%2C+33100+Tampere%2C+Finland!3m2!1d61.4991662!2d23.771282199999998!5e0!3m2!1sen!2suk!4v1489254199386",
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28911962.948987495!2d-62.017961193846325!3d29.960420178065977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sCosta+Rica!3m2!1d9.748916999999999!2d-83.753428!5e0!3m2!1sen!2suk!4v1489254271017",
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d26872041.629219837!2d-53.40923732947114!3d34.69815438309927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!3m2!1d53.480759299999995!2d-2.2426304999999997!4m5!1s0x8ea891645dcbfe77%3A0x61881cfaed12f6f3!2sPunta+Cana%2C+Dominican+Republic!3m2!1d18.582010099999998!2d-68.40547289999999!5e0!3m2!1sen!2suk!4v1489254314876",
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62695463.27624931!2d8.647666728228048!3d16.443739335441443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x487a52c0dfd893c5%3A0x8b0b8247e5e4a5e0!2sManchester+Airport%2C+Manchester!3m2!1d53.3588026!2d-2.2727303!4m5!1s0x2f0ec5897ee869c1%3A0xdbd142f010e39fa6!2sCocos+(Keeling)+Islands!3m2!1d-12.1706919!2d96.8417478!5e0!3m2!1sen!2suk!4v1489254532929",
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4502623.309266607!2d-0.24468143016986366!3d56.561660152134365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x487a52c0dfd893c5%3A0x8b0b8247e5e4a5e0!2sManchester+Airport%2C+Manchester+M90+1QX!3m2!1d53.3588026!2d-2.2727303!4m5!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo%2C+Norway!3m2!1d59.913868799999996!2d10.7522454!5e0!3m2!1sen!2suk!4v1489254700275",
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d60123353.450534135!2d11.994360233443814!3d23.110333955662682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x487a52c0dfd893c5%3A0x8b0b8247e5e4a5e0!2sManchester+Airport%2C+Manchester!3m2!1d53.3588026!2d-2.2727303!4m5!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala+Lumpur%2C+Federal+Territory+of+Kuala+Lumpur%2C+Malaysia!3m2!1d3.1390029999999998!2d101.686855!5e0!3m2!1sen!2suk!4v1489254565454"];

var wikiLinks = [
"https://en.wikipedia.org/wiki/Antelope_Canyon",
"https://en.wikipedia.org/wiki/Adam's_Peak",
"https://en.wikipedia.org/wiki/Gobi_Desert",
"https://en.wikipedia.org/wiki/Costa_Rica",
"https://en.wikipedia.org/wiki/List_of_Caribbean_islands",
"https://en.wikipedia.org/wiki/Cocos_(Keeling)_Islands",
"https://en.wikipedia.org/wiki/Northern_Norway",
"https://en.wikipedia.org/wiki/Kuala_Lumpur"]

var currentId = -1;
var hoverId = -1;


$(document).ready(function() {
    
    generateColorBar();
    makePhotoButtons();
    document.getElementsByClassName("toggle-button")[0].click();
});

function generateColorBar(){
    var allColors = document.createElement("div");
    allColors.className = "colorBarDiv2";
    var colorbar = document.getElementById("colorbar");
    allColors.style.height = "40px";
    for (var i=0; i<360; i++) {
        var color = document.createElement("div")
        color.setAttribute("id", "d" + i)
        color.style.backgroundColor = "hsl(" + i + ", 100%, 50%)";
        color.style.width = "0.278%";
        color.style.height = "40px";
        color.style.float = "left";
        color.onclick = function(e){
            var clickedId = e.target.id;
            var clickedColor = getClosestColor(clickedId.substring(1, clickedId.length), "click");
            focus();
        };  

        color.onmouseover = function(e){
            var clickedId = e.target.id;
            var clickedColor = getClosestColor(clickedId.substring(1, clickedId.length), "hover");
            hoverText();
        }

        color.onmouseout = function(e){
            deHover();
        }

        allColors.appendChild(color);
    }
    var showColor = document.createElement("div");
    showColor.className = "colorBarDiv1";
    var showColorClicked = document.createElement("div");
    showColorClicked.style.float = "left";
    showColorClicked.id = "clickDiv";
    showColorClicked.innerHTML = "";
    var showColorHover = document.createElement("div");
    // showColorHover.style.float = "left";
    showColorHover.id = "hoverDiv";
    showColorHover.innerHTML = "";

    showColor.appendChild(showColorClicked);
    showColor.appendChild(showColorHover);

    document.getElementById("colorbar").appendChild(showColor);
    document.getElementById("colorbar").appendChild(allColors);
}

function getClosestColor(a, type){
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
    if(type == "hover")
        hoverId = minIndex;
    else
        currentId = minIndex;
    return cn[minIndex];
}

function focus(a){
    // show bulb
    document.getElementById("lightBulb").style.display = "";
    
    addVideo();
    setMusic();
    generateInfo();
}

function hoverText(a){
    var hoverDiv = document.getElementById("hoverDiv");
    hoverDiv.innerHTML = allEmotions[hoverId] + " | " + titles[hoverId];
    hoverDiv.style.color = cnc[hoverId];
}

function deHover(){
    var hoverDiv = document.getElementById("hoverDiv");
    hoverDiv.innerHTML = "";
    hoverDiv.style.color = "black";
}


function addVideo(){
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
    source.src = "videos/" + cn[currentId] + ".mp4";

    video.appendChild(source);
    videoBackground.appendChild(video);

    //todo append as first child to body
    var body = document.getElementsByTagName("body")[0];
    body.insertBefore(videoBackground, body.firstChild);
}

function setMusic(){
    var iframe = document.getElementsByTagName("iframe")[1];
    iframe.src = spotify + spot[currentId];
}

function generateInfo(){
    var bulb = document.getElementById("lightBulb");

    bulb.onclick = function(){
        // show popup
        var pTitle = document.getElementById("titlepop");
        var pText = document.getElementById("noteDescription");
        var gMaps = document.getElementById("gmapsLink");
        // var skyscanner = document.getElementById("skyscanner");

        pTitle.innerHTML = titles[currentId];
        pText.innerHTML = descriptions[currentId] + " <a target=\"_blank\" href=\"" + wikiLinks[currentId] + "\">Read More</a>";
        gMaps.src = mapLinks[currentId];
        // skyscanner.innerHTML = skyPics[currentId] + ".png";
    }

}

    var apiKey = "31afc02fa79f441aa13fb2a8498c1376";
    var apiUrl = "https://api.projectoxford.ai/emotion/v1.0/recognize";

    var allEmotions = ["anger", "contempt", "exhausted", "fear", "happiness", "neutral", "sadness", "surprise"];
    var finalResult;

    function CallAPI(file, apiUrl, apiKey){
     $.ajax({
         url: apiUrl,
         beforeSend: function (xhrObj) {
             xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
             xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", apiKey);
         },
         type: "POST",
         data: file,
         processData: false
     })
     .done(function (response) {
         ProcessResult(response);
         getEmotion();
     })
     .fail(function (error) {
        finalResult = error.getAllResponseHeaders();
     });
    }

    function ProcessResult(response){
        var data = JSON.stringify(response);
        finalResult = data;
    }

    function getEmotion(){
        var emotions = JSON.parse(finalResult);//JSON.parse(document.getElementById("response").innerHTML);
        var faces = emotions.length;
        var bestEmotion;
        var bestEmotionValue;
        for(i=0;i<faces;i++){
            bestEmotion = "anger";
            bestEmotionValue = emotions[i].scores["anger"];
            for(var k in emotions[i].scores){
                if(emotions[i].scores[k] > bestEmotionValue){
                    bestEmotion = k;
                    bestEmotionValue = emotions[i].scores[k];
                }
            }
            console.log(bestEmotion + " " +  allEmotions.indexOf(bestEmotion));
        }
        var no = allEmotions.indexOf(bestEmotion);
        document.getElementById("d" + c[allEmotions.indexOf(bestEmotion)]).click();
        var hoverDiv = document.getElementById("hoverDiv");
        hoverDiv.innerHTML = allEmotions[no] + " | " + titles[no];
        hoverDiv.style.color = cnc[no];
    }

    Webcam.attach("#my_camera");

    function take_snapshot() {
        Webcam.snap( function(data_uri) {
            document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';

            var myFile = dataURLtoFile(data_uri, "marog.png");
            CallAPI(myFile, apiUrl, apiKey);

        } );
    }

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }

    function makePhotoButtons(){
        var toggleButton = document.getElementsByClassName("toggle-button")[0];
        var photoButton = document.getElementsByClassName("snapshot-button")[0];
        var camera = document.getElementById("my_camera");

        toggleButton.onclick = function(){
            if(photoButton.style.display == "none"){
                photoButton.style.display = "";
                camera.style.display = "";
            }else{
                photoButton.style.display = "none";
                camera.style.display = "none";
            }
        }
    }