export interface Provider {
  send: (event: string, recipient: string, context: any) => void;
}
