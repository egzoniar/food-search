import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 15,
    display: "flex",
    flexDirection: "row"
  },
  input: {
    flex: 1,
    fontSize: 17
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