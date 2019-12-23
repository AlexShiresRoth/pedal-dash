import {
  SEARCH_PEDALS,
  SEARCH_BRANDS,
  CLEAR_DATA,
  SET_INDEX,
  GET_INITIAL
} from "./types";
import axios from "axios";
import { reverbApiKey } from "../config/default.json";

export const getPedals = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/hal+json",
        Authorization: `Bearer ${reverbApiKey}`,
        "Accept-Version": "3.0"
      }
    };
    const res = await axios.get(
      `https://api.reverb.com/api/listings/all?category_uuid=fa10f97c-dd98-4a8f-933b-8cb55eb653dd&make=${formData.query ||
        formData}&model=${formData.query}`,
      config
    );

    dispatch({
      type: SEARCH_PEDALS,
      payload: await res.data
    });
  } catch (error) {
    console.error(error);
  }
};

export const getPedal = () => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/hal+json",
        Authorization: `Bearer ${reverbApiKey}`,
        "Accept-Version": "3.0"
      }
    };
    const res = await axios.get(
      `https://api.reverb.com/api/listings/all?category_uuid=fa10f97c-dd98-4a8f-933b-8cb55eb653dd`,
      config
    );
    dispatch({
      type: GET_INITIAL,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};

export const setIndex = index => async dispatch => {
  try {
    dispatch({
      type: SET_INDEX,
      payload: await index
    });
  } catch (error) {
    console.error(error);
  }
};

export const clearData = () => async dispatch => {
  try {
    dispatch({
      type: CLEAR_DATA,
      payload: null
    });
  } catch (error) {
    console.error(error);
  }
};

export const getBrands = () => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/hal+json",
        Authorization: `Bearer ${reverbApiKey}`,
        "Accept-Version": "3.0"
      }
    };
    const res = await axios.get(
      `https://api.reverb.com/api/listings/all?category_uuid=fa10f97c-dd98-4a8f-933b-8cb55eb653dd`,
      config
    );
    dispatch({
      type: SEARCH_BRANDS,
      payload: res.data.listings
    });
  } catch (error) {
    console.error(error);
  }
};
