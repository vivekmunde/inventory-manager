import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import ScreenHeader from '../../components/screen-header';
import { TState } from '../../redux/types';
import { TCategory } from '../../types';
import AddInventoryItemButton from './add-inventory-item-button';
import InventoryItemList from './inventory-list';
import InventoryRoutes from './routes';

const InventoryByCategory: React.FC = () => {
  const history = useHistory();
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = useSelector<TState, TCategory | undefined>((state) => state.categories.find((it) => it.id === categoryId), shallowEqual);

  useEffect(() => {
    if (categoryId && !category) {
      history.push('/');
    }
  }, [categoryId, category]);

  return (
    <div>
      <ScreenHeader>
        <Row>
          <Col xs={24} sm={24} md={12}>
            <Typography.Title>{category?.title}</Typography.Title>
          </Col>
          <Col xs={24} sm={24} md={12} className="flex flex-row justify-end items-center">
            <AddInventoryItemButton categoryId={categoryId} />
          </Col>
        </Row>
      </ScreenHeader>
      <div>
        {category && <InventoryItemList category={category} />}
        <InventoryRoutes />
      </div>
    </div>
  );
};

export default InventoryByCategory;
