import { ICouch } from "./ICouch";

export default class LeatherCouch implements ICouch {
    sit(): string {
        return "You sit on a leather couch. Fancy!";
    }
}