/* Would be nice to add import aliases like '@screens/...' to not be dependent on the directory structure to move things around easier later on.
I couldn't make it work out of the box and decided to not spend time on the debugging */
import OverviewScreen from './screens/OverviewScreen/OverviewScreen';

function App() {
    /* Router goes here */
    return <OverviewScreen />;
}

export default App;
