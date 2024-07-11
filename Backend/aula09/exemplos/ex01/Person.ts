
export class Person {
    protected children: number;

    constructor(children: number) {
        this.children = children;
    }

    protected howManyChildren(): void {
        console.log(`this person has ${this.children} childrens.`);
    }
}
