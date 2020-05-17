import axios from "axios";
import {
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_REQUEST,
  CREATE_PLAYLIST,
  ADD_SONG_TO_PLAYLIST,
  REMOVE_SONG_FROM_PLAYLIST,
} from "../actionTypes";

const fetchPlaylistSuccess = (data) => {
  return {
    type: FETCH_PLAYLIST_SUCCESS,
    payload: data,
  };
};

const fetchPlaylistFailure = (error) => {
  return {
    type: FETCH_PLAYLIST_FAILURE,
    payload: error,
  };
};

const fetchPlaylistRequest = () => {
  return {
    type: FETCH_PLAYLIST_REQUEST,
  };
};

let config = {
  headers: {
    "access-control-allow-origin": "*",
  },
};

export const fetchPlaylist = () => {
  return (dispatch) => {
    dispatch(fetchPlaylistRequest());
    axios
      .get("http://localhost:5000/playlist/", config)
      .then((res) => {
        const playlists = res.data;
        dispatch(fetchPlaylistSuccess(playlists));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchPlaylistFailure(errorMsg));
      });
  };
};

export const createPlaylist = (playlist) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_PLAYLIST,
      payload: playlist,
    });
  };
};