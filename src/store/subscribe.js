import store from "@/store";
import axios from "axios";

store.subscribe((mutations) => {
  console.log(mutations);
  switch (mutations.type) {
    case "auth/SET_TOKEN":
      if (mutations.payload) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer ${mutations.payload}";
        localStorage.setItem("token", mutations.payload);
      } else {
        axios.defaults.headers.common["Authorization"] = null;
        localStorage.removeItem("token", mutations.payload);
      }
      break;
  }
});
