export class NFEParserHTMLNotLoadedException extends Error {
    public constructor() {
        super('HTML not logeaded on nfe');
    }
}