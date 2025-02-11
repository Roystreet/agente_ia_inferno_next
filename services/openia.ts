import OpenAI from "openai";
import promptMarketingDante from "@/templates/marketing";

export class OpenAIAssistant {
    private client: OpenAI;
    private assistant: any;
    private thread: any;

    constructor(apiKey: string) {
        this.client = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });
    }

    async initialize(
        instructions: string = promptMarketingDante
    ) {
        // Create an assistant
        this.assistant = await this.client.beta.assistants.create({
            name: "Dante Agente Inferno",
            description: "Dante es un agente de marketing de The Inferno, una agencia líder en innovación publicitaria.",
            instructions,
            tools: [],
            model: "gpt-4o-mini",
        });

        // Create a thread
        this.thread = await this.client.beta.threads.create();
    }

    async getResponse(userMessage: string): Promise<string> {
        if (!this.assistant || !this.thread) {
            throw new Error("Assistant not initialized. Call initialize() first.");
        }

        // Add user message to thread
        await this.client.beta.threads.messages.create(this.thread.id, {
            role: "user",
            content: userMessage,
        });

        // Create and run the assistant
        const run = await this.client.beta.threads.runs.createAndPoll(
            this.thread.id,
            { assistant_id: this.assistant.id }
        );

        if (run.status === "completed") {
            // Get the assistant's response
            const messages = await this.client.beta.threads.messages.list(
                this.thread.id
            );

            // Get the latest assistant message
            const lastMessage = messages.data.filter(
                (msg) => msg.role === "assistant"
            )[0];

            if (lastMessage && lastMessage.content[0].type === "text") {
                return lastMessage.content[0].text.value;
            }
        }

        return "Sorry, I couldn't process your request.";
    }
}
