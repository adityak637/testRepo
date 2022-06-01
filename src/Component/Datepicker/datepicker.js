import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
const InputDatepicker = (props) => {
  // const [startDate, setStartDate] = useState(new Date());

  const { value, onChange } = props;
  return (
    <DatePicker 
      selected={value} 
      className="form-control" 
      dateFormat="dd-MM-yyyy"
      minDate={new Date()}
      onChange={onChange} />
  );
};

export default InputDatepicker;