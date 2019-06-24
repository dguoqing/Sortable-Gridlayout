import React, {Component} from 'react';
import {render} from 'react-dom';

import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';


import arrayMove from 'array-move';
import GridLayout from './GridLayout'

const DragHandle = SortableHandle(() => <span className='DragHandle'>:拖拽这里移动:</span>);

const SortableItem = SortableElement(({value,index}) => <li>
<DragHandle /> 
index : {index} / value: {value}
<GridLayout layoutsName={value} layoutsIndex={index}/>
</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} useDragHandle hideSortableGhost = {false} />;
  }
}


export default SortableComponent;
