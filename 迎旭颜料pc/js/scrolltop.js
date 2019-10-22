// JavaScript Document
function goTopEx() {
    var obj = document.getElementById("zhiding");
    function getScrollTop() {
        return $(window).scrollTop();
    }
    function setScrollTop(value) {
        $(window).scrollTop(value);
    }
    window.onscroll = function () { getScrollTop() > 700 ? obj.style.display = "" : obj.style.display = "none"; }
    obj.onclick = function () {
        var goTop = setInterval(scrollMove, 15);
        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}