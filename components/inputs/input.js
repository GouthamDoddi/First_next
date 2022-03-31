export default function Input ({ lable, placeholder, name }) {
  return (
    <div>
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
        {lable}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name={name}
          id={name}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-8"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

