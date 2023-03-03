import style from "../../styles/Message.module.css";
import { useEffect } from "react";
const Message = ({ messageData, setStatusDataTrue, setStatusDataFalse }) => {
  // message data
  const status = messageData.success;
  const message = messageData.message;
  // set up message status
  useEffect(() => {
    setTimeout(() => {
      setStatusDataFalse(false);
    }, 3000);
  }, [setStatusDataTrue]);
  return (
    <div id={style.toast}>
      {status ? (
        <div className={`${style.toast} ${style.toast_success}`}>
          <div className={style.toast__icon}>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className={style.toast__body}>
            <h3 className={style.toast__title}>Thông báo</h3>
            <p className={style.toast__msg}>{message}</p>
          </div>
        </div>
      ) : (
        <div className={`${style.toast} ${style.toast_error}`}>
          <div className={style.toast__icon}>
            <i className="fa-solid fa-skull-crossbones"></i>
          </div>
          <div className={style.toast__body}>
            <h3 className={style.toast__title}>Thông báo</h3>
            <p className={style.toast__msg}>{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
