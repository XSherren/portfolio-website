import Image from "next/image";
import { BoxIcon } from "./ui/box-icon";

function About() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl items-start gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <div className="md:sticky md:top-10">
          <Image
            src="/desk-pc.svg"
            alt="A desk with PC"
            width={500}
            height={500}
          />
        </div>

        <div>
          <h2 className="title">About Me</h2>
          <h5 className="mb-4">The human behind the screen.</h5>
          <div className="grid grid-cols-3 gap-5 font-(family-name:--font-inconsolata) text-[16px]">
            <div className="rounded-lg border border-[#fff]/15 bg-[#3D1B67]/55 p-5 backdrop-blur-md">
              <span className="ml-2 inline-flex items-center justify-between text-white">
                <Image src="/Girl.svg" alt="Girl icon" width={18} height={18} />
                <p className="pl-2 text-[20px] font-normal text-white">Age</p>
              </span>
              <p className="pl-8 text-[48px] font-bold text-white">25</p>
            </div>

            <div className="col-span-2 items-center rounded-lg border border-[#fff]/15 bg-[#3D1B67]/55 p-5 backdrop-blur-md">
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
            <div className="col-span-3 rounded-lg border border-[#fff]/15 bg-[#3D1B67]/55 p-5 backdrop-blur-md">
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

            <div className="col-span-3 rounded-lg border border-[#fff]/15 bg-[#3D1B67]/55 p-5 backdrop-blur-md">
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
                <div className="mb-4 flex flex-row gap-5">
                  <BoxIcon
                    width={40}
                    height={40}
                    src="/HTML5.svg"
                    alt="HTML icon"
                  />
                  <BoxIcon
                    width={30}
                    height={30}
                    src="/CSS3.svg"
                    alt="CSS3 icon"
                  />
                  <BoxIcon
                    src="/JavaScript.svg"
                    alt="JavaScript icon"
                    width={35}
                    height={35}
                  />
                  <BoxIcon
                    src="/Typescript.svg"
                    alt="TypeScript icon"
                    width={35}
                    height={35}
                  />
                  <BoxIcon
                    src="/nextjs.svg"
                    alt="NextJs icon"
                    width={35}
                    height={35}
                  />
                  <BoxIcon
                    src="/Tailwind CSS.svg"
                    alt="Tailwind CSS icon"
                    width={35}
                    height={35}
                  />
                </div>

                <p className="mb-2">Back-End</p>
                <div className="mb-4 flex flex-row gap-5">
                  <BoxIcon
                    src="/python.svg"
                    alt="Python icon"
                    width={40}
                    height={40}
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
                    width={35}
                    height={35}
                  />

                  <BoxIcon
                    src="/nodeJs.svg"
                    alt="NodeJs icon"
                    width={35}
                    height={35}
                  />
                </div>

                <p className="mb-2">Design</p>
                <div className="mb-4 flex flex-row gap-5">
                  <BoxIcon
                    src="/Figma.svg"
                    alt="Figma icon"
                    width={20}
                    height={20}
                  />

                  <BoxIcon
                    src="/wordpress.svg"
                    alt="WordPress icon"
                    width={30}
                    height={30}
                  />
                </div>

                <p className="mb-2">Tools & Platform</p>
                <div className="mb-4 flex flex-row gap-5">
                  <BoxIcon
                    width={40}
                    height={40}
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
                    width={35}
                    height={35}
                  />
                  <BoxIcon
                    src="/aws ec2.svg"
                    alt="aws-ec2 icon"
                    width={35}
                    height={35}
                  />
                  <BoxIcon
                    src="/MS office.svg"
                    alt="msoffice icon"
                    width={35}
                    height={35}
                  />
                  <BoxIcon
                    src="/mssql.svg"
                    alt="mssql icon"
                    width={35}
                    height={35}
                  />
                  <BoxIcon
                    src="/power bi.svg"
                    alt="power-bi icon"
                    width={35}
                    height={35}
                  />
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
