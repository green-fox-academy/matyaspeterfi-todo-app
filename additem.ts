'use strict'

const fs = require('fs')

const args: string[] = process.argv;

export class AddItem{

  _destination:string;

  addItem(){
    if(args[2] === "-a"){
      if(args[3] != undefined){  
        fs.appendFileSync(this._destination, `\n${args[3]}`, "utf-8")
      }else{console.log("Unable to add: no task provided")}
    }
  }
  constructor(destination){
    this._destination = destination;
  }
}

