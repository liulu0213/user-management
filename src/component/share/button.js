const Button=(props)=>{
  const {text, onClick}=props;
  return(
    <div className="d-grid col-8 mx-auto">
      <button type="button" className="btn btn-primary" onClick={onClick}>
        {text}
      </button>
    </div>
  )
}
export default Button
