import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Component() {
  return (
    <div key="1" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-lg shadow-lg p-6 space-y-4 bg-white">
          <div className="flex justify-between items-center">
            <div className="w-[62%] lg:w-[55%] bg-[#ffc900] h-2 sm:h-[6px] rounded-full" />
            <div className="sm:text-[14px] text-[#797979]">20 Dec 2023</div>
          </div>
          <h2 className="text-[28px] leading-9 lg:leading-6 xl:text-[26px] lg:text-xl tab:text-xl sm:text-xl sm:leading-6 font-semibold line-clamp-3">
            GBJ Buzz Help: Unleashing the Potential of 360° Marketing for
            Business Growth
          </h2>
          <div className="flex justify-between gap-2 flex-row md:flex-col">
            <div className="w-[78%] sm:w-full">
              <p className="text-lg tab:text-[14px] sm:text-[15px] sm:leading-normal text-[#797979] line-clamp-3 sm:line-clamp-2">
                In the fast-paced world of digital marketing, staying ahead of
                the curve is vital for business success. With the advent of
                innovative tools and strategies, one name stands out: GBJ Buzz.
                This comprehensive guide dives deep into the symbiotic
                relationship between GBJ Buzz and 360° marketing, uncovering how
                this dynamic duo can drive remarkable
              </p>
            </div>
            <Button className="w-24 tab:w-12 sm:w-16 h-[3.2rem] tab:h-6 sm:h-7 flex self-end sm:self-start justify-center items-center rounded-full sm:mt-4 bg-[#FFC900]">
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="rounded-lg shadow-lg p-6 space-y-4 bg-white">
          <div className="flex justify-between items-center">
            <div className="w-[62%] lg:w-[55%] bg-[#FF7B00] h-2 sm:h-[6px] rounded-full" />
            <div className="sm:text-[14px] text-[#797979]">20 Dec 2023</div>
          </div>
          <h2 className="text-[28px] leading-9 lg:leading-6 xl:text-[26px] lg:text-xl tab:text-xl sm:text-xl sm:leading-6 font-semibold line-clamp-3">
            Revamp Your Social Media Strategy with AI: The Ultimate Guide to
            Boosting Your Online Presence
          </h2>
          <div className="flex justify-between gap-2 flex-row md:flex-col">
            <div className="w-[78%] sm:w-full">
              <p className="text-lg tab:text-[14px] sm:text-[15px] sm:leading-normal text-[#797979] line-clamp-3 sm:line-clamp-2">
                As a business owner or marketer, you know that having a strong
                online presence is crucial in today&apos;s digital age. And
                social media marketing can be a powerful tool to help you
                achieve that. With the help of AI, you can take your social
                media marketing efforts to the next level and reach your target
                audience more effectively. Here&apso;s how:
              </p>
            </div>
            <Button className="w-24 tab:w-12 sm:w-16 h-[3.2rem] tab:h-6 sm:h-7 flex self-end sm:self-start justify-center items-center rounded-full sm:mt-4 bg-[#FF7B00]">
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="rounded-lg shadow-lg p-6 space-y-4 bg-white">
          <div className="flex justify-between items-center">
            <div className="w-[62%] lg:w-[55%] bg-[#00ff1a] h-2 sm:h-[6px] rounded-full" />
            <div className="sm:text-[14px] text-[#797979]">20 Dec 2023</div>
          </div>
          <h2 className="text-[28px] leading-9 lg:leading-6 xl:text-[26px] lg:text-xl tab:text-xl sm:text-xl sm:leading-6 font-semibold line-clamp-3">
            &quot;AI-Powered Solutions — 7i Solutions Revolutionizing the
            Digital Landscape&quot;- CASE STUDY
          </h2>
          <div className="flex justify-between gap-2 flex-row md:flex-col">
            <div className="w-[78%] sm:w-full">
              <p className="text-lg tab:text-[14px] sm:text-[15px] sm:leading-normal text-[#797979] line-clamp-3 sm:line-clamp-2">
                This case study unveils the extraordinary journey of 7i
                Solutions, an innovative department within GBJ Buzz, dedicated
                to AI tools, web development, and research. Embracing
                cutting-edge AI-powered solutions, 7i Solutions has successfully
                transformed the digital landscape, creating a profound impact on
                businesses and technological advancements.
              </p>
            </div>
            <Button className="w-24 tab:w-12 sm:w-16 h-[3.2rem] tab:h-6 sm:h-7 flex self-end sm:self-start justify-center items-center rounded-full sm:mt-4 bg-[#00ff1a] ">
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
