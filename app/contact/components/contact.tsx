import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-36 py-24 bg-white flex flex-col justify-start items-start gap-12">
      <div className="self-stretch flex flex-col justify-start items-start gap-12">
        {/* Header Section */}
        <div className="self-stretch flex justify-between items-end">
          <div className="w-[603px] text-neutral-900 text-5xl font-black font-sans leading-[57.60px]">
            Find all the ways to reach us in one place
          </div>
          <div className="w-[471px] text-right text-zinc-500 text-lg font-normal font-sans leading-7">
            Get in touch with us through your preferred method. Whether by,
            email, or social media, we're here to help.
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full flex justify-between items-center gap-12">
          {/* Contact Form */}
          <div className="w-[636px] p-10 bg-indigo-50 rounded-lg border border-blue-400 flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="text-slate-950 text-3xl font-black font-sans leading-10">
                Send us a Message
              </div>
            </div>

            {/* Form Fields */}
            <div className="self-stretch flex justify-start items-center gap-6">
              <div className="flex-1 pt-2.5 pb-6 border-b-[0.5px] border-zinc-400">
                <div className="text-neutral-600 text-lg font-normal font-sans leading-7">
                  Full Name
                </div>
              </div>
            </div>

            <div className="self-stretch flex justify-start items-center gap-6">
              <div className="flex-1 pt-2.5 pb-6 border-b-[0.5px] border-zinc-400">
                <div className="text-neutral-600 text-lg font-normal font-sans leading-7">
                  Email
                </div>
              </div>
            </div>

            <div className="self-stretch pt-2.5 pb-16 border-b-[0.5px] border-zinc-400">
              <div className="text-neutral-600 text-lg font-normal font-sans leading-7">
                Message
              </div>
            </div>

            {/* Submit Button */}
            <Button className="h-12 px-4 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center gap-1">
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-neutral-50 text-base font-medium font-sans leading-relaxed">
                  Send Message
                </span>
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </Button>
          </div>

          {/* Team Photo */}
          <div className="w-[636px] h-[570px]">
            <img
              className="w-full h-full rounded-xl object-cover"
              src="/contact/contact.png"
              alt="Professional team meeting in modern office"
            />
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="self-stretch flex flex-col sm:flex-row justify-start items-stretch gap-8">
        {/* Email Card */}
        <div className="flex-1 min-w-0 p-10 bg-indigo-50 rounded-[20px] border border-blue-400 flex flex-col justify-start items-start gap-8">
          <div className="w-16 h-16 p-2.5 bg-blue-600 rounded-[32px] flex justify-center items-center flex-shrink-0">
            <Mail className="w-9 h-9 text-white" />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-neutral-900 text-xl font-medium font-sans leading-loose">
              Email
            </div>
            <div className="text-neutral-600 text-lg font-normal font-sans leading-7">
              example@gmail.com
            </div>
          </div>
        </div>

        {/* Phone Card */}
        <div className="flex-1 min-w-0 p-10 bg-indigo-50 rounded-[20px] border border-blue-400 flex flex-col justify-start items-start gap-8">
          <div className="w-16 h-16 p-2.5 bg-blue-600 rounded-[32px] flex justify-center items-center flex-shrink-0">
            <Phone className="w-9 h-9 text-white" />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-neutral-900 text-xl font-medium font-sans leading-loose">
              Phone
            </div>
            <div className="text-neutral-600 text-lg font-normal font-sans leading-7">
              +85 555 8888 6666
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="flex-1 min-w-0 p-10 bg-indigo-50 rounded-[20px] border border-blue-400 flex flex-col justify-start items-start gap-8">
          <div className="w-16 h-16 p-2.5 bg-blue-600 rounded-[32px] flex justify-center items-center flex-shrink-0">
            <MapPin className="w-9 h-9 text-white" />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-neutral-900 text-xl font-medium font-sans leading-loose">
              Location
            </div>
            <div className="text-neutral-600 text-lg font-normal font-sans leading-7">
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
