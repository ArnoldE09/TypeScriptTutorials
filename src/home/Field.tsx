
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const validationSchema = yup.object({
//     fullName: yup.string()
//           .required("Full Name is required")
//           .max(10, "Name is too long"),
//     food: yup.string()
//           .required("Food is required"),
//     approvesTutorial: 
//            yup.boolean()
//           .isTrue("You must approve of this tutorial")
//           .required("Approves tutorial is required"),
// });

interface UserInput {
  fullName: string;
  food: string;
  approvesTutorial: boolean;
}

const defaultValues: UserInput = {
  fullName: "John Doe",
  food: "",
  approvesTutorial: false,
};

function Field() {
  
  const {
    register,
    handleSubmit,
    formState: { errors }, // get errors
  } = useForm<UserInput>({
    defaultValues,
    //resolver: yupResolver(validationSchema),
    mode: "onTouched", // default is "onSubmit"
  });

  const onSubmitHandler = (values: UserInput) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <main className="main prose">

      <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input {...register("fullName")} id="fullName" type="text" />
          {errors.fullName && (
          <p className="error-message">{errors.fullName.message}</p>
  )}
        </div>

        <div>
          <label htmlFor="food">Food!</label>
          <select name="food" id="food">
            <option value="" disabled>
              Please Select...
            </option>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="ice-cream">Ice Cream</option>
          </select>
        </div>

        <div>
          <input
            name="approvesTutorial"
            id="approves-tutorial"
            type="checkbox"
          />
          <label htmlFor="approves-tutorial">
            Do you approve this tutorial?
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Field;