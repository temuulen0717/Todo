import React, { Component } from "react";
import Modal from "./Components/Modal";
import axios from 'axios';
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'

class App extends Component {

constructor(props) {
	super(props);
	
	this.state = {
	

	viewStatus: false,
	activeItem: {
		name: "",
		description: "",
    date: "",
		status: false
	},
	
	todoList: []
	};
}

componentDidMount() {
	this.refreshList();
}


refreshList = () => {
	axios 
	.get("http://localhost:8000/backend_api/todo/")
	.then(res => this.setState({ todoList: res.data }))
	.catch(err => console.log(err));
};

displayStatus = status => {
	if (status) {
	return this.setState({ viewStatus: true });
	}
	return this.setState({ viewStatus: false });
};

renderTabList = () => {
	return (
	<div className="my-5 tab-list" >
    <span
		onClick={() => this.displayStatus(false)}
		className={this.state.viewStatus ? "" : "active"}
		>
		Incompleted
		</span>
		<span
		onClick={() => this.displayStatus(true)}
		className={this.state.viewStatus ? "active" : ""}
		>
		Completed
			</span>
	</div>
	);
};

renderItems = () => {
	const { viewStatus } = this.state;
	const newItems = this.state.todoList.filter(
	(item) => item.status === viewStatus
	);
	return newItems.map((item) => (
	<li
		key={item.id}
		className="list-group-item d-flex justify-content-between align-items-center" id="list-group"
	>
		<span
		className={`todo-title mr-2 ${
			this.state.viewStatus ? "completed-todo" : ""
		}` }
		name={item.description}
		>
      
		{item.name} <tr></tr>
    {item.date}
		</span>
		<span> 
		<button
			onClick={() => this.editItem(item)}
			className="btn btn-secondary mr-2"
		>
			Edit
		</button>
		<button
			onClick={() => this.handleDelete(item)}
			className="btn btn-danger"
		>
			Delete
		</button>
		</span>
	</li>
	));
};

toggle = () => {
	this.setState({ modal: !this.state.modal });
};


handleSubmit = (item) => {
	this.toggle();
	alert("Амжилттай хадгаллаа");
  if (item.id) {
	axios
		.put(`http://localhost:8000/backend_api/todo/${item.id}/`, item)
		.then((res) => this.refreshList());
	return;
	}
	axios
	.post("http://localhost:8000/backend_api/todo/", item)
	.then((res) => this.refreshList());
};

handleDelete = (item) => {
  alert(JSON.stringify(item.name) + "- устгалаа" );
	axios
	.delete(`http://localhost:8000/backend_api/todo/${item.id}/`)
	.then((res) => this.refreshList());
};

createItem = () => {
	const item = { name: "", description: "", date: "" , status: false };
	this.setState({ activeItem: item, modal: !this.state.modal });
};

editItem = (item) => {
	this.setState({ activeItem: item, modal: !this.state.modal });
};

render() {
	return (
	<main className="content">
		<h2 className="text">
		Todo
		</h2>
    <button onClick={this.createItem} className="btn btn-info" id="btn">
      <AiFillPlusCircle className="Plus" />
				Add a task
		</button>
    {this.renderTabList()}

		<div className="row ">
		<div className="col-md-6 col-sm-10 mx-auto p-0">
			<div className="card p-3" id="card">
			</div>
			<ul className="list-group list-group-flush">
				{this.renderItems()}
			</ul>
		</div>
		</div>
		{this.state.modal ? (
		<Modal
			activeItem={this.state.activeItem}
			toggle={this.toggle}
			onSave={this.handleSubmit}
		/>
		) : null}
	</main>
	);
}
}
export default App;
