import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {
    render() {
        const { picture, first_name, last_name, email } = this.props.navigation.state.params;

        return (
            <ScrollView>
                <Tile
                    imageSrc={{ uri: picture.large }}
                    featured
                    title={`${first_name.toUpperCase()} ${last_name.toUpperCase()}`}
                    caption={email}
                />

                <List>
                    <ListItem
                        title="Email"
                        rightTitle={email}
                        hideChevron
                    />
                </List>
            </ScrollView>
        );
    }
}

export default UserDetail;