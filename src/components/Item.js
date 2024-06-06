import React, { Component } from 'react'
import Book from './Book'

export class Item extends Component {
  render() {
    return (
        <main>
            {this.props.items.map(el => (
              <Book onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
            ))}
      </main>
    )
  }
}

export default Item