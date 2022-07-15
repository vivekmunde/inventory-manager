import { DrawerProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const RouterDrawer: React.FC<{
  goBackUrl: string;
  children: (drawerProps: DrawerProps, onToggle: (visible: boolean) => void) => React.ReactNode;
}> = ({ goBackUrl, children }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const drawerProps: DrawerProps = {
    visible,
    placement: 'right',
    closable: false,
    maskClosable: false,
    push: false,
    destroyOnClose: true,
    width: 'auto',
    onClose: () => {
      setVisible(false);
    },
    afterVisibleChange: (visibility) => {
      if (!visibility) {
        history.push(goBackUrl);
      }
    },
  };

  const onToggle = (val: boolean) => {
    setVisible(val);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <React.Fragment>
      {children(drawerProps, onToggle)}
    </React.Fragment>
  );
};

export default RouterDrawer;
