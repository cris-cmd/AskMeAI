export class ChatMessage {
  constructor(
    public readonly id: string,
    public readonly roomId: string,
    public readonly userId: string,
    public readonly question: string,
    public readonly response: string,
    public readonly createdAt: Date,
  ) {}
}
