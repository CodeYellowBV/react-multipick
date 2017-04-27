import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
};

var createClass = (function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();

var _extends =
    Object.assign ||
    function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

var inherits = function(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError(
            'Super expression must either be null or a function, not ' +
                typeof superClass
        );
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
        },
    });
    if (superClass)
        Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
};

var possibleConstructorReturn = function(self, call) {
    if (!self) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    }

    return call && (typeof call === 'object' || typeof call === 'function')
        ? call
        : self;
};

var taggedTemplateLiteral = function(strings, raw) {
    return Object.freeze(
        Object.defineProperties(strings, {
            raw: {
                value: Object.freeze(raw),
            },
        })
    );
};

var _templateObject = taggedTemplateLiteral(
    [
        '\n    width: 100%;\n    position: relative;\n    box-sizing: border-box;\n',
    ],
    [
        '\n    width: 100%;\n    position: relative;\n    box-sizing: border-box;\n',
    ]
);
var _templateObject2 = taggedTemplateLiteral(
    ['\n    width: 100%;\n    box-sizing: inherit;\n'],
    ['\n    width: 100%;\n    box-sizing: inherit;\n']
);
var _templateObject3 = taggedTemplateLiteral(
    [
        '\n    box-sizing: inherit;\n    position: absolute;\n    width: 100%;\n    background: #fff;\n    border: 1px solid #ccc;\n    padding: 10px;\n    margin-top: 10px;\n',
    ],
    [
        '\n    box-sizing: inherit;\n    position: absolute;\n    width: 100%;\n    background: #fff;\n    border: 1px solid #ccc;\n    padding: 10px;\n    margin-top: 10px;\n',
    ]
);
var _templateObject4 = taggedTemplateLiteral(
    [
        '\n    box-sizing: inherit;\n    width: 100%;\n    display: block;\n    cursor: pointer;\n    padding: 2px 10px;\n\n    &:hover {\n        background: #ddd;\n    }\n\n    ',
        '\n',
    ],
    [
        '\n    box-sizing: inherit;\n    width: 100%;\n    display: block;\n    cursor: pointer;\n    padding: 2px 10px;\n\n    &:hover {\n        background: #ddd;\n    }\n\n    ',
        '\n',
    ]
);
var _templateObject5 = taggedTemplateLiteral(
    [
        '\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n',
    ],
    [
        '\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n',
    ]
);
var _templateObject6 = taggedTemplateLiteral(['\n'], ['\n']);
var _templateObject7 = taggedTemplateLiteral(
    ['\n    height: 180px;\n    overflow-y: scroll;\n    margin: 0 -10px;\n'],
    ['\n    height: 180px;\n    overflow-y: scroll;\n    margin: 0 -10px;\n']
);
var _templateObject8 = taggedTemplateLiteral(
    ['\n    width: 100%;\n    margin-bottom: 10px;\n'],
    ['\n    width: 100%;\n    margin-bottom: 10px;\n']
);

var Container = styled.div(_templateObject);

var Button = styled.button(_templateObject2);

var Dropdown$1 = styled.div(_templateObject3);

var DropdownItem = styled.label(_templateObject4, function(props) {
    return props.checked && '\n        background: #f9f9f9;\n    ';
});

var DropdownActionBar = styled.div(_templateObject5);

var DropdownAction = styled.button(_templateObject6);

var DropdownList = styled.div(_templateObject7);

var DropdownSearch = styled.input(_templateObject8);

var MultipickDropdown = (function(_Component) {
    inherits(MultipickDropdown, _Component);

    function MultipickDropdown() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MultipickDropdown);

        for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
        ) {
            args[_key] = arguments[_key];
        }

        return (_ret = ((_temp = ((_this = possibleConstructorReturn(
            this,
            (_ref =
                MultipickDropdown.__proto__ ||
                Object.getPrototypeOf(MultipickDropdown)).call.apply(
                _ref,
                [this].concat(args)
            )
        )), _this)), (_this.handleItemChange = function(e) {
            var value = e.currentTarget.value;
            var checked = e.currentTarget.checked;
            var values = _this.props.values.slice();
            var valueIndex = values.indexOf(value);
            if (valueIndex >= 0) {
                if (!checked) {
                    values.splice(valueIndex, 1);
                }
            } else if (checked) {
                values.push(value);
            }
            _this.props.onChange(values);
        }), (_this.handleSearchChange = function(e) {
            _this.props.onSearchChange(e.currentTarget.value);
        }), (_this.selectAll = function() {
            _this.props.onChange(
                _this.props.data.map(function(item) {
                    return item.value;
                })
            );
        }), (_this.selectNone = function() {
            _this.props.onChange([]);
        }), (_this.renderItem = function(item) {
            var checked = _this.props.values.indexOf(item.value) >= 0;
            return React.createElement(
                DropdownItem,
                { key: item.value, checked: checked },
                React.createElement('input', {
                    type: 'checkbox',
                    checked: checked,
                    onChange: _this.handleItemChange,
                    value: item.value,
                }),
                item.label
            );
        }), (_this.renderSearch = function() {
            var _this$props = _this.props,
                searchValue = _this$props.searchValue,
                searchPlaceholder = _this$props.searchPlaceholder;

            return React.createElement(DropdownSearch, {
                type: 'search',
                autoFocus: true,
                value: searchValue,
                onChange: _this.handleSearchChange,
                placeholder: searchPlaceholder,
            });
        }), _temp)), possibleConstructorReturn(_this, _ret);
    }

    createClass(MultipickDropdown, [
        {
            key: 'render',
            value: function render() {
                var _props = this.props,
                    data = _props.data,
                    selectAllText = _props.selectAllText,
                    selectNoneText = _props.selectNoneText,
                    searchAppearsAfterCount = _props.searchAppearsAfterCount;

                return React.createElement(
                    Dropdown$1,
                    null,
                    data.length >= searchAppearsAfterCount
                        ? this.renderSearch()
                        : null,
                    React.createElement(
                        DropdownActionBar,
                        null,
                        React.createElement(
                            DropdownAction,
                            { onClick: this.selectAll },
                            selectAllText
                        ),
                        React.createElement(
                            DropdownAction,
                            { onClick: this.selectNone },
                            selectNoneText
                        )
                    ),
                    React.createElement(
                        DropdownList,
                        null,
                        this.props.filteredData.map(this.renderItem)
                    )
                );
            },
        },
    ]);
    return MultipickDropdown;
})(Component);

MultipickDropdown.propTypes = {
    data: PropTypes.array.isRequired,
    values: PropTypes.array.isRequired,
    filteredData: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    searchAppearsAfterCount: PropTypes.number.isRequired,
    searchValue: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    searchPlaceholder: PropTypes.string,
};
MultipickDropdown.defaultProps = {
    searchValue: '',
};

var Multipick = (function(_Component) {
    inherits(Multipick, _Component);

    function Multipick() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Multipick);

        for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
        ) {
            args[_key] = arguments[_key];
        }

        return (_ret = ((_temp = ((_this = possibleConstructorReturn(
            this,
            (_ref =
                Multipick.__proto__ ||
                Object.getPrototypeOf(Multipick)).call.apply(
                _ref,
                [this].concat(args)
            )
        )), _this)), (_this.state = {
            opened: false,
            searchValue: '',
        }), (_this.generateButtonText = function() {
            var _this$props = _this.props,
                data = _this$props.data,
                values = _this$props.values,
                selectedText = _this$props.selectedText,
                noneSelectedText = _this$props.noneSelectedText;

            if (values.length > 0) {
                return selectedText
                    .replace('$1', values.length)
                    .replace('$2', data.length);
            }
            return noneSelectedText;
        }), (_this.handleToggle = function() {
            _this.setState(function(prevState) {
                return { opened: !prevState.opened };
            });
        }), (_this.handleSearchChange = function(searchValue) {
            _this.setState({
                searchValue: searchValue,
            });
        }), (_this.renderDropdown = function() {
            if (_this.state.opened) {
                return React.createElement(
                    MultipickDropdown,
                    _extends({}, _this.props, {
                        filteredData: _this.filterData(
                            _this.props.data,
                            _this.state.searchValue
                        ),
                        searchValue: _this.state.searchValue,
                        onSearchChange: _this.handleSearchChange,
                    })
                );
            }
            return null;
        }), _temp)), possibleConstructorReturn(_this, _ret);
    }

    createClass(Multipick, [
        {
            key: 'filterData',
            value: function filterData(data, searchValue) {
                if (searchValue !== '') {
                    return data.filter(function(item) {
                        return (
                            item.label
                                .toLowerCase()
                                .indexOf(searchValue.toLowerCase()) >= 0
                        );
                    });
                }
                return data;
            },
        },
        {
            key: 'render',
            value: function render() {
                return React.createElement(
                    Container,
                    null,
                    React.createElement(
                        Button,
                        {
                            type: 'button',
                            onClick: this.handleToggle,
                            disabled: this.props.disabled,
                        },
                        this.generateButtonText()
                    ),
                    this.renderDropdown()
                );
            },
        },
    ]);
    return Multipick;
})(Component);

Multipick.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    searchAppearsAfterCount: PropTypes.number,
    searchPlaceholder: PropTypes.string,
    selectedText: PropTypes.string.isRequired,
    selectAllText: PropTypes.string.isRequired,
    selectNoneText: PropTypes.string.isRequired,
    noneSelectedText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};
Multipick.defaultProps = {
    values: [],
    disabled: false,
    searchAppearsAfterCount: 5,
    searchPlaceholder: 'Search…',
    selectedText: '$1 of $2 selected',
    noneSelectedText: 'None selected',
    selectAllText: 'Select all',
    selectNoneText: 'Select none',
};

export default Multipick;
