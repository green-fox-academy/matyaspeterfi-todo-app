'use strict'

const fs = require('fs');

const args: string[] = process.argv;

export class NoArg {

  protected _usage: string;

  public noArgCheck() {
    if (args[2] === undefined) {
      console.log(this._usage);
    }
  }
  constructor(sourcefile: string) {
    this._usage = fs.readFileSync(sourcefile, "utf-8");
  }
}