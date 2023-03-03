import style from "../../styles/Home.module.css";

const Room = ({ roomData }) => {
  return (
    <div className={style.index_container}>
      <section className={style.features} id="features">
        <h1 className={style.heading}>Room</h1>

        <div className={style.box_container}>
          {roomData.map((item) => {
            return (
              <div key={item._id} className={style.box_container}>
                <div className={style.box}>
                  <h3 className={style.title}>{item.name}</h3>
                  <p className={style.descrip}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, earum!
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Room;
