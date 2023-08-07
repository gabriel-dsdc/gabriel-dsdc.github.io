function ProjectPreview({ previewInfo: { title, previewUrl } }) {
  console.log(title, previewUrl);
  return (
    <iframe
      title={title}
      sandbox="allow-scripts"
      className="w-full h-screen"
      src={previewUrl}
    >
      Your browser doesn't support{" "}
      <code>
        <b>&lt;iframe&gt;</b>.
      </code>
    </iframe>
  );
}

export default ProjectPreview;
