import React from "react";

interface SectionData {
  title: string;
  content: string[];
  image: string;
  imagePosition: "left" | "right";
  hasResultBox?: boolean;
}

export const ProblemSolution = (): React.JSX.Element => {
  const sections: SectionData[] = [
    {
      title: "The Problem",
      content: [
        "Inefficient processes consume hours, make your workforce angry and cost your firm actual money. Bottlenecks, bad handoffs, and manual solutions typically go unreported until deadlines are missed or customers are unhappy. Without clear process mapping and a plan for improvement, these issues keep repeating.",
        "Our Process Flow Sprint is a fast, targeted solution that identifies the root cause of workflow breakdowns and fixes them — permanently — with streamlined processes and smart automation.",
      ],
      image: "/services/sd1.png",
      imagePosition: "right",
    },
    {
      title: "The Solution",
      content: [
        "Our Process Flow Sprint is a 14-day intensive to re-engineer your workflows for speed, efficiency, and consistency. We begin with a process mapping session to visualize your current operations and identify pain points.",
        "After that, we construct your ideal-state flow diagrams, getting rid Of unnecessary stages and introducing automation where it makes sense. We'll make sure that every step makes sense and works well, whether its enrolling clients, getting internal approvals, or making sure that projects are delivered on time.",
        "You'll get new SOPs (Standard Operating Procedures) and a Loom video to teach your team, so the changes will persist long after the sprint is over,",
      ],
      image: "/services/sd2.png",
      imagePosition: "left",
      hasResultBox: true,
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-[1320px] mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          {sections.map((section: SectionData, index: number) => (
            <div key={index} className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
              {/* Content Leftt */}
              {section.imagePosition === "left" && (
                <>
                  <img
                    className="w-full max-w-[592px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[759px] object-cover flex-shrink-0"
                    alt={section.title}
                    src={section.image}
                  />
                  <div className="w-full max-w-[644px] flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10">
                    <div className="flex flex-col justify-start items-start gap-4">
                      <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px]">
                        {section.title}
                      </h2>
                      {section.content.map((paragraph: string, paragraphIndex: number) => (
                        <p
                          key={paragraphIndex}
                          className="text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.hasResultBox && (
                      <div className="w-full h-28 px-5 py-3 bg-emerald-50 border-l-[3px] border-teal-400 flex justify-start items-center gap-3">
                        <div className="flex-1">
                          <span className="text-teal-400 text-lg font-bold font-['Inter'] leading-7">
                            The result?{" "}
                          </span>
                          <span className="text-teal-400 text-lg font-medium font-['Inter'] leading-7">
                            Smooth handoffs, faster turnaround times, and a process your team actually
                            <br />
                            follows, without constant firefighting,
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Content Right */}
              {section.imagePosition === "right" && (
                <>
                  <div className="w-full max-w-[644px] flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10">
                    <div className="flex flex-col justify-start items-start gap-4">
                      <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight md:leading-[57.60px]">
                        {section.title}
                      </h2>
                      {section.content.map((paragraph: string, paragraphIndex: number) => (
                        <p
                          key={paragraphIndex}
                          className="text-neutral-600 text-sm sm:text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  <img
                    className="w-full max-w-[592px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[515px] object-cover flex-shrink-0"
                    alt={section.title}
                    src={section.image}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
