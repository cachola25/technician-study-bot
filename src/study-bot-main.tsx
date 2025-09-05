import { useEffect, useState } from "react";
import { INITIAL_FIRE_PROMPT, TEMP_TOPICS } from "./constants";
import { MessageCircle } from "lucide-react";
interface ChatMessage {
    role: "user" | "studyBot" | "default";
    content: string;
    citations?: { title: string; section?: string; url?: string }[];
}
// Main function that will handle prompts to the
// chat bot
export default function StudyBotMain() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: "default", content: INITIAL_FIRE_PROMPT },
        { role: "studyBot", content: "Hello, ask about NICET topics." }
    ]);
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const text = input.trim();
        if (!text) {
            return;
        }
        setMessages((prev) => [...prev, {role: "user", content: text}]);
        setInput("");
    }
    return (
        <div className="border rounded-xl bg-red-400 flex flex-col">
            <header className="border rounded-xl border-b p-4 font-semibold bg-blue-200">
                Technician Study Bot
            </header>

            <main className="border rounded-xl flex items-center justify-center p-6 bg-green-200">
                <div className="border rounded-xl p-20 text-neutral-400">
                    <div>
                        {messages.filter((m) => m.role !== "default")
                        .map((m, idx) => (
                            <MessageBubble key={idx} msg={m} />
                        ))}
                    </div>
                    Chat area
                </div>
            </main>

        </div>

    );
}

function MessageBubble({ msg }: {msg: ChatMessage}) {
    const isUser = msg.role === "user";
    const msgType = isUser ? "justify-end" : "justify-start"
    return (
        <div className={`flex ${msgType}`}>
            <div>{msg.content}</div>
        </div>
    );
}