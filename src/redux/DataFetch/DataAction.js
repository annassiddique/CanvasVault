import { db } from "../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./Datatype";

export const fetchDatarequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSucces = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDatarequest());
    const postColRef = collection(db, `NFTproducts`);
   
    await getDocs(postColRef)
      .then((snapshot) => {
        
        const data = snapshot.docs.map((doc) => doc.data());
        dispatch(fetchDataSucces(data));
        console.log(data);
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      });
  };
};

