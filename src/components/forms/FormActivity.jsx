import { useFormik } from "formik";
import { basicSchema } from "./validation";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const BasicForm = () => {
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    console.log(errors);

    return (
        <form className="validate_form activity_form" onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="email"> Activity Name</label>
            <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={ `form-control ${errors.email} && ${touched.email} ? "input-error" : ""`}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <label htmlFor="floatingTextarea">Description</label>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            </div>

            <label htmlFor="age">I Want To ...</label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <div className="d-flex" style={{gridGap:"10px"}}>
            <div className="col-xl-6 col-md-6 col-sm-12">
                <label htmlFor="age">Date</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
                <label htmlFor="age">Time</label>
                <select className="form-select" aria-label="Default select example"  style={{width:"92%"}}>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            </div>



            <label>With # Of People</label>
            <input
                onChange={handleChange}
                id="text"
                type="text"
                placeholder="Enter your text"
                onBlur={handleBlur}
                className={`form-control`}
            />

            <button disabled={isSubmitting} type="submit">
                Submit
            </button>
        </form>
    );
};
export default BasicForm;