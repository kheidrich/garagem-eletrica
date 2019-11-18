import React, { Component } from 'react';
import { Header } from './header';
import { Card, CardTitle, CardContent } from './materialize/card'
import { Row, Col, Section, Divider } from './materialize/grid';
import { TextInput, RadioButton, InputField, SaveButton, Select, SelectOption } from './materialize/form';

enum CashMovementType {
    Income = 'income',
    Expense = 'expense'
}

interface CashMovement {
    value: string;
    type: CashMovementType;
    description: string;
    details?: string;
}

type AppState = CashMovement

export default class App extends Component<{}, AppState> {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            type: CashMovementType.Income,
            description: ''
        };
    }

    public render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Row>
                        <Col s={5}>
                            <Card>
                                <CardContent>
                                    <CardTitle center={true}>Adicionar movimento</CardTitle>
                                    <form
                                        noValidate
                                        onSubmit={(event) => {
                                            console.log((event.currentTarget.elements));
                                            // debugger;
                                            event.preventDefault();
                                        }}
                                    >
                                        <Row>
                                            <Col s={12}>
                                                <InputField>
                                                    <RadioButton
                                                        group="cash-movement-type"
                                                        value="income"
                                                        label="Entrada"
                                                        checked
                                                        onCheck={(type: CashMovementType) => this.setState({ type })}
                                                    />
                                                    <RadioButton
                                                        group="cash-movement-type"
                                                        value="expense"
                                                        label="Saida"
                                                        onCheck={(type: CashMovementType) => this.setState({ type })}
                                                    />
                                                </InputField>
                                            </Col>
                                            <Col s={12}>
                                                <InputField>
                                                    <TextInput
                                                        name="valor"
                                                        label="Valor"
                                                        value={this.state.value}
                                                        required
                                                        type="number"
                                                        step={0.1}
                                                        min={0.0}
                                                        icon="attach_money"
                                                        onChange={(value) => this.setState({ value })}
                                                    />
                                                </InputField>
                                            </Col>
                                            <Col s={12}>
                                                <InputField>
                                                    <TextInput
                                                        name="description"
                                                        label="Descrição"
                                                        type="text"
                                                        icon="edit"
                                                        maxLength={20}
                                                        value={this.state.description}
                                                        onChange={(description) => this.setState({ description })}
                                                    />
                                                </InputField>
                                            </Col>
                                            <Col s={12}>
                                                <InputField>
                                                    <TextInput
                                                        name="details"
                                                        label="Detalhes"
                                                        type="text"
                                                        icon="assignment"
                                                        value={this.state.details}
                                                        onChange={(details) => this.setState({ details })}
                                                    />
                                                </InputField>
                                            </Col>
                                            <Col s={12}>
                                                <Select
                                                    name="teste"
                                                >
                                                    <SelectOption
                                                        value="teste"
                                                        label="dois"
                                                    />
                                                </Select>
                                            </Col>
                                            <Col s={12}>
                                                <div className="right">
                                                    <SaveButton />
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col s={7}>
                            <Card>
                                <CardContent>
                                    <CardTitle center={true}>Movimentos do dia</CardTitle>
                                    <Divider />
                                    <Row>
                                        <Col s={6}>
                                            <Section>
                                                <h5 className="center green-text">Entrada</h5>
                                            </Section>
                                        </Col>
                                        <Col s={6}>
                                            <Section>
                                                <h5 className="center red-text">Saída</h5>
                                            </Section>
                                        </Col>
                                    </Row>
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}