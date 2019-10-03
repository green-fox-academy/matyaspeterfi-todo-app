'use strict'

import { NoArg } from "./noargument"
import { PrintList } from "./printlist";

const fs = require('fs')

const args: string[] = process.argv;

let noArg = new NoArg("usage.md");
let print = new PrintList("tasklist.md")

let mainProcess = () => {

  noArg.noArgCheck();
  print.printList();

}

mainProcess();