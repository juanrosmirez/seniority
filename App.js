import React, {Component} from 'react';
import {StyleSheet, Text, View, ProgressBarAndroid, TouchableHighlight, Dimensions} from 'react-native';

const preExisting = 'Junior';

const message0 = `TE MANTIENES IGUAL.
será hora de un nuevo curso?!`

const message1 = `HAS BAJADO DE SENIORITY.
cambiaste de tecnología?`

const message2 = `FELICITACIONES.
Sigue así y serás un gran master!`

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      seniorityLevel: ' ',
      progress: 0,
      seniority: [
        {
          rank: 'Trainee',
          color: 'white',
          bigCircle: false,
          progress: 0,
        },
        {
          rank: 'Junior',
          color: 'white',
          bigCircle: false,
          progress: 0.19,
        },
        {
          rank: 'Junior Adv.',
          color: 'white',
          bigCircle: false,
          progress: 0.35,
        },
        {
          rank: 'Semi Senior',
          color: 'white',
          bigCircle: false,
          progress: 0.5,
        },
        {
          rank: 'Semio Senior Adv.',
          color: 'white',
          bigCircle: false,
          progress: 0.65,
        },
        {
          rank: 'Senior',
          color: 'white',
          bigCircle: false,
          progress: 0.8,
        },
        {
          rank: 'Senior Adv.',
          color: 'white',
          bigCircle: false,
          progress: 1,
        },
      ],
      rankPosition: null,
      bigCirclePosition: null,
      mesagge: 'Aun no has seleccionado nada',
    }
  }

  componentDidMount = () => {
    var indexRank; 
    this.state.seniority.map((seniority,index) => {
      seniority.rank === preExisting ? indexRank = index : null
    })
    const copySeniority = this.state.seniority;
    copySeniority[indexRank].color = 'violet'; 
    this.setState({seniority:copySeniority,rankPosition:indexRank})
  }

  onPress = ( position,progress ) => {
    {
      var { seniority } = this.state;
      if(position == this.state.rankPosition) {
        this.setState({mesagge:message0})
      } else if (position < this.state.rankPosition){
        this.setState({mesagge:message1})
      } else if (position > this.state.rankPosition){
        this.setState({mesagge:message2 })
      }
      this.setState({ progress })
      this.setState({seniorityLevel:this.state.seniority[position].rank})
      
      seniority[position].bigCircle = true

      this.state.bigCirclePosition != null ? this.state.seniority[this.state.bigCirclePosition].bigCircle = false : null
      
      this.setState({ seniority,bigCirclePosition: position })
    }
  }

  render() {  
    const { seniority } = this.state;
    return (
      
      <View style={styles.container}>
        <View style={styles.navBarLeftButton}>
          <View
            style={styles.circle}
          >
          </View>
          <Text style={styles.preExisting}>Selección pre-existente: {preExisting}</Text>
      </View>

      <View style={styles.seniorityLevel }>
        <Text style={styles.textSeniorityLevel}>NEW SENIORITY LEVEL</Text>
        <Text style={styles.textSeniorityLevel1}>{this.state.seniorityLevel}</Text> 
      </View>

      <ProgressBarAndroid
        style={styles.progressBar}
        styleAttr="Horizontal"
        indeterminate={false}
        progress={this.state.progress}
        color="#8B008B"
      />

      <View style={styles.containerButtons}>
        {seniority.map( (seniority,index) => {
          { return seniority.bigCircle ? <View style={styles.bigCircle} key={index}><View style={ seniority.color === 'white' ? styles.circleWhiteSmall : styles.circle }/></View>
          :
            <TouchableHighlight
              style = { seniority.color === 'white' ? styles.circleWhite : styles.circle }
              underlayColor = '#ccc'
              onPress = { () => this.onPress(index,seniority.progress)}
              key={index}
            >
              <Text></Text>
            </TouchableHighlight>
          }})
        }
      </View>
      <Text style={styles.message}>{this.state.mesagge}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft:10, 
    marginTop:10,
    marginRight:10,
  },
    seniorityLevel: {
    backgroundColor:'#8B008B',
    marginTop: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,  
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 75,
    
  },
  textSeniorityLevel: {
    fontSize: 15,
    color:'#ffffff',
    paddingLeft: 10,
    marginTop: 15,
    marginLeft: 15,
  },
  textSeniorityLevel1:{  
    fontSize: 20,
    color:'#ffffff',
    paddingLeft: 10,
    marginLeft: 15,
  },
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor:'#8B008B',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigCircle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').width * 0.08,
    backgroundColor:'#8B008B',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleWhite : {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor:'white',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleWhiteSmall: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.025,
    height: Dimensions.get('window').width * 0.028,
    backgroundColor:'white',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBarLeftButton: {
    paddingLeft: 8,
    width: 250,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  preExisting: {
    marginLeft: 10,
  },
  containerButtons: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // alignSelf:'center',
    // position:'absolute',
    marginTop: 28,
  },
  progressBar:{
    marginTop: 153.5,
    position:'absolute',
    width: '100%',
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 30
  }
});
