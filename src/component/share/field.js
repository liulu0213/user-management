const Field=({type,name,id, placeholder, label, onChange})=>{
  return(
    <div className="form-floating mb-3">
    <input
      type={type}
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
    <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default Field
