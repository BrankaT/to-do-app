import React from 'react';
import '../App.css';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handlUpdateDone = (event) => {
    if (event.kay === 'Enter') {
      this.setState({ editing: false });
    }
  };

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        {/*ovo je kod koji se pravi pri upotrebi state i prps*/}
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={
              this.props.drugaPromjenljivaKOjojDodjeljujemoVrijednost.completed
            }
            onChange={() =>
              this.props.funkcijaZaMjenjanjeChackboxaProps(
                this.props.drugaPromjenljivaKOjojDodjeljujemoVrijednost.id
              )
            }
          />

          <button
            onClick={() =>
              this.props.deleteTodoProps(
                this.props.drugaPromjenljivaKOjojDodjeljujemoVrijednost.id
              )
            }
          >
            Delete
          </button>

          <span
            style={
              this.props.drugaPromjenljivaKOjojDodjeljujemoVrijednost.completed
                ? completedStyle
                : null
            }
          >
            {this.props.drugaPromjenljivaKOjojDodjeljujemoVrijednost.title}
          </span>
        </div>
        <input
          style={editMode}
          type="text"
          className={styles.textInput}
          value={this.props.drugaPromjenljivaKOjojDodjeljujemoVrijednost.title}
          onChange={(e) => {
            this.props.setUpdate(
              e.target.value,
              this.props.drugaPromjenljivaKOjojDodjeljujemoVrijednost.id
            );
          }}
          onKeyDown={this.handlUpdateDone}
        />
      </li>
    );
  }
}
export default TodoItem;
