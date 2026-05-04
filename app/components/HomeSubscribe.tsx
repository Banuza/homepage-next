import Button from "./Button";

export default function HomeSubscribe() {
  return (
    <div id="updates" className="subscribe">
      <div className="width">
        <div className="subscribe__header">
          <h2 className="subscribe__heading">Never miss an update</h2>
          <p>
            Subscribe to our mailing list and get notified whenever we publish
            something cool.
          </p>
        </div>

        <form
          id="subscribe-form"
          className="subscribe__form"
          action="https://manage.kmail-lists.com/subscriptions/subscribe"
          method="POST"
          target="_blank"
        >
          <div className="subscribe__form-flex">
            <input name="g" value="RnFvJm" type="hidden" />
            <input
              className="subscribe__email"
              type="email"
              name="email"
              placeholder="Email Address"
            />

            <Button size="large" type="submit">
              Subscribe
            </Button>
          </div>
          <p id="subscribe-message"></p>
        </form>
      </div>
    </div>
  );
}
