import { Button } from 'antd';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { EditOutlined } from '@ant-design/icons';

const EditInventoryItemButton: React.FC<{ inventoryItemId: string }> = ({ inventoryItemId }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const onEdit = () => {
    history.push(`${url}/${inventoryItemId}/edit-item`);
  };

  return (
    <Button onClick={() => onEdit()}>
      <EditOutlined />
      Edit
    </Button>
  );
};

export default EditInventoryItemButton;
