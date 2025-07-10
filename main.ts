import { TradingApp } from './app';
import { MarketData } from './services/marketData';
import { AuthService } from './services/auth';
import { PaymentGateway } from './services/payments';

// Initialize application
const app = new TradingApp({
    apiKey: 'YOUR_API_KEY',
    environment: 'production'
});

// WebSocket market data connection
const marketData = new MarketData();
marketData.connect('wss://api.jioforex.com/realtime');

// Authentication system
const auth = new AuthService({
    loginRedirect: '/dashboard',
    logoutRedirect: '/'
});

// Payment processing
const payments = new PaymentGateway({
    stripeKey: 'pk_live_...',
    paypalClientId: '...'
});

// DOM Event listeners
document.getElementById('registerButton')?.addEventListener('click', () => {
    app.showRegistrationForm();
});