'use strict';

const generators = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const files = [
  {
    src: 'gitignore',
    dst: '.gitignore'
  },
  'CHANGELOG.md',
  'index.js',
  'package.json',
  'README.md'
];

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('name', {
      required: true,
      type: 'String'
    });
  },
  initializing: function() {
    this.log(yosay(
      `Welcome to the good ol ${chalk.green('twitter-picbot plugin')} generator!`
    ));
  },
  writing: function() {
    files.forEach((file) => {
      let src, dst;

      if (typeof file === 'string') {
        src = dst = file;
      } else {
        src = file.src;
        dst = file.dst;
      }

      this.fs.copyTpl(
        this.templatePath(src),
        this.destinationPath(dst),
        {name: this.name}
      );
    });
  },
  end: function() {
    this.log('Bye bye!');
  }
});
