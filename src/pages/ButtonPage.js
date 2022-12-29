import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
  const handleClick = () => {
    console.log('click');
  }
  return (
    <div>
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
          <GoBell  />
          Click me!
        </Button>
      </div>
      <div>
        <Button success outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy now!
        </Button>
      </div>
      <div>
        <Button secondary onMouseLeave={handleClick}>Search</Button>
      </div>
      <div>
        <Button warning rounded outline>
          <GoDatabase/>
          Show me!
        </Button>
      </div>
      <div>
        <Button danger>Hide ads!</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
