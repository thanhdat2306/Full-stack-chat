import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import Message from "./Message";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	// console.log(messages); 
	useListenMessages();
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && messages.length > 0 && messages.map((message) => (
				<div key={message._id}>
					<Message message={message} />
				</div>
			))}

			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;