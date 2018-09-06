import React from 'react';
import { View, FlatList, Text, ScrollView, TouchableHighlight } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [], gender: 'all', visible: false };
    }

    setList(){
        let datafromLastScreen = this.props.navigation.state.params.data
        let movieCharArr= datafromLastScreen.characters;
        let listArr=[];
        this.setState({visible:true})
        movieCharArr.map((charApi)=>{
            //console.log('charApi ******** ',charApi)
            fetch(charApi, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                return response.json()
            })
            .then(responseText => {
                listArr.push(responseText);
                this.setState({list: listArr})
                setTimeout(() => {
                    this.setState({visible:false})
                }, 2000); 
            })
            .catch(err => console.warn("DidErr: ", err))
        })
        
    }

    componentWillMount() {
        this.setList();
    }

    render() {
        let apiDataCheck = this.props.navigation.state.params.data.characters;
        let maleCount = this.state.list.filter((data)=>{return data.gender === 'male'}).length,
            femaleCount = this.state.list.filter((data)=>{return data.gender === 'female'}).length;
        return(
            <View style={{flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                <Spinner visible={this.state.visible} />
                {this.state.list.length > 0 && (this.state.list.length === apiDataCheck.length) ?
                    <View>
                        <Text style={{color: 'white'}}>Characters</Text> 
                        <View style={{flexDirection: 'row'}}>
                            <TouchableHighlight style={{borderWidth: 1, borderColor:this.state.gender == 'male'? 'yellow': 'white', fontWeight: '600', width: 80, alignItems: 'center', justifyContent: 'center'}} 
                                onPress={()=> this.setState({gender: 'all'})}>
                                <Text style={{color: this.state.gender == 'all'? 'yellow': 'white', padding: 10}}>ALL</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{borderWidth: 1, borderColor:this.state.gender == 'male'? 'yellow': 'white', fontWeight: '600', width: 80, alignItems: 'center', justifyContent: 'center'}} 
                                onPress={()=> this.setState({gender: 'male'})}>
                                <Text style={{color: this.state.gender == 'male'? 'yellow': 'white', padding: 10}}>MALE</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{borderWidth: 1, borderColor:this.state.gender == 'female'? 'yellow': 'white', fontWeight: '600', width: 80, alignItems: 'center', justifyContent: 'center'}}
                                onPress={()=> this.setState({gender: 'female'})}>
                                <Text style={{color:this.state.gender == 'female'? 'yellow': 'white' , padding: 10}}>FEMALE</Text>
                            </TouchableHighlight>
                        </View>
                        <ScrollView>
                        {this.state.list.map((data)=>{
                            //console.log('log for list ******* ',Object.keys(data.gender).length);
                            if(this.state.gender  == data.gender) {
                                return(
                                    <TouchableHighlight>
                                        <Text style={{fontSize: 16,fontWeight: "300", padding: 10, color: 'yellow'}}>{data.name}</Text>
                                    </TouchableHighlight>
                                   
                                
                                )
                            } else if (this.state.gender == 'all'){
                                return (
                                    <TouchableHighlight>
                                        <Text style={{fontSize: 16,fontWeight: "300", padding: 10, color: 'yellow'}}>{data.name}</Text>
                                    </TouchableHighlight>
                                )
                            }
                            
                            
                        })}
                        {this.state.gender == 'male' && 
                            <Text style={{fontSize: 22,fontWeight: "500", padding: 15, color: 'yellow'}}>{'Total characters: ' + maleCount}</Text>
                        }
                        {this.state.gender == 'female' && 
                            <Text style={{fontSize: 22,fontWeight: "500", padding: 15, color: 'yellow'}}>{'Total characters: ' + femaleCount}</Text>
                        }
                        {this.state.gender == 'all' && 
                            <Text style={{fontSize: 22,fontWeight: "500", padding: 15, color: 'yellow'}}>{'Total characters: ' +this.state.list.length}</Text>
                        }
                         </ScrollView>
                    </View> : 
                    <View>
                        <Text>No list</Text>
                    </View>
                }
            </View>
        )
        
    }
}