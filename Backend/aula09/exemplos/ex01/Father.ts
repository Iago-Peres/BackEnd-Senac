import { Person } from "./Person";

class Father extends Person {
    speak(): void {
        this.howManyChildren(); // pode acessar membros protected da classe person
    }
}
const father1: Father = new Father(4);
// father1.howManyChildren(); // nao pode acessar fora da classe Person, que é onde este metodo esta
