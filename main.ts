'use strict'

import { NoArg } from "./noargument"
import { PrintList } from "./printlist";
import { AddItem } from "./additem";
import { RemoveItem } from "./remove";

const fs = require('fs')

const args: string[] = process.argv;

let noArg = new NoArg("usage.md");
let print = new PrintList("tasklist.md")
let addItem = new AddItem("tasklist.md")
let removeItem = new RemoveItem("tasklist.md")

let mainProcess = () => {

  noArg.noArgCheck();
  print.printList();
  addItem.addItem();
  removeItem.deleteItem();


}

mainProcess();