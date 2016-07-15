import React, { PropTypes }    from 'react';
import Immutable               from 'immutable';
import Alert                   from 'react-bootstrap/lib/Alert';
import Table                   from 'react-bootstrap/lib/Table';

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import _                       from 'lodash';

import HouseholdItem from './HouseholdItem/HouseholdItem';

import BaseComponent from 'libs/components/BaseComponent';

export default class HouseholdItemsList extends BaseComponent {
  static propTypes = {
    $$items: PropTypes.instanceOf(Immutable.List).isRequired,
    error:   PropTypes.any,
    cssTransitionGroupClassNames: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
    _.bindAll(this, '_errorWarning');
  }

  _errorWarning() {
    // If there is no error, there is nothing to add to the DOM
    if (!this.props.error) return null;
    return (
      <Alert bsStyle="danger" key="commentFetchError">
        <strong>HouseholdItems could not be retrieved. </strong>
        A server error prevented loading comments. Please try again.
      </Alert>
    );
  }

  render() {
    const { $$items, cssTransitionGroupClassNames } = this.props;

    const itemNodes = $$items.map( $$item =>
      <tr key={$$item.get('id')}>
        <td>{$$item.get('name')}</td>
        <td>{$$item.get('volume')}</td>
        <td>{$$item.get('quantity')}</td>
        <td>{$$item.get('tag')}</td>
        <td>{$$item.get('description')}</td>
        <td colSpan="3"></td>
      </tr>
    );

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={cssTransitionGroupClassNames}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this._errorWarning()}
        </ReactCSSTransitionGroup>

        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Volume</th>
              <th>Quantity</th>
              <th>Tag</th>
              <th>Description</th>
              <th colSpan="3"></th>
            </tr>
          </thead>
          <tbody>
            {itemNodes}
          </tbody>
        </Table>
      </div>
    );
  }
}
