var flag = 0;
function myFunction() {
    document.getElementById("myContent").innerHTML = "<a href=\"heart_jump.html\" title=\"点我撒！！点我撒！！\" >哇！<br><br>厉害啦！</a>";
}

function omo() {
    if (flag == 0){
        document.getElementById("music").src = "./images/omo.png";
    }
    else {
        document.getElementById("music").src = "./images/omo2.png";

    }
}

function oml() {
    if (flag == 0){
    document.getElementById("music").src = "./images/灰色爱心.png";
    }
    else {
        document.getElementById("music").src = "./images/爱心.png";

    }
}

function lighting() {
    flag = 1;

    var aud = document.getElementById("aud");
    var img = document.getElementById("music");
    aud.play();
    img.onclick = function() {
        if (aud.paused) {
            aud.play();
            flag = 1;
        } else {
            aud.pause();
            flag = 0;
        }
    }
    aud.addEventListener("play", function (e) {
        img.src="./images/爱心.png";
    }, false);
    aud.addEventListener("pause", function (e) {
        img.src="./images/灰色爱心.png";
    }, false);

}


function shake(o,end){
    var typ=["marginTop","marginLeft"],rangeN=100,timeout=10;
    var range=Math.floor(Math.random()*rangeN);
    var typN=Math.floor(Math.random()*typ.length);
    o["style"][typ[typN]]=""+range+"px";
    var shakeTimer=setTimeout(function(){shake(o,end)},timeout);
    o[end]=function(){clearTimeout(shakeTimer)};
}

function typing(){
        var divTyping = document.getElementById('demo');
        if (i <= str.length) {
            divTyping.innerHTML = str.slice(0, i++) + '_';
            setTimeout('typing()', 200);//递归调用
        }
        else{
            divTyping.innerHTML = str;//结束打字,移除 _ 光标
        }
}