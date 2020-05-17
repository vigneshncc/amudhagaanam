import axios from "axios";
import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
} from "../actionTypes";

import { getLibrary } from "../../Services/libraryService";

const fetchSongSuccess = (data) => {
  return {
    type: FETCH_SONGS_SUCCESS,
    payload: data,
  };
};

const fetchSongFailure = (error) => {
  return {
    type: FETCH_SONGS_FAILURE,
    payload: error,
  };
};

const fetchSongRequest = () => {
  return {
    type: FETCH_SONGS_REQUEST,
  };
};

export const fetchSongs = () => {
  return (dispatch) => {
    dispatch(fetchSongRequest());
    const songs = getLibrary();
    // axios
    //   .get("http://localhost:5000/library/")
    //   .then((res) => {
    //     const songs = res.data;
    dispatch(fetchSongSuccess(songs));
    // })
    // .catch((err) => {
    //   const errorMsg = err.message;
    //   dispatch(fetchSongFailure(errorMsg));
    // });
  };
};