import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Multipick from '../src';
import CenterDecorator from './CenterDecorator';

storiesOf('Multipick', module)
    .addDecorator(CenterDecorator)
    .add('with some selections', () => {
        const DATA = [
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
        return (
            <Multipick
                data={DATA}
                values={['1', '3']}
                onChange={action('change')}
            />
        );
    })
    .add('without any selections', () => {
        const DATA = [
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
        return <Multipick data={DATA} onChange={action('change')} />;
    })
    .add('with searchbar', () => {
        const DATA = [
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
            {
                value: '4',
                label: 'Roger',
            },
            {
                value: '5',
                label: 'Monkeys',
            },
        ];
        return (
            <Multipick
                data={DATA}
                onChange={action('change')}
                searchAppearsAfterCount={5}
            />
        );
    });
