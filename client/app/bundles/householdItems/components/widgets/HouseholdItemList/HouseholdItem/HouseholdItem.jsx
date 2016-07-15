import React, { PropTypes } from 'react';
// import marked from 'marked';

// import css from './HouseholdItem.scss';

import BaseComponent from 'libs/components/BaseComponent';

export default class HouseholdItem extends BaseComponent {
  static propTypes = {
    name:        PropTypes.string.isRequired,
    volume:      PropTypes.number.isRequired,
    quantity:    PropTypes.number.isRequired,
    tag:         PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  render() {
    const { name, volume, quantity, tag, description } = this.props;

    // const rawMarkup = marked(text, { gfm: true, sanitize: true });

    return (
      <tr>
        <td>{name}</td>
        <td>{volume}</td>
        <td>{quantity}</td>
        <td>{tag}</td>
        <td>{description}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }
}
