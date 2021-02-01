import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as sessionActions from '../../store/session';

function AddToList({ isWatched, stockId }) {
  const dispatch = useDispatch();
  const [watched, setWatched] = useState(isWatched);

  const sessionUser = useSelector((state) => state.session);
  const watchlistId = sessionUser.userStocks.data[0].id;

  function handleAdd() {
    dispatch(sessionActions.addToWatchlist(sessionUser, watchlistId, stockId));
    setWatched(true);
  }

  function handleRemove() {
    dispatch(sessionActions.removeFromWatchlist(sessionUser, watchlistId, stockId));
    setWatched(false);
  }

  if (!watched) {
    return <Button onClick={handleAdd}>+ Add To List</Button>;
  } else {
    return <Button onClick={handleRemove}>- Remove from List</Button>;
  }
}

export default AddToList;
