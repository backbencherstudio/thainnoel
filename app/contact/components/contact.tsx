import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
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
          <div className="w-full lg:w-[636px] p-6 sm:p-8 md:p-10 bg-indigo-50 rounded-lg border border-blue-400 flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-3 sm:gap-4">
              <div className="text-slate-950 text-2xl sm:text-3xl font-black font-sans leading-tight sm:leading-tight md:leading-10">
                Send us a Message
              </div>
            </div>

            {/* Form Fields */}
            <div className="self-stretch flex justify-start items-center gap-4 sm:gap-6">
              <div className="flex-1 pt-2.5 pb-4 sm:pb-6 border-b-[0.5px] border-zinc-400">
                <div className="text-neutral-600 text-base sm:text-lg font-normal font-sans leading-relaxed sm:leading-7">
                  Full Name
                </div>
              </div>
            </div>

            <div className="self-stretch flex justify-start items-center gap-4 sm:gap-6">
              <div className="flex-1 pt-2.5 pb-4 sm:pb-6 border-b-[0.5px] border-zinc-400">
                <div className="text-neutral-600 text-base sm:text-lg font-normal font-sans leading-relaxed sm:leading-7">
                  Email
                </div>
              </div>
            </div>

            <div className="self-stretch pt-2.5 pb-12 sm:pb-16 border-b-[0.5px] border-zinc-400">
              <div className="text-neutral-600 text-base sm:text-lg font-normal font-sans leading-relaxed sm:leading-7">
                Message
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full sm:w-auto h-10 sm:h-12 px-4 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center gap-1">
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-neutral-50 text-sm sm:text-base font-medium font-sans leading-relaxed">
                  Send Message
                </span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </Button>
          </div>

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
        <div className="flex-1 min-w-0 p-6 sm:p-8 md:p-10 bg-indigo-50 rounded-[20px] border border-blue-400 flex flex-col justify-start items-start gap-6 sm:gap-8">
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
        <div className="flex-1 min-w-0 p-6 sm:p-8 md:p-10 bg-indigo-50 rounded-[20px] border border-blue-400 flex flex-col justify-start items-start gap-6 sm:gap-8">
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
        <div className="flex-1 min-w-0 p-6 sm:p-8 md:p-10 bg-indigo-50 rounded-[20px] border border-blue-400 flex flex-col justify-start items-start gap-6 sm:gap-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2 sm:p-2.5 bg-blue-600 rounded-[32px] flex justify-center items-center flex-shrink-0">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
            <div className="text-neutral-900 text-lg sm:text-xl font-medium font-sans leading-loose">
              Location
            </div>
            <div className="text-neutral-600 text-base sm:text-lg font-normal font-sans leading-7">
              4517 Washington Ave. Manchester,
              <br />
              Kentucky 39495
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
