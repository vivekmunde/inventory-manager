import { Button, Popconfirm } from 'antd';
import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';

import useDispatchDeleteCategory from '../../redux/use-dispatch-delete-category';

const DeleteCategoryButton: React.FC<{ categoryId: string }> = ({ categoryId }) => {
  const dispatchDeleteCategory = useDispatchDeleteCategory();

  return (
    <Popconfirm
      title="Are you sure to delete the category?"
      onConfirm={() => {
        dispatchDeleteCategory(categoryId);
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

export default DeleteCategoryButton;
