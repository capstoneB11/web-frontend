import React from 'react';

const SummaryInputField = ({ label, type, id, name, placeholder,value, handleInputChange }) => {
  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-600">
        {label}
      </label>
      <input
        required
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SummaryInputField;
