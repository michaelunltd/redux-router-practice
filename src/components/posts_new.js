import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group" >
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder={ `Enter ${field.label} here` }
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        )
    }
}

function validate(values) {
    // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
    const errors = {};

    // if (values.title.length < 3) {
    //     errors.title = 'Title must be at least 3 characters';
    // }

    // Validate the input from 'values'
    if (!values.title) {
        errors.title = 'Enter a title that is at least 3 characters!';
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }

    if (!values.content) {
        errors.content = 'Enter some content please';
    }

    // If errors is empty, the form is fine to submit
    // If errors has any properties, redux forms assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);
