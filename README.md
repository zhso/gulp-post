# gulp-post

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
        .pipe(post("http://www.zhso.net",options))
        .pipe(gulp.dest("dist"));
})
```

## Options Format

* **options.content** file content
* **options.encoding** buffer.toString() encoding
* **options.relative** file relative