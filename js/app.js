let icons = [
    { icon: "fa fa-calculator", name: "calculator" },
    { icon: "fa fa-calendar", name: "calender" },
    { icon: "fa fa-check-circle", name: "circle" },
    { icon: "fa fa-backward", name: "backward" },
    { icon: "fa fa-check-circle", name: "circle" },
    { icon: "fa fa-adjust", name: "adjust" },
    { icon: "fa fa-dashcube", name: "dashcube" },
    { icon: "fa fa-edge", name: "edge" },
    { icon: "fa fa-jpy", name: "jpy" },
    { icon: "fa fa-certificate", name: "certificate" },
    { icon: "fa fa-cc-visa", name: "visa" },
    { icon: "fa fa-cc-discover", name: "discover" }
];

function iconload() {
    var element = document.querySelector(".emoji_container");
    var innerdata = "";
    icons.forEach(function(items) {
        innerdata += `
    <div>
    <i class="${items.icon}"></i>
    <p>"${items.icon}"</p>
    </div>
    
    `
    });
    element.innerHTML = innerdata;
}

iconload();