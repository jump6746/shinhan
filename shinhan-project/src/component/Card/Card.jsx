import "./Card.css";

function Card() {
  return (
    <section className="card">
      <section className="card-info-container">
        <section className="card-info-data">
          <h3 className="my-point">내 포인트</h3>
          <span className="card-name">SOL 트래블</span>
          <div className="card-number">
            <span className="number">4756</span>
            <span className="circle-number">●●●●</span>
            <span className="circle-number">●●●●</span>
            <span className="number">9018</span>
          </div>
          <span className="card-point">1,232 포인트</span>
        </section>
        <span className="card-company">신한카드</span>
      </section>
    </section>
  );
}

export default Card;
