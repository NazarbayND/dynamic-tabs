import Axios from "axios";

let baseURl = "http://cube.local/";

export const searchServices = {
  getWorkOrderList() {
    Axios.get(baseURl + "/api/wo/");
  },

  getCustomerList() {
    Axios.get(baseURl + "/api/customers/");
  },
};
