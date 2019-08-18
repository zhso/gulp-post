
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const { expect } = require('chai');
const { describe } = require('mocha');
const { it } = require('mocha');
const { before } = require('mocha');
const { after } = require('mocha');
const post = require('../');

describe('gulp-post', () => {
  const filePath = path.join('temp', 'file.tmp');
  before((done) => {
    fs.mkdir('temp', () => {
      fs.writeFile(filePath, 'gulp', done);
    });
  });
  after((done) => {
    fs.unlink(filePath, () => {
      fs.rmdir('temp', done);
    });
  });
  it('should throw, when url is undefined.', () => {
    expect(post).to.throw(Error);
  });
  it('should throw, when file is missing.', () => {
    gulp.src('undefined.file')
      .pipe(post('https://npmjs.com', undefined))
      .on('error', (err) => {
        expect(err).to.be.an('error');
      });
  });
  it('should throw, when domain unreachable.', (done) => {
    gulp.src(filePath)
      .pipe(post('http://undefineddomain.com', {
        callback: (err) => {
          if (err) {
            expect(err).to.be.an('error');
            done();
          }
        },
      }));
  });
  it('should response sth.', (done) => {
    gulp.src(filePath)
      .pipe(post('https://npmjs.com', {
        callback: (err, data) => {
          expect(data).to.be.an('string');
          done();
        },
      }));
  });
});
