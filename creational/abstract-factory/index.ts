import Client from './Client';
import { IFurnitureFactory } from './IFurnitureFactory';
import LeatherFurnitureFactory from './LeatherFurnitureFactory';
import ClothFurnitureFactory from './ClothFurnitureFactory';

const leatherFurnitureFactory: IFurnitureFactory = new LeatherFurnitureFactory();
const clothFurnitureFactory: IFurnitureFactory = new ClothFurnitureFactory();

// We can provide our client with leather furniture...
let client: Client = new Client(leatherFurnitureFactory);
console.log(client.sitOnChair());
console.log(client.sitOnCouch());

// Or we can provide it with cloth furniture.
// It's as simple as giving it the proper implementation of the abstract 
// factory. The client never knows the difference between the furniture it's
// receiving, and no code has to change in the client to support new furniture
// types!
client = new Client(clothFurnitureFactory);
console.log(client.sitOnChair());
console.log(client.sitOnCouch());