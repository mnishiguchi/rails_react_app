import React, { PropTypes }    from 'react';
import ReactDOM                from 'react-dom';
import Input                   from 'react-bootstrap/lib/Input';
import Row                     from 'react-bootstrap/lib/Row';
import Col                     from 'react-bootstrap/lib/Col';
import Nav                     from 'react-bootstrap/lib/Nav';
import NavItem                 from 'react-bootstrap/lib/NavItem';
import Alert                   from 'react-bootstrap/lib/Alert';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import _                       from 'lodash';

import BaseComponent from 'libs/components/BaseComponent';

const emptyComment    = { author: '', text: '' };
const textPlaceholder = 'Say something using markdown...';

export default class CommentForm extends BaseComponent {
  static propTypes = {
    isSaving: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    error: PropTypes.any,
    cssTransitionGroupClassNames: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      comment: emptyComment,
    };

    _.bindAll(this, [
      '_handleChange',
      '_handleSubmit',
      '_resetAndFocus',
    ]);
  }

  _handleChange() {
    let comment = {
        author: this.refs.author.getValue(),
        text:   this.refs.text.getValue(),
    };

    this.setState({ comment });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { actions } = this.props;
    actions
      .submitComment(this.state.comment)
      .then(this._resetAndFocus);
  }

  _resetAndFocus() {
    // Don't reset a form that didn't submit, this results in data loss
    if (this.props.error) return;

    const comment = { author: this.state.comment.author, text: '' };
    this.setState({ comment });

    let ref = this.refs.text.getInputDOMNode();
    ref.focus();
  }

  _formStacked() {
    return (
      <div>
        <hr />
        <form className="commentForm form" onSubmit={this._handleSubmit}>
          <Input
            type="text"
            label="Name"
            placeholder="Your Name"
            ref="author"
            value={this.state.comment.author}
            onChange={this._handleChange}
            disabled={this.props.isSaving}
          />
          <Input
            type="textarea"
            label="Text"
            placeholder={textPlaceholder}
            ref="text"
            value={this.state.comment.text}
            onChange={this._handleChange}
            disabled={this.props.isSaving}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value={this.props.isSaving ? 'Saving...' : 'Post'}
            disabled={this.props.isSaving}
          />
        </form>
      </div>
    );
  }

  _errorWarning() {
    // If there is no error, there is nothing to add to the DOM
    if (!this.props.error) return null;
    return (
      <Alert bsStyle="danger" key="commentSubmissionError">
        <strong>Your comment was not saved! </strong>
        A server error prevented your comment from being saved. Please try again.
      </Alert>
    );
  }

  render() {
    let inputForm = this._formStacked();

    const { cssTransitionGroupClassNames } = this.props;

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={cssTransitionGroupClassNames}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this._errorWarning()}
        </ReactCSSTransitionGroup>

        {inputForm}
      </div>
    );
  }
}
