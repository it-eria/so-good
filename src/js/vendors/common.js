"use strict";
$.fn.slider = function (e) {
    var n, i = this, t = this, a = t.find(".slider__wrap"), o = a.find(".slider__slides"), r = t.find(".slider__prev"),
        l = t.find(".slider__next"), s = t.find(".slider__pagination"), c = e.currentSlide || 0, d = e.duration || .3,
        f = o.children().length, u = a["vertical" === e.slideStyle ? "outerHeight" : "outerWidth"](),
        p = e.delay || 6e3;
    this.prevSlide = function () {
        return 0 === c ? void(c = f - 1) : void c--
    }, this.nextSlide = function () {
        return c === f - 1 ? void(c = 0) : void c++
    }, this.createPagination = function () {
        if (s.length) {
            for (var n = $(document.createDocumentFragment()), i = 0; i < f; i++) {
                var t = $(document.createElement("li"));
                t.addClass(e.pagItemClass);
                var a = $(document.createElement("a"));
                a.addClass(e.pagLinkClass), a.attr("data-slide", i), t.append(a), n.append(t)
            }
            s.append(n), s.children().eq(c).find("a").addClass("active")
        }
    }, this.render = function () {
        var n = "vertical" === e.slideStyle ? "margin-top" : "margin-left";
        o.css(n, -c * u), s.length && (s.find(".active").removeClass("active"), s.children().eq(c).find("a").addClass("active"))
    }, this.setupListeners = function () {
        r && r.on("click", function (e) {
            e.preventDefault(), i.prevSlide(), i.render(), clearInterval(n)
        }), l && l.on("click", function (e) {
            e.preventDefault(), i.nextSlide(), i.render(), clearInterval(n)
        }), s && s.on("click", function (e) {
            e.preventDefault();
            var t = $(e.target);
            "A" === t.prop("tagName") && (clearInterval(n), c = +t.data("slide"), i.render())
        }), $(window).on("resize", function () {
            u = a["vertical" === e.slideStyle ? "outerHeight" : "outerWidth"](), i.render()
        })
    }, this.autoSlide = function () {
        n = setInterval(function () {
            i.nextSlide(), i.render()
        }, p)
    }, this.init = function () {
        o.css("transition", "margin " + d + "s linear"), this.createPagination(), "vertical" === e.slideStyle && o.css("white-space", "normal"), this.setupListeners(), this.render(), this.autoSlide()
    }, this.init()
}, $(".main-slider").slider({slideStyle: "horizontal", duration: .4});
var mainNav = function () {
    function e() {
        r.on("click", function (e) {
            return e.preventDefault(), r.hasClass("page-header__humburger-link--active") ? void n() : void i()
        }), s.on("click", function (e) {
            e.preventDefault();
            var n = $(this).attr("href");
            r.removeClass("page-header__humburger-link--active"), scroll.to(n)
        })
    }

    function n() {
        l.slideUp(300, "swing", function () {
            r.removeClass("page-header__humburger-link--active")
        })
    }

    function i() {
        l.slideDown(300, "swing", function () {
            r.addClass("page-header__humburger-link--active")
        })
    }

    function t() {
        e()
    }

    var a = $(".page-header"), o = a.find(".page-header__humburger"), r = o.find(".page-header__humburger-link"),
        l = a.find(".nav"), s = l.find(".nav__link");
    t()
}()
    , scroll = function () {
    function e() {
        r.on("click", function (e) {
            e.preventDefault();
            var i = $(this);
            n(i.attr("href"))
        }), a.on("click", function (e) {
            e.preventDefault();
            var i = $(this);
            n(i.attr("href"))
        }), o.on("click", function (e) {
            e.preventDefault();
            var i = $(this);
            n(i.attr("href"))
        })
    }

    function n(e) {
        var n = e.substring(1), i = $("." + n);
        $("html, body").animate({scrollTop: i.offset().top}, 500)
    }

    function i() {
        e()
    }

    var t = $(".main-slider"), a = t.find(".main-slider__nav-link--show"), o = t.find(".main-slider__nav-link--jump"),
        r = $(".jump-section");
    return i(), {to: n}
}();
!function () {
    function e() {
        $(window).on("scroll", function () {
            var e = $(window);
            e.scrollTop() + e.height() >= a.offset().top + a.outerHeight() && n()
        })
    }

    function n() {
        for (var e = o.length - 1; e >= 0; e--) {
            var n = $(o[e]), i = +n.data("percent");
            n.find(".skills__meter-inner").css("width", i + "%")
        }
    }

    function i() {
        return $(window).scrollTop() >= t.offset().top ? void n() : void e()
    }

    var t = $(".skills"), a = t.find(".skills__list"), o = a.find(".skills__meter");
    $(".page-header");
    i()
}(), function () {
    function e() {
        return f === u - 1 ? void(f = 0) : void f++
    }

    function n() {
        s.find(".testimonials__item--active").fadeOut(300).removeClass(".testimonials__item--active"), $(c[f]).fadeIn("slow").addClass("testimonials__item--active"), d.find(".testimonials__nav-item--active").removeClass("testimonials__nav-item--active"), $(d.children()[f]).addClass("testimonials__nav-item--active")
    }

    function i() {
        for (var e = $(document.createDocumentFragment()), n = 0; n < c.length; n++) {
            var i = $(document.createElement("li"));
            i.addClass("testimonials__nav-item");
            var t = $(document.createElement("a"));
            t.addClass("testimonials__nav-link").attr({"data-slide": n, href: "#"}), i.append(t), e.append(i)
        }
        d.append(e), $(d.children()[f]).addClass("testimonials__nav-item--active")
    }

    function t() {
        r = setInterval(function () {
            e(), n()
        }, 5e3)
    }

    function a() {
        c.on("click", function () {
            e(), n(), clearInterval(r), t()
        }), d.on("click", function (e) {
            e.preventDefault();
            var i = $(e.target);
            "A" === i.prop("tagName") && (f = +i.data("slide"), n(), clearInterval(r), t())
        })
    }

    function o() {
        i(), a(), n(), t()
    }

    var r, l = $(".testimonials"), s = l.find(".testimonials__list"), c = l.find(".testimonials__item"),
        d = l.find(".testimonials__nav-list"), f = 0, u = c.length;
    o()
}(), function () {
    function e() {
        s--, s < 0 && (o.prepend(o.children().last().clone()), o.children().last().remove(), s++)
    }

    function n() {
        s++, s === o.children().length - 1 && (o.append(o.children().first().clone()), o.children().first().remove(), s--)
    }

    function i() {
        document.documentElement.clientWidth >= 1200 && (s = 0);
        var e = o.outerWidth();
        o.css("margin-left", -s * e)
    }

    function t() {
        r.on("click", function (n) {
            n.preventDefault(), e(), i()
        }), $(window).on("resize", function () {
            i()
        }), l.on("click", function (e) {
            e.preventDefault(), n(), i()
        })
    }

    function a() {
        t()
    }

    var o = $(".team__list"), r = (o.find(".team__item"), o.parent().find(".team__slider-nav--prev")),
        l = o.parent().find(".team__slider-nav--next"), s = 0;
    a()
}(), function () {
    function e() {
        l.on("click", function (e) {
            e.preventDefault();
            var n = $(this);
            s.removeClass("portfolio__rhomb--active"), t.removeClass("portfolio__list--rhomb"), n.addClass("portfolio__rect--active")
        }), s.on("click", function (e) {
            e.preventDefault();
            var n = $(this);
            l.removeClass("portfolio__rect--active"), n.addClass("portfolio__rhomb--active"), t.hasClass("portfolio__list--rhomb") || t.addClass("portfolio__list--rhomb")
        }), o.on("click", function (e) {
            e.preventDefault();
            var n = $(this);
            o.removeClass("portfolio__nav-link--active"), n.addClass("portfolio__nav-link--active")
        }), a.on("click", function (e) {
            e.preventDefault();
            var n = $(this).parent();
            galleryPopup.show(n)
        })
    }

    function n() {
        e()
    }

    var i = $(".portfolio"), t = i.find(".portfolio__list"), a = t.find(".portfolio__item-link"),
        o = i.find(".portfolio__nav-link--thematic"), r = i.find(".portfolio__grid"), l = r.find(".portfolio__rect"),
        s = r.find(".portfolio__rhomb");
    n()
}();
var galleryPopup = function () {
    function e(e) {
        f.addClass("gallery-popup--active");
        var n = "img/" + e.data("image");
        p.attr("src", n), l = e.parent(), s = e, c = e.index(), d = l.children().length
    }

    function n() {
        f.removeClass("gallery-popup--active"), g.removeClass("gallery-popup-socials--shown"), g.fadeOut()
    }

    function i() {
        c === d - 1 ? c = 0 : c++
    }

    function t() {
        0 === c ? c = d - 1 : c--
    }

    function a() {
        s = l.children().eq(c);
        var e = "img/" + s.data("image");
        p.attr("src", e)
    }

    function o() {
        h.on("click", function (e) {
            e.preventDefault(), g.hasClass("gallery-popup-socials--shown") ? (g.removeClass("gallery-popup-socials--shown"), g.fadeOut()) : (g.addClass("gallery-popup-socials--shown"), g.slideDown())
        }), m.on("click", function (e) {
            e.preventDefault(), n()
        }), _.on("click", function (e) {
            e.preventDefault(), i(), a()
        }), v.on("click", function (e) {
            e.preventDefault(), t(), a()
        })
    }

    function r() {
        o()
    }

    var l, s, c, d, f = $(".gallery-popup"), u = f.find(".gallery-popup__content"), p = u.find(".gallery-popup__image"),
        v = u.find(".gallery-popup__prev"), _ = u.find(".gallery-popup__next"), m = u.find(".gallery-popup__close"),
        h = u.find(".gallery-popup__socials-trigger"), g = u.find(".gallery-popup__socials");
    return r(), {show: e}
}();