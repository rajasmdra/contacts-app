import Joi from "joi";
import PropTypes from "prop-types";
import React from "react";
import { validateProps } from "../utils/validation";
import { FiDelete } from "react-icons/fi";

const deleteButtonPropsSchema = Joi.object({
    id: Joi.number().required(),
    onDelete: Joi.function().required()
})

function DeleteButton(props) {
    const validatedProps = validateProps(deleteButtonPropsSchema, props, 'DeleteButton')
    const { id, onDelete } = validatedProps

    return <button className="contact-item__delete" onClick={() => onDelete(id)}><FiDelete /></button>
}

// DeleteButton.propTypes = {
//     id: PropTypes.number.isRequired,
//     onDelete: PropTypes.func.isRequired,
// }

export default DeleteButton;