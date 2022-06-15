import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Upper case is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    console.log("Lower case is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase!", "success");
  };

  const handleClearText = () => {
    console.log("text cleared");
    let newText = "";
    setText(newText);
    props.showAlert(" Text Cleared!", "success");
  };

  const handleCopyText = () => {
    console.log("text copied");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Spaces Removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>
        Clear text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopyText}>
        Copy text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Handle Extra Spaces
      </button>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview it here"}</p>
      </div>
    </div>
  );
}
