export default function Article() {
  return (
    <article>
      <h1>Title</h1>
      <Paragraph />
      <Paragraph />
      <Paragraph />
    </article>
  );
}

function Paragraph() {
  return (
    <p>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    </p>
  );
}
