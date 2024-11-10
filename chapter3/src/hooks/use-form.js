import { useEffect, useState } from 'react';

function useForm({ initialValue, validate }) {
  const [values, setValues] = useState(initialValue);

  const [touched, setTouched] = useState({});

  const [errors, setErrors] = useState({});

  //value: 값들, input change 값 e.target.value
  //name은 email,password 같은 이름
  const handleChangeInput = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (name) => {
    setTouched({ ...touched, [name]: true });
  };

  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    console.log(newErrors);
    setErrors(newErrors);
  }, [validate, values]);

  return { values, errors, touched, getTextInputProps };
}

export default useForm;