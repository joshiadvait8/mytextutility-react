import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    console.log(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const hadleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space are removed from text", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="5"
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={hadleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element != 0).length} word and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter((element) => element != 0).length}{" "}
          Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in above to preview"}</p>
      </div>
    </>
  );
}
