'use client'
import BoostSuccess from "@/app/home/components/BoostSuccess";
import { SquareCheck, ArrowUpRight } from "lucide-react"
import ServiceBoost from "./serviceboost";

/**
 * ServiceLoop Component
 * 
 * This component displays 5 service sections with alternating layouts:
 * - Each section has 2 content blocks (image + content, then content + image)
 * - Alternating background colors (violet-50 and black)
 * - All content is contained within max-width 1320px containers
 * - Maintains exact same visual design as original
 */

// Reusable Feature Item Component
interface FeatureItemProps {
  text: string;
  isDark?: boolean;
}

const FeatureItem = ({ text, isDark = false }: FeatureItemProps) => (
  <div className="self-stretch inline-flex justify-start items-center gap-1.5">
    <div className="w-5 h-5 flex items-center justify-center">
      <SquareCheck className="w-4 h-4 text-blue-600" />
    </div>
    <div className={`justify-start text-lg font-normal font-['Inter'] leading-loose ${
      isDark ? 'text-gray-300' : 'text-neutral-600'
    }`}>
      {text}
    </div>
  </div>
);

// Reusable Learn More Link Component
const LearnMoreLink = () => (
  <div className="flex flex-col justify-start items-start gap-2.5">
    <div className="border-b border-blue-600 inline-flex justify-start items-center gap-1">
      <div className="justify-start text-blue-600 text-lg font-semibold font-['Open_Sans'] leading-relaxed">
        Learn More
      </div>
      <ArrowUpRight className="w-6 h-6 text-blue-600" />
    </div>
  </div>
);

// Reusable Content Block Component
interface ContentBlockProps {
  title: string;
  subtitle: string;
  description?: string;
  additionalDescription?: string;
  features?: string[];
  featuresTitle?: string;
  isDark?: boolean;
}

const ContentBlock = ({ 
  title, 
  subtitle, 
  description, 
  additionalDescription, 
  features = [], 
  featuresTitle,
  isDark = false 
}: ContentBlockProps) => (
  <div className="w-[644px] inline-flex flex-col justify-start items-start gap-6">
    <div className="self-stretch flex flex-col justify-start items-start gap-4">
      <div className={`self-stretch justify-start text-5xl font-bold font-['Inter'] leading-[57.60px] ${
        isDark ? 'text-white' : 'text-black'
      }`}>
        {title}
      </div>
      <div className={`self-stretch justify-start text-lg font-medium font-['Inter'] leading-loose ${
        isDark ? 'text-gray-300' : 'text-neutral-600'
      }`}>
        {subtitle}
      </div>
    </div>
    {description && (
      <div className={`self-stretch justify-start text-lg font-normal font-['Inter'] leading-loose ${
        isDark ? 'text-gray-300' : 'text-neutral-600'
      }`}>
        {description}
      </div>
    )}
    {additionalDescription && (
      <div className={`self-stretch justify-start text-lg font-normal font-['Inter'] leading-loose ${
        isDark ? 'text-gray-300' : 'text-neutral-600'
      }`}>
        {additionalDescription}
      </div>
    )}
    {features.length > 0 && featuresTitle && (
      <div className="w-[575px] flex flex-col justify-start items-start gap-4">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className={`self-stretch justify-start text-3xl font-semibold font-['Poppins'] leading-10 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            {featuresTitle}
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature} isDark={isDark} />
            ))}
          </div>
        </div>
        <LearnMoreLink />
      </div>
    )}
  </div>
);

// Reusable Image Component
interface ServiceImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const ServiceImage = ({ src, alt, width = "w-[620px]", height = "h-[659px]" }: ServiceImageProps) => (
  <img 
    src={src} 
    alt={alt} 
    className={`${width} ${height} object-cover`} 
  />
);

export default function ServiceLoop() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden mx-auto">
      <div className=" h-[7756px] relative mx-auto mb-[0px] sm:mb-[150px]">
        
        {/* Section 1: KPI Tune-Up - Light Background */}
        <div className="w-full py-24 left-0 top-0 absolute bg-[#F3F6FE] inline-flex flex-col justify-start items-start gap-24">
          {/* Content Container with max-width */}
          <div className="w-full max-w-[1320px] mx-auto ">
            {/* First Row: Image + Content */}
            <div className="self-stretch inline-flex justify-start items-center gap-14 mb-[100px] ">
              <ServiceImage 
                src="/services/srv1.png" 
                alt="KPI Tune-Up Service" 
              />
              <ContentBlock
                title="KPI Tune-Up (30-Day Package)"
                subtitle="Our KPI Tune-Up will assist you in determining what is driving performance as soon as possible, even if you have a large number of reports but are unsure of what is driving them."
                description="Within a period of less than thirty days, we will do an exhaustive audit, determine which indicators are significant in your workplace, and modify the way you report in order to better align with your business objectives. A custom reporting dashboard will be provided to you as well, allowing you to integrate Google Sheets, Notion, and more. Moreover, this dashboard will enable you to view things in real time and make decisions in a timely manner."
              />
            </div>
            
            {/* Second Row: Content + Image */}
            <div className="self-stretch inline-flex justify-start items-center gap-14">
              <div className="w-[620px] inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  Our KPI system is a great tool for business owners, managers, and teams who want to make smart, well-thought-out choices without getting lost in a sea of spreadsheets. You don't have to spend hours looking through raw data to get clear, usable information that helps you make decisions every day.
                </div>
                <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  At the end of the month, your team will have a plan that is clear, simple, and clearly connected KPI framework that is easy to grasp and fits with your business goals. It becomes a structure that helps them move forward and be responsible instead of a burden that slows them down.
                </div>
                <div className="w-[575px] flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch justify-start text-black text-3xl font-semibold font-['Poppins'] leading-10">
                      Overall, this package also includes:
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <FeatureItem text="Comprehensive KPI audit and analysis" />
                      <FeatureItem text="Realigned metrics mapped to objectives" />
                      <FeatureItem text="A fully functional dashboard for ongoing tracking" />
                      <FeatureItem text="One 60-minute strategy call and two check-in sessions" />
                    </div>
                  </div>
                  <LearnMoreLink />
                </div>
              </div>
              <ServiceImage 
                src="/services/srv2.png" 
                alt="KPI Tune-Up Service Features" 
              />
            </div>
          </div>
        </div>

        {/* Section 2: Process Flow Sprint - Dark Background */}
        <div className="w-full py-24 left-0 top-[1618px] absolute bg-[#FFFFFF] inline-flex flex-col justify-start items-start gap-24">
          {/* Content Container with max-width */}
          <div className="w-full max-w-[1320px] mx-auto ">
            {/* First Row: Image + Content */}
            <div className="self-stretch inline-flex justify-start items-center gap-14 mb-[100px] ">
              <ServiceImage 
                src="/services/srv3.png" 
                alt="Process Flow Sprint Service" 
              />
              <ContentBlock
                title="Process Flow Sprint (14-Day Crash Course)"
                subtitle="Processes that don't work waste time, money, and progress are the path you want to choose, and our services offer exactly that. The Process Flow Sprint is a 14-day crash course that will help you get your job done faster, get rid of delays, and make handoffs better."
                description="We begin with a process mapping session to get a picture of how things are now, and then we create the ideal-state flow diagram to make your operations more efficient."
                isDark={false}
              />
            </div>
            
            {/* Second Row: Content + Image */}
            <div className="self-stretch inline-flex justify-start items-center gap-14">
              <div className="w-[620px] inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  After that, we make the modifications, which can be as simple as making changes by hand or as complex as automating workflows. We then provide you with clear SOPs and a Loom video for staff training so that your team can keep the changes going long after we're gone.
                </div>
                <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  Best for teams that have problems with bottlenecks, drop-offs, or processes that keep breaking down. With a business process optimization approach, your processes will be smoother, your turnaround times will be shorter, and your teams will be more responsible.
                </div>
                <div className="w-[575px] flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch justify-start text-black text-3xl font-semibold font-['Poppins'] leading-10">
                      What's included:
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <FeatureItem text="Process mapping & bottlenecks analysis" isDark={false} />
                      <FeatureItem text="Future state process design" isDark={false} />
                      <FeatureItem text="Automation where, when applicable" isDark={false} />
                      <FeatureItem text="SOPs + team training resources" isDark={false} />
                    </div>
                  </div>
                  <LearnMoreLink />
                </div>
              </div>
              <ServiceImage 
                src="/services/srv4.png" 
                alt="Process Flow Sprint Features" 
                width="w-[644px]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Fractional Ops Director - Light Background */}
        <div className="w-full py-24 left-0 top-[3236px] absolute bg-[#F3F6FE] inline-flex flex-col justify-start items-start gap-24">
          {/* Content Container with max-width */}
          <div className="w-full max-w-[1320px] mx-auto">
            {/* First Row: Image + Content */}
            <div className="self-stretch inline-flex justify-start items-center gap-14 mb-[100px] ">
              <ServiceImage 
                src="/services/srv5.png" 
                alt="Fractional Ops Director Service" 
                height="h-[565px]"
              />
              <ContentBlock
                title="Fractional Ops Director"
                subtitle="Increasing the size of a company without having strong operational leadership might result in chaos. Through our Fractional Ops Director service, however, you can circumvent that and receive strategic management of operations at a fraction of the expense that would be incurred by hiring a full-time employee."
              />
            </div>
            
            {/* Second Row: Content + Image */}
            <div className="self-stretch inline-flex justify-start items-center gap-14">
              <div className="w-[620px] inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  Establishing standards that encourage productivity, responsibility, and long-term success is something that we can assist you and your team with, regardless of whether you are a startup that needs structure or a small organization that is looking to expand.
                </div>
                <div className="w-[575px] flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch justify-start text-black text-3xl font-semibold font-['Poppins'] leading-10">
                      The operations director who works with you on this project will:
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <FeatureItem text="Organize and lead weekly calls for strategy and execution" />
                      <FeatureItem text="Monitor key performance indicators and managing tasks" />
                      <FeatureItem text="Conceptualize and perfect the processes" />
                      <FeatureItem text="Offer support via email and Slack on an ongoing basis." />
                    </div>
                  </div>
                  <LearnMoreLink />
                </div>
              </div>
              <ServiceImage 
                src="/services/srv6.png" 
                alt="Fractional Ops Director Features" 
                width="w-[644px]"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Tech Stack Optimization - Dark Background */}
        <div className="w-full py-24 left-0 top-[4760px] absolute bg-[#FFFFFF] inline-flex flex-col justify-start items-start gap-24">
          {/* Content Container with max-width */}
          <div className="w-full max-w-[1320px] mx-auto">
            {/* First Row: Image + Content */}
            <div className="self-stretch inline-flex justify-start items-center gap-14 mb-[100px] ">
              <ServiceImage 
                src="/services/srv7.png" 
                alt="Tech Stack Optimization Service" 
                height="h-[550px]"
              />
              <ContentBlock
                title="Tool Stack Overhaul"
                subtitle="Having too many tools can slow your business down just as much as having too few. Our Tool Stack Overhaul service helps you streamline, simplify, and strengthen your tech ecosystem so your tools work for you—not against you."
                description="We begin by doing a full audit of your present tool stack, looking at how often they are used, how many people are using them, how much they cost, and any hidden costs. This in-depth look shows which subscriptions are not being used enough, are out of date, or are not needed, as well as where there are important gaps in the workflow."
                isDark={false}
              />
            </div>
            
            {/* Second Row: Content + Image */}
            <div className="self-stretch inline-flex justify-start items-center gap-14">
              <div className="w-[620px] inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  After that, we send a clear cost-benefit analysis with strategic suggestions for updating, combining, or replacing tools. You'll know exactly where to cut costs, get more people to use the system, and address automation gaps.
                </div>
                <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  Once you approve the plan, we handle the entire transition process—from system migrations and integrations to team training. We also provide custom SOPs to ensure smooth adoption and consistent use across your organization.
                </div>
                <div className="w-[575px] flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch justify-start text-black text-3xl font-semibold font-['Poppins'] leading-10">
                      Benefits include:
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <FeatureItem text="Lower monthly subscription costs" isDark={false} />
                      <FeatureItem text="Higher user adoption and satisfaction" isDark={false} />
                      <FeatureItem text="Streamlined integrations and fewer logins" isDark={false} />
                      <FeatureItem text="Stronger, more automated workflows" isDark={false} />
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                  Ideal for companies wasting money on unused software or battling inefficient, fragmented systems. We'll help you run leaner, smarter, and faster.
                </div>
                <LearnMoreLink />
              </div>
              <ServiceImage 
                src="/services/srv8.png" 
                alt="Tech Stack Optimization Features" 
                width="w-[644px]"
              />
            </div>
          </div>
        </div>

        {/* Section 5: Ops Jumpstart for Startups - Light Background */}
        <div className="w-full py-24 left-0 top-[6299px] absolute bg-[#F3F6FE] inline-flex flex-col justify-start items-start gap-12">
          {/* Content Container with max-width */}
          <div className="w-full max-w-[1320px] mx-auto">
            {/* First Row: Image + Content */}
            <div className="self-stretch inline-flex justify-start items-center gap-14 mb-[100px] ">
              <ServiceImage 
                src="/services/srv9.png" 
                alt="Ops Jumpstart for Startups Service" 
                height="h-[550px]"
              />
              <ContentBlock
                title="Ops Jumpstart for Startups"
                subtitle="Startups grow fast — but without solid systems in place, growth can quickly turn into chaos. Our Ops Jumpstart package equips your business with the operational foundation you need to run lean, scale fast, and stay organized from day one."
                description="Designed specifically for pre-seed to Series A startups, this service combines business process improvement, KPI consulting, and operations management to help you scale without losing control. With the right systems in place, you'll be able to focus on building your product, serving customers, and growing your market share — all while knowing your operations are running smoothly."
              />
            </div>
            
            {/* Second Row: Content + Image */}
            <div className="self-stretch inline-flex justify-start items-center gap-14">
              <div className="w-[620px] inline-flex flex-col justify-start items-start gap-5">
                <div className="w-[575px] flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch justify-start text-black text-3xl font-semibold font-['Poppins'] leading-10">
                      We set up and implement:
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                        <div className="px-0.5 pt-2 pb-0.5 flex justify-start items-center gap-2.5 overflow-hidden">
                          <SquareCheck className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="w-[539px] justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                          Find the metrics that really matter, such as KPI, and keep track of them.
                        </div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                        <div className="px-0.5 pt-2 pb-0.5 flex justify-start items-center gap-2.5 overflow-hidden">
                          <SquareCheck className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1 justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                          Setting up your CRM means configuring and customizing it so that you can manage your customers more effectively.
                        </div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                        <div className="px-0.5 pt-2 pb-0.5 flex justify-start items-center gap-2.5 overflow-hidden">
                          <SquareCheck className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1 justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                          Workflow SOPs make sure that fundamental processes are the same every time, which makes onboarding easier and results more consistent.
                        </div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                        <div className="px-0.5 pt-2 pb-0.5 flex justify-start items-center gap-2.5 overflow-hidden">
                          <SquareCheck className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1 justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                          Pick the correct platform and project management tools and connect them to make tracking tasks easy.
                        </div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                        <div className="px-0.5 pt-2 pb-0.5 flex justify-start items-center gap-2.5 overflow-hidden">
                          <SquareCheck className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1 justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                          Recruiting and onboarding processes that help get new employees quickly and easily.
                        </div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                        <div className="px-0.5 pt-2 pb-0.5 flex justify-start items-center gap-2.5 overflow-hidden">
                          <SquareCheck className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1 justify-start text-neutral-600 text-lg font-normal font-['Inter'] leading-loose">
                          30-60-90 Day Operational Roadmap, a defined plan of action to help you progress in the following phase.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <LearnMoreLink />
              </div>
              <ServiceImage 
                src="/services/srv0.png" 
                alt="Ops Jumpstart Features" 
                width="w-[644px]"
              />
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}