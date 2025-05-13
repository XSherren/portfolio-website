"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Article from "./ui/article";

interface ProjectData {
  id: string;
  src: string;
  alt: string;
  title: string;
  children: string;
}

const ALL_PROJECTS_DATA: ProjectData[] = [
  {
    id: "proj-1",
    src: "/placeholder.svg",
    alt: "Project 1 Alt",
    title: "Alpha Project",
    children:
      "Description for Alpha Project, showcasing innovation and results.",
  },
  {
    id: "proj-2",
    src: "/placeholder.svg",
    alt: "Project 2 Alt",
    title: "Beta Initiative",
    children:
      "Details about the Beta Initiative and its successful deployment.",
  },
  {
    id: "proj-3",
    src: "/placeholder.svg",
    alt: "Project 3 Alt",
    title: "Gamma Development",
    children: "The Gamma Development phase focused on user experience.",
  },
  {
    id: "proj-4",
    src: "/placeholder.svg",
    alt: "Project 4 Alt",
    title: "Delta Launch",
    children: "Successful launch of Project Delta, exceeding all targets.",
  },
  {
    id: "proj-5",
    src: "/placeholder.svg",
    alt: "Project 5 Alt",
    title: "Epsilon Research",
    children: "Ongoing research for Epsilon, paving new ways.",
  },
];

const NUM_ARTICLES_TO_CLONE = 3;

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
      if (originalProjectsCount <= 1) {
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
      let calculatedSlotWidth = 0;
      if (articlesElements.length > 1) {
        calculatedSlotWidth =
          articlesElements[1].offsetLeft - articlesElements[0].offsetLeft;
      } else {
        const style = window.getComputedStyle(articlesElements[0]);
        const marginLeft = parseFloat(style.marginLeft) || 0;
        const marginRight = parseFloat(style.marginRight) || 0;
        calculatedSlotWidth =
          articlesElements[0].offsetWidth + marginLeft + marginRight;
      }

      if (calculatedSlotWidth > 0) {
        articleSlotWidthRef.current = calculatedSlotWidth;

        const initialScrollLeft =
          numPrependedClones * articleSlotWidthRef.current;
        container.scrollTo({ left: initialScrollLeft, behavior: "instant" });
        currentLogicalIndexRef.current = 0;
      }
    }
  }, [displayedArticles, numPrependedClones]);

  useEffect(() => {
    setupSliderSizingAndPosition();

    window.addEventListener("resize", setupSliderSizingAndPosition);
    return () => {
      window.removeEventListener("resize", setupSliderSizingAndPosition);
    };
  }, [setupSliderSizingAndPosition]);

  const handleScroll = (direction: "left" | "right") => {
    if (
      isTransitioningRef.current ||
      articleSlotWidthRef.current === 0 ||
      !scrollContainerRef.current ||
      originalProjectsCount <= 1
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

    const scrollEndHandler = () => {
      currentLogicalIndexRef.current = nextLogicalIndex;

      let performSilentJump = false;
      let jumpToLogicalIndex = 0;

      if (currentLogicalIndexRef.current >= originalProjectsCount) {
        jumpToLogicalIndex = 0;
        performSilentJump = true;
      } else if (currentLogicalIndexRef.current < 0) {
        jumpToLogicalIndex = originalProjectsCount - 1;
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

    container.addEventListener("scrollend", scrollEndHandler, { once: true });
  };

  const disableControls = originalProjectsCount <= 1;

  return (
    <main className="overflow-hidden py-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
        <p className="mt-2 text-lg">The projects I have done.</p>
      </div>

      <div className="relative mx-auto w-[90%] md:w-[85%]">
        <section
          ref={scrollContainerRef}
          className="scrollbar-hide relative flex w-full flex-nowrap items-stretch overflow-x-hidden"
        >
          {displayedArticles.map((article) => (
            <Article
              key={article.uniqueRenderKey}
              src={article.src}
              alt={article.alt}
              title={article.title}
            >
              {article.children}
            </Article>
          ))}
        </section>

        {/* Previous Button */}
        {!disableControls && (
          <button
            type="button"
            className="group absolute top-1/2 left-0 z-30 flex h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white/50 group-hover:bg-white/80 focus:ring-2 focus:ring-blue-500 focus:outline-none md:-left-5 lg:-left-12 dark:bg-gray-800/50 dark:group-hover:bg-gray-700/80 dark:focus:ring-blue-700"
            onClick={() => handleScroll("left")}
            aria-label="Previous set of projects"
          >
            <svg
              className="h-5 w-5 text-gray-700 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        )}

        {/* Next Button */}
        {!disableControls && (
          <button
            type="button"
            className="group absolute top-1/2 right-0 z-30 flex h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white/50 group-hover:bg-white/80 focus:ring-2 focus:ring-blue-500 focus:outline-none md:-right-5 lg:-right-12 dark:bg-gray-800/50 dark:group-hover:bg-gray-700/80 dark:focus:ring-blue-700"
            onClick={() => handleScroll("right")}
            aria-label="Next set of projects"
          >
            <svg
              className="h-5 w-5 text-gray-700 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        )}
      </div>
    </main>
  );
}

function ProjectSection() {
  return <></>;
}

export { Projects, ProjectSection };
