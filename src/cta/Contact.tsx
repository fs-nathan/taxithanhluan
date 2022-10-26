import { AppConfig } from '../utils/AppConfig';

const Contact = () => {
  return (
    <>
      <div className="cta-button phone-call">
        <a href={`tel:${AppConfig.hotline || AppConfig.contact_phone}`}>
          <img
            src="/assets/images/call.png"
            width="50"
            alt="Call"
            title="Call"
          />
        </a>
      </div>
      <div className="cta-button zalo-btn">
        <a href={`https://zalo.me/${AppConfig.zalo}`}>
          <img
            src="/assets/images/zalo.png"
            width="50"
            alt="Zalo"
            title="Zalo"
          />
        </a>
      </div>
      <div className="cta-button telegram-btn">
        <a href={`https://t.me/${AppConfig.telegram}`}>
          <img
            src="/assets/images/telegram.png"
            width="50"
            alt="Telegram"
            title="Telegram"
          />
        </a>
      </div>
    </>
  );
};

export { Contact };
