import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
// import ShowText from './components/ShowText';
import Child from './components/Child';
import ButtonComp from './components/Button';
import * as indexActions from './actions/index';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Main extends Component {

    render() {
        var counter = this.props.counter.counter;
        return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}
            >
            {console.log(this.props)}
                <View style={{
                    flex: 1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Child/>
                </View>
                <View style = {{flex:1}}>
                    <ButtonComp
                        title="Increase"
                        textColor="#000"
                        bgColor="#397af8"
                        onPress={()=> {this.props.indexActions.counterIncrease(counter)}}/>
                    <ButtonComp
                        title="Decrease"
                        bgColor="orange"
                        onPress={()=>{this.props.actions.counterDecrease(counter)}}/>
                </View>

            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}

const mapDispatchToProps = (dispatch) =>{
 
 console.log(dispatch);
   return {
    indexActions:bindActionCreators(indexActions, dispatch)
      }
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    }
})