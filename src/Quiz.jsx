import { useState, useEffect } from "react";
import axios from "axios";
import { BiCompass } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { ImTrophy } from "react-icons/im";

function Quiz() {
  const [questionTemplate, setQuestionTemplate] = useState(`you are a quiz master. Generate 5 {category} questions with 4 multiple choice answers for a {skillLevel} skill level. Also provide the answer separately. The response should be in the following json format: {"questions": [{"id": 0, "question": "", "options": [], "answer": ""},...]} (do not add anything out of format. KEEP THE RESPONSE IN THE GIVEN FORMAT)`);
  const [category, setCategory] = useState("aptitude");
  const [skillLevel, setSkillLevel] = useState("beginner");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [questionsGenerated, setQuestionsGenerated] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(0);
  const [trophies, setTrophies] = useState(getStoredTrophies()); // Retrieve trophies from local storage

  useEffect(() => {
    // Update local storage whenever trophies change
    localStorage.setItem("my_trophies", JSON.stringify(trophies));
  }, [trophies]);

  function getStoredTrophies() {
    const trophiesDataString = localStorage.getItem("my_trophies") || "0";
    return JSON.parse(trophiesDataString);
  }

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    setLoading(true);
    e.preventDefault();

    const formattedQuestion = questionTemplate
      .replace("{category}", category)
      .replace("{skillLevel}", skillLevel);

    setAnswer("Loading, please wait...");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAN2rgHo0T42fsEeBVRDLI0M7s7zOfYHzo",
        method: "post",
        data: {
          contents: [{ parts: [{ text: formattedQuestion }] }],
        },
      });

      const generatedText = response.data.candidates[0].content.parts[0].text;
      setAnswer(generatedText);

      const parsedResponse = JSON.parse(generatedText);
      setQuestions(parsedResponse.questions);
      setLoading(false);
      setQuestionsGenerated(true);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
      setLoading(false);
    }

    setGeneratingAnswer(false);
  }

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    
    let initialTime = 120; // default to beginner
    if (skillLevel === "intermediate") initialTime = 60;
    else if (skillLevel === "expert") initialTime = 30;
    setTimer(initialTime);
  };

  useEffect(() => {
    if (quizStarted && timer > 0) {
      const timerId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timer === 0 && quizStarted) {
      handleTimeUp();
    }
  }, [timer, quizStarted]);

  const handleAnswer = (option) => {
    const correctAnswer = option === questions[currentQuestionIndex].answer;
    if (correctAnswer) {
      setScore(score + 1);
    }
    setUserAnswers([...userAnswers, correctAnswer]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
      setQuizStarted(false);
      const earnedTrophies = score; // Trophies earned in this quiz session
      setTrophies(prevTrophies => prevTrophies + earnedTrophies);  // Update cumulative trophies
    }
  };

  const handleTimeUp = () => {
    const remainingQuestions = questions.length - userAnswers.length;
    const updatedAnswers = [...userAnswers, ...Array(remainingQuestions).fill(false)];
    setUserAnswers(updatedAnswers);
    setQuizFinished(true);
    setQuizStarted(false);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setQuestionsGenerated(false);
  };

  const handleSkillLevelChange = (e) => {
    setSkillLevel(e.target.value);
  };

  const handleSearchHint = () => {
    const query = questions[currentQuestionIndex].question;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="min-h-screen p-5 bg-gray-900">
      <div className="max-w-4xl p-6 mx-auto mt-24 bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeIn">
        <h1 className="mb-6 text-3xl font-extrabold text-center text-indigo-400">Quiz Generator</h1>
        <form onSubmit={generateAnswer} className="mb-6 space-y-4">
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category</label>
              <select
                name="category"
                id="category"
                onChange={handleCategoryChange}
                className="block w-full mt-1 text-white bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400 sm:text-sm"
              >
                <option value="aptitude">Aptitude & Reasoning</option>
                <option value="civil">Civil Engineering</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="electronics">Electronics Engineering</option>
                <option value="software">Software</option>
              </select>
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="skillLevel" className="block text-sm font-medium text-gray-300">Skill Level</label>
              <select
                name="skillLevel"
                id="skillLevel"
                onChange={handleSkillLevelChange}
                className="block w-full mt-1 text-white bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400 sm:text-sm"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 animate__animated animate__pulse"
            disabled={generatingAnswer}
          >
            Generate
          </button>
        </form>
        {loading && <BiCompass className="m-auto text-3xl text-indigo-400 animate-spin animate__animated animate__rotateIn" />}
        {questionsGenerated && !loading && (
          <button
            onClick={startQuiz}
            className="w-full px-4 py-2 mb-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 animate__animated animate__fadeIn"
          >
            {quizFinished ? "Restart Quiz" : "Start Quiz"}
          </button>
        )}
        {quizFinished && (
          <div className="text-center animate__animated animate__fadeIn">
            <p className="text-2xl font-semibold text-green-400">Quiz Finished</p>
            <p className="text-lg text-white">Your score: {score}/{questions.length}</p>
            <div className="flex items-center justify-center mt-2">
              <p className="mr-1 text-lg font-semibold text-white">{score}</p>
              <ImTrophy className="text-yellow-400" />
              <p className="ml-1 text-lg font-semibold text-white">+</p>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {userAnswers.map((isCorrect, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}
                ></div>
              ))}
            </div>
          </div>
        )}
        {quizStarted && !quizFinished && (
          <div className="animate__animated animate__fadeIn">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold text-gray-300">{questions[currentQuestionIndex].question}</h2>
              <AiOutlineSearch
                className="ml-2 text-2xl cursor-pointer hover:text-gray-400"
                onClick={handleSearchHint}
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full px-4 py-2 text-gray-900 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 animate__animated animate__bounceIn"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-bold text-gray-300">Time remaining: {timer} seconds</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;