import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz – BuddySpot" };

export default function DatenschutzPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5 prose prose-gray dark:prose-invert prose-sm">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          <strong>[TODO: Vor- und Nachname]</strong><br />
          [TODO: Adresse]<br />
          E-Mail: hello@buddyspot.app
        </p>

        <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst. 
          Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das 
          verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre 
          IP-Adresse und ähnliches.
        </p>

        <h2>3. Kontaktformular</h2>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
          Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
          Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir 
          nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2>4. BuddySpot App</h2>
        <p>
          Bei Nutzung der BuddySpot App werden folgende Daten verarbeitet:
        </p>
        <ul>
          <li><strong>Standortdaten:</strong> Ihr ungefährer Standort wird während einer aktiven Session 
          auf der Karte angezeigt. Der genaue Standort wird nur nach Ihrer expliziten Zustimmung 
          mit einem bestätigten Buddy geteilt.</li>
          <li><strong>Profildaten:</strong> Name, E-Mail, Profilbild und Hundedaten werden zur 
          Bereitstellung des Dienstes gespeichert.</li>
          <li><strong>Chat-Nachrichten:</strong> Nachrichten werden verschlüsselt gespeichert und 
          nur den jeweiligen Chat-Partnern zugänglich gemacht.</li>
        </ul>

        <h2>5. Cookies</h2>
        <p>
          Diese Website verwendet nur technisch notwendige Cookies. Es werden keine Tracking- 
          oder Werbe-Cookies eingesetzt.
        </p>

        <h2>6. Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Weitere Informationen finden Sie in der 
          Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" 
          target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>.
        </p>

        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung 
          sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich 
          jederzeit an uns wenden: hello@buddyspot.app
        </p>

        <h2>8. Löschung von Daten</h2>
        <p>
          Sie können Ihren Account in der BuddySpot App jederzeit vollständig löschen. 
          Dabei werden alle personenbezogenen Daten unwiderruflich entfernt.
        </p>

        <p className="text-gray-400 dark:text-gray-500 mt-8">
          Stand: März 2026
        </p>
      </div>
    </div>
  );
}
