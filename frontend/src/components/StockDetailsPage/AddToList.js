import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useEffect } from 'react';

function AddToList({ isWatched, stockId }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state);

  // const watchlistId = sessionUser.userStocks.data.id;

  useEffect(() => {
    console.log('watchlistId', sessionUser);
  }, []);

  function handleAdd() {
    // dispatch(sessionActions.addToWatchlist(sessionUser, watchlistId, stockId));
  }

  function handleRemove() {
    //Remove from Watchlist
  }

  if (!isWatched) {
    return <Button onClick={handleAdd}>+ Add To List</Button>;
  } else {
    return <Button onClick={() => console.log(isWatched)}>- Remove from List</Button>;
  }
}

export default AddToList;
