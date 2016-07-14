import HouseholdItems from '../components/HouseholdItems/HouseholdItems';
import ReactOnRails from 'react-on-rails';

ReactOnRails.setOptions({
  traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register(
  {
    HouseholdItems
  }
);
