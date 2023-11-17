var parentElement = document.querySelector(".container");
window.onload = function () {
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function (el) {
        el.addEventListener("change", setCSSValue);
    });
};
var setCSSValue = function (event) {
    var target = event.target;
    if (target.classList.contains("parent")) {
        if (!parentElement)
            return null;
        parentElement.style[target.id] = target.value;
    }
    else if (target.classList.contains("element")) {
        var childElements = document.querySelectorAll(".child");
        childElements.forEach(function (child) {
            console.log(child);
            child.style[target.id] += target.value;
        });
    }
};
var addChild = function () {
    var childElements = document.querySelectorAll(".child");
    if (childElements.length > 0) {
        console.log(childElements[0].innerText);
        var newEl = childElements[0].cloneNode(true);
        newEl.addEventListener("click", removeElement);
        parentElement.appendChild(newEl);
    }
    else {
        var div_1 = document.createElement("div");
        div_1.classList.add("child");
        div_1.innerText = "Click to remove";
        div_1.addEventListener("click", removeElement);
        var inputs = document.querySelectorAll("inputs.element");
        inputs.forEach(function (input) {
            div_1.style[input.id] += input.value;
        });
        parentElement.appendChild(div_1);
    }
};
var removeElement = function (event) {
    var target = event.target;
    target.remove();
};
var copyCode = function (event) {
    var _a, _b, _c, _d, _e;
    var target = event.target;
    target.innerText = "Copied!";
    var string = "\n.container {\n    display: flex; \n    flex-direction: ".concat(parentElement.computedStyleMap().get("flex-direction"), ";\n    gap: ").concat(parentElement.computedStyleMap().get("gap"), ";\n    flex-wrap: ").concat(parentElement.computedStyleMap().get("flex-wrap"), "\n } \n.child {\n    max-width: ").concat((_a = document.querySelector(".child")) === null || _a === void 0 ? void 0 : _a.computedStyleMap().get("max-width"), ";\n    height: ").concat((_b = document.querySelector(".child")) === null || _b === void 0 ? void 0 : _b.computedStyleMap().get("height"), ";\n    flex-grow: ").concat((_c = document.querySelector(".child")) === null || _c === void 0 ? void 0 : _c.computedStyleMap().get("flex-grow"), ";\n    flex-shrink: ").concat((_d = document.querySelector(".child")) === null || _d === void 0 ? void 0 : _d.computedStyleMap().get("flex-shrink"), ";\n    flex-basis: ").concat((_e = document.querySelector(".child")) === null || _e === void 0 ? void 0 : _e.computedStyleMap().get("flex-basis"), ";\n  }\n  ");
    navigator.clipboard.writeText(string);
};
