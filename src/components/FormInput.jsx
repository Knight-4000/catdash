

export default function FormInput({ label, name, type, defaultValue, onFocus, onChange }) {
  return (
    <div className="form-control">
      <label>
        <span className="span-text">{label}</span>
      </label>
      <input 
        type={type}
        name={name}
        defaultValue={defaultValue}
        onFocus={onFocus}
        onChange={onChange}
        className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  )
}
