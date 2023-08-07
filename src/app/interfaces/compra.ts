import { Producto } from "./producto";

export interface Compra {
    id: number;
    fecha: Date;
    usuarioId: number;
    productos: Producto[];
}
