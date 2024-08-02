export class NFEExeception extends Error {
    public constructor() {
        super('Failed to parse nfe data');
    }
}