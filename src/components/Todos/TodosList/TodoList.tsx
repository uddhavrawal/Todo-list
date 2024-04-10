import { useContext } from 'react';
import React from 'react';
import styles from './TodoList.module.css';

import { TodosContext } from 'contexts/TodosContext';

import Todo from './Todo/Todo';

const TodoList: React.FC = (): JSX.Element | null => {
  const context = useContext(TodosContext);

  if (!context) return null;

  const { state } = context;

  return state && state.length > 0 ? (
    <ul className={styles.list}>
      {state.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </ul>
  ) : (
    <p className={styles.empty}>No tasks yet. Create one!</p>
  );
};

export default TodoList;
