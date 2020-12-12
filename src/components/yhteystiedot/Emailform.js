import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// Styles
import '../../sass/components/mailform.scss';
// Icon
import Plain from '../icons/Plain';

const Emailform = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleResponse = status => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: `Kitos!. Viestisi on lähetetty` },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: `Ooops!. Viestiäsi ei ole lähetetty` },
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
      // subject: `Сообщение с сайта riofor.com`,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    // EMAILJS - не нужно делать под функцию в netlify
    const res = await emailjs.send(
      process.env.GATSBY_EMAILJS_SERVICE_ID,
      process.env.GATSBY_EMAILJS_TEMPLATE_ID,
      inputs,
      process.env.GATSBY_EMAILJS_USER_ID
    );
    handleResponse(res.status);
    console.log(res.status, res.text);
  };

  return (
    <form method="POST" onSubmit={handleOnSubmit} id="meet-form">
      <label className="form-input">
        Nimi / Yritys *
        <input
          type="text"
          name="name"
          placeholder="Pekka Suomalainen"
          onChange={handleOnChange}
          value={inputs.name}
          required
        />
      </label>
      <label className="form-input">
        Sähköposti *
        <input
          type="email"
          name="email"
          placeholder="example@example.com"
          onChange={handleOnChange}
          value={inputs.email}
          required
        />
      </label>
      <label className="form-input" id="#meet-form-textarea">
        Viesti
        <textarea
          name="message"
          rows="5"
          onChange={handleOnChange}
          value={inputs.message}
        />
      </label>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
      <button
        type="submit"
        className="btn fill btn-icon shrink-icon"
        disabled={status.submitting}>
        {!status.submitting ? (
          !status.submitted ? (
            <>
              <span>Lähetä</span> <Plain />
            </>
          ) : (
            `Lähetetty`
          )
        ) : (
          <span className="sending">
            Lähetetään
            <div />
          </span>
        )}
      </button>
    </form>
  );
};

export default Emailform;

// GrapQL запрос
// const ctx = graphql`
//   query {
//     allDatoCmsPlanFrom {
//       nodes {
//         locale
//         email
//         submit
//         name
//         message
//         success
//         error
//       }
//     }
//   }
// `;
