import React from 'react';
import { TodoTextInput } from '../TodoTextInput';
import { TodoActions } from 'app/actions/todos';

export namespace TodoHeader {
  export interface Props {
    addTodo: typeof TodoActions.addTodo;
  }
}

export const TodoHeader = ({ addTodo }: TodoHeader.Props): JSX.Element => {
  const handleSave = React.useCallback(
    (text: string) => {
      if (text.length) addTodo({ text });
    },
    [addTodo]
  );

  return (
    <header>
      <h1>Todos</h1>
      <TodoTextInput newTodo onSave={handleSave} placeholder="What needs to be done?" />
    </header>
  );
};
