
export interface CarInterface {
    brand: string;
    model: string;
    year: number;

    startEngine(): void; // nao se usa logica em metodos de interface, apenas o retorno que ele deve ter
}