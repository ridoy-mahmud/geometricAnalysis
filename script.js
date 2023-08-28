function setElementById(element) {
    const itemStr = document.getElementById(element);
    const item = parseFloat(itemStr.value);
    itemStr.value = "";
    return item;

};
function textArea(element) {
    // Create Element and Insert any Number into it 
    let textArea = document.getElementById("text_area");
    let p = document.createElement("p");
    p.innerText = `The Calculated Area is = ${element}`;
    textArea.appendChild(p);
};
document.getElementById("tringleBtn").addEventListener("click", function () {
    const tringleBase = setElementById("tringle_base");
    const tringleHeight = setElementById("tringle_height");
    const areaOfTringle = tringleBase * tringleHeight * 0.5;
    // Check if the Number is true or Not
    if (isNaN(areaOfTringle) === false) {
        textArea(areaOfTringle);
    }
});
document.getElementById("reactangle_btn").addEventListener("click", function () {
    const theWidth = setElementById("recWidth");
    const recLength = setElementById("recLen");
    const areaOFReactangle = theWidth * recLength;
    if (isNaN(areaOFReactangle) === false) {
        textArea(areaOFReactangle);
    }
});
document.getElementById("paraBtn").addEventListener("click", function () {
    let calculate = 10 * 12;
    console.log("click");
    textArea(calculate);
});
function calculateElementByParameter(element, n1, n2, n3) {
    document.getElementById(element).addEventListener("click", function () {
        let calculate = n1 * n2 * n3;
        textArea(calculate);
    });
};
calculateElementByParameter("rhomBtn", 0.5, 16, 8);
calculateElementByParameter("pentBtn", 0.5, 6, 10);
calculateElementByParameter("elipBtn", 3.14160, 4, 10);

// Remove Element from box
document.getElementById("text_area").addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
});
