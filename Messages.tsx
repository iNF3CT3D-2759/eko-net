import { v4 as uuid } from "uuid";
export default interface Message {
  id: string,
  subject: string,
  creation_timestamp: Date,
  sent_timestamp: Date,
  received_timestamp: Date,
  read_timestamp: Date,
  key: string,
  from_node_id: string,
  from_node_alias: string,
  to_node_id: string,
  to_node_alias: string,
  plaintext: string,
  cyphertext: string,
}

//const messages: Message[] = JSON.parse(localStorage.getItem('messages')||'[]')

const messages: Message[] = [
  {
    id: uuid(),
    subject: "Local Zone test",
    creation_timestamp: new Date(),
    sent_timestamp:  new Date(),
    received_timestamp:  new Date(),
    read_timestamp:  new Date(),
    key: "--- Not yet Implemented --- ",
    from_node_id: uuid(),
    from_node_alias: "Node # 112",
    to_node_id: uuid(),
    to_node_alias: "Node # 100",
    plaintext: "Blah... Does it work?",
    cyphertext: "--- Not yet Implemented --- ",
  },
  {
    id: uuid(),
    subject: "Zone integration test",
    creation_timestamp: new Date(),
    sent_timestamp:  new Date(),
    received_timestamp:  new Date(),
    read_timestamp:  new Date(),
    key: "--- Not yet Implemented --- ",
    from_node_id: uuid(),
    from_node_alias: "Node # 112",
    to_node_id: uuid(),
    to_node_alias: "Node # 100",
    plaintext: "Blah... Does it work?",
    cyphertext: "--- Not yet Implemented --- ",
  },
  {
    id: uuid(),
    subject: "Notes",
    creation_timestamp: new Date(),
    sent_timestamp:  new Date(),
    received_timestamp:  new Date(),
    read_timestamp:  new Date(),
    key: "--- Not yet Implemented --- ",
    from_node_id: uuid(),
    from_node_alias: "Node # 112",
    to_node_id: uuid(),
    to_node_alias: "Node # 100",
    plaintext: "Blah... Does it work?",
    cyphertext: "--- Not yet Implemented --- ",
  }
];

export const getMessages = () => { return messages; }

export const getMessage = (id:string) => {
  const messages = getMessages();
  const message = messages.find((msg:any)=>msg.id === id);
  return message;
}