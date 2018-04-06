import React from 'react';
import Header from './app/header';
import { Card, CardAction, CardContent, CardTitle } from './elements/card';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container">
                    <Card color="white">
                        <CardContent>
                            <h1>Ihaaaaaa</h1>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default App;