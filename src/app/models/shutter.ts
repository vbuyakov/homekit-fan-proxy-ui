import {ModelInterface} from './model-interface';

export enum AirDirection {
    IN = "IN",
    OUT = "OUT"
}

export class Shutter implements ModelInterface {
    id = 0;
    name = '';
    alias = '';
    openAngle = 90;
    closeAngle = 0;
    initValue = 50;
    direction: AirDirection = AirDirection.IN;
    urlTemplate = '';

    public constructor(initor?: Partial<Shutter>) {
        if (initor) {
            Object.assign(this, initor);
        }
    }
}
