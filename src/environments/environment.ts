export const environment ={
  production : false,
  index : "dev-index",
  store: 'http://127.0.0.1:8000/api/store',
  login: 'http://127.0.0.1:8000/api/login',
  logout: 'http://127.0.0.1:8000/api/logout',
  update: 'http://127.0.0.1:8000/api/update',
  delete: 'http://127.0.0.1:8000/api/delete/',
  show: 'http://127.0.0.1:8000/api/show/',

  authenticate: 'http://127.0.0.1:8000/api/authenticatetoken', // token
  codeVerifiedAuth: 'http://127.0.0.1:8000/api/codeverified', 
  emailVerifiedAuth: 'http://127.0.0.1:8000/api/emailverified',
  activeAccountAuth: 'http://127.0.0.1:8000/api/activeaccount',
  adminAuth: 'http://127.0.0.1:8000/api/adminauth',
  userAuth: 'http://127.0.0.1:8000/api/userauth',
  guestAuth: 'http://127.0.0.1:8000/api/guestauth',

  codeVerify: 'http://127.0.0.1:8000/api/verifyCode',
  sendEmailCode: 'http://127.0.0.1:8000/api/email/verify/code/',
  speciesIndex: 'http://127.0.0.1:8000/api/specie/index',
  petStore: 'http://127.0.0.1:8000/api/pet/store',
  specieStore: 'http://127.0.0.1:8000/api/specie/store',
  checkCodeAuth: 'http://127.0.0.1:8000/api/code/isActive/',
  productIndex: 'http://127.0.0.1:8000/api/product/index',
  getPetsByUser: 'http://127.0.0.1:8000/api/pet/index/',
  storeAppointment: 'http://127.0.0.1:8000/api/vetappointment/store',
  indexAppointments: 'http://127.0.0.1:8000/api/vetappointment/index',
  markAppointmentAsCompleted: 'http://127.0.0.1:8000/api/vetappointment/complete/',
  cancelledAppointments: 'http://127.0.0.1:8000/api/vetappointment/canceled/index',
  reOpenAppointment: 'http://127.0.0.1:8000/api/vetappointment/reopen/',
  markAppointmentAsCancelled: 'http://127.0.0.1:8000/api/vetappointment/reject/',
  categoriesIndex: 'http://127.0.0.1:8000/api/category/index',
  productStore: 'http://127.0.0.1:8000/api/product/store',
<<<<<<< HEAD
  prescriptionStore: 'http://127.0.0.1:8000/api/vetprescription/store'
=======
  productModify: 'http://127.0.0.1:8000/api/product/update/',
  showProductId: 'http://127.0.0.1:8000/api/product/show/',
  deleteProduct: 'http://127.0.0.1:8000/api/product/delete/'
>>>>>>> af03567552065b98119e44774cc893035cac0d95
}
