const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-8 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-4xl p-6 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
          Contact Us
        </h1>
        <p className="leading-relaxed text-center text-gray-600 dark:text-gray-400">
          We’d love to hear from you! Whether you have questions, suggestions,
          or just want to connect, feel free to reach out through any of the
          following channels.
        </p>

        <div className="space-y-4">
          {/* Email Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Email Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Prasun Kushwaha:{" "}
              <a
                href="mailto:prasunkushwaha25@gmail.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                prasunkushwaha25@gmail.com
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Mohd Suhail:{" "}
              <a
                href="mailto:mohdsuhail.istiyak@gmail.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                mohdsuhail.istiyak@gmail.com
              </a>
            </p>
          </div>

          {/* Mobile Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Call Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Prasun Kushwaha:{" "}
              <a
                href="tel:+917906637663"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                +91 7906637663
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Mohd Suhail:{" "}
              <a
                href="tel:+918650714015"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                +91 8650714015
              </a>
            </p>
            
             <p className="text-gray-600 dark:text-gray-400">
              Puja Kumari:{" "}
              <a
                href="tel:+916206313778"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                ++91 6206313778
              </a>
            </p>
          </div>

          {/* LinkedIn Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Connect on LinkedIn
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                Mohd Suhail:{" "}
                <a
                  href="https://www.linkedin.com/in/themohdsuhail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  https://www.linkedin.com/in/themohdsuhail/
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Puja Kumari:{" "}
                <a
                  href="https://www.linkedin.com/in/puja-kumari-214853245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  https://www.linkedin.com/in/puja-kumari-214853245/
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Prasun Kushwaha:{" "}
                <a
                  href="https://www.linkedin.com/in/prasun-kushwaha-7484651ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  https://www.linkedin.com/in/prasun-kushwaha-7484651ba/
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 text-center border-t dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            Thank you for visiting WorkSync. We look forward to connecting with
            you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
