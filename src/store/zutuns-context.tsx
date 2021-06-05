import React, { useState } from 'react';

import Zutun from '../models/zutun';

type ZutunsContextObj = {
  items: Zutun[];
  addZutun: (text: string) => void;
  removeZutun: (id: string) => void;
};

export const ZutunsContext = React.createContext<ZutunsContextObj>({
  items: [],
  addZutun: () => {},
  removeZutun: (id: string) => {},
});

const ZutunsContextProvider: React.FC = (props) => {
  const [zutuns, setZutuns] = useState<Zutun[]>([]);

  const addZutunHandler = (zutunText: string) => {
    const newZutun = new Zutun(zutunText);

    setZutuns((prevZutuns) => {
      return prevZutuns.concat(newZutun);
    });
  };

  const removeZutunHandler = (zutunId: string) => {
    setZutuns((prevZutuns) => {
      return prevZutuns.filter((zutun) => zutun.id !== zutunId);
    });
  };

  const contextValue: ZutunsContextObj = {
    items: zutuns,
    addZutun: addZutunHandler,
    removeZutun: removeZutunHandler,
  };

  return (
    <ZutunsContext.Provider value={contextValue}>
      {props.children}
    </ZutunsContext.Provider>
  );
};

export default ZutunsContextProvider;