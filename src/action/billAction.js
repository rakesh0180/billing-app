import axios from "../config/axiosConfig";

export const startCreateBill = (billData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/bills", billData);
      const result = response.data;
      console.log(result);
      if (result.hasOwnProperty("errors")) {
        alert(result.message);
      } else {
        dispatch(createBill(result));
      }
    } catch (err) {
      alert(err.message);
    }
  };
};

export const startGetAllBills = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/bills");
      const result = response.data;
      dispatch(getAllBills(result));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const startDeleteBill = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/bills/${id}`);
      const result = response.data;
      dispatch(deleteBill(result._id));
    } catch (err) {
      alert(err.message);
    }
  };
};

const createBill = (bill) => {
  return {
    type: "CREATE_BILL",
    payload: bill,
  };
};

export const getAllBills = (bills) => {
  return {
    type: "ALL_BILLS",
    payload: bills,
  };
};

const deleteBill = (id) => {
  return {
    type: "DELETE_BILL",
    payload: id,
  };
};
