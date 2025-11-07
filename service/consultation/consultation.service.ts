import axiosClient from "../../lib/axiosclient";

export interface ConsultationRequest {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  service: string;
  datetime: string;
  message: string;
  timezone: string;
}

export interface ConsultationResponse {
  success: boolean;
  data: ConsultationRequest;
}

export const ConsultationService = {
  sendConsultation: async (data: ConsultationRequest): Promise<ConsultationResponse> => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.7.12:3000";
    console.log('ConsultationService: Full URL:', baseURL + '/email');
    console.log('ConsultationService: Sending POST to /email with data:', data);
    const response = await axiosClient.post<ConsultationResponse>("/email", data);
    console.log('ConsultationService: Response received:', response.data);
    return response.data;
  },
};

