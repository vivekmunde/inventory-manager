import { Button } from 'antd';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { PlusOutlined } from '@ant-design/icons';

const AddInventoryItemButton: React.FC<{ categoryId: string }> = ({ categoryId }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const onAdd = () => {
    history.push(`${url}/${categoryId}/add-item`);
  };

  return (
    <Button onClick={() => onAdd()}>
      <PlusOutlined />
      Add New Item
    </Button>
  );
};

export default AddInventoryItemButton;
