import React, {Component} from 'react';
import { Icon } from 'expo';

class TabBarIcon extends Component {
    render() {
        return (
            <Icon.Ionicons
                name={this.props.name}
                size={26}
                color={this.props.color}
            />
        );
    }
}

export default TabBarIcon;