import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import { Container, Button } from './styles';

export default class Multipick extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
                selected: PropTypes.bool,
            })
        ).isRequired,
        searchAppearsAfterCount: PropTypes.number,
        searchPlaceholder: PropTypes.string,
        selectedText: PropTypes.string.isRequired,
        selectAllText: PropTypes.string.isRequired,
        selectNoneText: PropTypes.string.isRequired,
        noneSelectedText: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        searchAppearsAfterCount: 5,
        searchPlaceholder: 'Search…',
        selectedText: '$1 of $2 selected',
        noneSelectedText: 'None selected',
        selectAllText: 'Select all',
        selectNoneText: 'Select none',
    };

    state = {
        opened: false,
        searchValue: '',
    };

    generateButtonText = () => {
        const { data, selectedText, noneSelectedText } = this.props;
        const count = data.length;
        const selectedCount = data.filter(item => item.selected).length;
        if (selectedCount > 0) {
            return selectedText
                .replace('$1', selectedCount)
                .replace('$2', count);
        }
        return noneSelectedText;
    };

    handleToggle = () => {
        this.setState(prevState => ({ opened: !prevState.opened }));
    };

    handleSearchChange = searchValue => {
        this.setState({
            searchValue,
        });
    };

    filterData(data, searchValue) {
        if (searchValue !== '') {
            return data.filter(item => {
                return item.label
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });
        }
        return data;
    }

    renderDropdown = () => {
        if (this.state.opened) {
            return (
                <Dropdown
                    {...this.props}
                    filteredData={this.filterData(
                        this.props.data,
                        this.state.searchValue
                    )}
                    searchValue={this.state.searchValue}
                    onSearchChange={this.handleSearchChange}
                />
            );
        }
        return null;
    };

    render() {
        return (
            <Container>
                <Button type="button" onClick={this.handleToggle}>
                    {this.generateButtonText()}
                </Button>
                {this.renderDropdown()}
            </Container>
        );
    }
}
