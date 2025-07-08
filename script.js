const adRequests = performance.getEntriesByType("resource").filter(resource => {
  const isApiRequest = resource.initiatorType === 'xmlhttprequest' || resource.initiatorType === 'fetch';
  const isAdCall = resource.name.includes('ads?');

  return isApiRequest && isAdCall;
});

const data = {
    userAgent: navigator.userAgent,
    screen: {
        widht: window.screen.width,
        height: window.screen.height,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
    },
    dom: document.body.innerHTML,
    adRequests: adRequests,
    allBids: pbjs.getBidResponses(),
};
const jsonStr = JSON.stringify(data, null, 2);

const blob = new Blob([jsonStr], { type: "application/json" });

const a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = Math.random().toString(36).slice(-10) + ".json";

document.body.appendChild(a);
a.click();
document.body.removeChild(a);
