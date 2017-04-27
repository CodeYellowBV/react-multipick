import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Dropdown,
    DropdownList,
    DropdownItem,
    DropdownActionBar,
    DropdownAction,
    DropdownSearch,
} from './styles';

export default class MultipickDropdown extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        filteredData: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        searchAppearsAfterCount: PropTypes.number.isRequired,
        searchValue: PropTypes.string.isRequired,
        onSearchChange: PropTypes.func.isRequired,
        searchPlaceholder: PropTypes.string,
    };

    static defaultProps = {
        searchValue: '',
    };

    handleItemChange = e => {
        const value = e.currentTarget.value;
        const checked = e.currentTarget.checked;
        const data = this.props.data.slice();
        const item = data.find(item => item.value === value);
        // TODO: I still mutate the object here I think?
        item.selected = checked;

        this.props.onChange(data);
    };

    handleSearchChange = e => {
        this.props.onSearchChange(e.currentTarget.value);
    };

    selectAll = () => {
        this._batchChangeSelected(true);
    };

    selectNone = () => {
        this._batchChangeSelected(false);
    };

    _batchChangeSelected = selected => {
        const data = this.props.data.map(item => {
            return {
                value: item.value,
                label: item.label,
                selected,
            };
        });
        this.props.onChange(data);
    };

    renderItem = item => {
        const checked = item.selected || false;
        return (
            <DropdownItem key={item.value} checked={checked}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={this.handleItemChange}
                    value={item.value}
                />
                {item.label}
            </DropdownItem>
        );
    };

    renderSearch = () => {
        const { searchValue, searchPlaceholder } = this.props;
        return (
            <DropdownSearch
                type="search"
                autoFocus
                value={searchValue}
                onChange={this.handleSearchChange}
                placeholder={searchPlaceholder}
            />
        );
    };

    render() {
        const {
            data,
            selectAllText,
            selectNoneText,
            searchAppearsAfterCount,
        } = this.props;
        return (
            <Dropdown>
                {data.length >= searchAppearsAfterCount
                    ? this.renderSearch()
                    : null}
                <DropdownActionBar>
                    <DropdownAction onClick={this.selectAll}>
                        {selectAllText}
                    </DropdownAction>
                    <DropdownAction onClick={this.selectNone}>
                        {selectNoneText}
                    </DropdownAction>
                </DropdownActionBar>
                <DropdownList>
                    {this.props.filteredData.map(this.renderItem)}
                </DropdownList>
            </Dropdown>
        );
    }
}
