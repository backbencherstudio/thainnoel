import axiosClient from "../../lib/axiosclient";

export interface SendMessageRequest {
  fullName: string;
  email: string;
  message: string;
}

export interface SendMessageResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    fullName: string;
    email: string;
    createdAt: string;
  };
}

export const MessageService = {
  sendMessage: async (data: SendMessageRequest): Promise<SendMessageResponse> => {
    const response = await axiosClient.post<SendMessageResponse>("/message", data);
    return response.data;
  },

  getAllMessages: async () => {
    const response = await axiosClient.get("/message");
    return response.data;
  },
};

