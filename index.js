var post = require("request").post;
var obj = require("through2").obj;
require("colors");
var pluginError = require("gulp-util").PluginError;
const PLUGIN_NAME = "gulp-post";
module.exports = function (url, options) {
    var options = options || {};
    if (!url || typeof(url) !== "string") {
        throw new pluginError(PLUGIN_NAME, 'Invalid URL format.');
    }
    return obj(function (file, enc, cb) {
        if (!file) {
            throw new pluginError(PLUGIN_NAME, 'Missing file or files.');
        }
        if (file.isBuffer()) {
            var data = {
                url: url,
                form: (function (options) {
                    options.content = file.toString(options.encoding || null);
                    options.relative = file.relative;
                    return options;
                })(options)
            };
            post(data, function (err, response, body) {
                options.callback && options.callback(err, body);
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
}