import { NfeParser } from "../bounded/nfe-parser";
import { HttpGateway } from "../bounded/http-gateway";
import { MessageBroker } from "../bounded/message-broker";

type Input = {
    url: string
};

export class ExtractAndPublishNfeUseCase {
    public constructor(
        readonly nfeParser: NfeParser,
        readonly httpGateway: HttpGateway,
        readonly messageBroker: MessageBroker,
    ) { }

    public async execute({ url }: Input): Promise<void> {
        const html = await this.httpGateway.get(url);
        const nfeData = this.nfeParser.getData(html);
        console.log(nfeData);
        await this.messageBroker.publish('arn:aws:sns:us-east-1:851725185529:nfe-data-parsed.fifo', nfeData);
    }
}
