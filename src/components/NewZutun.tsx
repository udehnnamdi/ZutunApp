import { useRef, useContext } from 'react';

import { ZutunsContext } from '../store/zutuns-context';
import classes from './NewZutun.module.css';

const NewZutun: React.FC = () => {
  const zutunsCtx = useContext(ZutunsContext);

  const zutunTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = zutunTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    zutunsCtx.addZutun(enteredText);

    zutunTextInputRef.current!.value=''

  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Zutun App</label>
      <input type='text' id='text' ref={zutunTextInputRef} />
      <button>Add Zutun</button>
    </form>
  );
};

export default NewZutun;