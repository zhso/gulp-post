"use strict";
const post = require("request").post;
const obj = require("through2").obj;
require("colors");
const pluginError = require("gulp-util").PluginError;
const PLUGIN_NAME = "gulp-post";
/**
 * @param url {String}
 * @param options {Object}
 * @return {Function}
 * @sample
 * gulp.src("folder").pipe(post("http://zhso.net/"));
 */
module.exports = (url, options)=> {
    let option = options || {};
    if (!url || typeof(url) !== "string") {
        throw new pluginError(PLUGIN_NAME, 'Invalid URL format.');
    }
    return obj((file, enc, cb)=> {
        if (!file) {
            throw new pluginError(PLUGIN_NAME, 'Missing file or files.');
        }
        if (file.isBuffer()) {
            post({
                url: url,
                form: (opt=> {
                    opt.content = file.toString(opt.encoding || null);
                    opt.relative = file.relative;
                    return opt;
                })(option)
            }, (err, response, body)=> {
                option.callback && option.callback(err, body);
                if (err) {
                    console.error(err.red);
                } else if (response.statusCode !== 200) {
                    console.error(("'" + file.relative + "' " + response.statusCode).red);
                } else {
                    console.log(body);
                }
            });
        }
        cb(null, file);
    })
};