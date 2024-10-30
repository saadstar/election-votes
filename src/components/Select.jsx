// Select.js
import React from "react";

const Select = ({ label, name, options, register, error }) => (
  <div className="mb-4 w-full">
    <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
      {label}
    </label>
    <select
      {...register}
      id={name}
      className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="cursor-pointer">
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default Select;