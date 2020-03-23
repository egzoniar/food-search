import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 3.5,
    marginBottom: 10,
    backgroundColor: 'transparent'
  },
  img_wrapper: {
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 250,
    height: 170,
    borderRadius: 4
  },
  name: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15
  },
  rating: {
    fontSize: 12,
    color: 'gray'
  }
})

export default styles;