import { ReactNode } from "react"; // ReactNode for icon props

interface ArticleProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc?: string;
  githubLink?: string;
  liveLink?: string;
  githubIcon?: ReactNode;
  linkIcon?: ReactNode;
  imageClassName?: string;
}

export default function Article({
  title,
  description,
  technologies,
  imageSrc,
  githubLink,
  liveLink,
  githubIcon,
  linkIcon,
  imageClassName,
}: ArticleProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-[#fff]/15 bg-[#3D1B67]/55 p-8 text-white shadow-lg backdrop-blur-md transition-shadow duration-300 ease-in-out hover:shadow-2xl">
      <div className="mb-5 flex h-40 w-full items-center rounded-md bg-[#8B68B6]/55">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className={`mx-auto rounded-md object-cover ${imageClassName ? imageClassName : ""}`}
          />
        ) : (
          <span className="font-oleoscript mx-auto text-2xl tracking-wider text-white/70">
            in progress
          </span>
        )}
      </div>

      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="mb-4 flex-grow text-sm leading-relaxed text-purple-200">
        {description}
      </p>

      {/* Technologies Tags */}
      <div className="mb-5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="mr-2 mb-2 inline-block rounded-full bg-[#54268B] px-2.5 py-1 text-xs font-medium text-[#CFA8FF]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Icons */}
      <div className="mt-auto flex items-center space-x-2">
        {githubLink && githubIcon && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 transition-colors hover:text-white"
            aria-label={`${title} GitHub repository`}
          >
            {githubIcon}
          </a>
        )}
        {liveLink && linkIcon && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 transition-colors hover:text-white"
            aria-label={`${title} live demo or link`}
          >
            {linkIcon}
          </a>
        )}
      </div>
    </article>
  );
}
