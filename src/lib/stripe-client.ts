import Stripe from 'stripe';

let stripe: Stripe | null = null;

const getStripeClient = (): Stripe => {
  if (stripe) {
    return stripe;
  }

  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    throw new Error('Stripe secret key is not configured. Please set STRIPE_SECRET_KEY in your environment.');
  }

  stripe = new Stripe(apiKey, {
    apiVersion: '2024-06-20' as Stripe.LatestApiVersion,
  });

  return stripe;
};

export interface PaymentIntent {
  id: string;
  client_secret: string;
  amount: number;
  currency: string;
  status: string;
}

export class StripePaymentProcessor {
  /**
   * Create payment intent for Masterclass Audit
   */
  static async createPaymentIntent(amount: number, currency: string = 'usd'): Promise<PaymentIntent> {
    try {
      const paymentIntent = await getStripeClient().paymentIntents.create({
        amount: amount * 100, // Convert to cents
        currency: currency,
        metadata: {
          service: 'Masterclass Website Audit',
          company: 'NeuraNest Enterprise',
          project: 'Fixer Digital Agent'
        },
      });

      return {
        id: paymentIntent.id,
        client_secret: paymentIntent.client_secret!,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        status: paymentIntent.status,
      };
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw new Error('Failed to create payment intent');
    }
  }

  /**
   * Create customer for subscription
   */
  static async createCustomer(email: string, name: string) {
    try {
      const customer = await getStripeClient().customers.create({
        email: email,
        name: name,
        metadata: {
          source: 'Fixer Digital Agent Platform',
          signup_date: new Date().toISOString()
        }
      });

      return customer;
    } catch (error) {
      console.error('Error creating customer:', error);
      throw new Error('Failed to create customer');
    }
  }

  /**
   * Create subscription for recurring plans
   */
  static async createSubscription(customerId: string, priceId: string) {
    try {
      const subscription = await getStripeClient().subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
      });

      return subscription;
    } catch (error) {
      console.error('Error creating subscription:', error);
      throw new Error('Failed to create subscription');
    }
  }

  /**
   * Verify payment completion
   */
  static async verifyPayment(paymentIntentId: string) {
    try {
      const paymentIntent = await getStripeClient().paymentIntents.retrieve(paymentIntentId);
      return {
        success: paymentIntent.status === 'succeeded',
        status: paymentIntent.status,
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency
      };
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw new Error('Failed to verify payment');
    }
  }
}

export { getStripeClient };