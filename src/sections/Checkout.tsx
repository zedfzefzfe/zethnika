import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactConfig } from '../config';   // used for WhatsApp number


interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  /** called when order is successfully placed so parent can clear cart */
  onClearCart?: () => void;
  cartItems: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  totalPrice: number;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const MOROCCAN_CITIES = [
  'Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tanger', 'Agadir', 'Meknès',
  'Oujda', 'Kénitra', 'Tétouan', 'Salé', 'Nador', 'Mohammedia', 'El Jadida',
  'Béni Mellal', 'Taza', 'Khouribga', 'Settat', 'Berrechid', 'Khémisset',
  'Larache', 'Guelmim', 'Errachidia', 'Safi', 'Essaouira', 'Al Hoceima',
  'Dakhla', 'Laâyoune', 'Ouarzazate', 'Ifrane', 'Autre',
];

const Checkout = ({ isOpen, onClose, onClearCart, cartItems, totalPrice }: CheckoutProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Maroc',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const shippingCost = formData.city.toLowerCase() === 'casablanca' ? 0 : 35;
  const orderTotal = totalPrice + shippingCost;

  // Initialize EmailJS (replaces 'your_service_id' with your actual ID from emailjs.com)
  useEffect(() => {
    emailjs.init('1MEzWhnjMV3FqStvA');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare orders array for EmailJS template
      const orders = cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        units: item.quantity,
        image_url: `${window.location.origin}${item.image.startsWith('/') ? '' : '/'}${item.image}`,
      }));

      // For admin email and WhatsApp message, keep the text version
      const cartItemsText = cartItems
        .map((item) => `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
        .join('\n');
      const orderNumber = `ZETH-${Date.now()}`;
      const taxes = 0.0;

      // Send email to customer
      const customerPayload = {
        order_id: orderNumber,
        orders: orders,
        cost: {
          shipping: shippingCost.toFixed(2),
          tax: taxes.toFixed(2),
          total: orderTotal.toFixed(2),
        },
        customer_email: formData.email, // Must match {{customer_email}} in template To Email
      };
      console.log('Customer payload', customerPayload);
      await emailjs.send(
        'service_8fol9ro',
        'template_utxtlln',
        customerPayload
      );

      // Send email to admin
      const adminPayload = {
        order_id: orderNumber,
        orders: orders, // send full array for template
        cost: {
          shipping: shippingCost.toFixed(2),
          tax: taxes.toFixed(2),
          total: orderTotal.toFixed(2),
        },
        customer_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city} ${formData.postalCode}, ${formData.country}`,
      };
      console.log('Admin payload', adminPayload);
      await emailjs.send(
        'service_8fol9ro',
        'template_oqx23mi',
        adminPayload
      );

      // open WhatsApp with order details
      try {
        const whatsappNumber = contactConfig.phone.replace(/[^0-9]/g, '');
        const shippingLabel = shippingCost === 0 ? 'Gratuite' : `${shippingCost.toFixed(2)} MAD`;
        const whatsappMessage = `Bonjour, je souhaite passer commande :\n${cartItemsText}\nLivraison : ${shippingLabel}\nTotal : ${orderTotal.toFixed(2)} MAD\n` +
          `Nom : ${formData.firstName} ${formData.lastName}\nTéléphone : ${formData.phone}\n` +
          `Adresse : ${formData.address}, ${formData.city} ${formData.postalCode}, ${formData.country}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
      } catch (waErr) {
        console.warn('Failed to open WhatsApp link', waErr);
      }

      console.log('Emails sent successfully');
      setIsSubmitted(true);

      // let parent (App) clear cart if provided
      if (onClearCart) {
        onClearCart();
      }

      // Reset form and close after 3 seconds
      // Do not auto-close confirmation; let user close manually
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Error sending order: ' + (error?.text || error?.message || JSON.stringify(error)));
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b bg-white">
          <h2 className="font-serif text-2xl">Informations de Commande</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h3 className="font-serif text-2xl mb-2">Commande Confirmée</h3>
              <p className="text-[#696969]">
                Merci pour votre achat! Vous recevrez bientôt un email de confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Order Summary */}
              <div className="bg-[#fafafa] p-4 rounded mb-6">
                <h3 className="font-serif text-lg mb-4">Résumé de la Commande</h3>
                <div className="space-y-2 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x {item.quantity}</span>
                      <span>{(item.price * item.quantity).toFixed(2)} MAD</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-2 space-y-1">
                  <div className="flex justify-between text-sm text-[#696969]">
                    <span>Livraison</span>
                    <span>{formData.city ? (shippingCost === 0 ? 'Gratuite' : `${shippingCost.toFixed(2)} MAD`) : 'Sélectionnez une ville'}</span>
                  </div>
                  <div className="flex justify-between font-serif text-lg">
                    <span>Total</span>
                    <span>{orderTotal.toFixed(2)} MAD</span>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <fieldset>
                <legend className="font-serif text-lg mb-4">Informations Personnelles</legend>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Prénom"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#8b6d4b]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Nom"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#8b6d4b]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="col-span-2 px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#8b6d4b]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="col-span-2 px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#8b6d4b]"
                  />
                </div>
              </fieldset>

              {/* Shipping Address */}
              <fieldset>
                <legend className="font-serif text-lg mb-4">Adresse de Livraison</legend>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Adresse"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#8b6d4b]"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="col-span-1 px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#8b6d4b] bg-white"
                    >
                      <option value="" disabled>Ville</option>
                      {MOROCCAN_CITIES.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Code Postal"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="col-span-1 px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#8b6d4b]"
                    />
                  </div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#8b6d4b]"
                  >
                    <option value="Maroc">Maroc</option>
                    <option value="Algérie">Algérie</option>
                    <option value="Tunisie">Tunisie</option>
                    <option value="France">France</option>
                    <option value="Belgique">Belgique</option>
                    <option value="Suisse">Suisse</option>
                    <option value="Canada">Canada</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </fieldset>

              {/* Buttons */}
              <p className="text-xs text-gray-500 mb-2">
                Après confirmation, une fenêtre WhatsApp s'ouvrira avec les détails de votre commande pour que vous puissiez envoyer le message au vendeur.
              </p>
              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isLoading}
                  className="flex-1 py-4 border border-gray-200 text-gray-700 font-light tracking-wider hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-4 bg-[#8b6d4b] text-white font-light tracking-widest btn-hover disabled:opacity-50"
                >
                  {isLoading ? 'Traitement...' : 'Confirmer & envoyer sur WhatsApp'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
