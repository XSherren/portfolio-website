"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Article from "./ui/article";

const GithubIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
  >
    <path
      fill="currentColor"
      d="m5.422 6.866l.114.103l.512.513l-1.061 1.061l-.512-.513l-2.25 2.25l-.12.13a2.475 2.475 0 0 0 3.49 3.49l.13-.12l2.25-2.25l-.513-.512l1.061-1.061l.513.512a1.5 1.5 0 0 1 .103 2.008l-.103.114l-2.25 2.25a3.975 3.975 0 0 1-5.772-5.463l.15-.159l2.25-2.25A1.5 1.5 0 0 1 5.3 6.777l.122.09zM12.03 3.97a.75.75 0 0 1 .073.976l-.073.084l-7 7a.75.75 0 0 1-1.133-.976l.073-.084l7-7a.75.75 0 0 1 1.06 0m2.81-2.806a3.974 3.974 0 0 1 .15 5.463l-.15.159l-1.75 1.75a1.5 1.5 0 0 1-2.007.103l-.114-.103l-.512-.513l1.061-1.061l.512.513l1.75-1.75l.12-.13a2.475 2.475 0 0 0-3.49-3.49l-.13.12l-1.75 1.75l.512.512l-1.06 1.061l-.513-.512a1.5 1.5 0 0 1-.103-2.008l.103-.114l1.75-1.75a3.975 3.975 0 0 1 5.622 0z"
    ></path>
  </svg>
);

interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const ALL_PROJECTS_DATA: ProjectData[] = [
  {
    id: "proj-1",
    title: "E-Leave System",
    description:
      "An e-leave system simplifies and automates the leave application and approval process online.",
    technologies: ["C#", ".NET"],
    // githubLink: "#",
    // liveLink: "#",
  },
  {
    id: "proj-2",
    title: "Website Design",
    description:
      "A professional website for an electronics manufacturing company.",
    technologies: ["WordPress", "Figma"],
    // githubLink: "#",
    liveLink: "#",
  },
  {
    id: "proj-3",
    title: "My Online Portfolio",
    description:
      "This site to showcase my projects and capabilities in web development.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: "proj-4",
    title: "Auto purchase train ticket",
    description:
      "I'm working on this program to take the headache out of buying tickets.",
    technologies: ["Python", "Automation"],
    // githubLink: "#",
    // liveLink: "#",
  },
  {
    id: "proj-5",
    title: "Cost Management App",
    description: "In progress...",
    technologies: ["Mobile", "Finance"],
    // githubLink: "#",
    // liveLink: "#",
  },
];

const NUM_ARTICLES_TO_CLONE = 3; // Number of items to show at once

function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentLogicalIndexRef = useRef<number>(0);
  const isTransitioningRef = useRef<boolean>(false);
  const articleSlotWidthRef = useRef<number>(0);

  const [displayedArticles, setDisplayedArticles] = useState<
    Array<ProjectData & { uniqueRenderKey: string }>
  >([]);
  const [numPrependedClones, setNumPrependedClones] = useState(0);

  const originalProjectsCount = ALL_PROJECTS_DATA.length;

  useEffect(() => {
    if (originalProjectsCount > 0) {
      const itemsToClone = Math.min(
        NUM_ARTICLES_TO_CLONE,
        originalProjectsCount,
      );

      const clonesStart = ALL_PROJECTS_DATA.slice(-itemsToClone).map(
        (item, index) => ({
          ...item,
          uniqueRenderKey: `clone-start-${item.id}-${index}`,
        }),
      );
      const originalItemsWithKeys = ALL_PROJECTS_DATA.map((item) => ({
        ...item,
        uniqueRenderKey: `original-${item.id}`,
      }));
      const clonesEnd = ALL_PROJECTS_DATA.slice(0, itemsToClone).map(
        (item, index) => ({
          ...item,
          uniqueRenderKey: `clone-end-${item.id}-${index}`,
        }),
      );

      setNumPrependedClones(clonesStart.length);
      if (originalProjectsCount <= NUM_ARTICLES_TO_CLONE - 1) {
        // Show originals if less than clone count
        setDisplayedArticles(originalItemsWithKeys);
        setNumPrependedClones(0);
      } else {
        setDisplayedArticles([
          ...clonesStart,
          ...originalItemsWithKeys,
          ...clonesEnd,
        ]);
      }
    } else {
      setDisplayedArticles([]);
      setNumPrependedClones(0);
    }
  }, [originalProjectsCount]);

  const setupSliderSizingAndPosition = useCallback(() => {
    if (!scrollContainerRef.current || displayedArticles.length === 0) return;

    const container = scrollContainerRef.current;
    const articlesElements = Array.from(container.children) as HTMLElement[];

    if (articlesElements.length > 0) {
      // Calculate slot width based on the first element, assuming all are same width
      // This works better with flex-basis and gap
      const firstArticleStyle = window.getComputedStyle(articlesElements[0]);
      const marginLeft = parseFloat(firstArticleStyle.marginLeft) || 0;
      const marginRight = parseFloat(firstArticleStyle.marginRight) || 0;
      // The width should be the actual rendered width of the element including its own padding/border
      // but not its external margins for slot calculation if using gap.
      // If using margins for spacing (like mx-2 on article), include them in slot width.
      let calculatedSlotWidth =
        articlesElements[0].offsetWidth + marginLeft + marginRight;

      if (calculatedSlotWidth > 0) {
        articleSlotWidthRef.current = calculatedSlotWidth;
        // Adjust initial scroll position to the first logical item
        const initialScrollLeft =
          numPrependedClones * articleSlotWidthRef.current;
        container.scrollTo({ left: initialScrollLeft, behavior: "instant" });
        currentLogicalIndexRef.current = 0;
      }
    }
  }, [displayedArticles, numPrependedClones]);

  useEffect(() => {
    // Delay setup until articles are likely rendered and styled
    const timer = setTimeout(() => {
      setupSliderSizingAndPosition();
    }, 100); // Small delay

    window.addEventListener("resize", setupSliderSizingAndPosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", setupSliderSizingAndPosition);
    };
  }, [setupSliderSizingAndPosition]);

  const handleScroll = (direction: "left" | "right") => {
    if (
      isTransitioningRef.current ||
      articleSlotWidthRef.current === 0 ||
      !scrollContainerRef.current ||
      originalProjectsCount <= NUM_ARTICLES_TO_CLONE - 1 // Disable if not enough items to scroll
    ) {
      return;
    }

    isTransitioningRef.current = true;
    const container = scrollContainerRef.current;
    let nextLogicalIndex = currentLogicalIndexRef.current;

    if (direction === "right") {
      nextLogicalIndex++;
    } else {
      nextLogicalIndex--;
    }

    const targetDisplayIndex = nextLogicalIndex + numPrependedClones;
    const targetScrollLeft = targetDisplayIndex * articleSlotWidthRef.current;

    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });

    // Using 'transitionend' on one of the articles or a timeout as a fallback for 'scrollend'
    // because 'scrollend' might not be universally supported or fire as expected with 'instant' scroll.
    // For smooth scroll, 'scrollend' is better.
    const scrollEndHandler = () => {
      container.removeEventListener("scrollend", scrollEndHandler); // Clean up

      currentLogicalIndexRef.current = nextLogicalIndex;
      let performSilentJump = false;
      let jumpToLogicalIndex = 0;

      if (currentLogicalIndexRef.current >= originalProjectsCount) {
        jumpToLogicalIndex = 0; // Loop to the start
        performSilentJump = true;
      } else if (currentLogicalIndexRef.current < 0) {
        jumpToLogicalIndex = originalProjectsCount - 1; // Loop to the end
        performSilentJump = true;
      }

      if (performSilentJump) {
        currentLogicalIndexRef.current = jumpToLogicalIndex;
        const actualItemDisplayIndexAfterJump =
          jumpToLogicalIndex + numPrependedClones;
        const newSilentScrollLeft =
          actualItemDisplayIndexAfterJump * articleSlotWidthRef.current;
        container.scrollTo({ left: newSilentScrollLeft, behavior: "instant" });
      }
      isTransitioningRef.current = false;
    };

    // Fallback timer if scrollend doesn't fire (e.g., if no actual scroll happened)
    const fallbackTimer = setTimeout(() => {
      if (isTransitioningRef.current) {
        // If still transitioning, force cleanup
        scrollEndHandler();
      }
    }, 700); // Match this to CSS transition duration or a bit longer

    container.addEventListener("scrollend", scrollEndHandler, { once: true });

    // Clear timeout when component unmounts or if scrollend fires first
    // useEffect cleanup for this specific scroll operation can be tricky.
    // A simpler approach might be to rely on scrollend and ensure it fires,
    // or handle the isTransitioningRef.current state carefully.
    // For now, rely on scrollend and the once: true option.
    // The fallbackTimer helps ensure state is reset.

    // Clean up the fallback timer if scrollend fires
    const cleanupFallback = () => clearTimeout(fallbackTimer);
    container.addEventListener("scroll", cleanupFallback, { once: true });
  };

  // Disable controls if not enough items to scroll (e.g., if showing 3 and only have 3 or less)
  const disableControls = originalProjectsCount <= NUM_ARTICLES_TO_CLONE;

  return (
    <main className="overflow-hidden py-12 text-white md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">Projects</h2>
          <p className="mt-3 text-lg text-slate-300">
            A collection of my work, from completed applications to current
            explorations.
          </p>
        </div>

        <div className="relative mx-auto w-full">
          {/* Carousel Wrapper */}
          <div className="relative flex items-center justify-center">
            {/* Previous Button */}
            {!disableControls && (
              <button
                type="button"
                className="absolute top-1/2 -left-8 z-30 flex -translate-y-1/2 transform items-center justify-center rounded-full text-[#D9D9D9]/50 hover:text-[#D9D9D9]/70 md:-left-10 lg:-left-12"
                onClick={() => handleScroll("left")}
                aria-label="Previous set of projects"
              >
                <svg
                  className="h-10 w-10"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M7 1 1.5 7 7 13"
                  />
                </svg>
              </button>
            )}

            <section
              ref={scrollContainerRef}
              className="scrollbar-hide flex w-[calc(100%-0px)] snap-x snap-mandatory overflow-x-auto scroll-smooth" // Width for potential button overlap
              style={
                {
                  //scrollPaddingLeft: '1rem',
                  //scrollPaddingRight: '1rem',
                }
              }
            >
              {displayedArticles.map((articleData) => (
                <div
                  key={articleData.uniqueRenderKey}
                  className="w-full flex-shrink-0 snap-center px-2 sm:w-1/2 md:w-1/3" // Defines how many cards are visible
                >
                  <Article
                    title={articleData.title}
                    description={articleData.description}
                    technologies={articleData.technologies}
                    githubLink={articleData.githubLink}
                    liveLink={articleData.liveLink}
                    // Pass icon components if defined within Article or pass them as props
                    githubIcon={<GithubIcon />}
                    linkIcon={<ExternalLinkIcon />}
                  />
                </div>
              ))}
            </section>

            {/* Next Button */}
            {!disableControls && (
              <button
                type="button"
                className="absolute top-1/2 -right-8 z-30 flex -translate-y-1/2 transform items-center justify-center text-[#D9D9D9]/50 hover:text-[#D9D9D9]/70 md:-right-10 lg:-right-12"
                onClick={() => handleScroll("right")}
                aria-label="Next set of projects"
              >
                <svg
                  className="h-10 w-10"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="m1 1 5.5 6L1 13"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export { Projects };
