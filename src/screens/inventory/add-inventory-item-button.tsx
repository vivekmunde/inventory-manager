import { Button, Dropdown, Menu } from 'antd';
import orderBy from 'lodash/orderBy';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { DownOutlined, PlusOutlined } from '@ant-design/icons';

import { TCategory } from '../../types';

const sortCategories = (list: TCategory[]) => (
  orderBy(list, [(it) => it.title?.toLowerCase()], ['asc'])
);

const AddInventoryItemButton: React.FC<{ categories: TCategory[] }> = ({ categories }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const onAdd = (categoryId: string) => {
    history.push(`${url}/${categoryId}/add-item`);
  };

  return (
    <Dropdown
      trigger={['click']}
      overlay={(
        <Menu
          items={sortCategories(categories).map((it) => ({ key: it.id, label: it.title }))}
          onClick={(value) => {
            onAdd(value.key);
          }}
        />
      )}>
      <Button>
        <PlusOutlined />
        Add New Item
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default AddInventoryItemButton;
