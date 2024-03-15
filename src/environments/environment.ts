export const environment ={
  production : false,
  index : "http://127.0.0.1:8000/api/users/index",
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
  prescriptionStore: 'http://127.0.0.1:8000/api/vetprescription/store',
  productModify: 'http://127.0.0.1:8000/api/product/update/',
  showProductId: 'http://127.0.0.1:8000/api/product/show/',
  deleteProduct: 'http://127.0.0.1:8000/api/product/delete/',
  userPets: 'http://127.0.0.1:8000/api/pet/userpets/',
  prescriptionsIndex: 'http://127.0.0.1:8000/api/vetprescription/index',
  userPrescriptionsIndex: 'http://127.0.0.1:8000/api/vetprescription/user/',
  getVetAppointmentsByUser: 'http://127.0.0.1:8000/api/vetappointment/user/',
  completedAppointments: 'http://127.0.0.1:8000/api/vetappointment/completed/index',
  desactivateUser: 'http://127.0.0.1:8000/api/users/desactivate/',
  showPet: 'http://127.0.0.1:8000/api/pet/show/',
  updatePet: 'http://127.0.0.1:8000/api/pet/update/',
  petIndex: 'http://127.0.0.1:8000/api/pet/activatedPets',
  deactivatedPetIndex: 'http://127.0.0.1:8000/api/pet/deactivatedPets',
  activePets: 'http://127.0.0.1:8000/api/pet/active/name/',
  deactivatedPets: 'http://127.0.0.1:8000/api/pet/deactivated/name/',
  activatePet: 'http://127.0.0.1:8000/api/pet/activate/',
  deactivatePet: 'http://127.0.0.1:8000/api/pet/delete/',
  specieDeactivatedIndex: 'http://127.0.0.1:8000/api/specie/deactivated/index',
  activateSpecie: 'http://127.0.0.1:8000/api/specie/activate/',
  deactivateSpecie: 'http://127.0.0.1:8000/api/specie/delete/',
  activeSpecies: 'http://127.0.0.1:8000/api/specie/active/name/',
  deactivatedSpecies: 'http://127.0.0.1:8000/api/specie/deactivated/name/',
  updateSpecie: 'http://127.0.0.1:8000/api/specie/update/',
  showSpecie: 'http://127.0.0.1:8000/api/specie/show/',

  totalAppointments: 'http://127.0.0.1:8000/api/vetappointment/totalApointments',
  totalUsuarios: 'http://127.0.0.1:8000/api/users/totalUsers',
  totalProductos: 'http://127.0.0.1:8000/api/product/totalProducts',
  productsStockBajo: 'http://127.0.0.1:8000/api/product/stockBajo',
  AppointmentUser: 'http://127.0.0.1:8000/api/vetappointment/info/Appointments',

  productsDisabled: 'http://127.0.0.1:8000/api/products/index/disabled',
  enableProd: 'http://127.0.0.1:8000/api/products/activate/',

  serviceindex: 'http://127.0.0.1:8000/api/services/index',
  servicestore: 'http://127.0.0.1:8000/api/services/store',
  servicemodify: 'http://127.0.0.1:8000/api/services/update/',
  serviceshow: 'http://127.0.0.1:8000/api/services/show/',
  servicedelete: 'http://127.0.0.1:8000/api/services/destroy/',

  getTotal: 'http://127.0.0.1:8000/api/product/getTotal',
  makeSale: 'http://127.0.0.1:8000/api/product/venta',

  getProductSearch: 'http://127.0.0.1:8000/api/product/getProduct/'
  
}
