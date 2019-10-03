'use strict'

const fs = require('fs');

const args: string[] = process.argv;

export class RemoveItem {

  private _readList: string[];
  private _lineNum: number;
  private _targeContent: string;
  private _targetFile: string;

  deleteItem() {

    if (args[2] === "-r") {
      this._lineNum = Number(args[3]) - 1;
      this._readList = fs.readFileSync(this._targetFile, "utf-8").split("\n");
      this._readList.splice(this._lineNum, 1);
      this._targeContent = this._readList.join("\n");
      fs.writeFileSync(this._targetFile, this._targeContent, "utf-8");
    }
  }
  constructor(targetFile) {
    this._targetFile = targetFile;
  }
}
