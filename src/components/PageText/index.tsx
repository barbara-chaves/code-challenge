import React, { useContext } from "react";
import { PageTextContext } from "../../stores/pageTextStore/context";
import "./index.scss"

interface PageTextProps {
  textId: string;
  className?: string;
  style?: React.CSSProperties;
}

// find the text in the store by its id through dot notation

const PageText = ({ textId, className, style }: PageTextProps) => {
  const { pages } = useContext(PageTextContext);

  try {
    let address: any = pages;
    let text: any;
    const splittedText = textId.split(".");

    splittedText.forEach((key, index) => {
      if (address.hasOwnProperty(key)) {
        address = address[key];

        if (index === splittedText.length - 1) {
          // if it is the last key
          if (typeof address === "string") {
            text = address;
          } else {
            throw Error("The textId does not return a string");
          }
        }
      } else {
        throw Error("Incorrect textId. The textId path does not exist in PageTextContext.");
      }
    });
    return (
      <div style={style} className={`page-text${ className || ""}`}>
        {text}
      </div>
    );
  } catch (err) {
    console.error(err);
  }
  return null;
};

export default PageText;
