import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';


export default class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        validate: {
            emailState: '',
            firstNameState: '',
            lastNameState: '',
            phoneState: '',
            passwordState: ''

        },
    }
    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }
    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.email}`)
    }
    validateForm() {
        return this.state.validate.emailState === 'has-success'
            && this.state.validate.firstNameState === 'has-success'
            && this.state.validate.lastNameState === 'has-success'
            && this.state.validate.phoneState === 'has-success'
            && this.state.password.passwordState === 'has-success';
    }
    emailValRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    firstNameLastNameRex = /^[a-zA-Zа-яА-Я]{2,10}$/;
    // telRex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    telRex = /^[0-9]{1,9}$/;
    passwordRex = /^.{1,5}$/;
    validateFild(e, fieldRex, nameState) {
        const { validate } = this.state
        if (fieldRex.test(e.target.value)) {
            validate[nameState] = 'has-success'
        } else {
            validate[nameState] = 'has-danger'
        }
        this.setState({ validate })
    }


    render() {
        const { email, password, firstName, lastName, phone } = this.state;
        return (
            <Container >
                <h2>Sign UP</h2>
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="fname"
                                placeholder="Enter name"
                                value={firstName}
                                valid={this.state.validate.firstNameState === 'has-success'}
                                invalid={this.state.validate.firstNameState === 'has-danger'}
                                onChange={(e) => {
                                    this.validateFild(e, this.firstNameLastNameRex, 'firstNameState')
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback valid>
                                Good name.
                            </FormFeedback>
                            <FormFeedback>
                                Firstname must contain only letter and more then two letter
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Enter name"
                                value={lastName}
                                valid={this.state.validate.lastNameState === 'has-success'}
                                invalid={this.state.validate.lastNameState === 'has-danger'}
                                onChange={(e) => {
                                    this.validateFild(e, this.firstNameLastNameRex, 'lastNameState')
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback valid>
                                Good lastname.
                            </FormFeedback>
                            <FormFeedback>
                                Lastname must contain only letter and more then two letter
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                value={email}
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'}
                                onChange={(e) => {
                                    this.validateFild(e, this.emailValRex, 'emailState')
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback valid>
                                Good email.
                            </FormFeedback>
                            <FormFeedback>
                                Please input a correct email.
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={password}
                                valid={this.state.validate.passwordState === 'has-success'}
                                invalid={this.state.validate.passwordState === 'has-danger'}
                                onChange={(e) => {
                                    this.validateFild(e, this.passwordRex, 'passwordState')
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback valid>
                                Good password.
                            </FormFeedback>
                            <FormFeedback>
                                Please input a correct password.
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Phone</Label>
                            <Input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter name"
                                value={phone}
                                valid={this.state.validate.phoneState === 'has-success'}
                                invalid={this.state.validate.phoneState === 'has-danger'}
                                onChange={(e) => {
                                    this.validateFild(e, this.telRex, 'phoneState')
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback valid>
                                Good tel.
                            </FormFeedback>
                            <FormFeedback>
                                Please input a correct phone number.
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Button
                        color="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Sing Up
                    </Button>
                    <Link to="/login" className="btn btn-link">Login</Link>
                </Form>
            </Container>
        );
    }

};
