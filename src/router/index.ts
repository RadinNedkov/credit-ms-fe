import HomePage from '../views/HomePage.vue'
import NewCredit from '../views/NewCredit.vue'
import PaymentForm from '../views/PaymentForm.vue'

export const routes = [
    {
        path: "/",
        name: 'Homepage',
        component: HomePage
    },
    {
      path: "/new-credit",
      name: 'New Credit',
      component: NewCredit
    },
    {
      path: "/make-payment",
      name: 'Make Payment',
      component: PaymentForm
    },
]
