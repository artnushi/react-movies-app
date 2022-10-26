import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

export const DatePickerInput = ({ value, setValues, values }) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (value) => {
        setStartDate(value);
        setValues({ ...values, date_of_birth: value });
    };

    return (
        <>
            <span>Date of birth</span>
            <DatePicker
                className={'form-control'}
                selected={startDate}
                dateFormat="MMMM d, yyyy"
                onChange={handleChange}
                value={value}

            />
        </>
    );
};

DatePickerInput.propTypes = {
    setValues: PropTypes.func,
    values: PropTypes.object,
}