import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  modalView: {
    width: width*0.85,
    height: height*0.50,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 2
  },
  backgroundModal: { 
    width, 
    height, 
    position: "absolute", 
    zIndex: 1, 
    backgroundColor: "rgba(0, 0, 0, 0.4)" 
  },
  headerContainer: {
    backgroundColor: "#c31212",
    height: 50,
    width: width*0.85,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20

  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff"
  },
  formContainer: {
    width: width*0.80,
    height: "100%",
    marginTop: 20
  },
  loginButton: {
    width: "80%",
    height: 60,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c31212",
    borderRadius: 30,
    elevation: 10,
    marginTop: 50
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
})