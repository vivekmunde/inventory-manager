import { Button } from 'antd';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { EditOutlined } from '@ant-design/icons';

const EditCategoryButton: React.FC<{ categoryId: string }> = ({ categoryId }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const onEdit = () => {
    history.push(`${url}/${categoryId}/edit-category`);
  };

  return (
    <Button onClick={() => onEdit()}>
      <EditOutlined />
      Edit
    </Button>
  );
};

export default EditCategoryButton;
