import { IChair } from "./IChair";
import { ICouch } from "./ICouch";
import { IFurnitureFactory } from "./IFurnitureFactory";
import ClothChair from "./ClothChair";
import ClothCouch from "./ClothCouch";

/**
 * Concrete implementation of our abstract IFurnitureFactory which creates
 * cloth pieces of furniture.
 */
export default class ClothFurnitureFactory implements IFurnitureFactory {
    /**
     * Creates a cloth chair.
     */
    createChair(): IChair {
        return new ClothChair();
    }    
    /**
     * Creates a cloth couch.
     */
    createCouch(): ICouch {
        return new ClothCouch();
    }
}