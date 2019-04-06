import { IChair } from "./IChair";

export default class LeatherChair implements IChair {
    sit(): string {
        return "You sit on a leather chair. Fancy!";
    }
}