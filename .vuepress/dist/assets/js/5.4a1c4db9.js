(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{45:function(e,n,s){"use strict";s.r(n);var r=s(0),t=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[n("p",[this._v("#node")]),n("h4",{attrs:{id:"express-中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#express-中间件","aria-hidden":"true"}},[this._v("#")]),this._v(" express 中间件")]),n("pre",[n("code",[this._v('1. 应用级别 的中间件\n\n    app.use(\n        (request, response, next) => {\n            console.log();\n            //response.send("holle");\n            console.log("应用中间件1");\n            if (request.query.id == 3) {\n            next();\n            }\n        },\n        (request, response, next) => {\n            console.log("应用中间件2");\n        }\n    );\n\n\n2.路由中间件\n    router.get("/user/:id", (request, response) => {\n        response.sendFile(__dirname + "./app.html");\n        // throw new Error("404"); //抛出错误\n    });\n    app.use("/api", router);\n\n3. err\napp.use((err, request, response, next) => {\n    console.log(err.stack);\n    response.status(500).send("something broke!");\n});\n\n4. 内置中间件\n    app.use(express.static("public"));\n\n        app.listen(8000, () => {\n        console.log("losclhost: 8000");\n    });\n\n5.第三方 中间件\n\n    app.use(bodyParser.urlencoded({ extended: false }));\n    app.use(bodyParser.json());\n')])])])}],!1,null,null,null);n.default=t.exports}}]);