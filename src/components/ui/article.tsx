import Image from "next/image";

interface ArticleProps {
  src: string;
  alt: string;
  title: string;
  children: string;
}

export default function Article({ src, alt, title, children }: ArticleProps) {
  return (
    <article className="mx-2 flex-shrink-0 basis-[28%] rounded-lg border px-6 py-6 shadow-md duration-700 ease-in-out hover:shadow-lg">
      <figure className="mb-4">
        {" "}
        <Image
          src={src}
          alt={alt}
          title={title}
          width={300}
          height={150}
          className="w-full rounded-lg object-cover"
        />
        <figcaption className="mt-2 truncate text-sm font-semibold">
          {title}
        </figcaption>
      </figure>
      <p className="text-sm leading-relaxed text-wrap">{children}</p>
    </article>
  );
}
