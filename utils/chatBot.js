import axios from "axios";
import baseUrl from './baseUrl'

const chatBot = () => {
    window.watsonAssistantChatOptions = {
        integrationID: "66283dab-0f7f-47e7-b980-3a84f5253253", // The ID of this integration.
        region: "us-south", // The region your integration is hosted in.
        serviceInstanceID: "89613bfd-2fd5-400a-a35c-dd0d49e9f84f", // The ID of your service instance.
        onLoad: function (instance) { instance.render(); }
    };
	setTimeout(function () {
		const t = document.createElement('script');
		t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
		document.head.appendChild(t);
	});
}

const getChatBot = async () => {
    const response = await axios.get(`${baseUrl}/api/v1/appsettings/chatBotState`);

    if(JSON.stringify(response.data) == "true") {
        console.log("Inside chatbot: " + JSON.stringify(response.data))
        return chatBot();
    } else {
        console.log("Inside chatbot: " + JSON.stringify(response.data))
        return null;
    }
}

export default getChatBot;
