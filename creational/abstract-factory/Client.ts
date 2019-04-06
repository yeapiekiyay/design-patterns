import { IFurnitureFactory } from "./IFurnitureFactory";

/**
 * This client uses furniture, but does not need to be aware of the specific
 * kind of furniture it is using.
 */
export default class Client {
    private furnitureFactory: IFurnitureFactory;

    constructor(furnitureFactory: IFurnitureFactory) {
        this.furnitureFactory = furnitureFactory;
    }

    public sitOnChair(): string {
        let chair = this.furnitureFactory.createChair();
        
        // The client knows nothing about what kind of chair is being created,
        // and therefore, we can swap out the type of chair being created by
        // simply providing a factory that produces chairs of a different 
        // material.
        return chair.sit();
    }

    public sitOnCouch(): string {
        let couch = this.furnitureFactory.createCouch();

        return couch.sit();
    }
}