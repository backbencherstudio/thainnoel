'use client';

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MessageService } from "@/service/message/message.service";
import toast from 'react-hot-toast';

type MessageFormValues = {
  fullName: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageFormValues>();

  const onSubmit = async (data: MessageFormValues) => {
    try {
      setIsSubmitting(true);
      const response = await MessageService.sendMessage(data);
      if (response.success) {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (error: any) {
      let errorMessage = "Failed to send message. Please try again.";
      
      if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
        errorMessage = "Network error: Please check if the server is running at http://192.168.7.12:3000";
      } else if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error?.response?.status) {
        errorMessage = `Error ${error.response.status}: ${error.response.statusText || 'Server error'}`;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
      console.error("Message send error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 bg-white flex flex-col justify-start items-start gap-8 sm:gap-10 md:gap-12">
      <div className="self-stretch flex flex-col justify-start items-start gap-8 sm:gap-10 md:gap-12">
        {/* Header Section */}
        <div className="self-stretch flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 sm:gap-6 md:gap-8">
          <div className="w-full lg:w-[603px] text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-sans leading-tight sm:leading-tight md:leading-tight lg:leading-[57.60px]">
            Find all the ways to reach us in one place
          </div>
          <div className="w-full lg:w-[471px] lg:text-right text-zinc-500 text-base sm:text-lg font-normal font-sans leading-relaxed sm:leading-7">
            Get in touch with us through your preferred method. Whether by,
            email, or social media, we&apos;re here to help.
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full lg:w-[636px] p-6 sm:p-8 md:p-10 bg-gray-100 rounded-lg border border-blue-400 flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10"
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-3 sm:gap-4">
              <div className="text-slate-950 text-2xl sm:text-3xl font-black font-sans leading-tight sm:leading-tight md:leading-10">
                Send us a Message
              </div>
            </div>

            {/* Form Fields */}
            <div className="self-stretch flex flex-col gap-4">
              <div className="flex-1">
                <input
                  {...register("fullName", { required: "Full name is required" })}
                  type="text"
                  placeholder="Full Name"
                  className="w-full pt-2.5 pb-4 sm:pb-6 px-0 bg-transparent border-b-[0.5px] border-zinc-400 text-neutral-600 text-base sm:text-lg font-normal font-sans leading-relaxed sm:leading-7 focus:outline-none focus:border-blue-600"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div className="flex-1">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full pt-2.5 pb-4 sm:pb-6 px-0 bg-transparent border-b-[0.5px] border-zinc-400 text-neutral-600 text-base sm:text-lg font-normal font-sans leading-relaxed sm:leading-7 focus:outline-none focus:border-blue-600"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="flex-1">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message"
                  rows={4}
                  className="w-full pt-2.5 pb-12 sm:pb-16 px-0 bg-transparent border-b-[0.5px] border-zinc-400 text-neutral-600 text-base sm:text-lg font-normal font-sans leading-relaxed sm:leading-7 focus:outline-none focus:border-blue-600 resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto h-10 sm:h-12 px-4 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-neutral-50 text-sm sm:text-base font-medium font-sans leading-relaxed">
                      Sending...
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-neutral-50 text-sm sm:text-base font-medium font-sans leading-relaxed">
                      Send Message
                    </span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </>
                )}
              </div>
            </Button>
          </form>

          {/* Team Photo */}
          <div className="w-full lg:w-[636px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[570px]">
            <img
              className="w-full h-full rounded-xl object-cover"
              src="/contact/contact.png"
              alt="Professional team meeting in modern office"
            />
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="self-stretch flex flex-col sm:flex-row justify-start items-stretch gap-6 sm:gap-8">
        {/* Email Card */}
        <div className="flex-1 min-w-0 p-6 sm:p-8 md:p-10 bg-gray-50 rounded-[20px] border border-blue-400 flex flex-col justify-start items-start gap-6 sm:gap-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2 sm:p-2.5 bg-blue-600 rounded-[32px] flex justify-center items-center flex-shrink-0">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
            <div className="text-neutral-900 text-lg sm:text-xl font-medium font-sans leading-loose">
              Email
            </div>
            <div className="text-neutral-600 text-base sm:text-lg font-normal font-sans leading-7">
            info@optivo.solutions
            </div>
          </div>
        </div>

        {/* Phone Card */}
        <div className="flex-1 min-w-0 p-6 sm:p-8 md:p-10 bg-gray-50 rounded-[20px] border border-blue-400 flex flex-col justify-start items-start gap-6 sm:gap-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2 sm:p-2.5 bg-blue-600 rounded-[32px] flex justify-center items-center flex-shrink-0">
            <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
            <div className="text-neutral-900 text-lg sm:text-xl font-medium font-sans leading-loose">
              Phone
            </div>
            <div className="text-neutral-600 text-base sm:text-lg font-normal font-sans leading-7">
              +85 555 8888 6666
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="flex-1 min-w-0 p-6 sm:p-8 md:p-10 bg-gray-50 rounded-[20px] border border-blue-400 flex flex-col justify-start items-start gap-6 sm:gap-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2 sm:p-2.5 bg-blue-600 rounded-[32px] flex justify-center items-center flex-shrink-0">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
            <div className="text-neutral-900 text-lg sm:text-xl font-medium font-sans leading-loose">
              Location
            </div>
            <div className="text-neutral-600 text-base sm:text-lg font-normal font-sans leading-7">
            Liverpool, United Kingdom. &
              <br />
              Victoria, Canada.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
