import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div>
      <h2 className="header"></h2>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          "Who's that Pokemon?",
          1000,
        ]}
        className="header"
        speed={50}
        style={{ fontSize: "2em" }}
        repeat={1}
        cursor={true}
      />
      <p className="text-white">
        You already know the rules, if you guess the pokemon you get 5
        poketokens.
      </p>
    </div>
  );
};

export default Header;
