import Article from "./ui/article";

function Projects() {
  return (
    <main className="overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="title">Projects</h2>
        <p className="text-xl">The projects I have done.</p>
      </div>
      <section className="mx-auto flex w-[80%] flex-nowrap overflow-x-scroll">
        <Article src="/placeholder.svg" alt="" title="Project 1 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          mollitia necessitatibus porro nihil placeat repellat quae, totam
          pariatur, blanditiis consequuntur labore corporis ullam enim itaque
          dolore debitis cum ipsa minus!
        </Article>
        <Article src="/placeholder.svg" alt="" title="Project 1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          mollitia necessitatibus porro nihil placeat repellat quae, totam
          pariatur, blanditiis consequuntur labore corporis ullam enim itaque
          dolore debitis cum ipsa minus!
        </Article>
        <Article src="/placeholder.svg" alt="" title="Project 1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          mollitia necessitatibus porro nihil placeat repellat quae, totam
          pariatur, blanditiis consequuntur labore corporis ullam enim itaque
          dolore debitis cum ipsa minus!
        </Article>
        <Article src="/placeholder.svg" alt="" title="Project 1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          mollitia necessitatibus porro nihil placeat repellat quae, totam
          pariatur, blanditiis consequuntur labore corporis ullam enim itaque
          dolore debitis cum ipsa minus!
        </Article>
        <Article src="/placeholder.svg" alt="" title="Project 1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          mollitia necessitatibus porro nihil placeat repellat quae, totam
          pariatur, blanditiis consequuntur labore corporis ullam enim itaque
          dolore debitis cum ipsa minus!
        </Article>
      </section>
    </main>
  );
}

function ProjectSection() {
  return <></>;
}

export { Projects, ProjectSection };
