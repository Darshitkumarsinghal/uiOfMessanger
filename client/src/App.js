//components
import {Messanger} from "./components/Messanger";
import AccountProvider from "./context/AccountProvider";
function App() {
  return (
    <div>
        <AccountProvider>
            <Messanger />
        </AccountProvider>

       </div>
  );
}

export default App;
