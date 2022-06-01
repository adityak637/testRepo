import React from 'react';
import './selectbox.scss';
import Select from 'react-select';

const SelectBox = (props) => {
  const { onChange, value, options, isMulti } = props;
  return (
    <div className="select-wrapper">
      <Select
        classNamePrefix="custom_ui"
        onChange={onChange}
        value={value}
        options={options}
        isMulti={isMulti} />
    </div>
  );
}


export default SelectBox;
