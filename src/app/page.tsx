
// section
import SectionOne from "@/components/home/section-1";
import SectionTwo from "@/components/home/section-2";
import SectionThree from "@/components/home/section-3";

export default function Home() {

  return (
    <div
      className="w-full min-h-screen h-full flex flex-col items-start justify-start py-5 gap-10 overflow-hidden">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
