'use strict'

const fs = require('fs')

const args: string[] = process.argv;

let usage = fs.readFileSync("usage.md", "utf-8");
let taskList = fs.readFileSync("tasklist.md", "utf-8");

let mainProcess = () => {

  if(args[2] === undefined){
    console.log(usage);
  }else if(args[2] === "-l"){
    let splitTaskList = fs.readFileSync("tasklist.md", "utf-8").split("\n");
    for (let i = 0; i < splitTaskList.length; i++){
      console.log(i+1 + " - " + splitTaskList[i]);
    };
  }
}

mainProcess();