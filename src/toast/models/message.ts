export const MessageType = {
  Success: 0,
  Error: 1,
} as const;

export type MessageType = (typeof MessageType)[keyof typeof MessageType];

export default class Message {
  public id: string
  public type: MessageType
  public message: string

  constructor(message: string, type: MessageType = MessageType.Success) {
    this.id = crypto.randomUUID();
    this.type = type;
    this.message = message;
  }
}