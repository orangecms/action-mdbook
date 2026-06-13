"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linkcheck = void 0;
const MdPlugin_1 = require("./MdPlugin");
class Linkcheck extends MdPlugin_1.MdPlugin {
    constructor() {
        super("marxin/mdbook-linkcheck2", "linkcheck-version", "mdbook-linkcheck2", "unknown-linux-gnu");
    }
}
exports.Linkcheck = Linkcheck;
