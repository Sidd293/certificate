import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";

const ICON_DEFAULTS = {
  round: true,
  size: 30
};

const Share = ({ url, message, hashtags}) => {
  const fb = {
    url: url,
    quote: message,
    hashtag: hashtags[0]
  };
  return (
    <div>
      <h4>Share:</h4>
      <FacebookShareButton url={url} quote={message} hashtag={hashtags[0]}>
        <FacebookIcon {...ICON_DEFAULTS} />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={message}>
        <WhatsappIcon {...ICON_DEFAULTS} />
      </WhatsappShareButton>
      <TwitterShareButton url={url} title={message} hashtags={hashtags}>
        <TwitterIcon {...ICON_DEFAULTS} />
      </TwitterShareButton>
    </div>
  );
};


export default Share;