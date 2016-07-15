import React     from 'react';
import Immutable from 'immutable';
import request   from 'axios';
import _         from 'lodash';

import Row       from 'react-bootstrap/lib/Row';
import Col       from 'react-bootstrap/lib/Col';

import metaTagsManager from 'libs/metaTagsManager';

// Child components.
import HouseholdItemForm from './widgets/HouseholdItemForm/HouseholdItemForm';
import HouseholdItemList from './widgets/HouseholdItemList/HouseholdItemList';

// CSS for this component.
import css             from './HouseholdItems.scss';

import BaseComponent   from 'libs/components/BaseComponent';

export default class HouseholdItems extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      $$items:            Immutable.fromJS([]),
      isSaving:           false,
      fetchAllItemsError: null,
      submitItemError:    null,
    };

    _.bindAll(this, '_fetchAllItems', '_handleItemSubmit');
  }

  componentDidMount() {
    this._fetchAllItems();
  }

  // Make a GET request to our Rails server.
  _fetchAllItems() {
    return (
      request
        .get('household_items.json', { responseType: 'json' })
        .then(res => {
          // console.log(res);
          this.setState({ $$items: Immutable.fromJS(res.data) })
        })
        .catch(error => {
          // console.log(error);
          this.setState({ fetchAllItemsError: error })
        })
    );
  }

  // Make a POST request to our Rails server.
  _handleItemSubmit(item) {
    this.setState({ isSaving: true });

    const requestConfig = {
      responseType: 'json',
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      },
    };

    return (
      request
        .post('household_items.json', { household_item: item }, requestConfig)
        .then(() => {
          const { $$items } = this.state;
          const $$item      = Immutable.fromJS(item);

          this.setState({
            $$items:  $$items.unshift($$item),
            isSaving: false,
          });
        })
        .catch(error => {
          this.setState({
            submitItemError: error,
            isSaving:        false,
          });
        })
    );
  }

  render() {
    const cssTransitionGroupClassNames = {
      enter:       css.elementEnter,
      enterActive: css.elementEnterActive,
      leave:       css.elementLeave,
      leaveActive: css.elementLeaveActive,
    };

    return (
      <div>
        <h2>
          Household items
        </h2>

        <Row>
          <Col sm={4}>
            <HouseholdItemForm
              isSaving={this.state.isSaving}
              actions={{ submitItem: this._handleItemSubmit }}
              error={this.state.submitItemError}
              cssTransitionGroupClassNames={cssTransitionGroupClassNames}
            />
          </Col>
          <Col sm={8}>
            <HouseholdItemList
              $$items={this.state.$$items}
              error={this.state.fetchAllItemsError}
              cssTransitionGroupClassNames={cssTransitionGroupClassNames}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
