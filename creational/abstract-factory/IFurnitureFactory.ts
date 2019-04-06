import { IChair } from "./IChair";
import { ICouch } from "./ICouch";

/**
 * This is our abstract factory which will create furniture of different
 * material types.
 */
export interface IFurnitureFactory {
    createChair(): IChair;
    createCouch(): ICouch;
}