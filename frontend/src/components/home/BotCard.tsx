import { Link } from "react-router-dom";

interface BotCardProps {
  name: string;
  description: string;
  image: string;
  redirect: string;
}

const BotCard = (props: BotCardProps) => {
  return (
    <div className="flex flex-col w-56 shadow rounded-xl bg-foreground">
      <div className="p-4">
        <img src={props.image}></img>
        <hr className="my-3"></hr>
        <p className="font-bold text-copy">{props.name}</p>
        <p className="text-copy-lighter">{props.description}</p>

        <Link to={props.redirect}>
          <button className="w-full h-10 mt-4 border-2 rounded bg-primary text-background border-primary-light">
            Play now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BotCard;