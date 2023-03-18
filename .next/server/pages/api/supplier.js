"use strict";
(() => {
var exports = {};
exports.id = 655;
exports.ids = [655];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectionString = "mongodb+srv://manallmahmood:stupid123@cluster0.y1xgwpp.mongodb.net/suppliersdb";
async function handler(req, res) {
    await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(connectionString);
    console.log("req.method: ", req.method);
    if (req.method === "GET") {
        const docs = await Suppliers.find();
        res.status(200).json(docs);
    } else if (req.method === "POST") {
        console.log(req.body);
        const doc = await Suppliers.create(req.body);
        res.status(201).json(JSON.stringify(doc));
    } else {
        res.setHeader("Allow", [
            "GET",
            "POST"
        ]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
const supplierSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: String,
    address: String,
    number: String
});
const Suppliers = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.suppliers || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("suppliers", supplierSchema);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6318));
module.exports = __webpack_exports__;

})();