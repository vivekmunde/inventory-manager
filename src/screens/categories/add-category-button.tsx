import { Button } from 'antd';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { PlusOutlined } from '@ant-design/icons';

const AddCategoryButton: React.FC = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const handleAddUser = () => {
    history.push(`${url}/add-category`);
  };

  return (
    <Button onClick={() => handleAddUser()}>
      <PlusOutlined />
      Add New Category
    </Button>
  );
};

export default AddCategoryButton;
