(this.webpackJsonprecipeWebsite = this.webpackJsonprecipeWebsite || []).push([
  [0],
  {
    18: function(e, a, t) {},
    24: function(e, a, t) {
      e.exports = t(39);
    },
    29: function(e, a, t) {},
    3: function(e, a, t) {
      e.exports = {
        navigationContainer: "navbar_navigationContainer__1Nqme",
        container: "navbar_container__1iUVr"
      };
    },
    36: function(e, a, t) {},
    37: function(e, a, t) {},
    38: function(e, a, t) {},
    39: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        l = t(21),
        c = t.n(l),
        i = (t(29), t(6)),
        s = t(3),
        o = t.n(s),
        m = "/images/logo.png";
      var u = function() {
          return r.a.createElement(
            "div",
            { style: o.a, className: "navigationContainer" },
            r.a.createElement(
              "nav",
              null,
              r.a.createElement(
                "div",
                { className: "container" },
                r.a.createElement("img", { src: m, alt: "logo", height: "60" })
              ),
              r.a.createElement(
                "ul",
                { style: o.a.ul },
                r.a.createElement(
                  i.b,
                  { exact: !0, activeStyle: { color: "#b6956a" }, to: "/" },
                  r.a.createElement("li", { style: o.a.li }, "HOME")
                ),
                r.a.createElement(
                  i.b,
                  { activeStyle: { color: "#b6956a" }, to: "/vegan" },
                  r.a.createElement("li", { style: o.a.li }, "VEGAN")
                ),
                r.a.createElement(
                  i.b,
                  { activeStyle: { color: "#b6956a" }, to: "/keto" },
                  r.a.createElement("li", { style: o.a.li }, "KETO")
                ),
                r.a.createElement(
                  i.b,
                  { activeStyle: { color: "#b6956a" }, to: "/glutenFree" },
                  r.a.createElement("li", { style: o.a.li }, "GLUTEN FREE")
                ),
                r.a.createElement(
                  i.b,
                  { activeStyle: { color: "#b6956a" }, to: "/paleo" },
                  r.a.createElement("li", { style: o.a.li }, "PALEO")
                ),
                r.a.createElement(
                  i.b,
                  { activeStyle: { color: "#b6956a" }, to: "/lowCarb" },
                  r.a.createElement("li", { style: o.a.li }, "LOW CARB")
                ),
                r.a.createElement(
                  i.b,
                  { activeStyle: { color: "#b6956a" }, to: "/about" },
                  r.a.createElement("li", { style: o.a.li }, "ABOUT")
                )
              )
            )
          );
        },
        p = t(12),
        E = t.n(p),
        h = t(17),
        d = t(13),
        f = t(8),
        g = t.n(f),
        b = function(e) {
          var a = e.title,
            t = e.calories,
            n = e.image,
            l = e.ingredients,
            c = e.url;
          return l
            ? r.a.createElement(
                "div",
                { className: g.a.recipe },
                r.a.createElement(
                  "a",
                  { className: g.a.a, href: c },
                  r.a.createElement("img", {
                    className: g.a.image,
                    src: n,
                    alt: ""
                  })
                ),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "a",
                    { href: c },
                    r.a.createElement(
                      "h3",
                      { className: g.a.h3 },
                      r.a.createElement(
                        "span",
                        { className: g.a.span },
                        a.charAt(0).toUpperCase() + a.slice(1)
                      )
                    )
                  ),
                  r.a.createElement(
                    "p",
                    { className: g.a.p },
                    Math.round(t) + " calories"
                  ),
                  r.a.createElement(
                    "ul",
                    { className: g.a.ul },
                    l.map(function(e) {
                      return r.a.createElement(
                        "li",
                        { key: e.text, className: g.a.li },
                        e.text
                      );
                    })
                  )
                )
              )
            : null;
        },
        v = t(5),
        y = t.n(v);
      var _ = function(e) {
          var a = "bde76692",
            t = "a779c707df0015efad7cf8cee3391fe1",
            l = Object(n.useState)([]),
            c = Object(d.a)(l, 2),
            i = c[0],
            s = c[1],
            o = Object(n.useState)(""),
            m = Object(d.a)(o, 2),
            u = m[0],
            p = m[1],
            f = Object(n.useState)("chocolate"),
            g = Object(d.a)(f, 2),
            v = g[0],
            _ = g[1];
          function N(e) {
            if (!e.ok) throw Error(e.statusText);
            return e;
          }
          return (
            Object(n.useEffect)(
              function() {
                function n() {
                  return (n = Object(h.a)(
                    E.a.mark(function n() {
                      return E.a.wrap(function(n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              fetch(
                                "https://api.edamam.com/search?q="
                                  .concat(v, "&app_id=")
                                  .concat(a, "&app_key=")
                                  .concat(t)
                                  .concat(e.append)
                              )
                                .then(N)
                                .then(
                                  (function() {
                                    var e = Object(h.a)(
                                      E.a.mark(function e(a) {
                                        var t;
                                        return E.a.wrap(function(e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (e.next = 2), a.json();
                                              case 2:
                                                (t = e.sent),
                                                  console.log(t),
                                                  s(t.hits);
                                              case 5:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function(a) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                )
                                .catch(function(e) {
                                  console.log(e);
                                });
                            case 1:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )).apply(this, arguments);
                }
                !(function() {
                  n.apply(this, arguments);
                })();
              },
              [e, v]
            ),
            r.a.createElement(
              "div",
              { src: y.a.background, className: "App" },
              r.a.createElement(
                "form",
                {
                  src: y.a,
                  onSubmit: function(e) {
                    e.preventDefault(), _(u);
                  },
                  className: "search-form"
                },
                r.a.createElement("input", {
                  src: y.a.input,
                  type: "text",
                  value: u,
                  onChange: function(e) {
                    p(e.target.value), console.log(u);
                  }
                }),
                r.a.createElement(
                  "button",
                  { className: "search-button", type: "submit" },
                  "Search"
                )
              ),
              r.a.createElement(
                "div",
                { className: "recipes" },
                i.map(function(e) {
                  return r.a.createElement(b, {
                    key: e.recipe.url,
                    title: e.recipe.label,
                    calories: e.recipe.calories,
                    image: e.recipe.image,
                    ingredients: e.recipe.ingredients,
                    url: e.recipe.url
                  });
                })
              )
            )
          );
        },
        N = t(9),
        w = t(18),
        j = t.n(w),
        k = function(e) {
          var a = e.title,
            t = e.description,
            n = e.url;
          return r.a.createElement(
            "article",
            { style: { backgroundImage: "url(" + n + ")" }, src: j.a.article },
            r.a.createElement(
              "header",
              { className: "major" },
              r.a.createElement(
                "h3",
                null,
                r.a.createElement(
                  "a",
                  { href: "/" + a.toLowerCase(), className: "link" },
                  a
                )
              ),
              r.a.createElement("p", { src: j.a.p }, t)
            )
          );
        },
        x = function(e) {
          e.title, e.description, e.url;
          return r.a.createElement(
            "div",
            { className: "inner" },
            r.a.createElement(
              "header",
              { className: "major" },
              r.a.createElement("h2", null, "Purpose")
            ),
            r.a.createElement(
              "p",
              null,
              "Have a think about your group of friends and colleagues right now. When was the last time you ate together and what did they order? Chances are they had to avoid some food or beverages. Maybe it was a soy latte, perhaps a gluten free sandwich, or maybe a vegetarian salad. We\u2019re sure you can think of someone."
            ),
            r.a.createElement(
              "p",
              null,
              "In fact, 1 in 5 Australians currently live with a food intolerance or allergy, which means the possibility of you having to cater for one or more special dietary requirements is almost a certainty. Furthermore, there\u2019s a wide variety of voluntary diets that have risen to fame in recent times. These aren\u2019t always due to a food intolerance or allergy, but can restrict a similar if not greater range of foods."
            ),
            r.a.createElement(
              "ul",
              { className: "actions" },
              r.a.createElement(
                "li",
                null,
                r.a.createElement(
                  "a",
                  { href: "landing.html", className: "button next" },
                  "Get Started"
                )
              )
            )
          );
        },
        S = function() {
          return r.a.createElement(
            "footer",
            { id: "footer" },
            r.a.createElement(
              "div",
              { className: "inner" },
              r.a.createElement(
                "ul",
                { className: "icons" },
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "a",
                    { href: "#", className: "icon brands alt fa-twitter" },
                    r.a.createElement("span", { className: "label" }, "Twitter")
                  )
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "a",
                    { href: "#", className: "icon brands alt fa-facebook-f" },
                    r.a.createElement(
                      "span",
                      { className: "label" },
                      "Facebook"
                    )
                  )
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "a",
                    { href: "#", className: "icon brands alt fa-instagram" },
                    r.a.createElement(
                      "span",
                      { className: "label" },
                      "Instagram"
                    )
                  )
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "a",
                    { href: "#", className: "icon brands alt fa-github" },
                    r.a.createElement("span", { className: "label" }, "GitHub")
                  )
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "a",
                    { href: "#", className: "icon brands alt fa-linkedin-in" },
                    r.a.createElement(
                      "span",
                      { className: "label" },
                      "LinkedIn"
                    )
                  )
                )
              ),
              r.a.createElement(
                "ul",
                { className: "copyright" },
                r.a.createElement("li", null, "\xa9 Untitled"),
                r.a.createElement(
                  "li",
                  null,
                  "Design: ",
                  r.a.createElement(
                    "a",
                    { href: "https://html5up.net" },
                    "HTML5 UP"
                  )
                )
              )
            )
          );
        },
        O = function() {
          return r.a.createElement(
            "div",
            { className: "inner" },
            r.a.createElement(
              "header",
              { className: "major" },
              r.a.createElement("h1", null, "Recipe Search Engine")
            ),
            r.a.createElement(
              "div",
              { className: "content" },
              r.a.createElement(
                "p",
                null,
                "A variety of organic recipes and food inspiration for various dietary inclinations"
              ),
              r.a.createElement(
                "ul",
                { className: "actions" },
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "a",
                    { href: "#one", className: "button next scrolly" },
                    "Get Started"
                  )
                )
              )
            )
          );
        },
        C = function() {
          return r.a.createElement(
            "div",
            { id: "wrapper" },
            r.a.createElement(
              "header",
              { id: "header", className: "reveal alt" },
              r.a.createElement(
                "a",
                { href: "/", className: "logo" },
                r.a.createElement("strong", null, "Recipes"),
                " ",
                r.a.createElement(
                  "span",
                  null,
                  "for various dietary requirements"
                )
              )
            ),
            r.a.createElement(
              "div",
              { id: "main" },
              r.a.createElement(O, { id: "banner", className: "major" }),
              r.a.createElement(
                "section",
                { id: "one", className: "tiles" },
                r.a.createElement(k, {
                  title: "Vegan",
                  url: "./images/vegan.jpg",
                  description: "No meat, poultry, fish, dairy, eggs or honey"
                }),
                r.a.createElement(k, {
                  title: "Sugar Conscious",
                  url: "./images/sugar-conscious.jpg",
                  description: "Less than 4g of sugar per serving"
                }),
                r.a.createElement(k, {
                  title: "Gluten Free",
                  url: "./images/gluten-free.jpg",
                  description: "free from wheat, barley, rye, and oats."
                }),
                r.a.createElement(k, {
                  title: "Paleo",
                  url: "./images/paleo_diet.jpg",
                  description:
                    "foods that in the past could only be obtained by hunting and gathering."
                }),
                r.a.createElement(k, {
                  title: "Keto",
                  url: "./images/keto.jpg",
                  description: "Maximum 7 grams of net carbs per serving"
                }),
                r.a.createElement(k, {
                  title: "Low Carb",
                  url: "./images/low-carb.jpg",
                  description: "Less than 20% of total calories from carbs"
                })
              ),
              r.a.createElement(
                "section",
                { id: "two" },
                r.a.createElement(x, null)
              )
            ),
            r.a.createElement(S, null)
          );
        },
        A =
          (t(36),
          t(37),
          t(38),
          function() {
            return r.a.createElement(
              i.a,
              null,
              r.a.createElement(
                "div",
                { className: "App" },
                r.a.createElement(u, { style: o.a }),
                r.a.createElement(
                  N.c,
                  null,
                  r.a.createElement(
                    N.a,
                    { exact: !0, path: "/" },
                    r.a.createElement(C, null)
                  ),
                  r.a.createElement(
                    N.a,
                    { exact: !0, path: "/about" },
                    r.a.createElement(_, { src: y.a, append: "" })
                  ),
                  r.a.createElement(
                    N.a,
                    { exact: !0, path: "/vegan" },
                    r.a.createElement(_, { src: y.a, append: "&health=vegan" })
                  ),
                  r.a.createElement(
                    N.a,
                    { exact: !0, path: "/keto" },
                    r.a.createElement(_, { src: y.a, append: "&health=keto" })
                  ),
                  r.a.createElement(
                    N.a,
                    { exact: !0, path: "/glutenFree" },
                    r.a.createElement(_, {
                      src: y.a,
                      append: "&health=gluten-free"
                    })
                  ),
                  r.a.createElement(
                    N.a,
                    { exact: !0, path: "/paleo" },
                    r.a.createElement(_, { src: y.a, append: "&health=paleo" })
                  ),
                  r.a.createElement(
                    N.a,
                    { exact: !0, path: "/lowCarb" },
                    r.a.createElement(_, { src: y.a, append: "&diet=low-carb" })
                  )
                )
              ),
              r.a.createElement("script", {
                src: "assets/js/jquery.scrolly.min.js"
              }),
              r.a.createElement("script", {
                src: "assets/js/jquery.scrollex.min.js"
              }),
              r.a.createElement("script", { src: "assets/js/util.js" }),
              r.a.createElement("script", { src: "assets/js/main.js" })
            );
          });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(r.a.createElement(A, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    5: function(e, a, t) {
      e.exports = {
        "search-form": "recipequery_search-form__39fB9",
        recipes: "recipequery_recipes__yhigv"
      };
    },
    8: function(e, a, t) {
      e.exports = {
        recipe: "recipe_recipe__3PeVH",
        div: "recipe_div__1Dd52",
        span: "recipe_span__2eg04",
        h3: "recipe_h3__3MaQt",
        h2: "recipe_h2__YTpez",
        h1: "recipe_h1__3_3zn",
        p: "recipe_p___4qQx",
        ul: "recipe_ul__2EmwU",
        li: "recipe_li__285Km",
        image: "recipe_image__3Atf6",
        form: "recipe_form__1TG4E",
        break: "recipe_break__1uQAz"
      };
    }
  },
  [[24, 1, 2]]
]);
//# sourceMappingURL=main.8f9c82b4.chunk.js.map
