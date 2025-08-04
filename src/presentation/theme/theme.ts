import { StyleSheet } from "react-native"

export const globalColors = {
    primary: '#6750A4',
    on_primary_container: '#4F378B',
    Secondary_fixed_dim: '#CCC2DC',
    surface_container_low: '#F7F2FA',
    surface_container: '#F3EDF7',
}

export const globalStyles = StyleSheet.create({
  topBar: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: globalColors.Secondary_fixed_dim,
  },
  card: {
    backgroundColor: globalColors.surface_container_low,
    width: 420,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {},
  menu: {
    backgroundColor: globalColors.surface_container,
  },
  floatinButton: {
    position: 'absolute',
    margin: 16,
    right: 6,
    bottom: 6,
    backgroundColor: globalColors.on_primary_container,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: globalColors.surface_container_low,
  },
  datePicker: {
    width: 320,
    height: 400,
    backgroundColor: globalColors.surface_container_low,
  },
  dateText: {
    borderColor: globalColors.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#4A4458',
    paddingRight : 110,
    
  },
  button: {
    borderRadius: 10,
    padding: 4,
    elevation: 2,
    marginTop: 25,
    backgroundColor: globalColors.primary,
    },
    cardHistory: {
    backgroundColor: globalColors.surface_container_low,
    width: 420,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 30,
    marginTop: 10,
  },
  activityIndicator: {
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  }
});