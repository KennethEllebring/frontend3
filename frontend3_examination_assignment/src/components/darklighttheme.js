import React, {useState, useEffect} from "react";
import "../app.scss";

const DarkLightTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  // React useEffect hook that will fire up
  // when "darkTheme" changes
  useEffect(() => {
    // Accessing scss variable "--background"
    // and "--textcolor" using plain JavaScript
    // and changing the same according to the state of "darkTheme"
    const root = document.documentElement;
    root?.style.setProperty("--background", darkTheme ? "#ffffff" : "#000000");
    root?.style.setProperty("--textcolor", darkTheme ? "#000000" : "#ffffff");
    root?.style.setProperty("--objects", darkTheme ? "#000000" : "#ffffff");
    root?.style.setProperty("--links", darkTheme ? "#ffffff" : "#000000");
  }, [darkTheme]);

  return (
    <>
      <button className="darklightswitch" onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? "Darkmode" : "Lightmode"}
      </button>
    </>
  );
};

export default DarkLightTheme;
