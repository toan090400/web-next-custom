import style from "../../../styles/Form.module.css";
import { useForm } from "react-hook-form";
const Create = ({ createData }) => {
  // set up form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    await createData(data);
    reset();
  };
  return (
    <div className={style.container_page}>
      <div className={style.container_form}>
        <div className={style.header}>
          <h2>Create Category</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form"
          className={style.form}
        >
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            {errors.name && <i className="fas fa-exclamation-circle"></i>}
            <input
              type="text"
              className={style.text}
              placeholder="Name"
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name không được trống",
                },
              })}
            />
            {errors.name && <small>{errors.name.message}</small>}
          </div>
          <div className={style.form_control}>
            <label htmlFor="descrip">Description</label>
            {errors.name && <i className="fas fa-exclamation-circle"></i>}
            <textarea
              className={style.textarea}
              id="descrip"
              cols="30"
              rows="10"
              placeholder="Description !!!"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description không được trống",
                },
              })}
            ></textarea>
            {errors.description && <small>{errors.description.message}</small>}
          </div>
          <button className={style.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
