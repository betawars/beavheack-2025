export default function validate(formData,setFormErrors){

    const errors = {};

    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!/^[\w.-]+@[\w.-]+\.(edu)$/i.test(formData.email)) {
        errors.email = "Please input your university email";
    }

    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.phoneNo) {
        errors.phoneNo = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
        errors.phoneNo = "Phone number must be 10 digits";
    }

    if (!formData.university) errors.university = "University is required";
    if (!formData.isDriver) errors.isDriver = "Please select an option";

    setFormErrors(errors);

    return Object.keys(errors).length === 0;

};