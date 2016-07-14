import React     from 'react';
import Immutable from 'immutable';
import request   from 'axios';
import _         from 'lodash';

import metaTagsManager from 'libs/metaTagsManager';

// Child components.
import HouseholdItemsForm     from '../HouseholdItemsBox/HouseholdItemsForm/HouseholdItemsForm';
import HouseholdItemsList     from '../HouseholdItemsBox/HouseholdItemsList/HouseholdItemsList';

// CSS for this component.
import css             from './HouseholdItems.scss';

import BaseComponent   from 'libs/components/BaseComponent';

export default class HouseholdItems extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      $$comments:         Immutable.fromJS([]),
      isSaving:           false,
      fetchCommentsError: null,
      submitCommentError: null,
    };

    _.bindAll(this, '_fetchComments', '_handleCommentSubmit');
  }

  componentDidMount() {
    this._fetchComments();
  }

  // Make a GET request to our Rails server.
  _fetchComments() {
    return (
      request
        .get('comments.json', { responseType: 'json' })
        .then(res =>
          this.setState({ $$comments: Immutable.fromJS(res.data.comments) }))
        .catch(error =>
          this.setState({ fetchCommentsError: error }))
    );
  }

  // Make a POST request to our Rails server.
  _handleCommentSubmit(comment) {
    this.setState({ isSaving: true });

    const requestConfig = {
      responseType: 'json',
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      },
    };

    return (
      request
        .post('comments.json', { comment }, requestConfig)
        .then(() => {
          const { $$comments } = this.state;
          const $$comment      = Immutable.fromJS(comment);

          this.setState({
            $$comments: $$comments.unshift($$comment),
            isSaving:   false,
          });
        })
        .catch(error => {
          this.setState({
            submitCommentError: error,
            isSaving: false,
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
      <div className="commentBox container">
        <h2>Comments</h2>
        <p>
          Text take Github Flavored Markdown. Comments older than 24 hours are deleted.<br />
          <b>Name</b> is preserved. <b>Text</b> is reset, between submits.
        </p>
        <HouseholdItemsForm
          isSaving={this.state.isSaving}
          actions={{ submitComment: this._handleCommentSubmit }}
          error={this.state.submitCommentError}
          cssTransitionGroupClassNames={cssTransitionGroupClassNames}
        />
        <HouseholdItemsList
          $$comments={this.state.$$comments}
          error={this.state.fetchCommentsError}
          cssTransitionGroupClassNames={cssTransitionGroupClassNames}
        />
      </div>
    );
  }
}
