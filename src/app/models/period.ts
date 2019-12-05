import {ModelInterface} from './model-interface';

export class Period implements ModelInterface{
    id = 0;
    name = '';
    fromH = 0;
    toH = 0;

    public constructor(initor?: Partial<Period>) {
        if (initor) {
            Object.assign(this, initor);
        }
    }
}
