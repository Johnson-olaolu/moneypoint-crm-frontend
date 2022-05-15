import moment from "moment";
import React, { useEffect, useState } from "react";
import { db } from "../../../services/firebase.service";
import { ticketService } from "../../../services/ticket.service";
import { getInitials } from "../../../utils/helpers";
import { IUser } from "../../../interfaces/user.interface";
import { FiSend, FiMic, FiPaperclip, FiCamera } from "react-icons/fi";

interface ITicketChat {
  ticketRef: string;
}

const TicketChat: React.FC<ITicketChat> = (props) => {
  const { ticketRef } = props;
  const [messages, setMessages] = useState<{ userId?: number; message: string; sentAt: Date; createdAt: Date }[]>();

  useEffect(() => {
    const firebaseticketRef = db.ref(`ticket/${ticketRef}`);
    firebaseticketRef.child("messages").on("value", (snapshot) => {
      const allMessages: any[] = [];
      snapshot.forEach((childSnapshot) => {
        allMessages.push(childSnapshot.val());
      });
      setMessages(allMessages);
    });
  }, [ticketRef]);

  useEffect(() => {
    document
      .querySelector<HTMLDivElement>(".ticket-chat")!
      .scroll({ top: document.querySelector<HTMLDivElement>(".ticket-chat")!.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const [messageData, setMessageData] = useState("");

  const handleSendMessage = async () => {
    let payload = {
      ticketRef: ticketRef,
      message: messageData,
      sentAt: new Date(),
    };
    const response = await ticketService.sendNewMessage(payload);
    setMessageData("");
  };

  return (
    <div className="  flex flex-col gap-2">
      <div className="grow h-96 overflow-y-auto ticket-chat">
        {messages?.map((message: { user?: string; message: string; sentAt: Date; createdAt: Date }, idx) => (
          <SingleChatItem key={idx} sentAt={message.sentAt} createdAt={message.createdAt} message={message.message} user={message.user} />
        ))}
      </div>
      {/* chat bar */}
      <div className=" h-8 shrink-0">
        <div className=" flex space-x-2">
          <div className=" grow bg-gray-100 rounded-full px-4 flex items-center space-x-4">
            <FiMic className=" h-4 text-gray-500" />
            <input
              type="text"
              name="message"
              placeholder="Type in your message here"
              value={messageData}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMessageData(e.target.value);
              }}
              className=" flex-grow bg-transparent focus-visible:outline-none text-sm placeholder:text-gray-300 text-gray-600"
            />
            <div className=" flex shrink-0 items-center space-x-2">
              <FiPaperclip className=" h-4 text-gray-300" />
              <FiCamera className="h-4 text-gray-700" />
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={messageData === ""}
            className=" h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer disabled:opacity-50"
          >
            <FiSend className=" h-4 text-moneypoint-blue" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface ISingleChat {
  sentAt: Date;
  createdAt: Date;
  message: string;
  user?: string;
}
const SingleChatItem: React.FC<ISingleChat> = (props) => {
  // const { user }: { user: IUser } = useSelector((state: any) => state.user);
  const { message, sentAt, createdAt, user } = props;
  return (
    <div className=" mb-4">
      {user ? (
        <div className=" flex space-x-2 items-end max-w-md ">
          <div className=" w-6 h-6 rounded-full bg-gray-200 shrink-0 flex items-center justify-center">
            <span className=" text-xs text-gray-800">{getInitials(user)}</span>
          </div>
          <div className=" bg-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg text-xs p-4 text-gray-600">
            {message}
            <p className="text-right text-blue-400">{moment(sentAt).fromNow()}</p>
          </div>
        </div>
      ) : (
        <div className=" flex space-x-2 items-end max-w-md ml-auto justify-end">
          <div className=" bg-moneypoint-blue rounded-tl-lg rounded-tr-lg rounded-bl-lg text-xs p-4 text-blue-100">
            {message}
            <p className="text-right text-blue-400">{moment(sentAt).fromNow()}</p>
          </div>
          <div className=" w-6 h-6 rounded-full bg-moneypoint-blue shrink-0 flex items-center justify-center">
            <span className=" text-xs text-white">G</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketChat;
