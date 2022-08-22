
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
  },
  header:{
    fontSize:40,
    paddingTop:20,
    paddingLeft:15,
    fontWeight:'500',
    color:'white',
  },
  textInput: {
    borderTopWidth:2,
    borderBottomWidth: 3,
    borderRightWidth:2,
    borderLeftWidth:2,
    padding: 10,
    paddingVertical: 12,
    marginTop: 12,
    marginBottom:50,
    marginHorizontal: 15,
    backgroundColor: 'white',
    fontSize: 19,
    color:'black',
    fontWeight: '300',
    borderRadius: 17,
    borderTopColor:'lightblue',
    borderBottomColor: 'lightblue',
    borderRightColor:'lightblue',
    borderLeftColor:'lightblue',
  },
  cityCountryText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
  },
  infoView: {
    borderRadius:20,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    opacity: 0.9,
    marginHorizontal:30,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    
  },
  dateText: {
    color: '#fff',
    fontSize: 15,
    marginVertical: 10,
  },
  tempText: {
    fontSize: 30,
    fontWeight:'bold',
    color: 'white',
  },
  weathers:{
    paddingLeft:40,
    fontSize:30,
    fontWeight:'600',
    color:'white',
  },
  minMaxText: {
    fontSize: 17,
    color: '#fff',
    marginVertical: 10,
    fontWeight: '500',
  },
});