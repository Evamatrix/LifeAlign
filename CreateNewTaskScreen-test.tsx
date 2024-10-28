import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CreateNewTaskScreen from '@/app/Screens/CreateNewTaskScreen';
import { TaskProvider } from '@/app/src/context/TaskContext';

describe('CreateNewTaskScreen', () => {
    it('matches snapshot', () => {
      const { toJSON } = render(
        <TaskProvider>
          <CreateNewTaskScreen />
        </TaskProvider>
      );
  
      // Create a snapshot of the CreateNewTaskScreen
      expect(toJSON()).toMatchSnapshot();
    });
  });