var i = 0;
var c = document.querySelectorAll("ytd-channel-renderer:not(.ytd-item-section-renderer)").length;

L1N3();

function uzmanimNet () {    
    if (c == 0) return;

    el = document.querySelector('.ytd-subscribe-button-renderer');
    el.click();

    setTimeout(function () {
        var unSubBtn = document.getElementById("confirm-button").click();
        i++;
        c--;

        console.log(i + " Unsubscribed.(L1N3)");
        console.log(c + " left.");

        setTimeout(function () {
            el = document.querySelector("ytd-channel-renderer");
            el.parentNode.removeChild(el);

            L1N3();
        }, 250);
    }, 250);
}