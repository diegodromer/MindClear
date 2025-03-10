import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A14',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 48,
  },
  backButton: {
    backgroundColor: '#1C1C1E',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 30,
    lineHeight: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  brainLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: '#00A3FF',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginBottom: 32,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 8,
    fontFamily: 'Inter',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontFamily: 'Inter',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#00A3FF',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    width: '100%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  registerText: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
  },
  registerLink: {
    color: '#00A3FF',
    fontFamily: 'Inter',
  },
});
