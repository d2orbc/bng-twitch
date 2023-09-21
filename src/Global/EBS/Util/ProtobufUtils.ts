import protobuf, { Message } from "protobufjs";
// @ts-ignore-line
const env = __ENVIRONMENT__;
require(`Global/Contracts/generated_protobuf_contracts_${env}`); 

/** Given a message name and the message, this function knows how to find the right decoder, and will return the decoded message. */
export const decodeProtobufMessage = <TMessageType extends Message<TMessageType>>(messageTypeName: string, message: string | Uint8Array) =>
{
	const root = protobuf.roots.default;
	
	let messageByteArray = message;
	if(typeof message === "string")
	{
		messageByteArray = Uint8Array.from(message, c => c.charCodeAt(0));
	}
	
	// Once the module is loaded, grab the class definition from it
	const messageType = root[messageTypeName];
	
	const envelopeMessage = messageType.decode(messageByteArray) as TMessageType;

	return envelopeMessage;
}