import React from "react";
import { DatePicker, Form, Input, Select } from "antd";

const FormItem = Form.Item;
const { Option } = Select;

// function that distruct and handle fields of antd design
const CreateAntField =
  (AntComponent) =>
  ({
    field,
    form,
    hasFeedback,
    label,
    selectOptions,
    submitCount,
    type,
    ...props
  }) => {
    const touched = form.touched[field.name];
    const submitted = submitCount > 0;
    const hasError = form.errors[field.name];
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;

    // handle change inside fields
    const onInputChange = ({ target: { value } }) =>
      field.setFieldValue(field.value, value);
    const onChange = (value) =>
      field.onChange({ target: { value, name: field.name } });
    const onBlur = (value) => field.onBlur(value);

    return (
      <div className="field-container">
        <FormItem
          label={label}
          hasFeedback={
            (hasFeedback && submitted) || (hasFeedback && touched)
              ? true
              : false
          }
          help={submittedError || touchedError ? hasError : false}
          validateStatus={submittedError || touchedError ? "error" : "success"}
        >
          <AntComponent {...field} {...props} onBlur={onBlur}>
            {selectOptions &&
              selectOptions.map((name) => <Option key={name}>{name}</Option>)}
          </AntComponent>
        </FormItem>
      </div>
    );
  };

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntInput = CreateAntField(Input);
// export const AntTimePicker = CreateAntField(TimePick);
