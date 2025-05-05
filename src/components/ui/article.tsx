import Image from "next/image";

interface ArticleProps {
  src: string;
  alt: string;
  title: string;
  children: string;
}

export default function Article({ src, alt, title, children }: ArticleProps) {
  return (
    <article className="mx-2 w-1/3 flex-shrink-0 rounded-lg border px-10 py-8">
      <figure>
        <Image
          src={src}
          alt={alt}
          title={title}
          width={300}
          height={150}
          className="rounded-lg"
        />
        <figcaption>{title}</figcaption>
      </figure>
      <p className="text-wrap">{children}</p>
    </article>
  );
}
