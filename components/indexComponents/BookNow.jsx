import Link from "next/link";
import style from "../../styles/BookNow.module.css";

const BookNow = () => {
  return (
    <section className={style.bookNow} id="bookNow">
      <div className={style.container}>
        <div className={style.imgDiv}>
          <img src="/bikeImg.webp" alt="bike image" />
        </div>
        <div className={style.content}>
          <div className={style.contentWrapper}>
            <p>Struggling for your bike service, not your business?</p>
            <br />
            <br />
            <h1>we can fix that</h1>
            <div className={style.btnGrp}>
              <Link href="/book-service">
                <button>book now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
