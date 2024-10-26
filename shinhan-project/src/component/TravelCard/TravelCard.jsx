import { Link } from "react-router-dom";
import "./TravelCard.css";

function TravelCard() {
  return (
    <section className="travel-card">
      <Link className="more-visited">
        <span>최근 방문지</span>
        <span>{">"}</span>
      </Link>
      <article className="tarvel-card-container">
        <section className="tarvel-card-image">
          <img src="/image/travelImage.png" />
        </section>
        <section className="travel-card-info">
          <h4 className="tarvel-card-title">환상의 경치</h4>
          <p className="tarvel-card-content">
            경관이 아름다운 어쩌구 저쩌구 주저리 주저리
          </p>
        </section>
      </article>
    </section>
  );
}

export default TravelCard;
