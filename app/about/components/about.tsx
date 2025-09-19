import React from "react";
import Image from "next/image";

const UserProfileSection = (): React.ReactElement => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="flex items-center gap-14">
          <Image
            className="flex-shrink-0"
            alt="Jordan Blake"
            src="/about/Rectangle34624443.png"
            width={620}
            height={480}
          />

          <div className="flex flex-col w-[640px] items-start gap-9">
            <h2 className="self-stretch text-black text-5xl font-bold font-['Inter'] leading-[57.60px]">
              Meet the Founder
            </h2>

            <div className="flex flex-col items-start gap-5 self-stretch w-full">
              <p className="w-[622px] text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                Hi, I&apos;m Jordan Blake, an operations consultant with a passion
                for helping businesses run smarter, not harder. With over [X] years
                of experience working across [industry types], I&apos;ve helped
                startups and scaling businesses streamline their workflows, build
                efficient systems, and unlock real growth.
              </p>

              <p className="self-stretch text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                My approach is rooted in clarity, consistency, and execution. When
                I&apos;m not solving operational puzzles, you&apos;ll find me [fun
                fact/hobby].
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 self-stretch w-full">
              <p className="text-[#2970ff] text-lg font-normal font-['Inter'] leading-loose">
                Signature by the founder:
              </p>

              <div className="bg-gradient-to-br from-sky-950 to-blue-600 bg-clip-text text-transparent font-['Lavishly_Yours'] text-lg leading-loose">
                <Image src="/about/Jordan.svg" alt="Jordan Blake" width={100} height={100} />
              </div>
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
    <section className="w-full py-24 bg-violet-50">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="flex items-start gap-14">
          <div className="flex flex-col w-[640px] items-start gap-9">
            <h2 className="self-stretch text-black text-5xl font-bold font-['Inter'] leading-[57.60px]">
              How We Work
            </h2>

            <div className="flex flex-col items-start gap-9 self-stretch w-full">
              <div className="flex flex-col items-start gap-5 self-stretch w-full">
                <p className="self-stretch text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  Our mission is simple: to empower business leaders with the
                  systems, tools, and support they need to scale sustainably.
                </p>

                <p className="self-stretch text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  We believe that operational clarity is the foundation of a
                  scalable business. Our mission is to empower founders and teams
                  with the systems, structure, and strategic insight they need to
                  grow without chaos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 w-full">
                    <Image
                      className="w-8 h-8"
                      alt="Process step icon"
                      src={step.icon}
                      width={32}
                      height={32}
                    />
                    <div className="text-neutral-600 text-lg font-medium font-['Inter'] leading-loose">
                      {step.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Image
            className="object-cover"
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
    <section className="w-full py-24 bg-white">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="flex flex-col items-start gap-12">
          <header className="flex items-start justify-between w-full">
            <h2 className="text-black text-5xl font-bold font-['Inter'] leading-[57.60px]">
              Who We Work With
            </h2>

            <p className="w-[462px] text-right text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
              We&apos;ve had the privilege of partnering with ambitious,
              fast-growing teams across multiple industries.
            </p>
          </header>

          <div className="flex items-center justify-center gap-20 w-full">
            <Image
              className="object-cover"
              alt="Team collaboration"
              src="/about/Rectangle34624448.png"
              width={640}
              height={320}
            />

            <div className="flex flex-col items-start gap-5 flex-1">
              <div className="grid grid-cols-1 gap-5 w-full">
                {workWithItems.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 w-full">
                    <Image className="w-8 h-8" alt="Frame" src={item.icon} width={32} height={32} />
                    <span className="flex-1 text-neutral-600 text-2xl font-medium font-['Inter'] leading-9">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-5 w-full">
                {workWithItems.slice(2).map((item, index) => (
                  <div key={index + 2} className="flex items-center gap-3 w-full">
                    <Image className="w-8 h-8" alt="Frame" src={item.icon} width={32} height={32} />
                    <span className="flex-1 text-neutral-600 text-2xl font-medium font-['Inter'] leading-9">
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
