import { IChair } from "./IChair";
import { ICouch } from "./ICouch";
import { IFurnitureFactory } from "./IFurnitureFactory";
import LeatherChair from "./LeatherChair";
import LeatherCouch from "./LeatherCouch";

/**
 * Concrete implementation of our abstract IFurnitureFactory which creates
 * leather pieces of furniture.
 */
export default class LeatherFurnitureFactory implements IFurnitureFactory {
    /**
     * Creates a leather chair.
     */
    createChair(): IChair {
        return new LeatherChair();
    }    
    /**
     * Creates a leather couch.
     */
    createCouch(): ICouch {
        return new LeatherCouch();
    }
}