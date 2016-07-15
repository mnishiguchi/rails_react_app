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

const emptyItem = { name: '', volume: 0, quantity: 1, tag: '', description: '' };

export default class CommentForm extends BaseComponent {
  static propTypes = {
    isSaving: PropTypes.bool.isRequired,
    actions:  PropTypes.object.isRequired,
    error:    PropTypes.any,
    cssTransitionGroupClassNames: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      householdItem: emptyItem,
    };

    _.bindAll(this, [
      '_handleChange',
      '_handleSubmit',
      '_resetAndFocus',
    ]);
  }

  _handleChange() {
    let householdItem = {
        name:        this.refs.name.getValue(),
        volume:      this.refs.volume.getValue(),
        quantity:    this.refs.quantity.getValue(),
        tag:         this.refs.tag.getValue(),
        description: this.refs.description.getValue(),
    };

    this.setState({ householdItem });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { actions } = this.props;
    actions
      .submitItem(this.state.householdItem)
      .then(this._resetAndFocus);
  }

  _resetAndFocus() {
    // Don't reset a form that didn't submit, this results in data loss
    if (this.props.error) return;

    const householdItem = { author: this.state.householdItem.author, text: '' };
    this.setState({ householdItem });

    let ref = this.refs.text.getInputDOMNode();
    ref.focus();
  }

  _formStacked() {
    return (
      <div>
        <hr />
        <form className="householdItemForm form" onSubmit={this._handleSubmit}>
          <Input
            type="text"
            label="name"
            placeholder="name"
            ref="name"
            value={this.state.householdItem.name}
            onChange={this._handleChange}
            disabled={this.props.isSaving}
          />
          <Input
            type="number"
            label="volume"
            placeholder="volume"
            ref="volume"
            value={this.state.householdItem.volume}
            onChange={this._handleChange}
            disabled={this.props.isSaving}
          />
          <Input
            type="number"
            label="quantity"
            placeholder="quantity"
            ref="quantity"
            value={this.state.householdItem.quantity}
            onChange={this._handleChange}
            disabled={this.props.isSaving}
          />
          <Input
            type="text"
            label="tag"
            placeholder="tag"
            ref="tag"
            value={this.state.householdItem.tag}
            onChange={this._handleChange}
            disabled={this.props.isSaving}
          />
          <Input
            type="textarea"
            label="description"
            ref="description"
            value={this.state.householdItem.description}
            onChange={this._handleChange}
            disabled={this.props.isSaving}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value={this.props.isSaving ? 'Saving...' : 'Add item'}
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
      <Alert bsStyle="danger" key="householdItemSubmissionError">
        <strong>Your householdItem was not saved! </strong>
        A server error prevented your householdItem from being saved. Please try again.
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
