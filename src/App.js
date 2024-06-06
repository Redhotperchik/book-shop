import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Item from "./components/Item";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Atomic habits',
          img: 'atomic-habits.jpg',
          desc: '"Atomic Habits" is about habits: how to form good ones, how to break bad ones -- and how to put yourself on the path to the good ones in as little as two minutes a day (via "The Two-Minute Rule").',
          category: 'psychology',
          price: '12.54'
        },
        {
          id: 2,
          title: 'The Four Agreements',
          img: 'the-four-agreements.jpg',
          desc: 'Championed by Ellen DeGeneres and Oprah Winfrey, "The Four Agreements" went from obscurity to overnight success some 20 years ago.',
          category: 'science fiction',
          price: '6.86'
        },
        {
          id: 3,
          title: 'The Body Keeps the Score',
          img: 'the-body-keeps-the-score.jpg',
          desc: 'A bestseller upon its release in 2014, "During the pandemic," the Atlantic observed in October, the title "seems more in demand than ever."',
          category: 'historical fiction',
          price: '11.68'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory} />
      <Item onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
      
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
  );
}
  
  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
  })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

 

export default App;
