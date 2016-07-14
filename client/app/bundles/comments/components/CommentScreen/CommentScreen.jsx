import React, { PropTypes } from 'react';

import CommentBox    from '../CommentBox/CommentBox';
import css           from './CommentScreen.scss';
import BaseComponent from 'libs/components/BaseComponent';

export default class CommentScreen extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    locationState: PropTypes.object,
  };

  _renderNotification() {
    const { locationState } = this.props;

    if (!locationState || !locationState.redirectFrom) return null;

    return (
      <div className={`bg-success ${css.notification}`}>
        You've been redirected from <strong>{locationState.redirectFrom}</strong>
      </div>
    );
  }
  render() {
    const { data, actions } = this.props;
    return (
      <div>
        {this._renderNotification()}
        <div>
          <CommentBox
            pollInterval={10000}
            data={data}
            actions={actions}
            ajaxCounter={data.get('ajaxCounter')}
          />
        </div>
      </div>
    );
  }
}
