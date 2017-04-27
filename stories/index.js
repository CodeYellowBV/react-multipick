import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Multipick from '../src';
import CenterDecorator from './CenterDecorator';

const SOME_DATA = [
    {
        value: '1',
        label: 'Dinosaurus',
    },
    {
        value: '2',
        label: 'Butterflies',
    },
    {
        value: '3',
        label: 'Giraffes',
    },
];

const MORE_DATA = [
    ...SOME_DATA,
    {
        value: '4',
        label: 'Roger',
    },
    {
        value: '5',
        label: 'Monkeys',
    },
];

storiesOf('Multipick', module)
    .addDecorator(CenterDecorator)
    .add('with some selections', () => {
        class MyComponent extends Component {
            state = {
                values: ['1', '3'],
            };

            handleChange = values => {
                this.setState({ values });
                action('change');
            };

            render() {
                return (
                    <Multipick
                        data={SOME_DATA}
                        values={this.state.values}
                        onChange={this.handleChange}
                    />
                );
            }
        }
        return <MyComponent />;
    })
    .add('without any selections', () => {
        class MyComponent extends Component {
            state = {
                values: [],
            };

            handleChange = values => {
                this.setState({ values });
                action('change');
            };

            render() {
                return (
                    <Multipick
                        data={SOME_DATA}
                        values={this.state.values}
                        onChange={this.handleChange}
                    />
                );
            }
        }
        return <MyComponent />;
    })
    .add('with searchbar', () => {
        class MyComponent extends Component {
            state = {
                values: [],
            };

            handleChange = values => {
                this.setState({ values });
                action('change');
            };

            render() {
                return (
                    <Multipick
                        data={MORE_DATA}
                        values={this.state.values}
                        searchAppearsAfterCount={5}
                        onChange={this.handleChange}
                    />
                );
            }
        }
        return <MyComponent />;
    });
