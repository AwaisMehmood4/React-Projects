import './form-input.style.scss';

const FormInput = ({label, ...otherProps}) => {
    return(
        <div className="group">
        <input className="form-input" {...otherProps} ></input>

        {label && (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
         )}
        </div>
    );
}

export default FormInput;



{/*
    It will also work
 const FormInput = ({label, inputOptions}) => {
     return(
         <div className="group">
         <input className="form-input" {inputOptions} ></input>

         {label && (
             <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
          )}
         </div>
     );

*/}