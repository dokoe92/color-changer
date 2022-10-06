let btn = document.querySelector(".btn");
btn.addEventListener("click", changeColor);

function changeColor() {
    let hexNumber1 = getRandomHex();
    let hexNumber2 = getRandomHex();
    document.body.style.background= `linear-gradient(to right, #${hexNumber1}, #${hexNumber2})`;
    document.querySelector(".hexName").innerHTML=`background: linear-gradient(to right, ${hexNumber1}, ${hexNumber2})` ;
}

function getRandomHex() {
    let hexCode = [];
    let hexAlpha = ["A", "B", "C", "D", "E", "F"];

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 2);
        switch(random) {
            case 0:
                hexCode.push(Math.floor(Math.random() * 10));
                break;
            case 1:
                hexCode.push(hexAlpha[Math.floor(Math.random() * hexAlpha.length)]);
                break;
        }
    }
    let hexNumber = hexCode.join("");
    return hexNumber;
}

