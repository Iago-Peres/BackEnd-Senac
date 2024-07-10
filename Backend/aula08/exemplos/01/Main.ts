import { Cachorro } from "./Cachorro";
import { Coruja } from "../../exercicios/ex01/Coruja";

const cachorro1: Cachorro = new Cachorro("cachorro1", 5, "vira-lata");

const coruja1: Coruja = new Coruja("coruja1", 3);

cachorro1.latir();

coruja1.voar();