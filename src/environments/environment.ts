export const environment ={
  production : false,
  index : "dev-index",
  store: 'http://127.0.0.1:8000/api/store',
  login: 'http://127.0.0.1:8000/api/login',
  logout: 'http://127.0.0.1:8000/api/logout',
  update: 'http://127.0.0.1:8000/api/update',
  delete: 'http://127.0.0.1:8000/api/delete/',
  show: 'http://127.0.0.1:8000/api/show/',
  authenticate: 'http://127.0.0.1:8000/api/authenticatetoken',
  codeVerify: 'http://127.0.0.1:8000/api/verifyCode',
  sendEmailCode: 'http://127.0.0.1:8000/api/email/verify/code/',
  speciesIndex: 'http://127.0.0.1:8000/api/specie/index',
  petStore: 'http://127.0.0.1:8000/api/pet/store',
  specieStore: 'http://127.0.0.1:8000/api/specie/store',
  getPetsByUser: 'http://127.0.0.1:8000/api/pet/index/',
  storeAppointment: 'http://127.0.0.1:8000/api/vetappointment/store',
  indexAppointments: 'http://127.0.0.1:8000/api/vetappointment/index',
  checkCodeAuth: 'http://127.0.0.1:8000/api/code/isActive/',
  markAppointmentAsCompleted: 'http://127.0.0.1:8000/api/vetappointment/complete/',
  cancelledAppointments: 'http://127.0.0.1:8000/api/vetappointment/canceled/index',
  reOpenAppointment: 'http://127.0.0.1:8000/api/vetappointment/reopen/',
  markAppointmentAsCancelled: 'http://127.0.0.1:8000/api/vetappointment/reject/'
}
