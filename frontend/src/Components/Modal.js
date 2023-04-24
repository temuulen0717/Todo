import React, { Component } from "react";
import "./modal.css"

import {
Button,
Modal,
ModalHeader,
ModalBody,
ModalFooter,
Form,
FormGroup,
Input,
Label
} from "reactstrap";

class CustomModal extends Component {
constructor(props) {
	super(props);
	this.state = {
	activeItem: this.props.activeItem
	};
}
handleChange = e => {
	let { name, value } = e.target;
	if (e.target.type === "checkbox") {
	value = e.target.checked;
	}
	const activeItem = { ...this.state.activeItem, [name]: value };
	this.setState({ activeItem });
};

render() {
	const { toggle, onSave } = this.props;
	return (
	<Modal isOpen={true} toggle={toggle}>
		<ModalHeader toggle={toggle}> Add Task </ModalHeader>
		<ModalBody>
		
		<Form>
			{/* 3 formgroups
			1 name label */}
			<FormGroup>
			<Label for="name">Name</Label>
			<Input
				type="text"
				name="name"
				value={this.state.activeItem.name}
				onChange={this.handleChange}
				placeholder="Name"
			/>
			</FormGroup>

			{/* 2 description label */}
			<FormGroup>
			<Label for="description">Description</Label>
			<Input
				type="text"
				name="description"
				value={this.state.activeItem.description}
				onChange={this.handleChange}
				placeholder="Description"
			/>
			</FormGroup>

            <FormGroup date>
			<Label for="date">Date</Label>
			<Input
				type="date"
				name="date"
				value={this.state.activeItem.date}
				onChange={this.handleChange}
			/>
			</FormGroup>

			{/* 1 completed label */}
			<FormGroup check>
			<Label for="status">
				<Input
				type="checkbox"
				name="status"
				checked={this.state.activeItem.status}
				onChange={this.handleChange}
				/>
				Completed
			</Label>
			</FormGroup>
		</Form>
		</ModalBody>
		{/* create a modal footer */}
		<ModalFooter>
		<Button color="success" onClick={() => onSave(this.state.activeItem)}>
			Save
		</Button>
		</ModalFooter>
	</Modal>
	);
}
}
export default CustomModal
