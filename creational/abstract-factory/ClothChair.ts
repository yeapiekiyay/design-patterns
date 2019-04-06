import { IChair } from "./IChair";

export default class ClothChair implements IChair {
    sit(): string {
        return "You sit on a cloth chair. Comfy!";
    }
}