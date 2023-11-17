
const parentElement = document.querySelector(".container") as HTMLElement;

window.onload = () => {

  const inputs = document.querySelectorAll("input");
  inputs.forEach((el) => {
    el.addEventListener("change", setCSSValue);
  });
};

const setCSSValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.classList.contains("parent")) {
    if (!parentElement) return null;
    parentElement.style[target.id] = target.value;
  } else if (target.classList.contains("element")) {
    const childElements = document.querySelectorAll(
      ".child"
    ) as NodeListOf<HTMLElement>;

    childElements.forEach((child: HTMLElement) => {
      console.log(child);

      child.style[target.id] += target.value;
    });
  }
};

const addChild = () => {
  const childElements = document.querySelectorAll(
    ".child"
  ) as NodeListOf<HTMLElement>;
  if (childElements.length > 0) {
    console.log(childElements[0].innerText);

    const newEl = childElements[0].cloneNode(true);
    newEl.addEventListener("click", removeElement);
    parentElement.appendChild(newEl);
  } else {
    const div = document.createElement("div");
    div.classList.add("child");
    div.innerText = "Click to remove";
    div.addEventListener("click", removeElement);
    const inputs = document.querySelectorAll(
      "inputs.element"
    ) as NodeListOf<HTMLInputElement>;
    inputs.forEach((input) => {
      div.style[input.id] += input.value;
    });
    parentElement.appendChild(div);
  }
};

const removeElement = (event: Event) => {
  const target = event.target as HTMLElement;
  target.remove();
};

const copyCode = (event:Event) => {
  const target = event.target as HTMLElement
  target.innerText = "Copied!"
  const string = `
.container {
    display: flex; 
    flex-direction: ${parentElement.computedStyleMap().get("flex-direction")};
    gap: ${parentElement.computedStyleMap().get("gap")};
    flex-wrap: ${parentElement.computedStyleMap().get("flex-wrap")}
 } 
.child {
    max-width: ${document.querySelector(".child")?.computedStyleMap().get("max-width")};
    height: ${document.querySelector(".child")?.computedStyleMap().get("height")};
    flex-grow: ${document.querySelector(".child")?.computedStyleMap().get("flex-grow")};
    flex-shrink: ${document.querySelector(".child")?.computedStyleMap().get("flex-shrink")};
    flex-basis: ${document.querySelector(".child")?.computedStyleMap().get("flex-basis")};
  }
  `
 navigator.clipboard.writeText(string)
}