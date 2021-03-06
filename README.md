# gulp-post

[![NPM](https://nodei.co/npm/gulp-post.png?downloads=true&downloadRank=true&stars=true)][npm-url][![NPM](https://nodei.co/npm-dl/gulp-post.png?height=3&months=6)][npm-url]

[![npm](https://img.shields.io/npm/v/gulp-post.svg)][npm-url] [![npm](https://img.shields.io/npm/dm/gulp-post.svg)][npm-url] [![npm](https://david-dm.org/zhso/gulp-post.svg)][npm-url] [![npm](https://img.shields.io/npm/l/gulp-post.svg)][npm-url]

[![bitHound Overall Score](https://www.bithound.io/github/zhso/gulp-post/badges/score.svg)](https://www.bithound.io/github/zhso/gulp-post) [![Inline docs](http://inch-ci.org/github/zhso/gulp-post.svg?branch=master&style=shields)](http://inch-ci.org/github/zhso/gulp-post) [![Build Status](https://travis-ci.org/zhso/gulp-post.svg?branch=master)](https://travis-ci.org/zhso/gulp-post) [![Coverage Status](https://coveralls.io/repos/github/zhso/gulp-post/badge.svg?branch=master)](https://coveralls.io/github/zhso/gulp-post?branch=master)

[![GitHub stars](https://img.shields.io/github/stars/zhso/gulp-post.svg?style=social&label=Star)](https://github.com/zhso/gulp-post/stargazers) [![GitHub watchers](https://img.shields.io/github/watchers/zhso/gulp-post.svg?style=social&label=Watch)](https://github.com/zhso/gulp-post/subscription)

[npm-url]: https://npmjs.org/package/gulp-post
Post buffer to current url on pipe.

```js
var post = require("gulp-post");

gulp.task("post",function(){
    gulp.src("src/**/*.js")
        .pipe(post("http://www.zhso.net/"))
        .pipe(gulp.dest("dist"));
});
```

## Features

* Custom post params
* Support buffer encoding
* Support current callback

## Installation

```bash
$ npm i gulp-post
```

## Examples

* Custom Options

```js
var post = new require("gulp-post");

gulp.task("build",function(){
    var options = {
                encoding: "base64",
                callback: function (err, data) {
                    if(err){
                        console.error(err);
                    }else{
                        console.log(data);
                    }
                },
                param1: "value1",
                param2: "value2"
                //...
    };
    gulp.src("src/**/*.js")
        .pipe(post("http://www.zhso.net/",options))
        .pipe(gulp.dest("dist"));
})
```

## Options Format

* **options.content** file content
* **options.encoding** buffer.toString() encoding
* **options.relative** file relative