import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.less';

const AppOverlaySpinnerView: React.FC<{ visible: boolean }> = ({ visible }) => (
  ReactDOM.createPortal((
    <div className={`${styles.imLoader} bg-pink-50 ${visible ? styles.imLoaderActive : ''}`}>
      <div className={`${styles.imLoaderBar} bg-pink-500 ${visible ? styles.imLoaderBarActive : ''}`} />
    </div>
  ), document.body)
);

export default AppOverlaySpinnerView;
