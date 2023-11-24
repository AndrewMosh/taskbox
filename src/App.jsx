import "./index.css";
import store from "./lib/store";

import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <InboxScreen />
    </Provider>
  );
}
export default App;
