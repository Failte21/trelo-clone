import React, { Component } from 'react';
import '../stylesheets/main.scss';

sizeClass = {
    "LARGE": 'lg-input',
    "MEDIUM": 'md-input',
    "SMALL": 'sm-input',
}

class EditableText extends Component {

    state = {
        display: 'button',
        content: this.props.content
    };

    toggleDisplay = () => {
        const display = this.state.display === 'input' ? 'button' : 'input';
        this.setState({display});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.changeFn(this.state.content);
        this.setState({display: 'button'})
    }

    handleChange = e => {
        const content = e.target.value.trim();
        this.setState({content});
    }

    handleKeyDown = e => {
        if (e.key === 'Escape') {
            this.toggleDisplay();
        }
    }

    displayInput = () => (
        <form onSubmit={this.handleSubmit}>
            <input
                type={'text'}
                name={'content'}
                className={`editable ${sizeClass[this.props.size]} block`}
                onBlur={this.toggleDisplay}
                onKeyDown={this.handleKeyDown}
                defaultValue={this.state.content}
                onChange={this.handleChange}
                autoFocus={true}
            />
        </form>
    )

    displayButton = () => (
        <button
            className={`editable ${sizeClass[this.props.size]} block`}
            onClick={this.toggleDisplay}
        >
            {this.props.content}
        </button>
    )

    render() {
        return this.state.display === 'button' ? this.displayButton() : this.displayInput();
    };
}

export default EditableText;