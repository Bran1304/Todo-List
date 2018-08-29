import React, { Component } from 'react';
import TodoItem from './todoItem';
import AddItemBtn from '../addItemBtn/addItemBtn';

export default class TodoItemsContainer extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  addNewItem = () => {
    const { items } = this.state;
    const newItem = {
      title: `New Todo Item ${items.length + 1}`,
      id: +new Date(),
    }
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        newItem,
      ],
    }));
  }

  removeItem = (id) => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id),
    }));
  }

  handleTitleChange = (e, id) => {
    const { items } = this.state;
    const updatedItems = [...items];
    updatedItems.map((item) => {
      if (item.id === id) {
        item.title = e.target.value
      }
      return true
    })
    this.setState({
      items: updatedItems,
    });
  }

  render = () => {
    const { items } = this.state;
    return (
      <section>
        <AddItemBtn addItem={this.addNewItem} />
        {items.map((item) => {
          return (
            <TodoItem
              title={item.title}
              key={item.id}
              id={item.id}
              removeItem={this.removeItem}
              onTitleChange={this.handleTitleChange}
            />
          )
        })}
      </section>
    )
  }
}

TodoItemsContainer.defaultProps = {}
TodoItemsContainer.propTypes = {}
