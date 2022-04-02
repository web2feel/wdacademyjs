import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./Form";

const url =
  "//web2feel.us1.list-manage.com/subscribe/post?u=799cbc2d79700c79dee8e50b1&amp;id=3f349f6eda";

const Subscribe = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default Subscribe;
