import style from "../../../styles/Form.module.css";
import { useForm } from "react-hook-form";
const Create = ({ bookData, updateData }) => {
  // set up form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const image = await data.image[0];

    const form = await new FormData();

    form.append("image", image);

    await updateData(form);
    reset();
  };
  return (
    <div className={style.container_page}>
      <div className={style.container_form}>
        <div className={style.header}>
          <h2>Image Book: {bookData.book.name}</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form"
          className={style.form}
        >
          <div className={style.form_control}>
            <label htmlFor="image">Image</label>
            {errors.name && <i className="fas fa-exclamation-circle"></i>}
            <div className="file-upload">
              <input
                className={style.file_upload__input}
                type="file"
                id="image"
                // multiple
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image không được trống",
                  },
                })}
              />
            </div>
            {errors.image && <small>{errors.image.message}</small>}
          </div>
          <button className={style.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
