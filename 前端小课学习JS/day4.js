let titles = [
    "坚持学习",
    "共同努力",
    "today is 第四天",
    "come on"
];

let addText = function () {
    let index = Math.floor(Math.random() * titles.length);
    let div = document.createElement("div");
    let textNode = document.createTextNode(titles[index]);
    div.appendChild(textNode);
    div.style.color = "#FE7235";
    div.style.lineHeight = 2;
    let contentDiv = document.getElementById("content");
    contentDiv.appendChild(div);
}

function clickscroll() {
    let dBox = document.getElementById('d');
    if (dBox) {
        let left = dBox.offsetLeft;
        let navBox = document.getElementById('nav-box');
        if (navBox) {
           // clientWidth 元素的宽度
            navBox.scrollTo(navBox.clientWidth / 2 - dBox.clientWidth / 2 - 15, 0);
        }
    }
}