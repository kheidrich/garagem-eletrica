import React, { Component } from 'react';
import Header from './header';
import { Card, CardTitle, CardContent } from './materialize/card'
import { Row, Col, Section, Divider } from './materialize/grid';
import { TextInput, RadioGroup, InputField } from './materialize/form';
import { BackgroundColor } from './materialize/color';

export default class App extends Component {
    public state: { valor: string };

    constructor(props) {
        super(props);
        this.state = {
            valor: ''
        };
    }

    public render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Row>
                        <Col s={5}>
                            <Card backgroundColor={{ color: BackgroundColor.White }}>
                                <CardContent>
                                    <CardTitle center={true}>Adicionar Movimento</CardTitle>
                                    <form>
                                        <Row>
                                            <Col s={12}>
                                                <InputField>
                                                    <RadioGroup
                                                        name="tipo"
                                                        options={[
                                                            { label: 'Entrada', value: 'entrada' },
                                                            { label: 'Saida', value: 'saida' }
                                                        ]}
                                                        initiallyCheckedOption="entrada"
                                                        optionsPerLine={2}
                                                    />
                                                </InputField>
                                            </Col>
                                            <Col s={12}>
                                                <InputField>
                                                    <TextInput
                                                        name="valor"
                                                        label="Valor"
                                                        type="number"
                                                        step={0.01}
                                                        min={0.01}
                                                        icon="attach_money"
                                                        value={this.state.valor}
                                                        onChange={(value) => this.setState({ value })}
                                                    />
                                                </InputField>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col s={7}>
                            <Card backgroundColor={{ color: BackgroundColor.White }}>
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