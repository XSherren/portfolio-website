import Image from "next/image";
import { BoxIcon } from "./ui/box-icon";

function About() {
  return (
    <>
      <section>
        <div className="container mx-auto flex flex-col gap-4 px-6 py-8 sm:py-10 lg:flex-row lg:items-start lg:gap-8 lg:px-4 xl:gap-16">
          {/* About Image */}
          <div className="lg:sticky lg:top-10 lg:w-1/2 lg:pt-26">
            <Image
              src="/About-image.svg"
              alt="A desk with PC"
              width={0}
              height={0}
              className="mx-auto h-auto w-100 sm:w-120 lg:w-auto"
            />
          </div>

          {/* About Content */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            {/* Headline */}
            <div className="text-center lg:text-left">
              <h2 className="title mb-2 text-5xl font-bold">About Me</h2>
              <h5 className="mb-4 text-xl">The human behind the screen.</h5>
            </div>

            {/* Boxes */}
            <div className="font-inconsolata flex flex-col gap-5 text-[16px]">
              <div className="flex flex-col sm:flex-row sm:gap-5">
                {/* Age */}
                <div className="mb-5 rounded-lg border border-[#fff]/15 bg-[#3D1B67]/55 p-5 backdrop-blur-md sm:mb-0 sm:flex-1/3">
                  <span className="ml-2 inline-flex items-center justify-between text-white">
                    <Image
                      src="/Girl.svg"
                      alt="Girl icon"
                      width={18}
                      height={18}
                    />
                    <p className="pl-2 text-[20px] font-normal text-white">
                      Age
                    </p>
                  </span>
                  <p className="pl-8 text-[48px] font-bold text-white">25</p>
                </div>
                {/* Nationality & Languages */}
                <div className="items-center rounded-lg border border-[#fff]/15 bg-[#3D1B67]/55 p-5 backdrop-blur-md sm:flex-2/3">
                  <div className="mb-1 flex justify-between text-white">
                    <span className="ml-2 inline-flex justify-between">
                      <Image
                        src="/Nationality.svg"
                        alt="Nationality icon"
                        width={20}
                        height={20}
                      />
                      <p className="pl-2 text-[16px] font-normal text-white">
                        Malaysian
                      </p>
                    </span>
                  </div>
                  <div className="mb-1 flex items-center justify-between text-white">
                    <span className="ml-2 inline-flex items-center justify-between">
                      <Image
                        src="/Snow.svg"
                        alt="Snow icon"
                        width={20}
                        height={20}
                      />
                      <p className="pl-2 text-[16px] font-normal">
                        Mandarin, English, Malay
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                {/* Education */}
                <div className="rounded-lg border border-[#fff]/15 bg-[#3D1B67]/55 p-5 backdrop-blur-md">
                  <span className="mb-4 ml-2 inline-flex items-center justify-between text-white">
                    <Image
                      src="/Graduation-cap.svg"
                      alt="Graduation cap"
                      width={20}
                      height={20}
                    />
                    <p className="pl-2 text-[20px]">Education</p>
                  </span>
                  <div className="pl-9">
                    <p>Diploma in Infocomm Technology</p>
                    <p className="mb-4">June, 2022 - Dec, 2023</p>
                    <p>PSB Academy, Singapore</p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                {/* Skills */}
                <div className="rounded-lg border border-[#fff]/15 bg-[#3D1B67]/55 p-5 backdrop-blur-md">
                  <span className="mb-4 ml-1 inline-flex items-center justify-between text-white">
                    <Image
                      src="/Learning.svg"
                      alt="Brain icon"
                      width={25}
                      height={25}
                    />
                    <p className="pl-2 text-[20px]">My TechStack</p>
                  </span>

                  <div className="pl-9">
                    <p className="mb-2">Front-End</p>
                    <div className="mb-4 flex flex-row overflow-x-auto">
                      <BoxIcon
                        width={25}
                        height={25}
                        src="/HTML5.svg"
                        alt="HTML icon"
                      />
                      <BoxIcon
                        width={22}
                        height={22}
                        src="/css-3.svg"
                        alt="CSS3 icon"
                      />
                      <BoxIcon
                        src="/JavaScript.svg"
                        alt="JavaScript icon"
                        width={25}
                        height={25}
                      />
                      <BoxIcon
                        src="/Typescript.svg"
                        alt="TypeScript icon"
                        width={25}
                        height={25}
                      />
                      <BoxIcon
                        src="/nextjs.svg"
                        alt="NextJs icon"
                        width={30}
                        height={30}
                      />
                      <BoxIcon
                        src="/Tailwind CSS.svg"
                        alt="Tailwind CSS icon"
                        width={35}
                        height={35}
                      />
                    </div>

                    <p className="mb-2">Back-End</p>
                    <div className="mb-4 flex flex-row gap-0 overflow-x-auto">
                      <BoxIcon
                        src="/python.svg"
                        alt="Python icon"
                        width={25}
                        height={25}
                      />

                      <BoxIcon
                        src="/C-Sharp.svg"
                        alt="C# icon"
                        width={30}
                        height={30}
                      />

                      <BoxIcon
                        src="/dotnet.svg"
                        alt="Dotnet icon"
                        width={25}
                        height={25}
                      />

                      <BoxIcon
                        src="/nodeJs.svg"
                        alt="NodeJs icon"
                        width={25}
                        height={25}
                      />
                    </div>

                    <p className="mb-2">Design</p>
                    <div className="mb-4 flex flex-row gap-0 overflow-x-auto">
                      <BoxIcon
                        src="/Figma.svg"
                        alt="Figma icon"
                        width={20}
                        height={20}
                      />

                      <BoxIcon
                        src="/Wordpress.svg"
                        alt="WordPress icon"
                        width={30}
                        height={30}
                      />
                    </div>

                    <p className="mb-2">Tools & Platform</p>
                    <div className="mb-4 flex flex-row gap-0 overflow-x-auto">
                      <BoxIcon
                        width={30}
                        height={30}
                        src="/git.svg"
                        alt="git icon"
                      />
                      <BoxIcon
                        width={30}
                        height={30}
                        src="/VS code.svg"
                        alt="vscode icon"
                      />
                      <BoxIcon
                        src="/postman.svg"
                        alt="postman icon"
                        width={30}
                        height={30}
                      />
                      <BoxIcon
                        src="/aws ec2.svg"
                        alt="aws-ec2 icon"
                        width={30}
                        height={30}
                      />
                      <BoxIcon
                        src="/MS office.svg"
                        alt="msoffice icon"
                        width={25}
                        height={25}
                      />
                      <BoxIcon
                        src="/mssql.svg"
                        alt="mssql icon"
                        width={30}
                        height={30}
                      />
                      <BoxIcon
                        src="/power-bi.svg"
                        alt="Power BI icon"
                        width={25}
                        height={25}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { About };
