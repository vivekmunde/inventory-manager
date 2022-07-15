import { Button, Popconfirm } from 'antd';
import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';

import useDispatchDeleteInventoryItem from '../../redux/use-dispatch-delete-inventory-item';

const DeleteInventoryButton: React.FC<{ inventoryItemId: string }> = ({ inventoryItemId }) => {
  const dispatchDeleteInventoryItem = useDispatchDeleteInventoryItem();

  return (
    <Popconfirm
      title="Are you sure to delete the inventory item?"
      onConfirm={() => {
        dispatchDeleteInventoryItem(inventoryItemId);
      }}
      okText="Yes"
      cancelText="No"
    >
      <Button>
        <DeleteOutlined />
        Delete
      </Button>
    </Popconfirm>
  );
};

export default DeleteInventoryButton;
