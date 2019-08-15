function myFunction() {
    document.getElementById("demo").innerHTML = "段落被更改。";
}

function typing () {
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_'
        timer = setTimeout('typing()', 200)
    }
    else {
        divTyping.innerHTML = str//结束打字,移除 _ 光标
        clearTimeout(timer)
    }
}