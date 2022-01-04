import {
  ADD_PHONE,
  ADD_PHONE_FAILED,
  ADD_PHONE_SUCCESS,
  GET_ALL_PHONES,
  GET_ALL_PHONES_FAILED,
  GET_ALL_PHONES_SUCCESS,
} from "../actionsTypes.js/phoneActionsTypes";
import axios from "axios";

/******** Add new phone action creator ******* */

export const addPhone = (newPhone) => async (dispatch) => {
  dispatch({ type: ADD_PHONE });

  try {
    const res = await axios.post("/phone/add-phone", newPhone);

    dispatch({ type: ADD_PHONE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADD_PHONE_FAILED, payload: error.res.errors });
  }
};

/******************  Get alll phones action creator ********** */

export const getAllPhone = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PHONES });

  try {
    const res = await axios.get("/phone/get-phones");

    dispatch({ type: GET_ALL_PHONES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_PHONES_FAILED, payload: error.res.errors });
  }
};
