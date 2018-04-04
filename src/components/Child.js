import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';


class Child extends Component {
    constructor(props) {
        super(props);
         console.log("Constructor", props);
    }

    render() {
        return (
            <View>
                <Text style = {styles.text} >{this.props.counter.counter}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log("state", state)
    return ({
        counter: state.counter
    })
};

export default connect(mapStateToProps, null)(Child);

const styles =StyleSheet.create({
    text: {
        fontSize: 100,
        color:'#000',
    }
});
