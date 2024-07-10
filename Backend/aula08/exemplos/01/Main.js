"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cachorro_1 = require("./Cachorro");
var Coruja_1 = require("../../../Coruja");
var cachorro1 = new Cachorro_1.Cachorro("cachorro1", 5, "vira-lata");
var coruja1 = new Coruja_1.Coruja("coruja1", 3);
cachorro1.latir();
coruja1.voar();
