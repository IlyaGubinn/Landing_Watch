var detects = {
    paste: [],
    timer: 0,
    interval: null
};

function onPaste(t) {
    var e = t.target.tagName,
        n = $(t.target).attr("name");
    detects.paste.push({
        name: n,
        tag: e
    })
}

function startTimer() {
    detects.interval = setInterval((function () {
        detects.timer++
    }), 1e3)
}

function stopTimer() {
    clearInterval(detects.interval)
}
startTimer(), $((function () {
    $(document.body).on("paste", onPaste), $("form").on("submit", (function () {
        stopTimer(), delete detects.interval;
        var t = JSON.stringify(detects);
        return t = t.replace(/"/g, "'"), $('<input type="hidden" name="detects" value="' + t + '">').appendTo(this), startTimer(), !0
    }))
}));