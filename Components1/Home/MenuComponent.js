import { FlatList, } from 'react-native'
import React, { PureComponent } from 'react'

export default class MenuComponent extends PureComponent {
  render() {
    return (
      <FlatList  data={this.props.data}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={this.props.renderItem}
      />
    )
  }
}