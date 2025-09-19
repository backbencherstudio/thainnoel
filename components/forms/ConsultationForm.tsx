// components/ConsultationForm.tsx

'use client';

import { useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  service: string;
  message: string;
};

const ConsultationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data);
    // You can integrate email sending or backend API call here.
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  p-6 sm:p-10 bg-white shadow-[0px_4px_25.899999618530273px_24px_rgba(109,109,109,0.03)] mx-auto flex flex-col justify-center items-center gap-6 rounded-md"
    >
      <div className="w-full flex flex-col items-center gap-4">
        <h2 className="text-center text-neutral-800 text-2xl sm:text-3xl font-semibold font-poppins leading-10">
          Schedule a Free Consultation
        </h2>

        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 h-px bg-zinc-200" />
          <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.889 1.93075C20.403 1.72881 20.656 1.14839 20.4541 0.634348C20.2521 0.120308 19.6717 -0.132696 19.1577 0.0692485L19.5233 1L19.889 1.93075ZM8.48934 22.8455C8.9563 23.1404 9.57391 23.0009 9.86883 22.534L14.6748 14.9246C14.9697 14.4576 14.8302 13.84 14.3633 13.5451C13.8963 13.2502 13.2787 13.3897 12.9838 13.8566L8.71184 20.6205L1.94793 16.3486C1.48098 16.0537 0.863365 16.1931 0.568449 16.6601C0.273533 17.127 0.412994 17.7446 0.879945 18.0396L8.48934 22.8455ZM19.5233 1L19.1577 0.0692485C16.6639 1.04894 13.1689 3.3145 10.6499 6.97009C8.1079 10.6591 6.58337 15.7345 8.0479 22.2203L9.02334 22L9.99878 21.7797C8.66331 15.8655 10.0554 11.3576 12.2968 8.10491C14.5611 4.81883 17.7161 2.78439 19.889 1.93075L19.5233 1Z"
              fill="#1D1F2C"
            />
          </svg>
          <div className="flex-1 h-px bg-zinc-200" />
        </div>
      </div>

      {/* Form Fields */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-neutral-800 text-lg font-inter">First name</label>
            <input
              {...register('firstName', { required: true })}
              className="w-full h-12 px-3 mt-1 border border-zinc-200 rounded"
              placeholder="John"
            />
            {errors.firstName && <p className="text-red-500 text-sm">First name is required</p>}
          </div>
          <div className="flex-1">
            <label className="block text-neutral-800 text-lg font-inter">Last name</label>
            <input
              {...register('lastName', { required: true })}
              className="w-full h-12 px-3 mt-1 border border-zinc-200 rounded"
              placeholder="Doe"
            />
            {errors.lastName && <p className="text-red-500 text-sm">Last name is required</p>}
          </div>
        </div>

        <div>
          <label className="block text-neutral-800 text-lg font-inter">Company / Organization</label>
          <input
            {...register('company', { required: true })}
            className="w-full h-12 px-3 mt-1 border border-zinc-200 rounded"
            placeholder="Your Company"
          />
          {errors.company && <p className="text-red-500 text-sm">Company is required</p>}
        </div>

        <div>
          <label className="block text-neutral-800 text-lg font-inter">Company Email</label>
          <input
            {...register('email', { required: true })}
            type="email"
            className="w-full h-12 px-3 mt-1 border border-zinc-200 rounded"
            placeholder="example@company.com"
          />
          {errors.email && <p className="text-red-500 text-sm">Valid email is required</p>}
        </div>

        <div>
          <label className="block text-neutral-800 text-lg font-inter">Which service you want?</label>
          <select
            {...register('service', { required: true })}
            className="w-full h-12 px-3 mt-1 border border-zinc-200 rounded"
          >
            <option value="">Select Option</option>
            <option value="Web Design">Web Design</option>
            <option value="Marketing Strategy">Marketing Strategy</option>
            <option value="SEO Services">SEO Services</option>
            <option value="Consulting">Consulting</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm">Please select a service</p>}
        </div>

        <div>
          <label className="block text-neutral-800 text-lg font-inter">Message</label>
          <textarea
            {...register('message')}
            className="w-full h-28 px-3 py-2 mt-1 border border-zinc-200 rounded resize-none"
            placeholder="To better assist you, please describe how we can help..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex gap-2 justify-center items-center  px-6 py-3 mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg rounded transition duration-300"
      >
        <span>Book a Consultation</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13H18.5715M14.0001 18L19 13L14 8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </form>
  );
};

export default ConsultationForm;
