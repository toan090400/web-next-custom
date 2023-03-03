import style from "../../../styles/Form.module.css";
import { useForm } from "react-hook-form";
const Create = ({ categoryData, createData }) => {
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
          <h2>Create Book</h2>
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
          <div className={style.form_control}>
            <h2>Category</h2>
            {errors.name && <i className="fas fa-exclamation-circle"></i>}
            {categoryData.map((item) => {
              return (
                <div key={item._id} className={style.group}>
                  <input
                    type="checkbox"
                    className={style.checkbox}
                    id={item.name}
                    value={item._id}
                    {...register("category", {
                      required: {
                        value: true,
                        message: "Category không được trống",
                      },
                    })}
                  />
                  <label htmlFor={item.name}>{item.name}</label>
                </div>
              );
            })}
            {errors.categoryId && <small>{errors.categoryId.message}</small>}
          </div>
          <button className={style.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
