const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-12 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-4xl p-6 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
          About Us
        </h1>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Welcome to WorkSync, a platform dedicated to enhancing the learning
          experience through engaging and interactive tools. Our goal is to make
          knowledge accessible and enjoyable by providing intuitive resources
          designed to cater to learners of all levels and disciplines.
        </p>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          This platform is crafted to support your journey in acquiring new skills, 
          preparing for exams, and exploring various domains with confidence. 
          Through our innovative approach, we aim to empower users to unlock 
          their full potential.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Our Vision
        </h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          To bridge the gap between learners and opportunities by offering
          accessible, effective, and engaging educational tools tailored to
          modern needs.
        </p>
        <div className="pt-4 border-t dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Disclaimer
          </h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            This platform is the culmination of the efforts of final-year B.Tech 
            Computer Science and Engineering students—Prasun Kushwaha 
            (21BTCSE1009), Mohd Suhail (21BTCSE1056), and Puja Kumari 
            (21BTCSE1019)—under the esteemed guidance of Mr. Mukesh Rajput. 
            Developed as part of their Major Project - I, WorkSync embodies their 
            commitment to academic excellence and innovation.
          </p>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            We sincerely thank our mentors and the academic institution for
            their continuous support and encouragement throughout this project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
