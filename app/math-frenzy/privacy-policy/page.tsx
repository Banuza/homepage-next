import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Math Frenzy Privacy Policy - Banuza",
  description: "Privacy policy for Math Frenzy by Banuza.",
};

export default function MathFrenzyPrivacyPolicy() {
  return (
    <main className="policy-page">
      <div className="width">
        <article className="policy-page__content">
          <p className="policy-page__eyebrow">Math Frenzy</p>
          <h1 className="policy-page__heading">Privacy Policy</h1>
          <p className="policy-page__effective">
            Effective Date: June 12, 2026
          </p>

          <section className="policy-page__section">
            <p>
              Banuza respects your privacy. This Privacy Policy explains how
              we handle information when you play Math Frenzy.
            </p>
          </section>

          <section className="policy-page__section">
            <h2>Information We Collect</h2>
            <p>
              Math Frenzy does not collect personally identifiable information
              from players directly.
            </p>
            <p>
              The game may use platform services provided by Microsoft Xbox,
              such as Xbox profiles, achievements, cloud saves, leaderboards,
              or platform account features. Any information handled through
              Xbox services is processed according to Microsoft&apos;s privacy
              policies and account settings.
            </p>
          </section>

          <section className="policy-page__section">
            <h2>Gameplay Data</h2>
            <p>
              The game may store gameplay-related data, such as progress,
              scores, settings, achievements, or save data. This data is used
              only to provide game functionality.
            </p>
            <p>
              If the game uses online leaderboards or platform features, your
              Xbox gamertag and score or achievement information may be
              displayed through Xbox services.
            </p>
          </section>

          <section className="policy-page__section">
            <h2>Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal information from children.
              If any information is handled through Xbox services, it is
              managed by Microsoft according to the player&apos;s Xbox account
              settings and applicable parental controls.
            </p>
          </section>

          <section className="policy-page__section">
            <h2>Third-Party Services</h2>
            <p>
              The game may rely on Microsoft Xbox services for platform
              features. We do not sell, rent, or trade player information.
            </p>
            <p>
              Microsoft&apos;s privacy statement is available here:{" "}
              <a href="https://privacy.microsoft.com/privacystatement">
                https://privacy.microsoft.com/privacystatement
              </a>
            </p>
          </section>

          <section className="policy-page__section">
            <h2>Data Sharing</h2>
            <p>
              We do not sell or share personal information with advertisers or
              unrelated third parties.
            </p>
          </section>

          <section className="policy-page__section">
            <h2>Data Retention</h2>
            <p>
              Gameplay data may remain stored on your device, your Xbox
              account, or Xbox cloud services as needed to support game
              functionality. You may be able to delete local save data or
              manage cloud data through Xbox system settings.
            </p>
          </section>

          <section className="policy-page__section">
            <h2>Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <p>
              <a href="mailto:hello@banuza.com">hello@banuza.com</a>
            </p>
          </section>

          <section className="policy-page__section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a new effective date.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
