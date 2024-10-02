import { useState } from "react";

function StudentForm( {addStudent} ) {
    const [formData, setFormData] = useState( {
        firstName: "",
        lastName: "",
        email: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // To track if form was submitted

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); /* uzkerta kelia narsykles perkrovimui*/
        if (formData.firstName && formData.lastName && formData.email) {
            addStudent(formData);
            setFormData({
                firstName: "",
                lastName: "",
                email: ""
            });
            setIsSubmitted(true); /* Set form as submitted */
        }
    }

    return ( <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                />
            </div>
            <div>
                <label htmlFor="email">E-mail address:</label>
                <textarea
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your e-mail address"
                />
            </div>
            <button type="submit">Submit form</button>
        </form>

        {/* Show the success message if the form was submitted */}
        {isSubmitted && <p className="success-message">Thank you. Form submitted successfully.<br/>We will contact you!</p>}
    </>
    );
}

export default StudentForm;