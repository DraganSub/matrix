import { useContext, useRef } from "react";
import { useState } from "react";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/App.css";
import MainLaoyut from "../layouts/MainLayout";


export function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [client, setClient] = useState(null);
    const [chatRoom, setChatRoom] = useState(null);
    const [ready, setReady] = useState(false);
    const context = useContext(AppContext);
    const messagesRef = useRef(null);

    function handleSubmit(message) {
        client.publish({
            room: 'basic',
            message: message,
        });
    }

    const messageComponents = messages.map((message) => {
        return <Message
            key={message.id}
            avatarIndex={message.author.avatarIndex}
            author={message.author.username}
            text={message.text}
        />;
    });

    useEffect(() => {
        const drone = new window.Scaledrone('vTEtVQcoOGrelJbO');

        drone.on('open', (error) => {
            if (error) {
                console.log(error)
            } else {
                const room = drone.subscribe('basic');
                setClient(drone);
                setChatRoom(room);
            }
        });
    }, []);

    useEffect(() => {
        if (chatRoom !== null && !ready) {
            chatRoom.on('data', (data) => {
                setMessages((messages) => {
                    return [...messages, data];
                });
            });

            setReady(true);
        }
    }, [chatRoom, ready]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (messagesRef.current != null) {
            messagesRef.current.scrollTop = messagesRef?.current?.scrollHeight;
        }
    };

    if (!context.isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <MainLaoyut>

                <div
                    className="message-wrap"
                    ref={messagesRef}
                >
                    <div className="messages" >
                        {messageComponents}
                    </div>
                    <MessageForm onSubmit={handleSubmit}
                        username={context.username}
                        avatarIndex={context.avatarIndex}
                    />
                </div>
            </MainLaoyut>
        </>
    )
}