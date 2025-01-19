import React, { useContext } from "react";
import UserContext from "../../context/UserContext"; // Adjust the path based on your project structure

const AboutUs = () => {
  const { isDarkMode, language } = useContext(UserContext);

  return (
    <div className={`AboutUs ${isDarkMode ? "AboutUs_dark" : "AboutUs_light"}`}>
      <div className="AboutUs_content">
        <h1>{language === "en" ? "About Us" : "معلومات عنا"}</h1>
        <p>
          {language === "en"
            ? "Welcome to our Bookstore! We provide a wide range of books for all readers, from fiction to non-fiction, and everything in between. Our mission is to foster a love for reading and make books accessible to everyone."
            : "مرحبًا بكم في مكتبتنا! نقدم مجموعة واسعة من الكتب لجميع القراء، من الخيال إلى الكتب الواقعية وكل شيء بينهما. هدفنا هو تعزيز حب القراءة وجعل الكتب في متناول الجميع."}
        </p>
        <p>
          {language === "en"
            ? "Visit us for the latest releases, timeless classics, and personalized recommendations. Thank you for being part of our story!"
            : "زورونا للحصول على أحدث الإصدارات، والروائع الكلاسيكية، والتوصيات الشخصية. شكراً لكونكم جزءًا من قصتنا!"}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
