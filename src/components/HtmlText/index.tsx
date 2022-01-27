import parse from 'html-react-parser';

interface PageTextProps {
  htmlText: string;
}

const HtmlText = ({htmlText}: PageTextProps) => {
  const descriptionReactElement = parse(htmlText)

  return (
    <div>{descriptionReactElement}</div>
  );
};

export default HtmlText