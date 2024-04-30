import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact section-padding" data-scroll-index="6">
        <div className="">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12">
            <div className="section-head md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6">
              <h4>
                <span></span> Contact
              </h4>
              <p>
                Nos équipes sont à votre disposition pour vous venir en aide.
              </p>
              <p>
                Remplissez le formulaire et nous reprendrons contact avec vous
                très rapidement afin de répondre à votre requête
              </p>
            </div>

            <div className="lg:col-span-5 ">
              <div className="contact-info mb-md50">
                <div style={{ width: "80%" }}>
                  <iframe
                    width="100%"
                    height="245"
                    src="https://maps.google.com/maps?width=100%25&amp;height=245&amp;hl=en&amp;q=103%20Bd%20Yacoub%20Al%20Mansour,%20Mohamm%C3%A9dia+(SAIDTEX)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>

                <div className="item">
                  <svg
                    className="icon w-[25px] h-[25px] text-blue dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.9"
                      d="M11 18h2M5.875 3h12.25c.483 0 .875.448.875 1v16c0 .552-.392 1-.875 1H5.875C5.392 21 5 20.552 5 20V4c0-.552.392-1 .875-1Z"
                    />
                  </svg>

                  <div className="cont">
                    <h6>Téléphone : </h6>
                    <p>+212 (0) 523 303 419</p>
                  </div>
                </div>
                <div className="item">
                  <svg
                    className="icon w-[25px] h-[25px] text-blue dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.9"
                      d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                    />
                  </svg>

                  <div className="cont">
                    <h6>Email : </h6>
                    <p>info@saidtex.net</p>
                  </div>
                </div>
                <div className="item">
                  <svg
                    className="icon w-[25px] h-[25px] text-blue dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.9"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.9"
                      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    />
                  </svg>

                  <div className="cont">
                    <h6>Adresse : </h6>
                    <p>
                      103, Bd Yacoub Almansour Lot Alwafa BP 742 <br />
                      Mohammedia, Morocco
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form className="form" id="my-form" action="" method="">
                <div className="messages"></div>

                <div className="controls">
                  <div className="row">
                    <div className="md:w-1/2">
                      <div className="mb-8">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="mb-8">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="md:w-full">
                      <div className="mb-8">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="md:w-full">
                      <div className="mb-8">
                        <textarea
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        ></textarea>
                      </div>
                    </div>

                    <div className="md:w-full">
                      <button type="submit" className="butn butn-bg">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
