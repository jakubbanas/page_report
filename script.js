const data = {
    userAgent: navigator.userAgent,
    screen: {
        widht: window.screen.width,
        height: window.screen.height,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
    },
    dom: document.body.innerHTML,
};
const jsonStr = JSON.stringify(data, null, 2);

const blob = new Blob([jsonStr], { type: "application/json" });

const a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = Math.random().toString(36).slice(-10) + ".json";

document.body.appendChild(a);
a.click();
document.body.removeChild(a);
