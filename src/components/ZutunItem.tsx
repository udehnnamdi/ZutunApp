import classes from './ZutunItem.module.css';

const ZutunItem: React.FC<{ text: string; onRemoveZutun: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveZutun}>
      {props.text}
    </li>
  );
};

export default ZutunItem;