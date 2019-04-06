import { ICouch } from "./ICouch";

export default class ClothCouch implements ICouch {
    sit(): string {
        return "You sit on a cloth couch. Comfy!";
    }
}