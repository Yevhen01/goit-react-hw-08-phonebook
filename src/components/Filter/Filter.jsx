import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormFilter, LabelFilter } from './Filter.styled';
import { Input } from '../FormList/FormList.styled';

import { getFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/filterSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FormFilter>
      <LabelFilter>
        <Input
          type="name"
          value={value}
          onChange={handleChange}
          placeholder="Search name..."
        />
      </LabelFilter>
    </FormFilter>
  );
};

export default Filter;
