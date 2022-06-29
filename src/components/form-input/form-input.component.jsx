import {FormInputLabel, Input, Group} from './form-input.style.jsx';

const FormInput = ({label, ...otherProps}) => {
    return(
        <Group>
        <Input {...otherProps} ></Input>

        {label && (
            <FormInputLabel shrink={otherProps.value.length}>
            {label}
            </FormInputLabel>
         )}
        </Group>
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