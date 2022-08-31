function Video() {
  return (
    <section id="videos" className="videos">
      <h2 className="title">Introduction</h2>
      <section className="video">
        <iframe
          src="https://www.youtube.com/embed/xGFd5tEIZS4"
          title="Run2n.io move to earn - Teaser video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video__iframe"
        ></iframe>
      </section>
    </section>
  );
}

export default Video;
