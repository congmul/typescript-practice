import ReactDOM from 'react-dom';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComponent from './event/EventComponent';
import UserSearchRef from './refs/UserSearchRef';

const App = () => {
    return <div>
        {/* <GuestList /> */}
        {/* <UserSearch /> */}
        {/* <EventComponent /> */}
        <UserSearchRef />
    </div>
}

ReactDOM.render(<App />, document.querySelector('#root'));