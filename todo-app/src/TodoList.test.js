import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders without crashing', () => {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});


function addTask(todoList, task = "meh") {
    const taskInput = todoList.getByLabelText("New Task:");
    fireEvent.change(taskInput, { target: { value: task } });
    const button = todoList.getByText("Add a new task!");
    fireEvent.click(button);
};

it("can remove a task", function() {
    const todoList = render(<TodoList />);
    addTask(todoList);
  
    const removeButton = todoList.getByText("X");
  
    // click the remove button and the task should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});

it("can add a new task", function() {
    const todoList = render(<TodoList />);
  
    // no tasks yet
    expect(todoList.queryByText("X")).not.toBeInTheDocument();
    
    // add task
    addTask(todoList);
  
    // expect to see a task
    const removeButton = todoList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toBeInTheDocument();

    // expect form to be empty
    expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
  });
  
  
  