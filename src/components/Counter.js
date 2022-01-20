import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const show = useSelector(state => state.counter.show);
  const dispatch = useDispatch();
  const toggleShow = () => {
    dispatch({type: "SHOW"}); 
  }
  const hideShow = () => {
    dispatch({type:"HIDE", show:false})
  }
  console.log(show)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleShow}>Toggle Counter</button>
      <button onClick={hideShow}>Hide Counter</button>
    </main>
  );
};

export default Counter;
