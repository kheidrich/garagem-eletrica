import React from 'react';
import Header from './app/header';
import { Card, CardAction, CardContent, CardTitle } from './elements/card';
import { Row, Col, Section, Divider } from './elements/layout';
import { TextInput, Select, RadioGroup, InputField } from './elements/form';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header ></Header>
                <div className="container">
                    <Row>
                        <Col s="5">
                            <Card color="white">
                                <CardContent>
                                    <CardTitle center={true}>Adicionar Movimento</CardTitle>
                                    <form>
                                        <Row>
                                            <Col s="12">
                                                <InputField>
                                                    <RadioGroup
                                                        name="tipo"
                                                        options={[
                                                            { text: 'Entrada', value: 'entrada' },
                                                            { text: 'Saida', value: 'saida' }
                                                        ]}
                                                        optionsPerLine={2}>
                                                    </RadioGroup>
                                                </InputField>
                                            </Col>
                                            <Col s="12">
                                                <InputField>
                                                    <TextInput name="valor"
                                                        label="Valor"
                                                        type="number"
                                                        step={0.01}
                                                        min={0.01}
                                                        icon="attach_money"
                                                        value={this.state.valor}
                                                        onChange={(value) => this.setState({ value })}>
                                                    </TextInput>
                                                </InputField>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col s="7">
                            <Card color="white">
                                <CardContent>
                                    <CardTitle center={true}>Movimentos do dia</CardTitle>
                                    <Divider />
                                    <Row>
                                        <Col s="6">
                                            <Section>
                                                <h5 className="center green-text">Entrada</h5>
                                            </Section>
                                        </Col>
                                        <Col s="6">
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