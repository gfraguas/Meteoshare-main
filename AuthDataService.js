import http from "../http-common";
import authHeader from './AuthHeaderService';

const API_URL_PATH = '/auth/';

class AuthDataService {

  register(user) {
    const body = { username: user.username, first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password, is_active: true, twitter_screen_name: user.twitter_screen_name, instagram_screen_name: user.instagram_screen_name };
    return http.post(API_URL_PATH + 'signup', body);
  }

  login(username, password) {
    const body = {username: username, password: password}
    return http.post(API_URL_PATH + 'signin', body);
  }

  logout() {
    localStorage.removeItem('user');
  }

  findByPasswordToken (token) {
    return http.get(API_URL_PATH + 'findByPasswordToken?token=' + token, { headers: authHeader() });
  }

  findByRequestPasswordForm (username, email) {
    return http.get(API_URL_PATH + 'findByRequestPasswordForm?username=' + username + '&email=' + email, { headers: authHeader() });
  }

  resetPassword(token, password) {
    const body = {token: token, password: password}
    return http.put(API_URL_PATH + 'resetPassword', body);
  }


 /*
  const updatedContact = { id: contact.id, type: contact.type, full_name: contact.full_name, country: contact.country, address: contact.address, city: contact.city, zip: contact.zip, email: contact.email, phone_number: contact.phone_number, description: contact.description, morning_from: contact.morning_from, morning_to: contact.morning_to, afternoon_from: contact.afternoon_from, afternoon_to: contact.afternoon_to, client_id: contact.client_id }
  return http.put(API_URL_PATH + 'modifyContact', { id: contact.id, contact: updatedContact }, {headers: {
    'x-access-token': accessToken
  }}) */
}

export default new AuthDataService();
