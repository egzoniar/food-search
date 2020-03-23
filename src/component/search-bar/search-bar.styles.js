import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginTop: 17,
    marginHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: 'blue'
  },
  input: {
    flex: 1,
    fontSize: 17,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  searchIcon: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  closeTouchable: {
    flex: 1,
    justifyContent: 'center'
  },
  closeIcon: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 15
  }
})

export default styles;