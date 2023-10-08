

export default function FormInput({ label, name, type, defaultValue }) {
  return (
    <div className="form-control">
      <label>
        <span className="span-text">{label}</span>
      </label>
      <input 
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input bordered" />
    </div>
  )
}
