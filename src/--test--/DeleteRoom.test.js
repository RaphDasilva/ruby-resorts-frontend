import { BrowserRouter as Router } from 'react-router-dom';
import { render } from './test-utils'; // Import the custom render function
import DeleteRoom from '../components/deleteRoomPage/DeleteRoom';

it('renders correctly', () => {
  const { asFragment } = render(
    <Router>
      <DeleteRoom />
    </Router>,

  );
  expect(asFragment()).toMatchSnapshot();
});