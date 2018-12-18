/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class AddTodoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      text: ""
    };
  }

  createNewTodo = () => {
    const { addTodo, onCloseModal } = this.props;
    addTodo({ id: new Date().getMilliseconds(), ...this.state });
    onCloseModal();
  };

  HandleOnChange = event => {
    const { value } = event.target;
    this.setState(prev => ({
      ...prev,
      text: value
    }));
  };

  isDisabled = () => {
    const { text } = this.state;
    return !text.trim().length > 0;
  };

  render() {
    const { onCloseModal, showModal } = this.props;
    return (
      <Modal isOpen={showModal} toggle={onCloseModal}>
        <ModalHeader toggle={onCloseModal}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="todoItem">Todo</Label>
              <Input
                type="text"
                name="text"
                id="todoItem"
                placeholder="write todo"
                onChange={this.HandleOnChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={this.createNewTodo}
            disabled={this.isDisabled()}
          >
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={onCloseModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
