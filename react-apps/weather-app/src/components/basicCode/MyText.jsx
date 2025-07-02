import "./MyText.css";
function MyText({ text = "NA" }) {
  return (
    <>
      <h1>Hello {text}</h1>
    </>
  );
}

export default MyText;
