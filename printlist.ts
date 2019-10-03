'use strict'

const fs = require('fs');

const args: string[] = process.argv;

export class PrintList {

  protected _taskList: string;

  public printList() {
    if (args[2] === "-l") {
      if (this._taskList.length > 0) {
        let splitTaskList: string[] = this._taskList.split("\n");
        for (let i = 0; i < splitTaskList.length; i++) {
          console.log((i + 1) + " - " + splitTaskList[i]);
        }
      } else (console.log("No todos for today! :)"))
    }
  }
  constructor(sourceFile: string) {
    this._taskList = fs.readFileSync(sourceFile, "utf-8");
  }
}