import "./Card.scss";

const cardData = {
  price: 5800,
  descTop: "2 Beds . 3 Baths",
  descBotton: "Al Raffa , Bur Dubai",
  img: "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6IjQ3cjUybGQxaHV2YzEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.o9MXnOPjjQGn0Q58SdJUI5xYPacaufGa-Po4tsHXTTM/image;p=main",
};

const Card = (props) => {
  return (
    <div className="card">
      <img src={cardData.img} alt="img" />
      <div className="desc">
        <p className="price">AED {cardData.price}</p>
        <p className="descTop">{cardData.descTop}</p>
        <p className="descBotton">{cardData.descBotton}</p>
      </div>
    </div>
  );
};

export default Card;
