export default function ContactPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-gray-500 mb-12">
            Une question ? Un devis ? N'hésitez pas à nous contacter, notre équipe vous répondra dans les plus brefs délais.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-1">Notre Boutique</h3>
              <p className="text-gray-500 text-sm">Abidjan, Côte d'Ivoire</p>
            </div>
            <div>
              <h3 className="font-bold mb-1">Téléphone</h3>
              <p className="text-gray-500 text-sm">+225 00 00 00 00 00</p>
            </div>
            <div>
              <h3 className="font-bold mb-1">Email</h3>
              <p className="text-gray-500 text-sm">contact@si-hitech.ci</p>
            </div>
          </div>
        </div>

        <form className="bg-[#F5F5F5] p-8 rounded-2xl space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nom complet</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="votre@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors h-32" placeholder="Comment pouvons-nous vous aider ?"></textarea>
          </div>
          <button className="w-full py-3.5 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}
