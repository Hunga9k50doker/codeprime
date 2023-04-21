import axios from 'axios'
import { DJANGO_BASE_URL } from '../constants'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const profilesAxios = axios.create({
  baseURL: DJANGO_BASE_URL + '/api/profiles/',
  timeout: 30000
})

export function postUserAPI (action, postData) {
  let url = ''
  switch (action) {
    case 'login':
      url = 'login/'; break
    case 'register':
      url = 'register/'; break
    case 'invite':
      url = 'invite/'; break
    case 'update-profile':
      url = 'update-profile/'; break
    case 'change-password':
      url = 'change-password/'; break
    case 'recover':
      url = 'recover/'; break
    default:
      url = '/'; break
  }
  if (!url) {
    throw new Error('URL không đúng!')
  }
  return profilesAxios.post(url, postData)
}

export function getMyProfileAPI (params) {
  return profilesAxios.get('my-profile/', { params })
}

export function uploadAvatarAPI (params) {
  const config = {
    timeout: 60000,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return profilesAxios.post('upload-avatar/', params, config)
}
