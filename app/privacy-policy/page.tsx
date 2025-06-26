'use client';

import Footer from '@/components/common/Footer';
import Hero from '@/components/common/HeroSection';
import { useLanguage } from '@/components/layout/LanguageProvider';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)] relative">
      <Hero 
        title="Privacy Policy"
        height="90vh" 
        imageSrc="/hero_tribe.webp" 
      />

      <section className="bg-white text-black w-full py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          {language === 'ITA' ? (
            <>
              <h2 className="text-3xl font-bold mb-6">Informativa sulla Privacy</h2>
              <p className="mb-4">
                Il sito web SolarcaTribe è di proprietà di SolarcaTribe, che è titolare del trattamento dei tuoi dati personali.
              </p>
              <p className="mb-4">
                Abbiamo adottato questa Privacy Policy, che determina come trattiamo le informazioni raccolte dal sito SolarcaTribe, e spiega perché dobbiamo raccogliere alcuni dati personali. Pertanto, è importante che tu legga attentamente questa informativa prima di utilizzare il sito.
              </p>
              <p className="mb-4">
                Ci prendiamo cura dei tuoi dati personali e ci impegniamo a garantirne la riservatezza e la sicurezza.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informazioni personali raccolte</h3>
              <p className="mb-4">
                Quando visiti SolarcaTribe, raccogliamo automaticamente informazioni sul tuo dispositivo, come browser, indirizzo IP, fuso orario e cookie installati. Inoltre, raccogliamo informazioni sulle pagine visitate, termini di ricerca e interazioni con il sito. Queste vengono chiamate `Informazioni sul dispositivo`. Possiamo anche raccogliere dati personali forniti da te (nome, indirizzo, info di pagamento) al momento della registrazione.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Perché trattiamo i tuoi dati?</h3>
              <p className="mb-4">
                Il nostro obiettivo principale è la sicurezza dei dati degli utenti. Raccogliamo solo le informazioni strettamente necessarie per il funzionamento del sito. Le informazioni raccolte servono esclusivamente per individuare possibili abusi o per fini statistici.
              </p>
              <p className="mb-4">
                Puoi navigare nel sito senza rivelare la tua identità. Tuttavia, per usare alcune funzionalità (newsletter, form di contatto) potresti dover fornire dati personali. Se non lo fai, potresti non accedere ad alcune funzionalità.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">I tuoi diritti</h3>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Diritto all’informazione</li>
                <li>Diritto di accesso</li>
                <li>Diritto di rettifica</li>
                <li>Diritto alla cancellazione</li>
                <li>Diritto alla limitazione del trattamento</li>
                <li>Diritto alla portabilità dei dati</li>
                <li>Diritto di opposizione</li>
                <li>Diritti riguardanti decisioni automatizzate e profilazione</li>
              </ul>
              <p className="mb-4">
                Per esercitare uno di questi diritti, contattaci via email: <a href="mailto:kevin.burrafato@gmail.com" className="underline">kevin.burrafato@gmail.com</a>.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Trasferimenti internazionali</h3>
              <p className="mb-4">
                I tuoi dati possono essere trasferiti fuori dall`Europa, inclusi Stati Uniti e Canada, per motivi legati all’adempimento contrattuale o agli interessi legittimi sopra elencati.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sicurezza</h3>
              <p className="mb-4">
                Proteggiamo le informazioni fornite su server sicuri, con misure tecniche e organizzative adeguate. Tuttavia, nessuna trasmissione dati via internet è completamente sicura.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Link esterni</h3>
              <p className="mb-4">
                Il nostro sito può contenere link a siti esterni non gestiti da noi. Non siamo responsabili delle loro pratiche sulla privacy.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Contatti</h3>
              <p className="mb-4">
                Per qualsiasi informazione riguardante questa informativa o i tuoi diritti, scrivici a <a href="mailto:kevin.burrafato@gmail.com" className="underline">kevin.burrafato@gmail.com</a>.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
              <p className="mb-4">
                SolarcaTribe website is owned by SolarcaTribe, which is a data controller of your personal data.
              </p>
              <p className="mb-4">
                We have adopted this Privacy Policy, which determines how we are processing the information collected by SolarcaTribe, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using SolarcaTribe website.
              </p>
              <p className="mb-4">
                We take care of your personal data and undertake to guarantee its confidentiality and security.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Personal information we collect</h3>
              <p className="mb-4">
                When you visit SolarcaTribe, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device...
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Why do we process your data?</h3>
              <p className="mb-4">
                Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website...
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Your rights</h3>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>The right to be informed</li>
                <li>The right of access</li>
                <li>The right to rectification</li>
                <li>The right to erasure</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object</li>
                <li>Rights in relation to automated decision-making and profiling</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Links to other websites</h3>
              <p className="mb-4">
                Our website may contain links to other websites that are not owned or controlled by us...
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Information security</h3>
              <p className="mb-4">
                We secure information you provide on computer servers in a controlled, secure environment...
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Legal disclosure</h3>
              <p className="mb-4">
                We will disclose any information we collect, use or receive if required or permitted by law...
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Contact information</h3>
              <p className="mb-4">
                If you would like to contact us to understand more about this Policy... email us at <a href="mailto:kevin.burrafato@gmail.com" className="underline">kevin.burrafato@gmail.com</a>.
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
