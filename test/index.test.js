"use strict";
const post = require("../");
const util = require("gulp-util");
const expect = require("chai").expect;
const describe = require("mocha").describe;
const it = require("mocha").it;
describe("post()", () => {
    it("url !{String}", ()=> {
        expect(post).to.throw(Error);
    });
    it("return {Stream}", ()=> {
        let stream = post("https://npmjs.org/", undefined);
        let flag = util.isStream(stream);
        expect(flag).to.be.true;
    });
});