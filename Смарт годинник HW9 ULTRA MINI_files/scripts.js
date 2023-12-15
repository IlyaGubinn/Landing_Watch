$(document).ready((function () {
    function e(e) {
        return "<span>" + (e = ("00" + e).substr(-2))[0] + "</span><span>" + e[1] + "</span>"
    }
    $("a[href^='#']").click((function () {
            var e = $(this).attr("href");
            return $("html, body").animate({
                scrollTop: $(e).offset().top + "px"
            }), !1
        })),
        function t() {
            var n = new Date,
                o = new Date;
            o.setHours(23), o.setMinutes(59), o.setSeconds(59), 23 === n.getHours() && 59 === n.getMinutes() && 59 === n.getSeconds && o.setDate(o.getDate() + 1);
            var i = Math.floor((o.getTime() - n.getTime()) / 1e3),
                a = Math.floor(i / 3600);
            i -= 3600 * a;
            var s = Math.floor(i / 60);
            i -= 60 * s, $(".timer .hours").html(e(a)), $(".timer .minutes").html(e(s)), $(".timer .seconds").html(e(i)), setTimeout(t, 200)
        }(), $(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            smartSpeed: 300,
            mouseDrag: !1,
            pullDrag: !1,
            dots: !1,
            nav: !0,
            navText: ""
        }), $(".order_form").submit((function () {
            return "" == $(this).find("input[name='name']").val() && "" == $(this).find("input[name='phone']").val() ? (alert("Введите Ваши имя и телефон"), $(this).find("input[name='name']").focus(), !1) : "" == $(this).find("input[name='name']").val() ? (alert("Введите Ваше имя"), $(this).find("input[name='name']").focus(), !1) : "" != $(this).find("input[name='phone']").val() || (alert("Введите Ваш телефон"), $(this).find("input[name='phone']").focus(), !1)
        })), $(".popup-with-card").magnificPopup({
            type: "inline",
            preloader: !1,
            tClose: "Закрыть",
            focus: "#name",
            closeBtnInside: !0
        }), $(".popup-add_basket").magnificPopup({
            type: "inline",
            preloader: !1,
            tClose: "Закрыть",
            focus: "#name",
            closeBtnInside: !0,
            midClick: !0
        }), $(".js-button-order").click((function (e) {
            var t = $(this).parents(".my_row").data("role").replace(" ", "_");
            $("#selected-role").val(t), $("#selected-role option").removeAttr("selected"), $("#selected-role option[value=" + t + "]").prop("selected", !0), $("html, body").animate({
                scrollTop: $("#selected-role").offset().top + "px"
            })
        })), $(".js-button-add").click((function () {
            var e = $(this).parent().find("input[name='name']").val(),
                t = $(this).parent().find("input[name='phone']").val(),
                n = $(this).parents(".wrapper-row").data("role").replace(" ", "_");
            return $.ajax({
                type: "POST",
                url: "mail.php",
                data: {
                    name: e,
                    phone: t,
                    comment: n
                }
            }).done((function () {
                $.magnificPopup.open({
                    items: {
                        src: $("#add-basket1")
                    },
                    type: "inline"
                })
            })), !1
        }));
    var t = $(".voice_count b").text().replace(/\D/g, "");
    $(".question_item").one("click", (function () {
        $(".questions_list").addClass("active"), t++, $(".questions_list").children().each((function () {
            var e = parseInt($(this).find(".percents").text().replace(/\D/g, ""), 10);
            $(this).find(".value").text((Math.round(t * e / 100) + "").replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")), $(this).find(".line").animate({
                width: e + "%"
            }, 700)
        })), $(".voice_count b").text((t + "").replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")), $.cookie("voice_cookie", t)
    })), null != $.cookie("voice_cookie") && (t = $.cookie("voice_cookie") - 1, $(".question_item:eq(0)").click())
}));


document.addEventListener("DOMContentLoaded", function () {

    $('input[name=phone]').mask('+38 (999) 999 99 99')

    

    let forms = document.querySelectorAll('form');
    let translates = {
        ua: 'Відправка...',
        ru: 'Отправка...',
        en: 'Sending...',
    }
    let lang = document.documentElement.lang;

    if (lang.includes('ru')) {
        str = translates.ru;
    } else if (lang.includes('ua')) {
        str = translates.ua;
    } else {
        str = translates.en;
    }

    forms.forEach((form) => {
        form.addEventListener('submit', function () {
            let btn = form.querySelector('button');
            btn.textContent = str;
            btn.style.backgroundColor = 'gray';
            btn.setAttribute('disabled', true);
            console.log('button in form - blocked')
        })
    })

});