import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DragDropContext} from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';
import '@atlaskit/css-reset';

import styled from 'styled-components';
//example of the result object

//ondragend
const result = {
  draggableId: 'task-1',
  type: 'TYPE',
  reason: 'DROP',
  source: {
    draggableId: 'column-1',
    index: 0,
  },
  destination: {
    draggableId: 'column-1',
    index: 1,
  },
};

//ondragstart
const start = {
  draggableId: 'task-1',
  type: 'TYPE',
  source: {
    droppableId: 'column-1',
    index: 0,
  },
};

//ondragupdate
const update = {
  ...start,
  destination: {
    droppableId: 'column-1',
    index: 1,
  },
};

const Container = styled.div`
  display: flex;
`;

class App extends React.Component {
  state = initialData;

  onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  };

  onDragUpdate = update => {
    const {destination} = update;
    const opacity = destination
      ? destination.index / Object.keys (this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  onDragEnd = result => {
    document.body.style.color = 'black';
    const {destination, source, draggableId} = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = this.state.columns[source.droppableId]; //source column
    const finish = this.state.columns[destination.droppableId];

    if (finish.id === 'column-0') {
      return;
    }

    if (start === finish) {
      const newTaskIds = Array.from (start.taskIds);
      newTaskIds.splice (source.index, 1);
      newTaskIds.splice (destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
      this.setState (newState);
    } else {
      const startTasksIds = Array.from (start.taskIds);
      startTasksIds.splice (source.index, 1);
      const startColumn = {
        ...start,
        taskIds: startTasksIds,
      };

      const finishTasksIds = Array.from (finish.taskIds);
      finishTasksIds.splice (destination.index, 0, draggableId);
      const finishColumn = {
        ...finish,
        taskIds: finishTasksIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [startColumn.id]: startColumn,
          [finishColumn.id]: finishColumn,
        },
      };
      this.setState (newState);
    }
  };

  render () {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDragUpdate={this.onDragUpdate}
      >
        <Column
          column={this.state.columns['column-0']}
          tasks={this.state.columns['column-0'].taskIds.map (
            taskId => this.state.tasks[taskId]
          )}
        />
        <Container>
          {this.state.columnOrder.map (columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map (
              taskId => this.state.tasks[taskId]
            );
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Container>

      </DragDropContext>
    );
  }
}

export default App;
