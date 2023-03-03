import style from "../../styles/Home.module.css";
import imageHome from "../../public/images/feature-img-1.png";
import Link from "next/link";
import Image from "next/image";
const Home = ({ bookData }) => {
  return (
    <div className={style.index_container}>
      <section className={style.features} id="features">
        <h1 className={style.heading}>Book</h1>

        <div className={style.box_container}>
          {bookData.map((item) => {
            const image = item.imageGogle;
            return (
              <div key={item._id} className={style.box}>
                {image ? (
                  <>
                    <img
                      className={style.image}
                      src={`${item.imageLink}/${item.imageGogle.id}`}
                      alt={item.name}
                      loading="lazy"
                    />
                  </>
                ) : (
                  <Image src={imageHome} alt={item.name} />
                )}

                <h3 className={style.title}>{item.name}</h3>
                <p className={style.descrip}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
