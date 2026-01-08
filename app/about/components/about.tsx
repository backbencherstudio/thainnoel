import React from "react";
import Image from "next/image";

const UserProfileSection = (): React.ReactElement => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <Image
            className="w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[620px] h-auto"
            alt="Medium business"
            src="/about/mediumbusiness.png"
            width={620}
            height={480}
          />

          <div className="flex flex-col w-full items-start gap-6 sm:gap-7 md:gap-8 lg:gap-9">
            <h2 className="self-stretch text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px]">
              Optivo Solutions – Mission Statement
            </h2>

            <div className="flex flex-col items-start gap-4 sm:gap-5 self-stretch w-full">
              <p className="w-full text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                Our mission is to simplify operations, strengthen delivery, and help growing businesses scale with confidence.
              </p>

              <p className="self-stretch text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                We combine experienced fractional operations leadership, Agile and Scrum-based project management, and customer service management frameworks to build efficient, accountable, and scalable organisations.
              </p>

              <div className="flex flex-col items-start gap-3 sm:gap-4 self-stretch w-full">
                <p className="self-stretch text-neutral-600 text-base sm:text-lg font-medium font-['Inter'] leading-relaxed md:leading-loose">
                  Optivo helps founders, supervisors, and directors to:
                </p>
                <ul className="flex flex-col items-start gap-2 sm:gap-3 self-stretch w-full list-disc list-inside">
                  <li className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                    Design clear, efficient operational systems
                  </li>
                  <li className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                    Deliver projects predictably using Agile and Scrum methodologies
                  </li>
                  <li className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                    Build high-performing customer service teams with measurable standards
                  </li>
                  <li className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                    Use data, KPIs, and automation to make better decisions
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-3 sm:gap-4 self-stretch w-full">
                <p className="self-stretch text-neutral-600 text-base sm:text-lg font-medium font-['Inter'] leading-relaxed md:leading-loose">
                  We believe great operations should be:
                </p>
                <ul className="flex flex-col items-start gap-2 sm:gap-3 self-stretch w-full list-disc list-inside">
                  <li className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                    Simple to understand
                  </li>
                  <li className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                    Structured but flexible
                  </li>
                  <li className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                    Customer-focused
                  </li>
                  <li className="text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                    Driven by continuous improvement
                  </li>
                </ul>
              </div>

              <p className="self-stretch text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                Our purpose is to turn operational complexity into clarity—so teams can execute better, serve customers better, and grow sustainably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterSection = (): React.ReactElement => {
  const processSteps = [
    {
      icon: "/about/audit.svg",
      label: "Audit",
    },
    {
      icon: "/about/implement.svg",
      label: "Implement",
    },
    {
      icon: "/about/optimize.svg",
      label: "Optimize",
    },
    {
      icon: "/about/scale.svg",
      label: "Scale",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-violet-50">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <div className="flex flex-col w-full lg:w-[640px] items-start gap-6 sm:gap-7 md:gap-8 lg:gap-9">
            <h2 className="self-stretch text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px]">
              How We Work
            </h2>

            <div className="flex flex-col items-start gap-6 sm:gap-7 md:gap-8 lg:gap-9 self-stretch w-full">
              <div className="flex flex-col items-start gap-4 sm:gap-5 self-stretch w-full">
                <p className="self-stretch text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                  Our mission is simple: to empower business leaders with the
                  systems, tools, and support they need to scale sustainably.
                </p>

                <p className="self-stretch text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
                  We believe that operational clarity is the foundation of a
                  scalable business. Our mission is to empower founders and teams
                  with the systems, structure, and strategic insight they need to
                  grow without chaos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-3 sm:gap-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 w-full">
                    <Image
                      className="w-8 h-8 object-cover"
                      alt="Process step icon"
                      src={step.icon}
                      width={32}
                      height={32}
                    />
                    <div className="text-neutral-600 text-base sm:text-lg font-medium font-['Inter'] leading-relaxed md:leading-loose">
                      {step.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Image
            className="object-cover w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[620px] h-auto"
            alt="Business meeting workspace"
            src="/about/Rectangle34624443-1.png"
            width={620}
            height={384}
          />
        </div>
      </div>
    </section>
  );
};

const ContentDisplaySection = (): React.ReactElement => {
  const workWithItems = [
    {
      icon: "/about/audit.svg",
      text: "SaaS & Tech Startups",
    },
    {
      icon: "/about/optimize.svg",
      text: "Creative Studios",
    },
    {
      icon: "/about/implement.svg",
      text: "Health & Wellness Brands",
    },
    {
      icon: "/about/scale.svg",
      text: "B2B Service Providers",
    },
    {
      icon: "/about/scale.svg",
      text: "E-commerce Teams",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-start gap-8 sm:gap-10 md:gap-12">
          <header className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 sm:gap-6">
            <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px]">
              Who We Work With
            </h2>

            <p className="w-full lg:w-[462px] text-left lg:text-right text-neutral-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose">
              We&apos;ve had the privilege of partnering with ambitious,
              fast-growing teams across multiple industries.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full">
            <Image
              className="object-cover w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[640px] h-auto"
              alt="Team collaboration"
              src="/about/Rectangle34624448.png"
              width={640}
              height={320}
            />

            <div className="flex flex-col items-start gap-4 sm:gap-5 flex-1">
              <div className="grid grid-cols-1 gap-4 sm:gap-5 w-full">
                {workWithItems.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 w-full">
                    <Image className="w-6 h-6 sm:w-8 sm:h-8" alt="Frame" src={item.icon} width={32} height={32} />
                    <span className="flex-1 text-neutral-600 text-lg sm:text-xl md:text-2xl font-medium font-['Inter'] leading-relaxed md:leading-9">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-5 w-full">
                {workWithItems.slice(2).map((item, index) => (
                  <div key={index + 2} className="flex items-center gap-3 w-full">
                    <Image className="w-6 h-6 sm:w-8 sm:h-8" alt="Frame" src={item.icon} width={32} height={32} />
                    <span className="flex-1 text-neutral-600 text-lg sm:text-xl md:text-2xl font-medium font-['Inter'] leading-relaxed md:leading-9">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <div className="w-full">
      <UserProfileSection />
      <FooterSection />
      <ContentDisplaySection />
    </div>
  );
}
