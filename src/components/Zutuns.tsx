import React, { useContext } from 'react';

import ZutunItem from './ZutunItem';
import { ZutunsContext } from '../store/zutuns-context';
import classes from './Zutuns.module.css';

const Zutuns: React.FC = () => {
  const zutunsCtx = useContext(ZutunsContext);

  return (
    <ul className={classes.zutuns}>
      {zutunsCtx.items.map((item) => (
        <ZutunItem
          key={item.id}
          text={item.text}
          onRemoveZutun={zutunsCtx.removeZutun.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Zutuns;