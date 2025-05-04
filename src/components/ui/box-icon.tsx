import Image from "next/image";

interface BoxIconProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

const BoxIcon = ({ width, height, src, alt }: BoxIconProps) => {
  return (
    <span className="flex h-14.5 w-14.5 items-center justify-center rounded-xl bg-[#E2CBFF]">
      <Image
        className="icon-class"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </span>
  );
};

export { BoxIcon };
