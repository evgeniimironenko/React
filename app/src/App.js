import Contacts from "./components/hw-2/contacts/Contacts";
import { Provider } from "react-redux";
import store from "./components/hw-2/contacts/features/store.js";

function App() {
  return (
    <Provider store={store}>
      <main>
        <Contacts />
      </main>
    </Provider>
  );
}

export default App;
