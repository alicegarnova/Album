import "./Card.css";

interface IProps {
  url: string;
  title: string;
}

export const Card = ({ title, url }: IProps) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={url}></img>
      </div>
      <h4 className="card_title">{title}</h4>
    </div>
  );
};
