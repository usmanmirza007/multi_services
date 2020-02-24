import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { Picker, } from 'react-native';

export default class demo extends React.Component {
  state = {
    visible: false,
  };

  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={this._hideModal}>
            <Text style={{ alignSelf: 'center', backgroundColor: '#82bc12', }}>Example Modal</Text>
          </Modal>
          <Picker style={{ height: '10%', }}
            onPress={this._showModal}
            selectedValue={this.state.type}
            onValueChange={(itemValue) =>
              this.setState({ type: itemValue })}>

            <Picker.Item label="Karachi" value="Karachi" />
            <Picker.Item label="Lahore" value="Lahore" />
          </Picker>
        </Portal>
      </Provider>
    );
  }
}