import { Button } from 'antd';
import React from 'react';

import { PlusOutlined } from '@ant-design/icons';

const AddField: React.FC<{
  onAdd: () => void;
}> = React.memo(
  ({ onAdd }) => (
    <Button
      type="default"
      onClick={() => {
        onAdd();
      }}
    >
      <PlusOutlined />
      Add field
    </Button>
  )
);

export default AddField;
