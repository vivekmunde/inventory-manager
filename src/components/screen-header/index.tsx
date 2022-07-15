import React from 'react';

import styles from './styles.module.less';

const ScreenHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={`pb-4 ${styles.header}`}>
    {children}
  </div>
);

export default ScreenHeader;
