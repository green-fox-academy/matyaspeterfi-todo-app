'use strict'

const fs = require('fs')

const args: string[] = process.argv;

let usage = fs.readFileSync("usage.md", "utf-8");

let mainProcess = () => {

  if(args[2] == undefined){
    console.log(usage);
  }
}

mainProcess();